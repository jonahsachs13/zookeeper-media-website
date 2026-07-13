import { AssetImage } from "@/components/ui/asset-image";
import { FeatureCard } from "@/components/ui/feature-card";
import { MarketingImage } from "@/components/ui/marketing-image";
import { RevealItem, RevealSection } from "@/components/ui/scroll-reveal";
import {
  FITNESS_SHARE_FEATURE_ICONS,
  FitnessFeatureIcon,
} from "@/components/fitness-share/feature-icons";
import { ASSETS } from "@/lib/fitness-share/constants";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    title: "Live Stats",
    description:
      "See your Cursor agents in the macOS Menu Bar, always visible and never in the way. Know when one is thinking, searching, planning, or ready to go.",
    icon: <FitnessFeatureIcon name={FITNESS_SHARE_FEATURE_ICONS.liveStats.name} />,
  },
  {
    title: "Stays Out of Flow",
    description:
      "No extra windows or tab switching. Fitness Share lives in the macOS Menu Bar where utilities belong, staying out of your way.",
    icon: <FitnessFeatureIcon name={FITNESS_SHARE_FEATURE_ICONS.staysOutOfFlow.name} />,
  },
  {
    title: "Companion",
    description:
      "Built for speed and simplicity. A focused companion that keeps you oriented and in control during long Cursor agent sessions.",
    icon: <FitnessFeatureIcon name={FITNESS_SHARE_FEATURE_ICONS.companion.name} />,
  },
] as const;

export function FitnessShareFeatures() {
  return (
    <section id="features" className="scroll-mt-20 border-t border-gray-200 py-12 sm:py-20 dark:border-zinc-800">
      <RevealSection className="mx-auto max-w-[1200px] px-4 sm:px-6" variant="up">
        <h2
          className="mb-8 text-center text-black sm:mb-12 dark:text-white"
          style={{ fontSize: "clamp(32px, 6vw, 40px)", fontWeight: 700 }}
        >
          Built for Cursor power users
        </h2>

        <RevealSection className="mb-12 sm:mb-16" variant="scale" delay={120}>
          <MarketingImage>
            <AssetImage
              src={ASSETS.menuBarGlance}
              alt="Fitness Share glance view in the Menu Bar"
              intrinsicWidth={3810}
              intrinsicHeight={2307}
              className="w-full max-w-[720px]"
            />
          </MarketingImage>
        </RevealSection>

        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {FEATURES.map(({ title, description, icon }, index) => (
            <RevealItem
              key={title}
              variant="scale"
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
      </RevealSection>
    </section>
  );
}
