import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://easyrecipeapp.com"),
  title: "Easy Recipe App - Cooking made easy.",
  description:
    "Easy Recipe App is a beautiful recipe app for iPhone, iPad, and Mac. Save and organize recipes, import from videos and websites, scale servings, and sync with iCloud.",
  icons: {
    icon: "/easy-recipe/favicon.png",
    apple: "/easy-recipe/favicon.png",
  },
  openGraph: {
    title: "Easy Recipe App",
    description:
      "Easy Recipe App is a beautiful recipe app for iPhone, iPad, and Mac. Save and organize recipes, import from videos and websites, scale servings, and sync with iCloud.",
    type: "website",
    images: [
      {
        url: "/easy-recipe/og-image.png",
        width: 1200,
        height: 630,
        alt: "Easy Recipe App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy Recipe App",
    description:
      "Easy Recipe App is a beautiful recipe app for iPhone, iPad, and Mac. Save and organize recipes, import from videos and websites, scale servings, and sync with iCloud.",
    images: ["/easy-recipe/og-image.png"],
  },
};

export default function EasyRecipeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
}
