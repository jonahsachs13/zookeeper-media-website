"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
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
const SCROLL_DISTANCE_MOBILE = 340;
const SCROLL_DISTANCE_DESKTOP = 240;
const MOBILE_MQ = "(max-width: 639px)";

function subscribeScrollResize(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  window.addEventListener("resize", onStoreChange, { passive: true });
  return () => {
    window.removeEventListener("scroll", onStoreChange);
    window.removeEventListener("resize", onStoreChange);
  };
}

function getZoomScale() {
  const mobile = window.matchMedia(MOBILE_MQ).matches;
  const startScale = mobile ? START_SCALE_MOBILE : START_SCALE_DESKTOP;
  const distance = mobile ? SCROLL_DISTANCE_MOBILE : SCROLL_DISTANCE_DESKTOP;
  const progress = Math.min(1, Math.max(0, window.scrollY / distance));
  return startScale + (1 - startScale) * progress;
}

/** SSR / first paint: start zoomed so mobile does not flash the full Mac. */
function getServerZoomScale() {
  return START_SCALE_MOBILE;
}

/**
 * Starts tight on the Active Agent Menu Bar UI (upper-right), then zooms out
 * to the full Mac as the user scrolls. Transform is cleared at rest so Safari
 * re-rasters the PNG sharp.
 */
export function ActiveAgentHeroShot() {
  const scale = useSyncExternalStore(
    subscribeScrollResize,
    getZoomScale,
    getServerZoomScale,
  );
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const effectiveScale = reduceMotion ? 1 : scale;
  const settled = effectiveScale <= 1.001;

  return (
    <MarketingImage>
      <div className="w-full max-w-[900px] overflow-hidden rounded-sm">
        <div
          className={cn("will-change-transform", settled && "will-change-auto")}
          style={
            settled
              ? undefined
              : {
                  transformOrigin: `${ORIGIN_X} ${ORIGIN_Y}`,
                  transform: `scale(${effectiveScale})`,
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
