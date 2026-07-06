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
      "Save recipes from social media, organize into books, and cook with confidence.",
    href: "/easy-recipe",
    icon: "/easy-recipe/icon.png",
    accentClass: "bg-brand-orange",
    brandClass: "text-brand-orange",
    hoverBorderClass: "hover:border-brand-orange/40 dark:hover:border-brand-orange/40",
  },
  {
    name: "Active Agent",
    tagline: "Live Cursor agent status in your menu bar.",
    description:
      "See what your Cursor agents are doing — thinking, searching, planning — without leaving your flow.",
    href: "/active-agent",
    icon: "/active-agent/icon.png",
    accentClass: "bg-brand-agent",
    brandClass: "text-brand-agent",
    hoverBorderClass: "hover:border-brand-agent/40 dark:hover:border-brand-agent/40",
  },
];
