"use client";

import { useLayoutEffect, useState } from "react";

const DEFAULT_DISTANCE = 180;

export function useHeroScrollProgress(distance = DEFAULT_DISTANCE) {
  const [metrics, setMetrics] = useState({ progress: 0, width: 0 });

  useLayoutEffect(() => {
    const update = () => {
      setMetrics({
        progress: Math.min(1, Math.max(0, window.scrollY / distance)),
        width: window.innerWidth,
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [distance]);

  return metrics;
}

function lerp(start: number, end: number, progress: number) {
  return start + (end - start) * progress;
}

export function getHeroIconSize(progress: number, width: number) {
  const isWide = width >= 640;
  const start = isWide ? 144 : 112;
  const end = isWide ? 96 : 80;
  return lerp(start, end, progress);
}

export function getHeroTitleSize(progress: number, width: number) {
  const end = Math.min(72, Math.max(40, width * 0.1));
  const start = Math.min(44, Math.max(28, width * 0.065));
  return lerp(start, end, progress);
}
