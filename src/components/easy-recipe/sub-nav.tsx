"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { APP_STORE_URL } from "@/lib/easy-recipe/constants";

type EasyRecipeSubNavProps = {
  variant?: "full" | "minimal";
};

const NAV_LINKS = [
  { href: "/easy-recipe#features", label: "Features" },
  { href: "/easy-recipe#faq", label: "FAQ" },
  { href: "/easy-recipe/support", label: "Support" },
] as const;

export function EasyRecipeSubNav({ variant = "full" }: EasyRecipeSubNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  if (variant === "minimal") {
    return null;
  }

  return (
    <nav className="border-b border-gray-200 bg-white py-4">
      <div className="mx-auto flex max-w-fit flex-wrap items-center justify-center gap-x-5 gap-y-3 px-4 sm:gap-x-8">
        <div className="hidden items-center gap-6 sm:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-600 transition-colors hover:text-brand-orange dark:text-gray-400 dark:hover:text-brand-orange"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-brand-orange px-5 py-2 text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-brand-orange-hover sm:inline-block"
        >
          Download
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-black/5 sm:hidden dark:text-gray-400 dark:hover:bg-white/10"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="mt-3 flex flex-col items-center gap-2 border-t border-gray-100 pt-3 sm:hidden dark:border-zinc-800">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-2 text-sm font-medium text-black dark:text-white"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-orange px-5 py-2 text-sm font-medium text-white"
          >
            Download
          </a>
        </div>
      )}
    </nav>
  );
}
