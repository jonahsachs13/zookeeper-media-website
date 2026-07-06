import { SiteHeader } from "@/components/layout/site-header";
import { PodcastsGrid } from "@/components/zookeeper/podcasts-grid";
import { PODCASTS, PODCAST_NETWORK_TAGLINE } from "@/lib/podcasts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcasts - ZooKeeper Media",
  description: PODCAST_NETWORK_TAGLINE,
};

export default function PodcastsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="pt-14">
        <section className="px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-black dark:text-white" style={{ fontSize: "clamp(36px, 7vw, 48px)", fontWeight: 700 }}>
              Podcast Network
            </h1>
            <p className="text-gray-600 dark:text-gray-400" style={{ fontSize: "18px", lineHeight: 1.6 }}>
              {PODCAST_NETWORK_TAGLINE} Each show has its own home on the web — tap through to browse episodes, subscribe, and listen.
            </p>
          </div>
        </section>
        <section className="px-6 pb-24">
          <PodcastsGrid podcasts={PODCASTS} />
        </section>
      </main>
      <footer className="border-t border-gray-200 py-8 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-gray-500">
          © 2026 ZooKeeper Media. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
