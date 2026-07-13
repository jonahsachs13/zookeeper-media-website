import { APP_ICONS } from "@/lib/easy-recipe/app-icons";

export const APP_STORE_URL =
  "https://apps.apple.com/us/app/easy-recipe-app/id6765460599";

export const BRAND_ORANGE = "#FF942F";
export const BRAND_ORANGE_HOVER = "#f08520";

/** In-page UI assets only — favicon and OG image are set in layout metadata. */
/** Bump ?v= when replacing a public asset so browsers drop stale low-res cache. */
const ASSET_VERSION = "11";

export const ASSETS = {
  icon: `/easy-recipe/icon.png?v=${ASSET_VERSION}`,
  deviceLockup: `/easy-recipe/device-lockup.png?v=${ASSET_VERSION}`,
  deviceLockupLayers: {
    iphone: `/easy-recipe/device-lockup/iphone.png?v=${ASSET_VERSION}`,
    ipad: `/easy-recipe/device-lockup/ipad.png?v=${ASSET_VERSION}`,
    mac: `/easy-recipe/device-lockup/mac.png?v=${ASSET_VERSION}`,
  },
  appIcons: APP_ICONS,
} as const;

export const SCREENSHOTS = {
  honeyRoastedCarrots: `/easy-recipe/screenshots/honey-roasted-carrots.png?v=${ASSET_VERSION}`,
  theRecipe: `/easy-recipe/screenshots/the-recipe.png?v=${ASSET_VERSION}`,
} as const;
