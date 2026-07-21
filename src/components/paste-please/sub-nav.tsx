"use client";

import Link from "next/link";
import { AppSubNavShell } from "@/components/layout/app-sub-nav-shell";
import { APP_STORE_URL } from "@/lib/paste-please/constants";

const NAV_LINKS = [
  { href: "/paste-please#features", label: "Features" },
  { href: "/paste-please#faq", label: "FAQs" },
  { href: "/paste-please/support", label: "Support" },
  { href: "/paste-please/privacy", label: "Privacy" },
] as const;

const OUTLINE_BUTTON_CLASS =
  "inline-block shrink-0 whitespace-nowrap rounded-full border border-brand-paste px-2.5 py-1.5 text-[11px] font-semibold text-black transition-all hover:scale-110 hover:bg-brand-paste/10 sm:px-5 sm:py-2 sm:text-sm dark:border-brand-paste-light dark:text-white dark:hover:border-brand-paste-light-hover dark:hover:bg-brand-paste-light/10";

const FILLED_BUTTON_CLASS =
  "inline-block shrink-0 whitespace-nowrap rounded-full bg-brand-paste px-2.5 py-1.5 text-[11px] font-semibold text-white transition-all hover:scale-110 hover:bg-brand-paste-hover sm:px-5 sm:py-2 sm:text-sm";

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
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={FILLED_BUTTON_CLASS}
      >
        Download
      </a>
    </AppSubNavShell>
  );
}
