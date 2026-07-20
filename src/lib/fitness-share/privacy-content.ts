export const PRIVACY_SECTIONS = [
  {
    heading: null,
    paragraphs: [
      { text: "Your Health data stays on your device.", large: true },
      {
        text: "Fitness Share App reads activity from Apple Health so you can create cards and stickers to share with friends, not so we can collect a fitness profile about you.",
      },
      {
        text: "This policy is short because the app is designed to keep Health data on your iPhone and out of our systems.",
      },
    ],
  },
  {
    heading: "What Fitness Share App Reads",
    paragraphs: [
      {
        text: "With your permission, Fitness Share App reads activity summaries, workouts, and distance from Apple Health. Access is read-only.",
      },
    ],
  },
  {
    heading: "Sharing",
    paragraphs: [
      {
        text: "When you share a card or sticker, or save to Photos, only the image or video you export leaves the app. Messages and social apps receive that media through their share tools. We do not upload your Health records to ZooKeeper Media servers.",
      },
    ],
  },
  {
    heading: "Local Processing",
    paragraphs: [
      {
        text: "Cards, stickers, and optional on-device summaries are generated on your iPhone. There is no Fitness Share account and no cloud database of your workouts operated by us.",
      },
    ],
  },
  {
    heading: "Analytics & Tracking",
    paragraphs: [
      {
        text: "We include no advertising SDKs and no third-party analytics that report your Health data or workout history to us.",
      },
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      {
        text: "If you have questions about this policy, contact ZooKeeper Media through the Support page for Fitness Share on zookeeper.media.",
      },
    ],
  },
] as const;
