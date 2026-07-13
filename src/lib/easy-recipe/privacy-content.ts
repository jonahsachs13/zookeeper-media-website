export const PRIVACY_SECTIONS = [
  {
    heading: null,
    paragraphs: [
      { text: "We collect no data. None.", large: true },
      {
        text: "Everything you do in Easy Recipe App stays private. No accounts, no servers we control, no tracking. Just your recipes, right where they belong.",
      },
      {
        text: "Easy Recipe App was built because we wanted a private place for our own recipes. We have no interest in your data, your cooking habits, or your family secrets. This is the whole policy. It's short because there isn't much to say.",
      },
    ],
  },
  {
    heading: "On-Device Storage",
    paragraphs: [
      {
        text: "Recipes are stored locally on your iPhone, iPad, or Mac using SwiftData. There are no user accounts, no logins, and no servers of ours holding your information. Your recipes stay on your device unless you choose to sync with iCloud, or Apple Intelligence needs Private Cloud Compute for a more complex recipe.",
      },
    ],
  },
  {
    heading: "iCloud Sync",
    paragraphs: [
      {
        text: "If you choose to turn on iCloud sync, your data syncs securely through your own private Apple iCloud account. We never see it and cannot access it. Apple's infrastructure handles it end-to-end.",
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
        text: "Video import processes audio and transcripts on your device whenever possible. When available on supported hardware, it uses Apple Intelligence for transcription. Otherwise it uses a simpler local fallback.",
      },
    ],
  },
  {
    heading: "Private Cloud Compute",
    paragraphs: [
      {
        text: "On iOS, iPadOS, and macOS 27 and newer, Easy Recipe App may use Apple's Private Cloud Compute when necessary for more complex recipes. That processing runs on Apple's Private Cloud Compute infrastructure — not on any servers we control. We never see the content sent for Private Cloud Compute, and we cannot access it.",
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
        text: "The share to Instagram Stories feature is a standard iOS sharing function that works through your device. No data is shared with Instagram or Meta through Easy Recipe App. When you share a recipe, your device handles the interaction directly with the Instagram app. We never see or collect any information about what you share or to whom.",
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
