export const TAGLINE = "Live Cursor agent status in your Menu Bar.";

export const DOWNLOAD_URL = "https://zookeepermedia.com/active-agent/download";

/** In-page UI assets only — favicon and OG image are set in layout metadata. */
/** Bump ?v= when replacing a public asset so browsers drop stale low-res cache. */
const ASSET_VERSION = "10";

export const ASSETS = {
  icon: `/active-agent/icon.png?v=${ASSET_VERSION}`,
  menuBarScreenshot: `/active-agent/menu-bar-screenshot.png?v=${ASSET_VERSION}`,
  menuBarGlance: `/active-agent/menu-bar-glance.png?v=${ASSET_VERSION}`,
} as const;
