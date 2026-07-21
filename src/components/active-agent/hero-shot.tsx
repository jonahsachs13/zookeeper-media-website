"use client";

import { useEffect, useRef, useState } from "react";
import { AssetImage } from "@/components/ui/asset-image";
import { MarketingImage } from "@/components/ui/marketing-image";
import { ASSETS } from "@/lib/active-agent/constants";
import { cn } from "@/lib/utils";

/** Focus on the Menu Bar popover (upper-right of the laptop screen). */
const ORIGIN_X = "68%";
const ORIGIN_Y = "27%";
const START_SCALE = 2.35;
const ZOOM_MS = 2200;
const ZOOM_EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

/**
 * Starts tight on the Active Agent Menu Bar UI, then zooms out to the full Mac.
 * Transform is removed after the animation so Safari re-rasters the PNG sharp.
 */
export function ActiveAgentHeroShot() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [settled, setSettled] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setStarted(true);
      setSettled(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduceMotion]);

  useEffect(() => {
    if (!started || reduceMotion || settled) return;
    const timer = window.setTimeout(() => setSettled(true), ZOOM_MS + 80);
    return () => window.clearTimeout(timer);
  }, [started, reduceMotion, settled]);

  return (
    <MarketingImage>
      <div
        ref={ref}
        className="w-full max-w-[900px] overflow-hidden rounded-sm"
      >
        <div
          className={cn("will-change-transform", settled && "will-change-auto")}
          style={
            settled
              ? undefined
              : {
                  transformOrigin: `${ORIGIN_X} ${ORIGIN_Y}`,
                  transform: started ? "scale(1)" : `scale(${START_SCALE})`,
                  transition: started
                    ? `transform ${ZOOM_MS}ms ${ZOOM_EASING}`
                    : undefined,
                }
          }
        >
          <AssetImage
            src={ASSETS.menuBarScreenshot}
            alt="Active Agent showing live Cursor agent status across projects"
            intrinsicWidth={3810}
            intrinsicHeight={2307}
            priority
            className="w-full max-w-none"
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
      </div>
    </MarketingImage>
  );
}
