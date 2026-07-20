import { SiteHeader } from "@/components/layout/site-header";
import { HubFooter } from "@/components/zookeeper/hub-footer";
import { HubPageHero } from "@/components/zookeeper/hub-page-hero";
import {
  PodcastsGridV2,
  type PodcastListing,
} from "@/components/zookeeper/podcasts-grid-v2";
import { PODCASTS, PODCAST_NETWORK_TAGLINE } from "@/lib/podcasts";
import { withBrandSocial } from "@/lib/social-metadata";
import type { Metadata } from "next";

export const metadata: Metadata = withBrandSocial("zkm", {
  title: "Podcasts (preview)",
  description: PODCAST_NETWORK_TAGLINE,
  robots: { index: false, follow: false },
});

/** Alternate podcast layout — mirrors hub app cards. Original stays at `/podcasts`. */
const PODCASTS_V2: PodcastListing[] = [
  {
    ...PODCASTS[0],
    tagline: "Fan hum for sleep and focus.",
    description: "Long-form fan sounds from 1 to 12 hours. Free wherever you listen.",
    brandClass: "text-slate-600 dark:text-slate-300",
    hoverBorderClass: "hover:border-slate-400/50 dark:hover:border-slate-500/50",
    accentBandClass: "bg-gradient-to-br from-slate-500 to-slate-800",
  },
  {
    ...PODCASTS[1],
    tagline: "Fireplace, yellow noise, and calm.",
    description: "Sleep and meditation audio — warm ambience without the fluff.",
    brandClass: "text-amber-800 dark:text-amber-400",
    hoverBorderClass: "hover:border-amber-500/40 dark:hover:border-amber-500/40",
    accentBandClass: "bg-gradient-to-br from-amber-700 to-orange-950",
  },
];

export default function PodcastsV2Page() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="pt-14">
        <HubPageHero
          title="Podcasts"
          description={PODCAST_NETWORK_TAGLINE}
        />
        <section className="pb-12 sm:pb-16">
          <PodcastsGridV2 podcasts={PODCASTS_V2} />
        </section>
      </main>
      <HubFooter />
    </div>
  );
}
