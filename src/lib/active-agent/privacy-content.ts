export const PRIVACY_SECTIONS = [
  {
    heading: null,
    paragraphs: [
      { text: "Your work stays yours.", large: true },
      {
        text: "Active Agent is a local menu bar companion for Cursor. It shows high-level agent status on your Mac and does not collect, store, or transmit your personal data to ZooKeeper Media.",
      },
      {
        text: "We built Active Agent because we wanted a simple way to see what our agents were doing without opening Cursor. This policy is short because the app is designed to stay out of your way — and out of your data.",
      },
    ],
  },
  {
    heading: "What Active Agent Reads",
    paragraphs: [
      {
        text: "Active Agent reads agent activity state from Cursor on your Mac — for example, whether an agent is thinking, searching, or idle. It does not read your source code, chat transcripts, prompts, or file contents.",
      },
    ],
  },
  {
    heading: "Local Processing",
    paragraphs: [
      {
        text: "Status information is processed locally on your device. Active Agent does not send agent activity, usage patterns, or session details to our servers.",
      },
    ],
  },
  {
    heading: "No Accounts Required",
    paragraphs: [
      {
        text: "Active Agent does not require an account, login, or email address. There is no user profile and no cloud storage of your activity.",
      },
    ],
  },
  {
    heading: "Analytics & Tracking",
    paragraphs: [
      {
        text: "We include no analytics frameworks, no advertising SDKs, and no third-party tracking in Active Agent. The app does not phone home about how you use Cursor or what projects you work on.",
      },
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      {
        text: "If you have questions about this policy, contact ZooKeeper Media through the support information on zookeepermedia.com.",
      },
    ],
  },
] as const;
