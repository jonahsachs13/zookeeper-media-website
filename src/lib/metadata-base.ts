import { headers } from "next/headers";
import { getRequestHost } from "@/lib/request-host";

/** Resolves OG image URLs against the host actually serving the page. */
export async function getMetadataBase(): Promise<URL> {
  const headerList = await headers();
  const host = await getRequestHost();
  const protocol = headerList.get("x-forwarded-proto") ?? "https";

  return new URL(`${protocol}://${host}`);
}
