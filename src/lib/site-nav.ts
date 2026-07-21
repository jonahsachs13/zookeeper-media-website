import {
  EASY_RECIPE_SITE_URL,
  HUB_HOME_URL,
  isEasyRecipeDomain,
  normalizeHost,
} from "@/lib/easy-recipe/paths";
import {
  isPastePleaseDomain,
  PASTE_PLEASE_SITE_URL,
} from "@/lib/paste-please/paths";

export type SiteNavLink = {
  href: string;
  label: string;
};

export function getSiteNavLinks(host?: string): SiteNavLink[] {
  const onEra = host ? isEasyRecipeDomain(host) : false;
  const onPaste = host ? isPastePleaseDomain(host) : false;
  const hub = HUB_HOME_URL;
  const offHub = onEra || onPaste;

  return [
    { href: EASY_RECIPE_SITE_URL, label: "Easy Recipe App" },
    { href: offHub ? `${hub}/active-agent` : "/active-agent", label: "Active Agent" },
    {
      href: onPaste ? "/" : PASTE_PLEASE_SITE_URL,
      label: "Paste Please",
    },
    { href: offHub ? `${hub}/fitness-share` : "/fitness-share", label: "Fitness Share" },
    { href: offHub ? `${hub}/sticker-packs` : "/sticker-packs", label: "Sticker Packs" },
    { href: offHub ? `${hub}/podcasts` : "/podcasts", label: "Podcasts" },
  ];
}

export function getHubHomeHref(host?: string): string {
  if (!host) return "/";
  if (isEasyRecipeDomain(host) || isPastePleaseDomain(host)) {
    return HUB_HOME_URL;
  }
  return "/";
}

export function getSiteNavHost(): string {
  if (typeof window === "undefined") {
    return "";
  }

  return normalizeHost(window.location.hostname);
}

/** Default hub links (zookeeper.media paths). */
export const SITE_NAV_LINKS = getSiteNavLinks();
