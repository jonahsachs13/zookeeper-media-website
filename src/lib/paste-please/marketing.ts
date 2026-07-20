export const HERO_TITLE = "Your clipboard, remembered.";

export const HERO_SUBTITLE =
  "Paste Please keeps a searchable history of what you copy on your Mac (text, images, colors, files, and links) in the Menu Bar and a full window. Coming soon.";

export const FEATURES_HEADING = "Copy once. Paste anytime.";

export const FEATURES = [
  {
    title: "Menu Bar + Window",
    description:
      "Grab a recent clip from the Menu Bar, or open the full window when you need to search, preview, and act on your history.",
    icon: "menuBar" as const,
  },
  {
    title: "Rich Previews",
    description:
      "See what you copied before you paste: text, images, color swatches with hex, files, and links, with source app and timestamp.",
    icon: "preview" as const,
  },
  {
    title: "Search & Filter",
    description:
      "Type to filter entries, filter by category, and pin the clips you reuse. Long text truncates to the space available, not a fixed character limit.",
    icon: "search" as const,
  },
  {
    title: "Privacy Focused",
    description:
      "History stays on your Mac. Concealed and password clipboard content is skipped.",
    icon: "private" as const,
  },
] as const;

export const CTA_HEADING = "Coming soon to the Mac App Store";

export const CTA_SUBTITLE =
  "Paste Please for Mac is on the way. Free to download when it launches. Requires macOS 15 Sequoia or newer.";
