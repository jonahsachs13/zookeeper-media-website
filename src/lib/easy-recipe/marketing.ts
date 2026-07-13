export const HERO_TAGLINE = "Cooking made easy.";

export const HERO_SUBTITLE =
  "Import recipes from Instagram, TikTok, YouTube, websites, and photos. On-device AI turns videos into ingredients and steps — organized in Recipe Books, synced with iCloud, and kept private on your device.";

export const METADATA_DESCRIPTION =
  "Easy Recipe App for iPhone, iPad, and Mac. Import recipes from social media and the web with on-device AI, organize into Recipe Books, scale servings, and sync with iCloud. Free — no account required.";

export const FEATURES_HEADING = "From share sheet to recipe book.";

export const FEATURES = [
  {
    title: "Import Anywhere",
    description:
      "Save recipes from Instagram, TikTok, YouTube, blogs, and photos. Share a link or video and Easy Recipe builds a clean recipe for you.",
    icon: "saveRecipes" as const,
  },
  {
    title: "Recipe Books",
    description:
      "Sort into Recipe Books automatically or by hand — weeknight dinners, baking, favorites, whatever fits your kitchen.",
    icon: "organize" as const,
  },
  {
    title: "Private by Design",
    description:
      "AI runs on your device. For complex recipes on iOS, iPadOS, and macOS 27+, Apple's Private Cloud Compute steps in — 100% secure, never readable by us. No account, no tracking.",
    icon: "private" as const,
  },
  {
    title: "Built for Cooking",
    description:
      "Scale servings, follow clear step-by-step instructions, and run cooking timers with Live Activity on your Lock Screen.",
    icon: "cooking" as const,
  },
] as const;

export const CTA_HEADING = "Ready to start cooking?";

export const CTA_SUBTITLE =
  "Free on iPhone, iPad, and Mac. Download and start importing in seconds.";
