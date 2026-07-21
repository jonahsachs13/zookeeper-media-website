import { AppPageHeroHeader } from "@/components/ui/app-page-hero-header";
import { ASSETS } from "@/lib/paste-please/constants";
import { HERO_SUBTITLE, HERO_TITLE } from "@/lib/paste-please/marketing";

export function PastePleaseHero() {
  return (
    <section className="pb-4 pt-6 sm:pb-8 sm:pt-8">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="text-center">
          <AppPageHeroHeader
            src={ASSETS.icon}
            alt="Paste Please app icon"
            title={HERO_TITLE}
          />
          <p
            className="mx-auto max-w-[700px] px-4"
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
    </section>
  );
}
