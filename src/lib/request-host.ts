import { headers } from "next/headers";
import { normalizeHost } from "@/lib/easy-recipe/paths";

/** Hostname of the incoming request (respects proxies / Vercel). */
export async function getRequestHost(): Promise<string> {
  const headerList = await headers();
  const raw =
    headerList.get("x-site-host") ??
    headerList.get("x-forwarded-host") ??
    headerList.get("host") ??
    "zookeeper.media";

  return normalizeHost(raw);
}
