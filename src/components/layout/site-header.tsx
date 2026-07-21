"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isEasyRecipeDomain } from "@/lib/easy-recipe/paths";
import { isPastePleaseDomain } from "@/lib/paste-please/paths";
import {
  getHubHomeHref,
  getSiteNavHost,
  getSiteNavLinks,
  type SiteNavLink,
} from "@/lib/site-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { ZkmLogo } from "@/components/zookeeper/zkm-logo";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  variant?: "default" | "home";
  /** On app pages: header scrolls away; app sub-nav sticks instead of staying fixed. */
  position?: "fixed" | "static";
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
  const host = getSiteNavHost();
  const isExternal = href.startsWith("http");
  const onEra = isEasyRecipeDomain(host);
  const onPaste = isPastePleaseDomain(host);
  const isActive =
    (label === "Easy Recipe App" && onEra) ||
    (label === "Paste Please" && onPaste)
      ? true
      : !isExternal && (pathname === href || (href !== "/" && pathname.startsWith(href)));

  const homeStyles = isActive
    ? "font-semibold text-black dark:text-brand-zkm"
    : "text-black/70 hover:text-black dark:text-brand-zkm/70 dark:hover:text-brand-zkm";
  const defaultStyles = isActive
    ? "font-semibold text-black dark:text-white"
    : "text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white";

  const className = cn(
    "inline-block text-sm transition-colors md:transition-all md:hover:scale-110",
    variant === "home" ? homeStyles : defaultStyles,
  );

  if (isExternal) {
    return (
      <a href={href} onClick={onClick} className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={className}>
      {label}
    </Link>
  );
}

export function SiteHeader({ variant = "default", position = "fixed" }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoPulsing, setLogoPulsing] = useState(false);
  const [navLinks, setNavLinks] = useState<SiteNavLink[]>(() => getSiteNavLinks());
  const [hubHomeHref, setHubHomeHref] = useState("/");
  const isHome = variant === "home";
  const isFixed = position === "fixed";

  useEffect(() => {
    const host = getSiteNavHost();
    setNavLinks(getSiteNavLinks(host));
    setHubHomeHref(getHubHomeHref(host));
  }, []);

  const headerPositionClass = isFixed
    ? "fixed top-0 right-0 left-0"
    : "relative";

  const logoHref = isHome ? "/" : hubHomeHref;
  const logoIsExternal = logoHref.startsWith("http");

  const logo = (
    <ZkmLogo
      onAnimationEnd={() => setLogoPulsing(false)}
      className={cn(
        "h-8 w-auto sm:h-9",
        isHome ? "text-black dark:text-brand-zkm" : "text-black dark:text-white",
        logoPulsing && "animate-logo-pulse-burst",
      )}
    />
  );

  return (
    <>
      <header
        className={
          isHome
            ? `${headerPositionClass} z-50 bg-brand-zkm dark:bg-black`
            : `${headerPositionClass} z-50 bg-white dark:bg-black`
        }
      >
        <div className="flex h-14 w-full items-center px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
          {logoIsExternal ? (
            <a
              href={logoHref}
              className="flex flex-shrink-0 items-center transition-transform hover:scale-110"
            >
              {logo}
            </a>
          ) : (
            <Link
              href={logoHref}
              onClick={(event) => {
                if (!isHome || logoPulsing) return;
                event.preventDefault();
                setLogoPulsing(true);
              }}
              className="flex flex-shrink-0 items-center transition-transform hover:scale-110"
            >
              {logo}
            </Link>
          )}

          <nav className="ml-6 hidden items-center gap-6 md:flex lg:ml-8 lg:gap-8 xl:gap-10">
            {navLinks.map((item) => (
              <NavLink key={item.href} {...item} variant={variant} />
            ))}
          </nav>

          <div className="ml-auto flex flex-shrink-0 items-center gap-2">
            <ThemeToggle onYellow={isHome} />
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className={
                isHome
                  ? "rounded-full bg-black/10 p-2 text-black transition-transform hover:scale-110 md:hidden dark:bg-brand-zkm/10 dark:text-brand-zkm"
                  : "rounded-full bg-gray-100 p-2 text-gray-600 transition-transform hover:scale-110 md:hidden dark:bg-zinc-800 dark:text-gray-400"
              }
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          className={cn(
            "fixed inset-x-0 top-14 z-[55] border-b px-3 py-4 md:hidden",
            isHome
              ? "border-black/10 bg-brand-zkm dark:border-white/10 dark:bg-black"
              : "border-black/10 bg-white dark:border-white/10 dark:bg-black",
          )}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((item) => (
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
