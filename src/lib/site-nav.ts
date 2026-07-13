import {
  EASY_RECIPE_SITE_URL,
  HUB_HOME_URL,
  isEasyRecipeDomain,
  normalizeHost,
} from "@/lib/easy-recipe/paths";

export type SiteNavLink = {
  href: string;
  label: string;
};

export function getSiteNavLinks(host?: string): SiteNavLink[] {
  const onEra = host ? isEasyRecipeDomain(host) : false;
  const hub = HUB_HOME_URL;

  return [
    { href: EASY_RECIPE_SITE_URL, label: "Easy Recipe App" },
    { href: onEra ? `${hub}/fitness-share` : "/fitness-share", label: "Fitness Share" },
    { href: onEra ? `${hub}/health-share` : "/health-share", label: "Health Share" },
    { href: onEra ? `${hub}/sticker-packs` : "/sticker-packs", label: "Sticker Packs" },
    { href: onEra ? `${hub}/podcasts` : "/podcasts", label: "Podcasts" },
  ];
}

export function getHubHomeHref(host?: string): string {
  return host && isEasyRecipeDomain(host) ? HUB_HOME_URL : "/";
}

export function getSiteNavHost(): string {
  if (typeof window === "undefined") {
    return "";
  }

  return normalizeHost(window.location.hostname);
}

/** Default hub links (zookeeper.media paths). */
export const SITE_NAV_LINKS = getSiteNavLinks();
