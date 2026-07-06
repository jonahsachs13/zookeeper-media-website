import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const EASY_RECIPE_HOSTS = new Set(["easyrecipeapp.com", "www.easyrecipeapp.com"]);

const EASY_RECIPE_REWRITES = new Set(["/privacy", "/support"]);

export function middleware(request: NextRequest) {
  const host = request.nextUrl.hostname.toLowerCase();

  if (!EASY_RECIPE_HOSTS.has(host)) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    /\.[a-z0-9]+$/i.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (pathname === "/easy-recipe" || pathname === "/easy-recipe/") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname.startsWith("/easy-recipe/")) {
    const cleanPath = pathname.slice("/easy-recipe".length) || "/";
    return NextResponse.redirect(new URL(cleanPath, request.url));
  }

  if (pathname === "/") {
    return NextResponse.rewrite(new URL("/easy-recipe", request.url));
  }

  if (EASY_RECIPE_REWRITES.has(pathname)) {
    return NextResponse.rewrite(new URL(`/easy-recipe${pathname}`, request.url));
  }

  if (
    pathname.startsWith("/podcasts") ||
    pathname.startsWith("/active-agent") ||
    pathname.startsWith("/health-share")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
