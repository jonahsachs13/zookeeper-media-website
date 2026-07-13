import type { Metadata } from "next";
import { EasyRecipeChrome } from "@/components/easy-recipe/chrome";
import { EasyRecipeDomainProvider } from "@/components/easy-recipe/domain-context";
import { METADATA_DESCRIPTION } from "@/lib/easy-recipe/marketing";
import { getMetadataBase } from "@/lib/metadata-base";
import { getRequestHost } from "@/lib/request-host";
import { brandSocialMetadata } from "@/lib/social-metadata";

const DESCRIPTION = METADATA_DESCRIPTION;

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: await getMetadataBase(),
    title: "Easy Recipe App",
    description: DESCRIPTION,
    icons: {
      icon: "/easy-recipe/favicon.png?v=9",
      apple: "/easy-recipe/icon.png?v=9",
    },
    ...brandSocialMetadata("easy-recipe", {
      title: "Easy Recipe App",
      description: DESCRIPTION,
    }),
  };
}

export default async function EasyRecipeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const host = await getRequestHost();

  return (
    <EasyRecipeDomainProvider host={host}>
      <EasyRecipeChrome>{children}</EasyRecipeChrome>
    </EasyRecipeDomainProvider>
  );
}
