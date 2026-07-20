"use client";

import { FeatheredScreenshot } from "@/components/ui/feathered-screenshot";
import { SCREENSHOTS } from "@/lib/easy-recipe/constants";

const PHONE_WIDTH = 1215;
const PHONE_HEIGHT = 1874;

/** Fixed layout sizes — no transform/fractional scale so retina stays sharp. */
const SCREENSHOT_CLASS = "w-full max-w-[min(220px,38vw)] sm:max-w-[240px] lg:max-w-[260px]";

export function EasyRecipeScreenshots() {
  return (
    <section className="overflow-hidden py-4 sm:py-8">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex flex-row flex-wrap items-end justify-center gap-0 sm:gap-1">
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
            intrinsicWidth={1215}
            intrinsicHeight={2145}
            feather="top"
            className={`${SCREENSHOT_CLASS} -mt-4 sm:-mt-6`}
          />
        </div>
      </div>
    </section>
  );
}
