import { AppStoreBadge } from "@/components/ui/app-store-badge";
import { RevealSection } from "@/components/ui/scroll-reveal";
import { APP_STORE_URL } from "@/lib/easy-recipe/constants";
import { CTA_HEADING, CTA_SUBTITLE } from "@/lib/easy-recipe/marketing";

export function EasyRecipeCta() {
  return (
    <section className="py-12 sm:py-20">
      <RevealSection
        className="mx-auto max-w-[1200px] px-4 sm:px-6"
        variant="scale"
        delay={100}
      >
        <div className="text-center">
          <h2
            className="mb-4 text-black dark:text-white"
            style={{ fontSize: "clamp(32px, 6vw, 40px)", fontWeight: 700 }}
          >
            {CTA_HEADING}
          </h2>
          <p
            className="mb-8 text-gray-700 dark:text-gray-300"
            style={{
              fontSize: "clamp(16px, 3vw, 18px)",
              lineHeight: "1.6",
              letterSpacing: "-0.01em",
            }}
          >
            {CTA_SUBTITLE}
          </p>
          <AppStoreBadge href={APP_STORE_URL} variant="app-store" />
        </div>
      </RevealSection>
    </section>
  );
}
