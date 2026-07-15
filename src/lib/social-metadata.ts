import type { Metadata } from "next";

const OG_WIDTH = 1024;
const OG_HEIGHT = 537;

export const SOCIAL_BRANDS = {
  zkm: {
    image: "/og-image.jpg",
    alt: "ZooKeeper Media",
    siteName: "ZooKeeper Media",
  },
  "easy-recipe": {
    image: "/easy-recipe/og-image.jpg",
    alt: "Easy Recipe App",
    siteName: "Easy Recipe App",
  },
  "active-agent": {
    image: "/active-agent/og-image.jpg",
    alt: "Active Agent",
    siteName: "Active Agent",
  },
  "paste-please": {
    image: "/paste-please/og-image.jpg",
    alt: "Paste Please",
    siteName: "Paste Please",
  },
} as const;

export type SocialBrand = keyof typeof SOCIAL_BRANDS;

export function socialShareImage(brand: SocialBrand) {
  const { image, alt } = SOCIAL_BRANDS[brand];
  return {
    url: image,
    width: OG_WIDTH,
    height: OG_HEIGHT,
    alt,
  };
}

export function brandSocialMetadata(
  brand: SocialBrand,
  {
    title,
    description,
  }: {
    title: string;
    description: string;
  },
): Pick<Metadata, "openGraph" | "twitter"> {
  const image = socialShareImage(brand);

  return {
    openGraph: {
      title,
      description,
      type: "website",
      siteName: SOCIAL_BRANDS[brand].siteName,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}

/** Ensures subpages keep the section social share image when overriding title. */
export function withBrandSocial(
  brand: SocialBrand,
  metadata: Metadata,
): Metadata {
  const image = socialShareImage(brand);

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      siteName: SOCIAL_BRANDS[brand].siteName,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      ...metadata.twitter,
      images: [image.url],
    },
  };
}
