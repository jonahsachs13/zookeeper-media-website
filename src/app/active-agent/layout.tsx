import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Active Agent - Live Cursor agent status in your menu bar.",
  description:
    "Active Agent is a macOS menu bar app that shows live status for your Cursor AI agents — thinking, searching, planning, and more.",
  icons: {
    icon: "/active-agent/favicon.png",
    apple: "/active-agent/favicon.png",
  },
  openGraph: {
    title: "Active Agent",
    description:
      "Live Cursor agent status in your menu bar. See what your agents are doing without leaving your flow.",
    type: "website",
    images: [
      {
        url: "/active-agent/og-image.png",
        width: 1200,
        height: 630,
        alt: "Active Agent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Active Agent",
    description:
      "Live Cursor agent status in your menu bar. See what your agents are doing without leaving your flow.",
    images: ["/active-agent/og-image.png"],
  },
};

export default function ActiveAgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
}
