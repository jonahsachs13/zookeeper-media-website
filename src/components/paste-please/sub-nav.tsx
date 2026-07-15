"use client";

import Link from "next/link";
import { AppSubNavShell } from "@/components/layout/app-sub-nav-shell";

const NAV_LINKS = [
  { href: "/paste-please#features", label: "Features" },
  { href: "/paste-please#faq", label: "FAQs" },
  { href: "/paste-please/support", label: "Support" },
  { href: "/paste-please/privacy", label: "Privacy" },
] as const;

const OUTLINE_BUTTON_CLASS =
  "inline-block shrink-0 whitespace-nowrap rounded-full border border-brand-paste px-2.5 py-1.5 text-[11px] font-semibold text-black transition-all hover:scale-110 hover:bg-brand-paste/10 sm:px-5 sm:py-2 sm:text-sm dark:border-brand-paste-light dark:text-white dark:hover:border-brand-paste-light-hover dark:hover:bg-brand-paste-light/10";

const COMING_SOON_BUTTON_CLASS =
  "relative inline-block shrink-0 cursor-not-allowed whitespace-nowrap rounded-full bg-gray-400 px-2.5 py-1.5 text-[11px] font-semibold text-white/70 sm:px-5 sm:py-2 sm:text-sm dark:bg-zinc-700 dark:text-zinc-400";

type PastePleaseSubNavProps = {
  variant?: "full" | "minimal";
};

export function PastePleaseSubNav({ variant = "full" }: PastePleaseSubNavProps) {
  if (variant === "minimal") {
    return null;
  }

  return (
    <AppSubNavShell>
      {NAV_LINKS.map(({ href, label }) => (
        <Link key={href} href={href} className={OUTLINE_BUTTON_CLASS}>
          {label}
        </Link>
      ))}
      <span className={COMING_SOON_BUTTON_CLASS} aria-disabled="true">
        Download
        <span className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 text-[9px] font-bold uppercase tracking-wide text-white sm:text-xs">
          Coming Soon
        </span>
      </span>
    </AppSubNavShell>
  );
}
