"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FeatheredScreenshot } from "@/components/ui/feathered-screenshot";
import { SCREENSHOTS } from "@/lib/easy-recipe/constants";

const PHONE_WIDTH = 1215;
const PHONE_HEIGHT = 1874;

const SCREENSHOT_CLASS = "w-full max-w-[min(220px,38vw)] sm:max-w-[240px] lg:max-w-[260px]";

function useScreenshotScrollScale() {
  const ref = useRef<HTMLElement>(null);
  const [scale, setScale] = useState(0.84);

  useLayoutEffect(() => {
    const update = () => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.92;
      const end = viewportHeight * 0.28;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      setScale(0.84 + progress * 0.16);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return { ref, scale };
}

export function EasyRecipeScreenshots() {
  const { ref, scale } = useScreenshotScrollScale();
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const effectiveScale = reduceMotion ? 1 : scale;

  return (
    <section ref={ref} className="overflow-hidden py-4 sm:py-8">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div
          className="flex flex-row flex-wrap items-end justify-center gap-0 will-change-transform sm:gap-1"
          style={{
            transform: `scale(${effectiveScale})`,
            transformOrigin: "center top",
          }}
        >
          <FeatheredScreenshot
            src={SCREENSHOTS.honeyRoastedCarrots}
            alt="Easy Recipe recipe detail screen showing Honey Roasted Carrots"
            intrinsicWidth={PHONE_WIDTH}
            intrinsicHeight={PHONE_HEIGHT}
            feather="bottom"
            priority
            className={SCREENSHOT_CLASS}
          />
          <FeatheredScreenshot
            src={SCREENSHOTS.theRecipe}
            alt="Easy Recipe cooking view with ingredients and step-by-step instructions"
            intrinsicWidth={PHONE_WIDTH}
            intrinsicHeight={PHONE_HEIGHT}
            feather="top"
            className={`${SCREENSHOT_CLASS} -mt-4 sm:-mt-6`}
          />
        </div>
      </div>
    </section>
  );
}
