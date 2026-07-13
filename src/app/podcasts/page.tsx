import { SiteHeader } from "@/components/layout/site-header";
import { HubFooter } from "@/components/zookeeper/hub-footer";
import { HubPageHero } from "@/components/zookeeper/hub-page-hero";
import { PodcastsGrid } from "@/components/zookeeper/podcasts-grid";
import { PODCASTS, PODCAST_NETWORK_TAGLINE, PODCAST_PAGE_DESCRIPTION } from "@/lib/podcasts";
import { withBrandSocial } from "@/lib/social-metadata";
import type { Metadata } from "next";

export const metadata: Metadata = withBrandSocial("zkm", {
  title: "Podcasts",
  description: PODCAST_NETWORK_TAGLINE,
});

export default function PodcastsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="pt-14">
        <HubPageHero
          title="Podcast Network"
          description={PODCAST_PAGE_DESCRIPTION}
        />
        <section className="pb-12 sm:pb-16">
          <PodcastsGrid podcasts={PODCASTS} />
        </section>
      </main>
      <HubFooter />
    </div>
  );
}
