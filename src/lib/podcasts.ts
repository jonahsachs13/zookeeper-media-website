export type PodcastListenLink = {
  label: string;
  href: string;
};

export type PodcastShow = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  /** Long-form show description for the show page. */
  about: string;
  href: string;
  artwork: string;
  accentClass: string;
  rssUrl: string;
  listenLinks: PodcastListenLink[];
};

export const PODCASTS: PodcastShow[] = [
  {
    slug: "fan-sounds",
    name: "Fan Sounds White Noise",
    tagline: "Steady fan hum for sleep\u00A0and focus.",
    description:
      "Soothing fan sounds to help you relax, focus, or fall asleep. Episodes from 1\u00A0to\u00A012\u00A0hours.",
    about:
      "Fan Sounds White Noise delivers the soothing, consistent hum of a bedside fan to help you relax, focus, or fall asleep. Let the steady breeze of sound create a calm, distraction-free environment wherever you are.",
    href: "/podcasts/fan-sounds",
    artwork: "/podcasts/fan-sounds.png",
    accentClass: "from-slate-600 to-slate-800",
    rssUrl: "https://anchor.fm/s/10429db64/podcast/rss",
    listenLinks: [
      {
        label: "Apple Podcasts",
        href: "https://podcasts.apple.com/us/podcast/fan-sounds-white-noise/id1811004263",
      },
      {
        label: "Spotify",
        href: "https://open.spotify.com/show/3HRnDl6JsuKlS5mqJyoHtA",
      },
      {
        label: "YouTube",
        href: "https://youtube.com/@FanSounds-WhiteNoise",
      },
      {
        label: "Overcast",
        href: "https://overcast.fm/itunes1811004263",
      },
      {
        label: "Pocket Casts",
        href: "https://pca.st/itunes/1811004263",
      },
      {
        label: "Amazon Music",
        href: "https://music.amazon.com/podcasts/2a0ddc58-9225-400c-b863-89d2c8dec1b2/fan-sounds-white-noise",
      },
      {
        label: "Castbox",
        href: "https://castbox.fm/vic/1811004263",
      },
      {
        label: "Castro",
        href: "https://castro.fm/itunes/1811004263",
      },
      {
        label: "Goodpods",
        href: "https://www.goodpods.com/podcasts-aid/1811004263",
      },
      {
        label: "iHeart",
        href: "https://www.iheart.com/podcast/269-fan-sounds-white-noise-273535877/",
      },
    ],
  },
  {
    slug: "great-sleep",
    name: "Sounds for a Great Sleep",
    tagline: "Fireplace crackles, yellow\u00A0noise, and calm.",
    description:
      "Relaxing sleep sounds and meditation audio — fireplace ambience, yellow\u00A0noise, and calm atmospheres.",
    about:
      "Relaxing sleep meditation music and relaxing sounds. Fall asleep, relax, and meditate with ultra-soothing sounds.",
    href: "/podcasts/great-sleep",
    artwork: "/podcasts/great-sleep.png",
    accentClass: "from-amber-700 to-orange-900",
    rssUrl: "https://anchor.fm/s/d990d8f8/podcast/rss",
    listenLinks: [
      {
        label: "Apple Podcasts",
        href: "https://podcasts.apple.com/us/podcast/white-noise-relaxation/id1666959628",
      },
      {
        label: "Spotify",
        href: "https://open.spotify.com/show/6X8Zb12VOnABBfPMLEHGSE",
      },
      {
        label: "YouTube",
        href: "https://www.youtube.com/playlist?list=PL423t1aLEXvWZyWDbLPiwIJRSce-beKc6",
      },
      {
        label: "Overcast",
        href: "https://overcast.fm/itunes1666959628",
      },
      {
        label: "Pocket Casts",
        href: "https://pca.st/hjk8rcba",
      },
      {
        label: "Amazon Music",
        href: "https://music.amazon.com/podcasts/2fed121d-31ef-4d42-aa2f-0db4d6dee773/white-noise-relaxation",
      },
      {
        label: "Castbox",
        href: "https://castbox.fm/vic/1666959628",
      },
      {
        label: "Castro",
        href: "https://castro.fm/itunes/1666959628",
      },
      {
        label: "Goodpods",
        href: "https://www.goodpods.com/podcasts-aid/1666959628",
      },
      {
        label: "iHeart",
        href: "https://www.iheart.com/podcast/269-sounds-for-a-great-sleep-107759147/",
      },
      {
        label: "Pandora",
        href: "https://www.pandora.com/podcast/sounds-for-a-great-sleep/PC:1001054170",
      },
    ],
  },
];

export function getPodcastBySlug(slug: string): PodcastShow | undefined {
  return PODCASTS.find((show) => show.slug === slug);
}

export const PODCAST_NETWORK_TAGLINE =
  "Calming sleep sounds and relaxation audio, free wherever you listen.";

export const PODCAST_PAGE_DESCRIPTION = PODCAST_NETWORK_TAGLINE;
