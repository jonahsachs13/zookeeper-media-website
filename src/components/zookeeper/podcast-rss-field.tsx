"use client";

import { useState } from "react";

export function PodcastRssField({ rssUrl }: { rssUrl: string }) {
  const [copied, setCopied] = useState(false);

  async function copyRss() {
    try {
      await navigator.clipboard.writeText(rssUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="w-full max-w-xl">
      <p className="mb-2 text-sm font-medium text-black dark:text-white">RSS feed</p>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
        <input
          readOnly
          value={rssUrl}
          aria-label="RSS feed URL"
          className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-gray-200"
          onFocus={(event) => event.currentTarget.select()}
        />
        <div className="flex gap-2">
          <button
            type="button"
            onClick={copyRss}
            className="rounded-xl bg-brand-zkm px-4 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-brand-zkm-hover"
          >
            {copied ? "Copied" : "Copy"}
          </button>
          <a
            href={rssUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-gray-50 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
          >
            Open
          </a>
        </div>
      </div>
    </div>
  );
}
