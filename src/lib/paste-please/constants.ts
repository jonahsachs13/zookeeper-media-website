export const TAGLINE = "Clipboard history for Mac, always within reach.";

export const METADATA_DESCRIPTION =
  "Paste Please is a macOS clipboard history app for the Menu Bar and a full window. Search, preview, and paste text, images, colors, files, and links. Coming soon on the Mac App Store.";

/** In-page UI assets only. Favicon and OG image are set in layout metadata. */
const ASSET_VERSION = "2";

export const ASSETS = {
  icon: `/paste-please/icon.png?v=${ASSET_VERSION}`,
  screenshots: {
    menuBar: `/paste-please/screenshots/menu-bar.png?v=${ASSET_VERSION}`,
    fullApp: `/paste-please/screenshots/full-app.png?v=${ASSET_VERSION}`,
  },
} as const;

export const SCREENSHOT_SIZE = {
  width: 2880,
  height: 1800,
} as const;
