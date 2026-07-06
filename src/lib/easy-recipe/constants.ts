export const APP_STORE_URL =
  "https://apps.apple.com/us/app/easy-recipe-app/id6765460599";

export const BRAND_ORANGE = "#FF942F";
export const BRAND_ORANGE_HOVER = "#f08520";

/** In-page UI assets only — favicon and OG image are set in layout metadata. */
/** Bump ?v= when replacing a public asset so browsers drop stale low-res cache. */
const ASSET_VERSION = "5";

export const ASSETS = {
  icon: "/easy-recipe/icon.png",
  deviceLockup: `/easy-recipe/device-lockup.png?v=${ASSET_VERSION}`,
  appIcons: [] as { src: string; alt: string }[],
} as const;
