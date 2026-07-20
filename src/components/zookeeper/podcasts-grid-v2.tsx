import type { PodcastShow } from "@/lib/podcasts";

export type PodcastListing = PodcastShow & {
  brandClass: string;
  hoverBorderClass: string;
  accentBandClass: string;
};

/** App-card layout for podcasts — same structure as `AppsGrid` / `AppCard`. */
function PodcastAppStyleCard({
  name,
  tagline,
  description,
  href,
  artwork,
  brandClass,
  hoverBorderClass,
  accentBandClass,
}: PodcastListing) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-colors dark:border-zinc-800 dark:bg-zinc-900 ${hoverBorderClass}`}
    >
      <div className={`${accentBandClass} flex items-center px-8 py-10`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={artwork}
          alt=""
          className="h-16 w-16 rounded-2xl object-cover shadow-sm"
        />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <p className={`mb-1 text-sm font-medium ${brandClass}`}>{name}</p>
        <h3 className="mb-2 text-xl font-bold text-black dark:text-white">{tagline}</h3>
        <p className="mb-6 flex-1 text-gray-600 dark:text-gray-400">{description}</p>
        <span className={`text-sm font-semibold ${brandClass} group-hover:underline`}>
          Listen now →
        </span>
      </div>
    </a>
  );
}

export function PodcastsGridV2({ podcasts }: { podcasts: PodcastListing[] }) {
  return (
    <div className="mx-auto grid max-w-4xl gap-8 px-4 sm:grid-cols-2 sm:px-6">
      {podcasts.map((podcast) => (
        <PodcastAppStyleCard key={podcast.name} {...podcast} />
      ))}
    </div>
  );
}
