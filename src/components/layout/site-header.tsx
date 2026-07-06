"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ZkmLogo } from "@/components/zookeeper/zkm-logo";
import { ThemeToggle } from "./theme-toggle";

const NAV_LINKS = [
  { href: "/podcasts", label: "Podcasts" },
  { href: "/easy-recipe", label: "Easy Recipe App" },
  { href: "/active-agent", label: "Active Agent" },
  { href: "/health-share", label: "Health Share" },
] as const;

type SiteHeaderProps = {
  variant?: "default" | "home";
};

function NavLink({
  href,
  label,
  variant,
  onClick,
}: {
  href: string;
  label: string;
  variant: "default" | "home";
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  const homeStyles = isActive
    ? "font-semibold text-black"
    : "text-black/70 hover:text-black";
  const defaultStyles = isActive
    ? "font-semibold text-black dark:text-white"
    : "text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-sm transition-colors ${variant === "home" ? homeStyles : defaultStyles}`}
    >
      {label}
    </Link>
  );
}

export function SiteHeader({ variant = "default" }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = variant === "home";

  return (
    <>
      <header
        className={
          isHome
            ? "fixed top-0 right-0 left-0 z-50 border-b border-black/10 bg-brand-zkm"
            : "fixed top-0 right-0 left-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-sm dark:border-white/10 dark:bg-black/95"
        }
      >
        <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6">
          <Link href="/" className="flex flex-shrink-0 items-center transition-opacity hover:opacity-80">
            <ZkmLogo
              className={`h-8 w-auto sm:h-9 ${isHome ? "text-black" : "text-black dark:text-white"}`}
            />
          </Link>

          <nav className="hidden items-center gap-5 md:flex">
            {NAV_LINKS.map((item) => (
              <NavLink key={item.href} {...item} variant={variant} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle onYellow={isHome} />
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className={`rounded-lg p-2 transition-colors md:hidden ${
                isHome
                  ? "text-black/70 hover:bg-black/5 hover:text-black"
                  : "text-gray-600 hover:bg-black/5 dark:text-gray-400 dark:hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          className={`fixed top-14 right-0 left-0 z-40 border-b px-4 py-4 md:hidden ${
            isHome
              ? "border-black/10 bg-brand-zkm"
              : "border-black/10 bg-white dark:border-white/10 dark:bg-black"
          }`}
        >
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.href}
                {...item}
                variant={variant}
                onClick={() => setMenuOpen(false)}
              />
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
