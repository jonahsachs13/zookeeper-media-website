import { AppIconMarquee } from "@/components/easy-recipe/app-icon-marquee";
import { RevealSection } from "@/components/ui/scroll-reveal";

export function EasyRecipeAppIcons() {
  return (
    <section className="overflow-hidden py-12 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <RevealSection variant="fade">
          <div className="mb-8 text-center sm:mb-12">
            <h2
              className="mb-4 text-black dark:text-white"
              style={{ fontSize: "clamp(32px, 6vw, 40px)", fontWeight: 700 }}
            >
              Make it your own
            </h2>
            <p
              className="mx-auto max-w-[700px] text-black dark:text-white"
              style={{
                fontSize: "clamp(16px, 3vw, 18px)",
                lineHeight: "1.6",
                letterSpacing: "-0.01em",
              }}
            >
              Choose from a variety of app icons to personalize Easy Recipe on your
              home screen.
            </p>
          </div>
        </RevealSection>
      </div>

      <AppIconMarquee />
    </section>
  );
}
