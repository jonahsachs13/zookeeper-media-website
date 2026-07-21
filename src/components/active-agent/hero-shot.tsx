"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AssetImage } from "@/components/ui/asset-image";
import { MarketingImage } from "@/components/ui/marketing-image";
import { ASSETS } from "@/lib/active-agent/constants";
import { cn } from "@/lib/utils";

/** Center of the Active Agent Menu Bar popover in the laptop screenshot. */
const ORIGIN_X = "73%";
const ORIGIN_Y = "30%";
/** Phone: tight on the Menu Bar app so it reads; desktop: milder crop. */
const START_SCALE_MOBILE = 4.2;
const START_SCALE_DESKTOP = 2.35;
const MOBILE_MQ = "(max-width: 639px)";

/**
 * Sticky scroll-scrubbed zoom: stays tight on the Menu Bar until the user
 * scrolls, then expands to the full Mac. No enter / intersection autoplay.
 */
export function ActiveAgentHeroShot() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(START_SCALE_MOBILE);
  const [settled, setSettled] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useLayoutEffect(() => {
    if (reduceMotion) {
      setScale(1);
      setSettled(true);
      return;
    }

    const update = () => {
      const track = trackRef.current;
      if (!track) return;

      const mobile = window.matchMedia(MOBILE_MQ).matches;
      const startScale = mobile ? START_SCALE_MOBILE : START_SCALE_DESKTOP;
      const rect = track.getBoundingClientRect();
      const scrollable = Math.max(1, track.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
      const next = startScale + (1 - startScale) * progress;

      setScale(next);
      setSettled(progress >= 1);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <MarketingImage>
        <div className="w-full max-w-[900px] overflow-hidden rounded-sm">
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
      </MarketingImage>
    );
  }

  return (
    <div
      ref={trackRef}
      className="relative -mx-4 h-[165vh] sm:-mx-6 sm:h-[150vh]"
    >
      <div className="sticky top-[max(5.5rem,10vh)] flex justify-center px-4 sm:px-6">
        <MarketingImage>
          <div className="w-full max-w-[900px] overflow-hidden rounded-sm">
            <div
              className={cn(
                "will-change-transform",
                settled && "will-change-auto",
              )}
              style={
                settled
                  ? undefined
                  : {
                      transformOrigin: `${ORIGIN_X} ${ORIGIN_Y}`,
                      transform: `scale(${scale})`,
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
      </div>
    </div>
  );
}
