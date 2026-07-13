import { AppPageHeroHeader } from "@/components/ui/app-page-hero-header";
import { EasyRecipeDeviceLockup } from "@/components/easy-recipe/device-lockup";
import { ASSETS } from "@/lib/easy-recipe/constants";
import { HERO_SUBTITLE, HERO_TAGLINE } from "@/lib/easy-recipe/marketing";

export function EasyRecipeHero() {
  return (
    <section className="overflow-x-clip pb-12 pt-6 sm:pb-20 sm:pt-8">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="text-center">
          <AppPageHeroHeader
            src={ASSETS.icon}
            alt="Easy Recipe App icon"
            title={HERO_TAGLINE}
          />
          <p
            className="mx-auto mb-8 max-w-[700px] px-4 text-gray-700 sm:mb-16 dark:text-gray-300"
            style={{
              fontSize: "clamp(18px, 4vw, 24px)",
              lineHeight: "1.6",
              letterSpacing: "-0.02em",
            }}
          >
            {HERO_SUBTITLE}
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] px-2 sm:px-4">
        <EasyRecipeDeviceLockup />
      </div>
    </section>
  );
}
