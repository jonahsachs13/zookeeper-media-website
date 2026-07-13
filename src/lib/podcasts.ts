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
    tagline: "Steady fan hum for sleep\u00A0and focus.",
    description:
      "Soothing fan sounds to help you relax, focus, or fall asleep. Episodes from 1\u00A0to\u00A012\u00A0hours.",
    href: "https://fansleep.transistor.fm",
    artwork: "/podcasts/fan-sounds.png",
    accentClass: "from-slate-600 to-slate-800",
  },
  {
    name: "Sounds for a Great Sleep",
    tagline: "Fireplace crackles, yellow\u00A0noise, and calm.",
    description:
      "Relaxing sleep sounds and meditation audio — fireplace ambience, yellow\u00A0noise, and calm atmospheres.",
    href: "https://sleep.transistor.fm",
    artwork: "/podcasts/great-sleep.png",
    accentClass: "from-amber-700 to-orange-900",
  },
];

export const PODCAST_NETWORK_TAGLINE =
  "Calming sleep sounds and relaxation audio, free wherever you listen.";

export const PODCAST_PAGE_DESCRIPTION = PODCAST_NETWORK_TAGLINE;
