export const PASTE_PLEASE_HOSTS = new Set(["get.pp.zookeeper.media"]);

export const PASTE_PLEASE_SITE_URL = "https://get.pp.zookeeper.media";

export function normalizePasteHost(host: string): string {
  const first = host.split(",")[0]?.trim() ?? host;
  return (first.split(":")[0]?.trim() ?? first).toLowerCase();
}

export function isPastePleaseDomain(host: string) {
  return PASTE_PLEASE_HOSTS.has(normalizePasteHost(host));
}

export function pastePleasePaths(host: string) {
  const onPasteDomain = isPastePleaseDomain(host);

  return {
    home: onPasteDomain ? "/" : "/paste-please",
    support: onPasteDomain ? "/support" : "/paste-please/support",
    privacy: onPasteDomain ? "/privacy" : "/paste-please/privacy",
    features: onPasteDomain ? "/#features" : "/paste-please#features",
    faq: onPasteDomain ? "/#faq" : "/paste-please#faq",
  } as const;
}
