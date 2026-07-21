import { EASY_RECIPE_SITE_URL } from "@/lib/easy-recipe/paths";
import { PASTE_PLEASE_SITE_URL } from "@/lib/paste-please/paths";

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
    name: "Active Agent",
    tagline: "Live Cursor agent status in your Menu Bar.",
    description:
      "See what your Cursor agents are doing: thinking, searching, and planning, without leaving your flow.",
    href: "/active-agent",
    icon: "/active-agent/icon.png",
    accentClass: "bg-brand-agent",
    brandClass: "text-brand-agent",
    hoverBorderClass: "hover:border-brand-agent/40 dark:hover:border-brand-agent/40",
  },
  {
    name: "Paste Please",
    tagline: "Clipboard history for Mac.",
    description:
      "Searchable clipboard history in the Menu Bar and a full window: text, images, colors, files, and links.",
    href: PASTE_PLEASE_SITE_URL,
    icon: "/paste-please/icon.png",
    accentClass: "bg-brand-paste",
    brandClass: "text-brand-paste",
    hoverBorderClass: "hover:border-brand-paste/40 dark:hover:border-brand-paste/40",
  },
  {
    name: "Fitness Share",
    tagline: "Your fitness, ready to share.",
    description:
      "Polished workout cards and stickers for Messages and social media. Coming soon.",
    href: "/fitness-share",
    icon: "/fitness-share/icon.png?v=2",
    accentClass: "bg-brand-fitness",
    brandClass: "text-brand-fitness",
    hoverBorderClass: "hover:border-brand-fitness/40 dark:hover:border-brand-fitness/40",
  },
];
