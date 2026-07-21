import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { METADATA_DESCRIPTION } from "@/lib/paste-please/constants";
import { getMetadataBase } from "@/lib/metadata-base";
import { brandSocialMetadata } from "@/lib/social-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: await getMetadataBase(),
    title: "Paste Please",
    description: METADATA_DESCRIPTION,
    icons: {
      icon: `/paste-please/favicon.png?v=4`,
      apple: `/paste-please/icon.png?v=4`,
    },
    ...brandSocialMetadata("paste-please", {
      title: "Paste Please",
      description:
        "Clipboard history for Mac. Search, preview, and paste from the Menu Bar. Free on the Mac App Store.",
    }),
  };
}

export default function PastePleaseLayout({
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
