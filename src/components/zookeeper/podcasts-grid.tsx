import Link from "next/link";
import type { PodcastShow } from "@/lib/podcasts";

const CTA_CLASS =
  "inline-block w-fit rounded-full bg-brand-zkm px-5 py-2 text-center text-xs font-semibold text-black transition-all hover:scale-110 hover:bg-brand-zkm-hover sm:text-sm";

function PodcastCard({ name, tagline, description, href, artwork }: PodcastShow) {
  return (
    <article className="flex h-full flex-col items-center overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex justify-center px-4 pb-2 pt-6 sm:px-6 sm:pt-7">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={artwork}
          alt={name}
          className="h-28 w-28 rounded-xl object-cover sm:h-36 sm:w-36 sm:rounded-2xl"
        />
      </div>
      <div className="flex flex-1 flex-col items-center px-5 pb-6 pt-2 text-center sm:px-6 sm:pb-7">
        <h2 className="mb-1 w-full text-base font-semibold text-balance text-black sm:mb-1.5 sm:text-lg dark:text-white">
          {name}
        </h2>
        <p className="mb-2 text-sm font-medium text-balance text-pretty text-gray-600 dark:text-gray-400">
          {tagline}
        </p>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-balance text-pretty text-gray-600 sm:mb-5 dark:text-gray-400">
          {description}
        </p>
        <Link href={href} className={CTA_CLASS}>
          Listen now
        </Link>
      </div>
    </article>
  );
}

export function PodcastsGrid({ podcasts }: { podcasts: PodcastShow[] }) {
  return (
    <div className="mx-auto grid max-w-[720px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:gap-5 sm:px-6">
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.name} {...podcast} />
      ))}
    </div>
  );
}
