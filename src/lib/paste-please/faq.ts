export const FAQ_ITEMS = [
  {
    question: "What is Paste Please?",
    answer:
      "Paste Please is a macOS clipboard history app. It remembers what you copy (text, images, colors, files, and links) so you can find and paste them later from the Menu Bar or a full window.",
  },
  {
    question: "What kinds of clips does it keep?",
    answer:
      "Text, images, colors (with hex), files, and links. Each entry can show source app, content type, size or dimensions, and when it was copied.",
  },
  {
    question: "Is my clipboard history private?",
    answer:
      "Yes. History is stored on your Mac. The app skips concealed and password pasteboard content. We do not run servers that store your clips. Optional iCloud sync is designed for the future via Apple’s CloudKit, not ZooKeeper Media servers.",
  },
  {
    question: "What are the system requirements?",
    answer: `macOS 15 Sequoia or newer is required

MacBook Neo (A18 Pro) or newer
MacBook Air (M1) or newer
MacBook Pro (M1) or newer
iMac (M1) or newer
Mac mini (M1) or newer
Mac Studio (M1 Max / Ultra) or newer
Mac Pro (M2 Ultra)`,
  },
] as const;
