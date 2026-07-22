"use client";

import Link from "next/link";
import { AppSubNavShell } from "@/components/layout/app-sub-nav-shell";
import { useEasyRecipeDomain } from "@/components/easy-recipe/domain-context";
import { APP_STORE_URL } from "@/lib/easy-recipe/constants";

const OUTLINE_BUTTON_CLASS =
  "inline-block shrink-0 whitespace-nowrap rounded-full border border-brand-orange px-2.5 py-1.5 text-[11px] font-medium text-black transition-all hover:scale-110 hover:bg-brand-orange/10 sm:px-5 sm:py-2 sm:text-sm dark:border-brand-orange dark:text-white dark:hover:bg-brand-orange/10";

const FILLED_BUTTON_CLASS =
  "inline-block shrink-0 whitespace-nowrap rounded-full bg-brand-orange px-2.5 py-1.5 text-[11px] font-medium text-white transition-all hover:scale-110 hover:bg-brand-orange-hover sm:px-5 sm:py-2 sm:text-sm";

export function EasyRecipeSubNav() {
  const { paths } = useEasyRecipeDomain();

  const navLinks = [
    { href: paths.features, label: "Features" },
    { href: paths.faq, label: "FAQs" },
    { href: paths.support, label: "Support" },
    { href: paths.privacy, label: "Privacy" },
  ] as const;

  return (
    <AppSubNavShell>
      {navLinks.map((item) => (
        <Link key={item.label} href={item.href} className={OUTLINE_BUTTON_CLASS}>
          {item.label}
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
