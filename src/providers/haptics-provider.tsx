"use client";

import { useEffect } from "react";
import { useWebHaptics } from "web-haptics/react";

/** Clean, sharp single tap — web-haptics `rigid` preset. */
const BUTTON_HAPTIC = "rigid" as const;

const INTERACTIVE_SELECTOR = [
  "button:not([disabled])",
  'a[href]',
  '[role="button"]:not([aria-disabled="true"])',
  'input[type="submit"]:not([disabled])',
  'input[type="button"]:not([disabled])',
  "summary",
].join(", ");

/**
 * Sitewide haptics for presses on buttons and other interactive controls.
 * Opt out with data-haptics="off" on an element.
 */
export function HapticsProvider({ children }: { children: React.ReactNode }) {
  const { trigger } = useWebHaptics();

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const interactive = target.closest(INTERACTIVE_SELECTOR);
      if (!(interactive instanceof HTMLElement)) return;
      if (interactive.dataset.haptics === "off") return;

      void trigger(BUTTON_HAPTIC);
    };

    document.addEventListener("pointerdown", onPointerDown, { passive: true });
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [trigger]);

  return children;
}
