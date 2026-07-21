"use client";

import Link from "next/link";
import { AppSubNavShell } from "@/components/layout/app-sub-nav-shell";
import { usePastePleaseDomain } from "@/components/paste-please/domain-context";
import { APP_STORE_URL } from "@/lib/paste-please/constants";

const OUTLINE_BUTTON_CLASS =
  "inline-block shrink-0 whitespace-nowrap rounded-full border border-brand-paste px-2.5 py-1.5 text-[11px] font-semibold text-black transition-all hover:scale-110 hover:bg-brand-paste/10 sm:px-5 sm:py-2 sm:text-sm dark:border-brand-paste-light dark:text-white dark:hover:border-brand-paste-light-hover dark:hover:bg-brand-paste-light/10";

const FILLED_BUTTON_CLASS =
  "inline-block shrink-0 whitespace-nowrap rounded-full bg-brand-paste px-2.5 py-1.5 text-[11px] font-semibold text-white transition-all hover:scale-110 hover:bg-brand-paste-hover sm:px-5 sm:py-2 sm:text-sm";

type PastePleaseSubNavProps = {
  variant?: "full" | "minimal";
};

export function PastePleaseSubNav({ variant = "full" }: PastePleaseSubNavProps) {
  const { paths } = usePastePleaseDomain();

  if (variant === "minimal") {
    return null;
  }

  const navLinks = [
    { href: paths.features, label: "Features" },
    { href: paths.faq, label: "FAQs" },
    { href: paths.support, label: "Support" },
    { href: paths.privacy, label: "Privacy" },
  ] as const;

  return (
    <AppSubNavShell>
      {navLinks.map(({ href, label }) => (
        <Link key={label} href={href} className={OUTLINE_BUTTON_CLASS}>
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
