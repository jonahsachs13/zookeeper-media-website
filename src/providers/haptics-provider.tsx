"use client";

import { useEffect, type ReactNode } from "react";
import { useWebHaptics } from "web-haptics/react";

const BUTTON_SELECTOR = [
  "button:not([disabled])",
  '[role="button"]:not([aria-disabled="true"])',
  'input[type="submit"]:not([disabled])',
  'input[type="button"]:not([disabled])',
].join(",");

/**
 * Clean sharp press — short, full-intensity tap (web-haptics `rigid` preset).
 * Used for all primary button presses sitewide.
 */
const SHARP_PRESS = "rigid" as const;

export function HapticsProvider({ children }: { children: ReactNode }) {
  const { trigger } = useWebHaptics();

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (!target.closest(BUTTON_SELECTOR)) return;
      void trigger(SHARP_PRESS);
    };

    document.addEventListener("pointerdown", onPointerDown, { capture: true });
    return () => {
      document.removeEventListener("pointerdown", onPointerDown, {
        capture: true,
      });
    };
  }, [trigger]);

  return children;
}
