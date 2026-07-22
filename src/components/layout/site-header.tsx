"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isEasyRecipeDomain } from "@/lib/easy-recipe/paths";
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
  const isExternal = href.startsWith("http");
  const onEra = isEasyRecipeDomain(getSiteNavHost());
  const isActive =
    label === "Easy Recipe App" && onEra
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

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

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
        className={cn(
          headerPositionClass,
          menuOpen ? "z-[120]" : "z-50",
          isHome ? "bg-brand-zkm dark:bg-black" : "bg-white dark:bg-black",
        )}
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
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-drawer"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="md:hidden">
          <button
            type="button"
            className="mobile-nav-backdrop fixed inset-0 z-[100] bg-black/45"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div
            id="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className={cn(
              "mobile-nav-drawer fixed inset-y-0 left-0 z-[110] flex w-[min(20rem,82vw)] flex-col border-r px-5 pt-20 pb-8 shadow-xl",
              isHome
                ? "border-black/10 bg-brand-zkm dark:border-white/10 dark:bg-black"
                : "border-black/10 bg-white dark:border-white/10 dark:bg-black",
            )}
          >
            <nav className="flex flex-col gap-5">
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
        </div>
      )}
    </>
  );
}
