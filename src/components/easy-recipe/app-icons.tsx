import { AssetImage } from "@/components/ui/asset-image";
import { ASSETS } from "@/lib/easy-recipe/constants";

export function EasyRecipeAppIcons() {
  if (ASSETS.appIcons.length === 0) {
    return null;
  }

  return (
    <section className="py-12 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="mb-8 text-center sm:mb-12">
          <h2
            className="mb-4 text-black dark:text-white"
            style={{ fontSize: "clamp(32px, 6vw, 40px)", fontWeight: 700 }}
          >
            Make it yours.
          </h2>
          <p
            className="mx-auto max-w-[700px] text-black dark:text-white"
            style={{
              fontSize: "clamp(16px, 3vw, 18px)",
              lineHeight: "1.6",
              letterSpacing: "-0.01em",
            }}
          >
            Choose from a variety of app icons and themes to personalize your
            experience.
          </p>
        </div>
        <div className="mx-auto grid max-w-[1100px] grid-cols-3 gap-x-1 gap-y-4 sm:grid-cols-4 sm:gap-x-3 sm:gap-y-6 md:grid-cols-9">
          {ASSETS.appIcons.map((icon) => (
            <div key={icon.src} className="flex justify-center">
              <AssetImage
                src={icon.src}
                alt={icon.alt}
                intrinsicWidth={77}
                intrinsicHeight={77}
                className="h-auto w-full max-w-[77px] rounded-[22.37%]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
