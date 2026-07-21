"use client";

import { useEffect, useRef, useState } from "react";
import { FeatheredScreenshot } from "@/components/ui/feathered-screenshot";
import { ASSETS, SCREENSHOT_SIZE } from "@/lib/paste-please/constants";
import { cn } from "@/lib/utils";

/** Full app first, Menu Bar second — stacked on mobile, side-by-side on desktop. */
export function PastePleaseScreenshots() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15, rootMargin: "0px 0px -4% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) {
      setSettled(false);
      return;
    }
    const longestMs = 420 + 1950 + 80;
    const timer = window.setTimeout(() => setSettled(true), longestMs);
    return () => window.clearTimeout(timer);
  }, [visible]);

  const revealProps = (delay: number, duration: string) => ({
    className: cn(
      "w-full md:flex-1",
      settled
        ? "opacity-100"
        : cn("reveal-section", "reveal-fade", visible && "is-visible"),
    ),
    style: {
      "--reveal-delay": `${delay}ms`,
      "--reveal-duration": duration,
    } as React.CSSProperties,
  });

  return (
    <section className="overflow-hidden pb-8 pt-2 sm:pb-12 sm:pt-4">
      <div
        ref={ref}
        className="mx-auto flex max-w-[1200px] flex-col items-stretch gap-6 px-4 sm:gap-8 sm:px-6 md:flex-row md:items-end md:gap-4 lg:gap-6"
      >
        <div {...revealProps(120, "2.025s")}>
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

        <div {...revealProps(420, "1.95s")}>
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
