"use client";

import { useEffect, useRef, useState } from "react";
import { FeatheredScreenshot } from "@/components/ui/feathered-screenshot";
import { ASSETS, SCREENSHOT_SIZE } from "@/lib/paste-please/constants";
import { cn } from "@/lib/utils";

/**
 * Full app first, Menu Bar second — stacked on mobile, side-by-side on desktop.
 * Staggered entrance matches Easy Recipe device lockup (slide + settle).
 */
export function PastePleaseScreenshots() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const longestMs = 420 + 1950 + 80;
    const timer = window.setTimeout(() => setSettled(true), longestMs);
    return () => window.clearTimeout(timer);
  }, [visible]);

  return (
    <section className="overflow-hidden pb-8 pt-2 sm:pb-12 sm:pt-4">
      <div
        ref={ref}
        className="mx-auto flex max-w-[1200px] flex-col items-stretch gap-6 px-4 sm:gap-8 sm:px-6 md:flex-row md:items-end md:gap-4 lg:gap-6"
      >
        <div
          className={cn(
            "w-full md:flex-1",
            settled
              ? "opacity-100"
              : cn("reveal-section", "reveal-left", visible && "is-visible"),
          )}
          style={
            {
              "--reveal-delay": "120ms",
              "--reveal-duration": "2.025s",
            } as React.CSSProperties
          }
        >
          <FeatheredScreenshot
            src={ASSETS.screenshots.fullApp}
            alt="Paste Please full window with clipboard preview on Mac"
            intrinsicWidth={SCREENSHOT_SIZE.width}
            intrinsicHeight={SCREENSHOT_SIZE.height}
            feather="bottom"
            priority
            className="w-full max-w-none"
          />
        </div>

        <div
          className={cn(
            "w-full md:flex-1",
            settled
              ? "opacity-100"
              : cn("reveal-section", "reveal-right", visible && "is-visible"),
          )}
          style={
            {
              "--reveal-delay": "420ms",
              "--reveal-duration": "1.95s",
            } as React.CSSProperties
          }
        >
          <FeatheredScreenshot
            src={ASSETS.screenshots.menuBar}
            alt="Paste Please Menu Bar clipboard history on Mac"
            intrinsicWidth={SCREENSHOT_SIZE.width}
            intrinsicHeight={SCREENSHOT_SIZE.height}
            feather="bottom"
            className="w-full max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
