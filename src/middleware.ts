import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { EASY_RECIPE_SITE_URL } from "@/lib/easy-recipe/paths";
import { PASTE_PLEASE_SITE_URL } from "@/lib/paste-please/paths";

const EASY_RECIPE_HOSTS = new Set(["easyrecipeapp.com", "www.easyrecipeapp.com"]);
const PASTE_PLEASE_HOSTS = new Set(["get.pp.zookeeper.media"]);
const HUB_HOSTS = new Set(["zookeeper.media", "www.zookeeper.media"]);
const HUB_WWW_HOST = "www.zookeeper.media";
const ERA_WWW_HOST = "www.easyrecipeapp.com";

/** Clean URLs on branded domains → internal app routes */
const APP_PAGE_REWRITES = new Set(["/privacy", "/support"]);

function withSiteHost(request: NextRequest, host: string, init?: ResponseInit) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-site-host", host);

  return NextResponse.next({
    ...init,
    request: { headers: requestHeaders },
  });
}

function rewriteWithSiteHost(request: NextRequest, pathname: string, host: string) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-site-host", host);

  return NextResponse.rewrite(new URL(pathname, request.url), {
    request: { headers: requestHeaders },
  });
}

function redirectEasyRecipeOnHub(pathname: string, request: NextRequest) {
  if (pathname === "/easy-recipe" || pathname === "/easy-recipe/") {
    return NextResponse.redirect(EASY_RECIPE_SITE_URL);
  }

  if (pathname.startsWith("/easy-recipe/")) {
    const eraPath = pathname.slice("/easy-recipe".length);
    return NextResponse.redirect(`${EASY_RECIPE_SITE_URL}${eraPath}`);
  }

  return null;
}

function redirectPastePleaseOnHub(pathname: string, request: NextRequest) {
  if (pathname === "/paste-please" || pathname === "/paste-please/") {
    return NextResponse.redirect(PASTE_PLEASE_SITE_URL);
  }

  if (pathname.startsWith("/paste-please/")) {
    const pastePath = pathname.slice("/paste-please".length);
    return NextResponse.redirect(`${PASTE_PLEASE_SITE_URL}${pastePath}`);
  }

  return null;
}

function handleBrandedAppDomain(
  request: NextRequest,
  host: string,
  appPrefix: "/easy-recipe" | "/paste-please",
) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    /\.[a-z0-9]+$/i.test(pathname)
  ) {
    return withSiteHost(request, host);
  }

  if (pathname === appPrefix || pathname === `${appPrefix}/`) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname === "/") {
    return rewriteWithSiteHost(request, appPrefix, host);
  }

  if (pathname === "/contact" || pathname === "/contact/") {
    return NextResponse.redirect(new URL("/support", request.url));
  }

  if (APP_PAGE_REWRITES.has(pathname)) {
    return rewriteWithSiteHost(request, `${appPrefix}${pathname}`, host);
  }

  if (
    pathname.startsWith("/podcasts") ||
    pathname.startsWith("/sticker-packs") ||
    pathname.startsWith("/active-agent") ||
    pathname.startsWith("/fitness-share") ||
    pathname.startsWith("/health-share") ||
    pathname.startsWith("/easy-recipe") ||
    pathname.startsWith("/paste-please")
  ) {
    // Stay on the branded home when another product path is hit.
    if (pathname.startsWith(appPrefix)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.redirect(new URL("/", request.url));
  }

  return withSiteHost(request, host);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.nextUrl.hostname.toLowerCase();

  if (host === HUB_WWW_HOST) {
    const url = request.nextUrl.clone();
    url.hostname = "zookeeper.media";
    return NextResponse.redirect(url);
  }

  if (host === ERA_WWW_HOST) {
    const url = request.nextUrl.clone();
    url.hostname = "easyrecipeapp.com";
    return NextResponse.redirect(url);
  }

  if (HUB_HOSTS.has(host)) {
    const eraRedirect = redirectEasyRecipeOnHub(pathname, request);
    if (eraRedirect) {
      return eraRedirect;
    }

    const pasteRedirect = redirectPastePleaseOnHub(pathname, request);
    if (pasteRedirect) {
      return pasteRedirect;
    }
  }

  if (pathname === "/easy-recipe/contact" || pathname === "/easy-recipe/contact/") {
    return NextResponse.redirect(new URL("/easy-recipe/support", request.url));
  }

  if (
    pathname === "/active-agent/temp-yak-mail" ||
    pathname === "/active-agent/temp-yak-mail/"
  ) {
    return NextResponse.redirect(new URL("/active-agent/support", request.url));
  }

  if (
    pathname === "/fitness-share/temp-yak-mail" ||
    pathname === "/fitness-share/temp-yak-mail/"
  ) {
    return NextResponse.redirect(new URL("/fitness-share/support", request.url));
  }

  if (pathname === "/health-share" || pathname.startsWith("/health-share/")) {
    const nextPath =
      pathname === "/health-share" || pathname === "/health-share/"
        ? "/fitness-share"
        : pathname.replace(/^\/health-share/, "/fitness-share");
    return NextResponse.redirect(new URL(nextPath, request.url));
  }

  if (pathname === "/podcasts/v2" || pathname === "/podcasts/v2/") {
    return NextResponse.redirect(new URL("/podcasts", request.url));
  }

  if (EASY_RECIPE_HOSTS.has(host)) {
    return handleBrandedAppDomain(request, host, "/easy-recipe");
  }

  if (PASTE_PLEASE_HOSTS.has(host)) {
    return handleBrandedAppDomain(request, host, "/paste-please");
  }

  return withSiteHost(request, host);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
