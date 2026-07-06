import { CircleArrowDown } from "lucide-react";
import { OrganizeIcon } from "./organize-icon";

const FEATURES = [
  {
    title: "Save Recipes",
    description:
      "Easily save recipes from Instagram, TikTok, YouTube, and across the web.",
    Icon: CircleArrowDown,
  },
  {
    title: "Organize",
    description: "Automatically and manually sort into Recipe Books.",
    Icon: OrganizeIcon,
  },
] as const;

export function EasyRecipeFeatures() {
  return (
    <section id="features" className="py-12 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h2
          className="mb-8 text-center text-black sm:mb-12 dark:text-white"
          style={{ fontSize: "clamp(32px, 6vw, 40px)", fontWeight: 700 }}
        >
          Everything you need.
        </h2>
        <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {FEATURES.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-400 bg-gray-100 p-8 dark:border-zinc-700 dark:bg-zinc-900"
            >
              <div className="flex flex-col items-center">
                <Icon className="mb-4 h-12 w-12 text-brand-orange" />
                <h3
                  className="mb-2 text-center text-black dark:text-white"
                  style={{ fontSize: "20px", fontWeight: 600 }}
                >
                  {title}
                </h3>
                <p
                  className="text-center text-black dark:text-white"
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.6",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
