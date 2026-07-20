import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { HubFooter } from "@/components/zookeeper/hub-footer";
import { PodcastListenLinks } from "@/components/zookeeper/podcast-listen-links";
import { PodcastRssField } from "@/components/zookeeper/podcast-rss-field";
import type { PodcastShow } from "@/lib/podcasts";

export function PodcastShowPage({ show }: { show: PodcastShow }) {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="pt-14">
        <section className="pb-10 pt-8 sm:pb-14 sm:pt-12">
          <div className="mx-auto flex max-w-[720px] flex-col items-center px-4 text-center sm:px-6">
            <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
              <Link href="/podcasts" className="hover:text-brand-zkm">
                Podcasts
              </Link>
              <span aria-hidden className="mx-2">
                /
              </span>
              {show.name}
            </p>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={show.artwork}
              alt=""
              width={320}
              height={320}
              className="mb-6 h-40 w-40 rounded-2xl object-cover shadow-sm sm:mb-8 sm:h-52 sm:w-52 sm:rounded-3xl"
            />

            <h1
              className="mb-3 text-balance text-black dark:text-white"
              style={{
                fontSize: "clamp(28px, 6vw, 42px)",
                fontWeight: 700,
                lineHeight: 1.15,
              }}
            >
              {show.name}
            </h1>
            <p
              className="mb-8 max-w-[560px] text-pretty text-black/80 dark:text-white/80"
              style={{
                fontSize: "clamp(16px, 3vw, 18px)",
                lineHeight: 1.6,
                letterSpacing: "-0.01em",
              }}
            >
              {show.about}
            </p>

            <div className="mb-10 w-full sm:mb-12">
              <PodcastRssField rssUrl={show.rssUrl} />
            </div>

            <div className="w-full">
              <h2 className="mb-4 text-lg font-semibold text-black dark:text-white">
                Listen on
              </h2>
              <PodcastListenLinks links={show.listenLinks} />
            </div>
          </div>
        </section>
      </main>
      <HubFooter />
    </div>
  );
}
