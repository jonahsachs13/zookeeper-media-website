import { FeatheredScreenshot } from "@/components/ui/feathered-screenshot";
import { ASSETS, SCREENSHOT_SIZE } from "@/lib/paste-please/constants";

const SHOT_CLASS = "w-full max-w-[920px]";

export function PastePleaseScreenshots() {
  return (
    <section className="overflow-hidden pb-4 pt-2 sm:pb-8 sm:pt-4">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-4 sm:gap-12 sm:px-6">
        <FeatheredScreenshot
          src={ASSETS.screenshots.menuBar}
          alt="Paste Please Menu Bar clipboard history on Mac"
          intrinsicWidth={SCREENSHOT_SIZE.width}
          intrinsicHeight={SCREENSHOT_SIZE.height}
          feather="bottom"
          priority
          className={SHOT_CLASS}
        />
        <FeatheredScreenshot
          src={ASSETS.screenshots.fullApp}
          alt="Paste Please full window with clipboard preview on Mac"
          intrinsicWidth={SCREENSHOT_SIZE.width}
          intrinsicHeight={SCREENSHOT_SIZE.height}
          feather="bottom"
          className={SHOT_CLASS}
        />
      </div>
    </section>
  );
}
