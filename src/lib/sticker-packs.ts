export type StickerPack = {
  name: string;
  tagline: string;
  description: string;
  appStoreUrl: string;
  artwork: string;
};

export const STICKER_PACK_TAGLINE =
  "Fun, expressive stickers for iMessage. Free on the App Store.";

export const STICKER_PACKS: StickerPack[] = [
  {
    name: "Faces on Things",
    tagline: "Everyday objects with personality.",
    description:
      "Give the stuff around you a face. Quirky, expressive stickers for when words aren't enough.",
    appStoreUrl: "https://apps.apple.com/us/app/faces-on-things/id6470135311",
    artwork: "/sticker-packs/faces-on-things.png?v=4",
  },
  {
    name: "GMA & Crow",
    tagline: "Within the World of GMA & Crow.",
    description:
      "Stickers from the GMA & Crow universe: characters and moments for your iMessage chats.",
    appStoreUrl:
      "https://apps.apple.com/us/app/within-the-world-of-gma-crow/id1489932513",
    artwork: "/sticker-packs/gma-and-crow.png?v=4",
  },
  {
    name: "Brainrot",
    tagline: "Viral internet slang, stickerified.",
    description:
      "Gen Z and Gen Alpha's favorite terms from TikTok, Instagram, and the rest of the internet.",
    appStoreUrl: "https://apps.apple.com/us/app/brainrot-sticker-pack/id6742157100",
    artwork: "/sticker-packs/brainrot.png?v=4",
  },
  {
    name: "SAYINGS 3",
    tagline: "Classic phrases, sticker form.",
    description:
      "A collection of expressive sayings and reactions, the third in the popular Sayings series.",
    appStoreUrl: "https://apps.apple.com/us/app/sayings-3-sticker-pack/id1493877067",
    artwork: "/sticker-packs/sayings-3.png?v=4",
  },
  {
    name: "Minimalism",
    tagline: "Clean, simple, expressive.",
    description:
      "Understated sticker designs with a minimalist aesthetic. Say more with less.",
    appStoreUrl: "https://apps.apple.com/us/app/minimalism-sticker-pack/id1484802507",
    artwork: "/sticker-packs/minimalism.png?v=4",
  },
  {
    name: "Gen Z Slang",
    tagline: "Stickers for Gen Z.",
    description:
      "A modern sticker pack packed with contemporary slang and reactions for iMessage.",
    appStoreUrl: "https://apps.apple.com/us/app/gen-z-slang-sticker-pack/id1519670119",
    artwork: "/sticker-packs/gen-z-slang.png?v=4",
  },
];
