"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  getHeroIconSize,
  getHeroTitleSize,
  useHeroScrollProgress,
} from "@/hooks/use-hero-scroll-progress";

type AppPageHeroHeaderProps = {
  src: string;
  alt: string;
  title: string;
  className?: string;
};

export function AppPageHeroHeader({ src, alt, title, className }: AppPageHeroHeaderProps) {
  const { progress, width } = useHeroScrollProgress();
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const effectiveProgress = reduceMotion ? 1 : progress;
  const iconSize = getHeroIconSize(effectiveProgress, width || 390);
  const titleSize = getHeroTitleSize(effectiveProgress, width || 390);

  return (
    <div className={cn("text-center", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={iconSize}
        height={iconSize}
        className="mx-auto mb-6 rounded-[22%] will-change-[width,height] sm:mb-8"
        style={{ width: iconSize, height: iconSize }}
      />
      <h1
        className="mb-4 font-bold leading-[1.1] will-change-[font-size] sm:mb-6"
        style={{ fontSize: titleSize }}
      >
        {title}
      </h1>
    </div>
  );
}
