import { AppPageHeroHeader } from "@/components/ui/app-page-hero-header";
import { ActiveAgentHeroShot } from "@/components/active-agent/hero-shot";
import { ASSETS, TAGLINE } from "@/lib/active-agent/constants";

export function ActiveAgentHero() {
  return (
    <section className="pb-12 pt-6 sm:pb-20 sm:pt-8">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="text-center">
          <AppPageHeroHeader
            src={ASSETS.icon}
            alt="Active Agent app icon"
            title="Keep an eye on your agents."
          />
          <p
            className="mx-auto mb-8 max-w-[700px] px-4 sm:mb-16"
            style={{
              fontSize: "clamp(18px, 4vw, 24px)",
              lineHeight: "1.6",
              letterSpacing: "-0.02em",
            }}
          >
            {TAGLINE} See thinking, searching, and planning at a glance, without
            leaving your flow.
          </p>
          <ActiveAgentHeroShot />
        </div>
      </div>
    </section>
  );
}
