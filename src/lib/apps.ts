import { EASY_RECIPE_SITE_URL } from "@/lib/easy-recipe/paths";

export type AppListing = {
  name: string;
  tagline: string;
  description: string;
  href: string;
  icon: string;
  accentClass: string;
  brandClass: string;
  hoverBorderClass: string;
};

export const APPS: AppListing[] = [
  {
    name: "Easy Recipe",
    tagline: "Cooking made easy.",
    description:
      "Import recipes from social media and the web with on-device AI, organize into Recipe Books, and cook with timers and scaled servings.",
    href: EASY_RECIPE_SITE_URL,
    icon: "/easy-recipe/icon.png",
    accentClass: "bg-brand-orange",
    brandClass: "text-brand-orange",
    hoverBorderClass: "hover:border-brand-orange/40 dark:hover:border-brand-orange/40",
  },
  {
    name: "Fitness Share",
    tagline: "Live Cursor agent status in your Menu Bar.",
    description:
      "See what your Cursor agents are doing: thinking, searching, and planning, without leaving your flow.",
    href: "/fitness-share",
    icon: "/fitness-share/icon.png",
    accentClass: "bg-brand-fitness",
    brandClass: "text-brand-fitness",
    hoverBorderClass: "hover:border-brand-fitness/40 dark:hover:border-brand-fitness/40",
  },
];
