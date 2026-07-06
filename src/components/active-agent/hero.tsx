import { AssetImage } from "@/components/ui/asset-image";
import { MarketingImage } from "@/components/ui/marketing-image";
import { ASSETS, TAGLINE } from "@/lib/active-agent/constants";

export function ActiveAgentHero() {
  return (
    <section className="bg-white pb-12 text-black [color-scheme:light] sm:pb-20 dark:bg-white dark:text-black">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="text-center">
          <h1
            className="mb-4 sm:mb-6"
            style={{
              fontSize: "clamp(40px, 10vw, 72px)",
              fontWeight: 700,
              lineHeight: "1.1",
            }}
          >
            Keep an eye on your agents.
          </h1>
          <p
            className="mx-auto mb-8 max-w-[700px] px-4 sm:mb-16"
            style={{
              fontSize: "clamp(18px, 4vw, 24px)",
              lineHeight: "1.6",
              letterSpacing: "-0.02em",
            }}
          >
            {TAGLINE} See thinking, searching, and planning at a glance — without
            leaving your flow.
          </p>
          <MarketingImage>
            <AssetImage
              src={ASSETS.menuBarScreenshot}
              alt="Active Agent menu bar status for Cursor agents"
              intrinsicWidth={2421}
              intrinsicHeight={1460}
              priority
              className="w-full max-w-[900px]"
            />
          </MarketingImage>
        </div>
      </div>
    </section>
  );
}
