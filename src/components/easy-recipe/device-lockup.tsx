"use client";

import { useEffect, useEffectEvent, useRef, useState } from "react";
import { AssetImage } from "@/components/ui/asset-image";
import { MarketingImage } from "@/components/ui/marketing-image";
import { cn } from "@/lib/utils";
import { ASSETS } from "@/lib/easy-recipe/constants";

const FRAME_WIDTH = 4774;
const FRAME_HEIGHT = 2160;
const SCALE_AT_REST = 1.08;
const SCALE_SCROLLED = 0.96;

const LAYERS = [
  {
    key: "mac",
    src: ASSETS.deviceLockupLayers.mac,
    alt: "Easy Recipe App on Mac",
    variantClass: "reveal-scale",
    delay: 80,
    duration: "1.35s",
    zIndex: 1,
  },
  {
    key: "ipad",
    src: ASSETS.deviceLockupLayers.ipad,
    alt: "Easy Recipe App on iPad",
    variantClass: "reveal-right",
    delay: 280,
    duration: "1.3s",
    zIndex: 2,
  },
  {
    key: "iphone",
    src: ASSETS.deviceLockupLayers.iphone,
    alt: "Easy Recipe App on iPhone",
    variantClass: "reveal-left",
    delay: 420,
    duration: "0.85s",
    zIndex: 3,
  },
] as const;

/** Three aligned device layers that animate in to the same end-state composite. */
export function EasyRecipeDeviceLockup() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [scrollScale, setScrollScale] = useState(SCALE_AT_REST);

  const updateScrollScale = useEffectEvent(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setScrollScale(SCALE_AT_REST);
      return;
    }

    const rect = el.getBoundingClientRect();
    const viewH = window.innerHeight;
    // 0 near first view, rises as the lockup scrolls upward through the viewport
    const progress = Math.min(
      1,
      Math.max(0, (viewH * 0.4 - rect.top) / (viewH * 0.75)),
    );
    setScrollScale(SCALE_AT_REST - progress * (SCALE_AT_REST - SCALE_SCROLLED));
  });

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
    updateScrollScale();
    window.addEventListener("scroll", updateScrollScale, { passive: true });
    window.addEventListener("resize", updateScrollScale, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateScrollScale);
      window.removeEventListener("resize", updateScrollScale);
    };
  }, [updateScrollScale]);

  return (
    <MarketingImage>
      <div
        ref={ref}
        className="relative w-full max-w-none origin-top will-change-transform"
        style={{
          aspectRatio: `${FRAME_WIDTH} / ${FRAME_HEIGHT}`,
          transform: `scale(${scrollScale})`,
        }}
      >
        {LAYERS.map(({ key, src, alt, variantClass, delay, duration, zIndex }) => (
          <div
            key={key}
            className={cn(
              "reveal-section absolute inset-0",
              variantClass,
              visible && "is-visible",
            )}
            style={
              {
                zIndex,
                "--reveal-delay": `${delay}ms`,
                "--reveal-duration": duration,
              } as React.CSSProperties
            }
          >
            <AssetImage
              src={src}
              alt={alt}
              intrinsicWidth={FRAME_WIDTH}
              intrinsicHeight={FRAME_HEIGHT}
              priority={key === "mac"}
              className="pointer-events-none h-full w-full max-w-none object-contain"
            />
          </div>
        ))}
      </div>
    </MarketingImage>
  );
}
