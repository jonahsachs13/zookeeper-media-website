"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/active-agent#features", label: "Features" },
  { href: "/active-agent#faq", label: "FAQ" },
  { href: "/active-agent/privacy", label: "Privacy" },
] as const;

export function ActiveAgentSubNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 bg-white py-4">
      <div className="mx-auto flex max-w-fit flex-wrap items-center justify-center gap-x-5 gap-y-3 px-4 sm:gap-x-8">
        <div className="hidden items-center gap-6 sm:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-gray-600 transition-colors hover:text-brand-agent dark:text-gray-400 dark:hover:text-brand-agent"
            >
              {label}
            </Link>
          ))}
        </div>

        <Link
          href="/active-agent#download"
          className="hidden rounded-full bg-brand-agent px-5 py-2 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-brand-agent-hover sm:inline-block"
        >
          Download
        </Link>

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
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-2 text-sm font-medium text-black dark:text-white"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/active-agent#download"
            onClick={() => setMenuOpen(false)}
            className="rounded-full bg-brand-agent px-5 py-2 text-sm font-semibold text-white"
          >
            Download
          </Link>
        </div>
      )}
    </nav>
  );
}
