export const FAQ_ITEMS = [
  {
    question: "What is Active Agent?",
    answer:
      "Active Agent is a macOS Menu Bar app that shows live status for your Cursor AI agents. See when they're thinking, searching, planning, or waiting, without switching away from your work.",
  },
  {
    question: "How does Active Agent connect to Cursor?",
    answer:
      "Active Agent runs locally on your Mac and reads agent activity from Cursor while you work. It stays in your Menu Bar and updates in real time as your agents move through different states.",
  },
  {
    question: "What agent statuses can I see?",
    answer:
      "Active Agent surfaces the states that matter most during a session, including thinking, searching, planning, running tools, and idle. A quick glance tells you whether an agent is busy or ready for your next prompt.",
  },
  {
    question: "Do I need to keep Cursor open?",
    answer:
      "Yes. Active Agent reflects live Cursor agent activity, so Cursor needs to be running on your Mac for status updates to appear in the Menu Bar.",
  },
  {
    question: "Does Active Agent access my code or conversations?",
    answer:
      "No. Active Agent only reads high-level agent status, not your source code, chat history, or file contents. Everything stays on your device.",
  },
  {
    question: "What are the system requirements?",
    answer: `macOS 14 Sonoma or newer is required.

MacBook Neo (A18 Pro) or newer
MacBook Air (M1) or newer
MacBook Pro (M1) or newer
iMac (M1) or newer
Mac mini (M1) or newer
Mac Studio (M1 Max / Ultra) or newer
Mac Pro (M2 Ultra)`,
  },
  {
    question: "Is Active Agent free?",
    answer:
      "Yes. Active Agent is free to download and use. It is a companion utility for Cursor users who want agent status always within reach.",
  },
] as const;
