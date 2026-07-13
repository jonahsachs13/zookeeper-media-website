export const TAGLINE = "Live Cursor agent status in your Menu Bar.";

export const DOWNLOAD_URL = "https://zookeepermedia.com/fitness-share/download";

/** In-page UI assets only — favicon and OG image are set in layout metadata. */
/** Bump ?v= when replacing a public asset so browsers drop stale low-res cache. */
const ASSET_VERSION = "9";

export const ASSETS = {
  icon: `/fitness-share/icon.png?v=${ASSET_VERSION}`,
  menuBarScreenshot: `/fitness-share/menu-bar-screenshot.png?v=${ASSET_VERSION}`,
  menuBarGlance: `/fitness-share/menu-bar-glance.png?v=${ASSET_VERSION}`,
} as const;
