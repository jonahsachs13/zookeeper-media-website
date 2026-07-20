import type { PodcastListenLink } from "@/lib/podcasts";

export function PodcastListenLinks({ links }: { links: PodcastListenLink[] }) {
  return (
    <ul className="mx-auto grid w-full max-w-xl grid-cols-1 gap-2 sm:grid-cols-2">
      {links.map(({ label, href }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-black transition-colors hover:border-brand-zkm/60 hover:bg-brand-zkm/10 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:border-brand-zkm/50 dark:hover:bg-brand-zkm/10"
          >
            <span>{label}</span>
            <span aria-hidden className="text-gray-400 dark:text-gray-500">
              →
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
