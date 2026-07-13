import { AppStoreBadge } from "@/components/ui/app-store-badge";
import { RevealSection } from "@/components/ui/scroll-reveal";

export function FitnessShareCta() {
  return (
    <section id="download" className="border-t border-gray-200 py-12 sm:py-20 dark:border-zinc-800">
      <RevealSection
        className="mx-auto max-w-[1200px] px-4 sm:px-6"
        variant="scale"
        delay={100}
      >
        <div className="text-center">
          <h2
            className="mb-4 text-black transition-colors duration-300 dark:text-white"
            style={{ fontSize: "clamp(32px, 6vw, 40px)", fontWeight: 700 }}
          >
            Ready to watch your agents?
          </h2>
          <p
            className="mb-8 text-black transition-colors duration-300 dark:text-white"
            style={{
              fontSize: "clamp(16px, 3vw, 18px)",
              lineHeight: "1.6",
              letterSpacing: "-0.01em",
            }}
          >
            Download Fitness Share for macOS and keep Cursor agent status one glance
            away.
          </p>
          <AppStoreBadge variant="mac-app-store" comingSoon />
        </div>
      </RevealSection>
    </section>
  );
}
