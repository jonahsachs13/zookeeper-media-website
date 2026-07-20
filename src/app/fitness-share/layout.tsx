import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { METADATA_DESCRIPTION } from "@/lib/fitness-share/constants";
import { getMetadataBase } from "@/lib/metadata-base";
import { brandSocialMetadata } from "@/lib/social-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: await getMetadataBase(),
    title: "Fitness Share",
    description: METADATA_DESCRIPTION,
    icons: {
      icon: "/fitness-share/favicon.png",
      apple: "/fitness-share/favicon.png",
    },
    ...brandSocialMetadata("fitness-share", {
      title: "Fitness Share",
      description:
        "Share your fitness with polished cards and stickers for Messages and social media. Coming soon on the App Store.",
    }),
  };
}

export default function FitnessShareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader position="static" />
      {children}
    </>
  );
}
