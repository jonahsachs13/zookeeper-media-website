"use client";

import { useEffect, useRef, useState } from "react";
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
    // Opacity-only reveals — transform reveals leave Safari soft until zoom.
    delay: 120,
    duration: "2.025s",
    zIndex: 1,
  },
  {
    key: "ipad",
    src: ASSETS.deviceLockupLayers.ipad,
    alt: "Easy Recipe App on iPad",
    delay: 420,
    duration: "1.95s",
    zIndex: 2,
  },
  {
    key: "iphone",
    src: ASSETS.deviceLockupLayers.iphone,
    alt: "Easy Recipe App on iPhone",
    delay: 630,
    duration: "1.275s",
    zIndex: 3,
  },
] as const;

/** Three aligned device layers that animate in to the same end-state composite. */
export function EasyRecipeDeviceLockup() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [settled, setSettled] = useState(false);
  const [widthPx, setWidthPx] = useState<number | null>(null);

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
    const longestMs = 630 + 2025 + 80;
    const timer = window.setTimeout(() => setSettled(true), longestMs);
    return () => window.clearTimeout(timer);
  }, [visible]);

  useEffect(() => {
    const updateWidth = () => {
      const el = ref.current;
      const parent = el?.parentElement;
      if (!el || !parent) return;

      const base = parent.clientWidth;
      if (base <= 0) return;

      let scale = SCALE_AT_REST;
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const rect = el.getBoundingClientRect();
        const viewH = window.innerHeight;
        const progress = Math.min(
          1,
          Math.max(0, (viewH * 0.4 - rect.top) / (viewH * 0.75)),
        );
        scale = SCALE_AT_REST - progress * (SCALE_AT_REST - SCALE_SCROLLED);
      }

      // Whole CSS pixels avoid Safari subpixel soft-scaling.
      setWidthPx(Math.round(base * scale));
    };

    updateWidth();
    window.addEventListener("scroll", updateWidth, { passive: true });
    window.addEventListener("resize", updateWidth, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateWidth);
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <MarketingImage className="overflow-visible">
      <div
        ref={ref}
        className="relative mx-auto max-w-none"
        style={{
          aspectRatio: `${FRAME_WIDTH} / ${FRAME_HEIGHT}`,
          width: widthPx ?? "100%",
        }}
      >
        {LAYERS.map(({ key, src, alt, delay, duration, zIndex }) => (
          <div
            key={key}
            className={cn(
              "absolute inset-0",
              settled
                ? "opacity-100"
                : cn("reveal-section", "reveal-fade", visible && "is-visible"),
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
              priority
              className="pointer-events-none h-full w-full max-w-none object-contain"
            />
          </div>
        ))}
      </div>
    </MarketingImage>
  );
}
