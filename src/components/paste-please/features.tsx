import { PasteFeatureIcon } from "@/components/paste-please/feature-icons";
import { FeatureCard } from "@/components/ui/feature-card";
import { RevealItem, RevealSection } from "@/components/ui/scroll-reveal";
import { FEATURES, FEATURES_HEADING } from "@/lib/paste-please/marketing";

export function PastePleaseFeatures() {
  return (
    <section
      id="features"
      className="scroll-mt-20 py-12 sm:py-20"
    >
      <RevealSection className="mx-auto max-w-[1200px] px-4 sm:px-6" variant="up">
        <h2
          className="mb-8 text-center text-black sm:mb-12 dark:text-white"
          style={{ fontSize: "clamp(32px, 6vw, 40px)", fontWeight: 700 }}
        >
          {FEATURES_HEADING}
        </h2>

        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {FEATURES.map(({ title, description, icon }, index) => (
            <RevealItem key={title} variant="scale" delay={index * 100}>
              <FeatureCard
                icon={<PasteFeatureIcon name={icon} />}
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
