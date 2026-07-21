import { AssetImage } from "@/components/ui/asset-image";
import { FeatureCard } from "@/components/ui/feature-card";
import { MarketingImage } from "@/components/ui/marketing-image";
import { RevealItem, RevealSection } from "@/components/ui/scroll-reveal";
import {
  ACTIVE_AGENT_FEATURE_ICONS,
  ActiveAgentFeatureIcon,
} from "@/components/active-agent/feature-icons";
import { ASSETS } from "@/lib/active-agent/constants";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    title: "Live Stats",
    description:
      "See your Cursor agents in the macOS Menu Bar, always visible and never in the way. Know when one is thinking, searching, planning, or ready to go.",
    icon: <ActiveAgentFeatureIcon name={ACTIVE_AGENT_FEATURE_ICONS.liveStats.name} />,
  },
  {
    title: "Stays Out of Flow",
    description:
      "No extra windows or tab switching. Active Agent lives in the macOS Menu Bar where utilities belong, staying out of your way.",
    icon: <ActiveAgentFeatureIcon name={ACTIVE_AGENT_FEATURE_ICONS.staysOutOfFlow.name} />,
  },
  {
    title: "Companion",
    description:
      "Built for speed and simplicity. A focused companion that keeps you oriented and in control during long Cursor agent sessions.",
    icon: <ActiveAgentFeatureIcon name={ACTIVE_AGENT_FEATURE_ICONS.companion.name} />,
  },
] as const;

export function ActiveAgentFeatures() {
  return (
    <section id="features" className="scroll-mt-20 border-t border-gray-200 py-12 sm:py-20 dark:border-zinc-800">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <RevealSection variant="fade">
          <h2
            className="mb-8 text-center text-black sm:mb-12 dark:text-white"
            style={{ fontSize: "clamp(32px, 6vw, 40px)", fontWeight: 700 }}
          >
            Built for Cursor power users
          </h2>
        </RevealSection>

        <RevealSection className="mb-12 sm:mb-16" variant="fade" delay={120}>
          <MarketingImage>
            <AssetImage
              src={ASSETS.menuBarGlance}
              alt="Active Agent glance view in the Menu Bar"
              intrinsicWidth={3810}
              intrinsicHeight={2307}
              className="w-full max-w-[720px]"
              sizes="(max-width: 720px) 100vw, 720px"
            />
          </MarketingImage>
        </RevealSection>

        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {FEATURES.map(({ title, description, icon }, index) => (
            <RevealItem
              key={title}
              variant="fade"
              delay={index * 120}
              className={cn(
                index === 2 &&
                  "sm:col-span-2 sm:flex sm:justify-center lg:col-span-1 lg:block",
              )}
            >
              <div
                className={cn(
                  "w-full",
                  index === 2 && "sm:max-w-[calc((100%-2rem)/2)] lg:max-w-none",
                )}
              >
                <FeatureCard icon={icon} title={title} description={description} />
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
