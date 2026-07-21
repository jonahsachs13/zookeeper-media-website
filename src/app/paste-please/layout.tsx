import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { PastePleaseDomainProvider } from "@/components/paste-please/domain-context";
import { METADATA_DESCRIPTION } from "@/lib/paste-please/constants";
import { getMetadataBase } from "@/lib/metadata-base";
import { getRequestHost } from "@/lib/request-host";
import { brandSocialMetadata } from "@/lib/social-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: await getMetadataBase(),
    title: "Paste Please",
    description: METADATA_DESCRIPTION,
    icons: {
      icon: "/paste-please/favicon.png",
      apple: "/paste-please/favicon.png",
    },
    ...brandSocialMetadata("paste-please", {
      title: "Paste Please",
      description:
        "Clipboard history for Mac. Search, preview, and paste from the Menu Bar. Free on the Mac App Store.",
    }),
  };
}

export default async function PastePleaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const host = await getRequestHost();

  return (
    <PastePleaseDomainProvider host={host}>
      <SiteHeader position="static" />
      {children}
    </PastePleaseDomainProvider>
  );
}
