import { FeatureCard } from "@/components/ui/feature-card";
import { RevealItem, RevealSection } from "@/components/ui/scroll-reveal";
import { EASY_RECIPE_FEATURE_ICONS, FeatureIcon } from "@/components/easy-recipe/feature-icons";
import { FEATURES, FEATURES_HEADING } from "@/lib/easy-recipe/marketing";

export function EasyRecipeFeatures() {
  return (
    <section id="features" className="scroll-mt-20 py-12 sm:py-20">
      <RevealSection className="mx-auto max-w-[1200px] px-4 sm:px-6" variant="up">
        <h2
          className="mb-8 text-center text-black sm:mb-12 dark:text-white"
          style={{ fontSize: "clamp(32px, 6vw, 40px)", fontWeight: 700 }}
        >
          {FEATURES_HEADING}
        </h2>
        <div className="mx-auto grid max-w-[960px] grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {FEATURES.map(({ title, description, icon }, index) => (
            <RevealItem key={title} variant="scale" delay={index * 120}>
              <FeatureCard
                icon={
                  icon ? (
                    <FeatureIcon name={EASY_RECIPE_FEATURE_ICONS[icon].name} />
                  ) : undefined
                }
                title={title}
                description={description}
              />
            </RevealItem>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
