import { ArrowUpRight, Headphones } from "lucide-react";
import type { PodcastShow } from "@/lib/podcasts";

export function PodcastCard({ name, tagline, description, href, artwork }: PodcastShow) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:border-brand-zkm/50 hover:shadow-lg sm:flex-row dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-brand-zkm/50"
    >
      <div className="relative aspect-square w-full flex-shrink-0 overflow-hidden sm:w-48 md:w-56">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={artwork}
          alt={name}
          width={3000}
          height={3000}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-2">
          <Headphones className="h-4 w-4 text-brand-zkm" />
          <span className="text-xs font-semibold tracking-wide text-brand-zkm uppercase">Podcast</span>
        </div>
        <h3 className="mb-1 text-xl font-bold text-black dark:text-white">{name}</h3>
        <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">{tagline}</p>
        <p className="mb-5 flex-1 text-gray-600 dark:text-gray-400">{description}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-black group-hover:text-brand-zkm dark:text-white dark:group-hover:text-brand-zkm">
          Listen on the web
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  );
}

export function PodcastsGrid({ podcasts }: { podcasts: PodcastShow[] }) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.name} {...podcast} />
      ))}
    </div>
  );
}
