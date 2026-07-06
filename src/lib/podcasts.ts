export type PodcastShow = {
  name: string;
  tagline: string;
  description: string;
  href: string;
  artwork: string;
  accentClass: string;
};

export const PODCASTS: PodcastShow[] = [
  {
    name: "Fan Sounds White Noise",
    tagline: "Steady fan hum for sleep and focus.",
    description:
      "Soothing, consistent fan sounds to help you relax, focus, or fall asleep — from 1 to 12 hour episodes.",
    href: "https://fansleep.transistor.fm",
    artwork: "/podcasts/fan-sounds.png",
    accentClass: "from-slate-600 to-slate-800",
  },
  {
    name: "Sounds for a Great Sleep",
    tagline: "Fireplace crackles, yellow noise, and calm.",
    description:
      "Relaxing sleep sounds and meditation audio — fireplace ambience, yellow noise, and ultra-soothing atmospheres.",
    href: "https://sleep.transistor.fm",
    artwork: "/podcasts/great-sleep.png",
    accentClass: "from-amber-700 to-orange-900",
  },
];

export const PODCAST_NETWORK_TAGLINE =
  "Soothing sleep and relaxation podcasts, free to stream anywhere.";
