export const PRIVACY_SECTIONS = [
  {
    heading: null,
    paragraphs: [
      { text: "Your clipboard stays yours.", large: true },
      {
        text: "Paste Please is a local macOS clipboard history app. What you copy is stored on your Mac so you can find it again, not so we can read it.",
      },
      {
        text: "We built Paste Please because we wanted private, useful clipboard history. This policy is short because the app is designed to stay on your device and out of our systems.",
      },
    ],
  },
  {
    heading: "What Paste Please Stores",
    paragraphs: [
      {
        text: "Paste Please keeps clipboard history on your Mac, including text, images, colors, files, and links you copy, plus related metadata such as source app, content type, size or dimensions, and timestamp. You can delete items, empty trash, and control how long history is kept in Settings.",
      },
    ],
  },
  {
    heading: "What It Skips",
    paragraphs: [
      {
        text: "Paste Please skips concealed and password pasteboard content so sensitive clipboard data is not added to history.",
      },
    ],
  },
  {
    heading: "Local Storage",
    paragraphs: [
      {
        text: "History is stored locally using SwiftData on your device. There is no Paste Please account and no ZooKeeper Media server that receives your clipboard contents.",
      },
    ],
  },
  {
    heading: "Future iCloud Sync",
    paragraphs: [
      {
        text: "Paste Please is designed so that optional sync across your Apple devices can use Apple’s CloudKit and your iCloud account when enabled in a future release. That sync would go through Apple. We would not operate a clipboard cloud of our own. Until that feature ships, everything stays on your Mac.",
      },
    ],
  },
  {
    heading: "Analytics & Tracking",
    paragraphs: [
      {
        text: "We include no analytics frameworks, no advertising SDKs, and no third-party tracking that reports what you copy or how you use the app.",
      },
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      {
        text: "If you have questions about this policy, contact ZooKeeper Media through the Support page for Paste Please on zookeeper.media.",
      },
    ],
  },
] as const;
