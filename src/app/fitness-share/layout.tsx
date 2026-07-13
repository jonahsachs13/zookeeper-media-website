import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { getMetadataBase } from "@/lib/metadata-base";
import { brandSocialMetadata } from "@/lib/social-metadata";

const DESCRIPTION =
  "Fitness Share is a macOS Menu Bar app that shows live status for your Cursor AI agents: thinking, searching, planning, and more.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: await getMetadataBase(),
    title: "Fitness Share",
    description: DESCRIPTION,
    icons: {
      icon: "/fitness-share/favicon.png",
      apple: "/fitness-share/favicon.png",
    },
    ...brandSocialMetadata("fitness-share", {
      title: "Fitness Share",
      description:
        "Live Cursor agent status in your Menu Bar. See what your agents are doing without leaving your flow.",
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
