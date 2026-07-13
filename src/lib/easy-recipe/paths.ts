export const EASY_RECIPE_HOSTS = new Set(["easyrecipeapp.com", "www.easyrecipeapp.com"]);

export const EASY_RECIPE_SITE_URL = "https://easyrecipeapp.com";

export function normalizeHost(host: string): string {
  const first = host.split(",")[0]?.trim() ?? host;
  return (first.split(":")[0]?.trim() ?? first).toLowerCase();
}

export function isEasyRecipeDomain(host: string) {
  return EASY_RECIPE_HOSTS.has(normalizeHost(host));
}

export function easyRecipePaths(host: string) {
  const onEra = isEasyRecipeDomain(host);

  return {
    home: onEra ? "/" : "/easy-recipe",
    support: onEra ? "/support" : "/easy-recipe/support",
    privacy: onEra ? "/privacy" : "/easy-recipe/privacy",
    features: onEra ? "/#features" : "/easy-recipe#features",
    faq: onEra ? "/#faq" : "/easy-recipe#faq",
  } as const;
}

export const HUB_HOME_URL = "https://zookeeper.media";
