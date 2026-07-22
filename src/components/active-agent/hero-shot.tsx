"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AssetImage } from "@/components/ui/asset-image";
import { MarketingImage } from "@/components/ui/marketing-image";
import { ASSETS } from "@/lib/active-agent/constants";

const IMG_W = 3810;
const IMG_H = 2307;

/**
 * Focal point: center of the Active Agent Menu Bar popover.
 * Tuned so the full popover (including header) stays in frame at start zoom.
 */
const ORIGIN_X = 0.7;
const ORIGIN_Y = 0.22;

/** Phone: tight on the Menu Bar app; desktop: milder crop. */
const START_SCALE_MOBILE = 3;
const START_SCALE_DESKTOP = 2.2;
const MOBILE_MQ = "(max-width: 639px)";

function ZoomShot({ scale }: { scale: number }) {
  // Width/position zoom (not CSS transform) so the browser paints from the
  // full 3810px bitmap instead of upscaling a small composited layer.
  return (
    <div
      className="relative w-full max-w-[900px] overflow-hidden rounded-sm"
      style={{ aspectRatio: `${IMG_W} / ${IMG_H}` }}
    >
      <AssetImage
        src={ASSETS.menuBarScreenshot}
        alt="Active Agent showing live Cursor agent status across projects"
        intrinsicWidth={IMG_W}
        intrinsicHeight={IMG_H}
        priority
        className="absolute max-w-none"
        sizes={`(max-width: 900px) ${Math.ceil(scale * 100)}vw, ${Math.ceil(scale * 900)}px`}
        style={{
          width: `${scale * 100}%`,
          maxWidth: "none",
          height: "auto",
          left: `${ORIGIN_X * (1 - scale) * 100}%`,
          top: `${ORIGIN_Y * (1 - scale) * 100}%`,
          // Width drives height; don't lock the pre-zoom box aspect on the img.
          aspectRatio: "auto",
        }}
      />
    </div>
  );
}

/**
 * Sticky scroll-scrubbed zoom: stays tight on the Menu Bar until the user
 * scrolls, then expands to the full Mac. No enter / intersection autoplay.
 */
export function ActiveAgentHeroShot() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(START_SCALE_MOBILE);
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
      setScale(startScale + (1 - startScale) * progress);
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
        <ZoomShot scale={1} />
      </MarketingImage>
    );
  }

  return (
    <div
      ref={trackRef}
      // Short mobile runway: enough to scrub the zoom without a tall empty gap.
      className="relative -mx-4 h-[118vh] sm:-mx-6 sm:h-[145vh]"
    >
      <div className="sticky top-14 flex justify-center px-4 sm:top-[max(5.5rem,8vh)] sm:px-6">
        <MarketingImage>
          <ZoomShot scale={scale} />
        </MarketingImage>
      </div>
    </div>
  );
}
