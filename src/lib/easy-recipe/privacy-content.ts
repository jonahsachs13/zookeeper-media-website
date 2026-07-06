export const PRIVACY_SECTIONS = [
  {
    heading: null,
    paragraphs: [
      { text: "We collect no data. None.", large: true },
      {
        text: "Everything you do in Easy Recipe App stays on your device. No accounts, no servers, no tracking. Just your recipes, right where they belong.",
      },
      {
        text: "Easy Recipe App was built because we wanted a private place for our own recipes. We have no interest in your data, your cooking habits, or your family secrets. This is the whole policy — it's short because there isn't much to say.",
      },
    ],
  },
  {
    heading: "On-Device Storage",
    paragraphs: [
      {
        text: "Recipes are stored locally on your iPhone or Mac using SwiftData. There are no user accounts, no logins, and no servers holding your information. Your recipes never leave your device unless you choose otherwise.",
      },
    ],
  },
  {
    heading: "iCloud Sync",
    paragraphs: [
      {
        text: "If you choose to turn on iCloud sync, your data syncs securely through your own private Apple iCloud account. We never see it and cannot access it — Apple's infrastructure handles it end-to-end.",
      },
    ],
  },
  {
    heading: "Share Extension",
    paragraphs: [
      {
        text: "When you use the Share extension from Safari or other apps, that content is handed directly to Easy Recipe App using a shared App Group on your device. Nothing is uploaded to any server we control.",
      },
    ],
  },
  {
    heading: "Video Import",
    paragraphs: [
      {
        text: "Video import processes audio and transcripts entirely on your device. When available on supported hardware, it uses Apple Intelligence for transcription. Otherwise it uses a simpler local fallback. No video or audio leaves your device.",
      },
    ],
  },
  {
    heading: "Web Import",
    paragraphs: [
      {
        text: "When you import a recipe from a URL, your device fetches the webpage directly and parses it locally to extract the ingredients and instructions. We never see which URLs you visit or what you import.",
      },
    ],
  },
  {
    heading: "Instagram Stories Sharing",
    paragraphs: [
      {
        text: "The share to Instagram Stories feature is a standard iOS sharing function that works through your device. No data is shared with Instagram or Meta through Easy Recipe App. When you share a recipe, your device handles the interaction directly with the Instagram app — we never see or collect any information about what you share or to whom.",
      },
    ],
  },
  {
    heading: "Analytics & Tracking",
    paragraphs: [
      {
        text: "We include zero analytics frameworks, zero crash reporters, and zero advertising SDKs. There is nothing in the app that phones home or reports your behavior.",
      },
    ],
  },
] as const;
