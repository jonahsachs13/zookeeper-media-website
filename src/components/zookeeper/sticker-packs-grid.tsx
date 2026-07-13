import type { StickerPack } from "@/lib/sticker-packs";

const CTA_CLASS =
  "inline-block w-fit self-center rounded-full bg-brand-zkm px-5 py-2 text-center text-xs font-semibold text-black transition-all hover:scale-110 hover:bg-brand-zkm-hover sm:text-sm";

function StickerPackCard({
  name,
  tagline,
  description,
  appStoreUrl,
  artwork,
}: StickerPack) {
  return (
    <article className="flex h-full flex-col items-center overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex w-full items-center justify-center bg-gray-50 px-4 py-5 dark:bg-zinc-800/40 sm:py-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={artwork}
          alt={name}
          className="h-20 w-20 object-contain sm:h-24 sm:w-24"
        />
      </div>
      <div className="flex flex-1 flex-col items-center px-5 pb-4 pt-3 text-center sm:px-4 sm:pb-5">
        <h2 className="mb-1 w-full text-lg font-semibold text-balance text-black dark:text-white">{name}</h2>
        <p className="mb-2 text-sm font-medium text-balance text-pretty text-gray-600 dark:text-gray-400">{tagline}</p>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-balance text-pretty text-gray-600 dark:text-gray-400">
          {description}
        </p>
        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={CTA_CLASS}
        >
          Download
        </a>
      </div>
    </article>
  );
}

export function StickerPacksGrid({ packs }: { packs: StickerPack[] }) {
  return (
    <div className="mx-auto grid max-w-[960px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 sm:px-6">
      {packs.map((pack) => (
        <StickerPackCard key={pack.name} {...pack} />
      ))}
    </div>
  );
}
