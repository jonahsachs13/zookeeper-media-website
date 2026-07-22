"use client";

import { useEffect, type ReactNode } from "react";

/**
 * Sharp press — short full-intensity pulse (matches former web-haptics `rigid`).
 * Used on Android / Vibration-API browsers.
 */
const SHARP_PRESS_MS = 10;

const INTERACTIVE_SELECTOR = [
  "button:not([disabled])",
  'a[href]',
  '[role="button"]:not([aria-disabled="true"])',
].join(",");

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  if (target.isContentEditable) return true;
  const tag = target.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
}

/** iPhone / iPad — Vibration API is unavailable; use the Safari switch overlay. */
function needsSwitchOverlay() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(ua)) return true;
  // iPadOS desktop UA
  return navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
}

function createSwitchOverlay() {
  const input = document.createElement("input");
  input.type = "checkbox";
  input.setAttribute("switch", "");
  input.setAttribute("aria-hidden", "true");
  input.tabIndex = -1;
  input.dataset.hapticsSwitch = "1";

  Object.assign(input.style, {
    position: "fixed",
    margin: "0",
    opacity: "0",
    cursor: "pointer",
    // Keep native switch appearance — stripping it disables the Taptic.
    appearance: "auto",
    zIndex: "2147483646",
    touchAction: "manipulation",
    visibility: "hidden",
    pointerEvents: "none",
  });
  input.style.setProperty("-webkit-tap-highlight-color", "transparent");

  return input;
}

function syncOverlay(el: HTMLElement, input: HTMLInputElement) {
  const rect = el.getBoundingClientRect();
  const style = getComputedStyle(el);
  const visible =
    style.display !== "none" &&
    style.visibility !== "hidden" &&
    rect.width > 0 &&
    rect.height > 0;

  if (!visible) {
    input.style.visibility = "hidden";
    input.style.pointerEvents = "none";
    return;
  }

  const radius = style.borderRadius;
  Object.assign(input.style, {
    top: `${rect.top}px`,
    left: `${rect.left}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
    visibility: "visible",
    pointerEvents: "auto",
  });
  input.style.clipPath =
    radius && radius !== "0px" ? `inset(0 round ${radius})` : "";
}

/**
 * Sitewide haptics for presses on buttons and links.
 *
 * - iOS Safari 26.5+: Apple blocked programmatic switch `.click()`, so we
 *   overlay a real transparent `input[type=checkbox][switch]` on each control
 *   (mounted on `document.body`, not inside React trees) and let the user's
 *   tap hit it for a native Taptic. The overlay then forwards the click.
 * - Android / others: `navigator.vibrate` on pointerdown.
 *
 * Opt out with data-haptics="off" on an element.
 */
export function HapticsProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const useOverlay = needsSwitchOverlay();

    if (useOverlay) {
      const overlays = new Map<HTMLElement, HTMLInputElement>();
      const layer = document.createElement("div");
      layer.dataset.hapticsLayer = "1";
      layer.style.cssText =
        "position:fixed;inset:0;pointer-events:none;z-index:2147483646;";
      document.body.appendChild(layer);

      const syncAll = () => {
        for (const [el, input] of overlays) {
          if (!el.isConnected) {
            input.remove();
            overlays.delete(el);
            continue;
          }
          syncOverlay(el, input);
        }
      };

      const attach = (el: HTMLElement) => {
        if (overlays.has(el)) return;
        if (el.dataset.haptics === "off") return;
        if (el.closest("[data-haptics='off']")) return;
        if (el.closest("[data-haptics-layer]")) return;

        const input = createSwitchOverlay();
        input.addEventListener("click", () => {
          // Switch already received the trusted tap (Taptic). Forward to the
          // real control without the overlay intercepting the synthetic click.
          input.style.pointerEvents = "none";
          try {
            el.click();
          } finally {
            requestAnimationFrame(() => {
              input.style.pointerEvents = "auto";
            });
          }
        });

        overlays.set(el, input);
        layer.appendChild(input);
        syncOverlay(el, input);
      };

      const scan = () => {
        document
          .querySelectorAll<HTMLElement>(INTERACTIVE_SELECTOR)
          .forEach(attach);
        syncAll();
      };

      let scanQueued = false;
      const queueScan = () => {
        if (scanQueued) return;
        scanQueued = true;
        requestAnimationFrame(() => {
          scanQueued = false;
          scan();
        });
      };

      scan();

      const observer = new MutationObserver(queueScan);
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["style", "class", "disabled", "aria-disabled", "href"],
      });

      window.addEventListener("scroll", syncAll, true);
      window.addEventListener("resize", syncAll);
      window.visualViewport?.addEventListener("resize", syncAll);
      window.visualViewport?.addEventListener("scroll", syncAll);

      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", syncAll, true);
        window.removeEventListener("resize", syncAll);
        window.visualViewport?.removeEventListener("resize", syncAll);
        window.visualViewport?.removeEventListener("scroll", syncAll);
        layer.remove();
        overlays.clear();
      };
    }

    const onPointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;
      if (isEditableTarget(event.target)) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const interactive = target.closest(INTERACTIVE_SELECTOR);
      if (!(interactive instanceof HTMLElement)) return;
      if (interactive.dataset.haptics === "off") return;
      if (interactive.closest("[data-haptics='off']")) return;

      try {
        navigator.vibrate?.(SHARP_PRESS_MS);
      } catch {
        // Some browsers expose vibrate but throw when blocked.
      }
    };

    document.addEventListener("pointerdown", onPointerDown, {
      capture: true,
      passive: true,
    });
    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
    };
  }, []);

  return children;
}
