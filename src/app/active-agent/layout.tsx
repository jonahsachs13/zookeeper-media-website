import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { getMetadataBase } from "@/lib/metadata-base";
import { brandSocialMetadata } from "@/lib/social-metadata";

const DESCRIPTION =
  "Active Agent is a macOS Menu Bar app that shows live status for your Cursor AI agents: thinking, searching, planning, and more.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: await getMetadataBase(),
    title: "Active Agent",
    description: DESCRIPTION,
    icons: {
      icon: "/active-agent/favicon.png",
      apple: "/active-agent/favicon.png",
    },
    ...brandSocialMetadata("active-agent", {
      title: "Active Agent",
      description:
        "Live Cursor agent status in your Menu Bar. See what your agents are doing without leaving your flow.",
    }),
  };
}

export default function ActiveAgentLayout({
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
