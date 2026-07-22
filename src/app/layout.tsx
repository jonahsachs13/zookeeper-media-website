import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { HapticsProvider } from "@/providers/haptics-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { getMetadataBase } from "@/lib/metadata-base";
import { brandSocialMetadata } from "@/lib/social-metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const DESCRIPTION =
  "Thoughtful apps and soothing podcasts from ZooKeeper Media.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: await getMetadataBase(),
    title: "ZooKeeper Media",
    description: DESCRIPTION,
    icons: {
      icon: "/favicon.png",
      apple: "/favicon.png",
    },
    ...brandSocialMetadata("zkm", {
      title: "ZooKeeper Media",
      description: DESCRIPTION,
    }),
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-black antialiased dark:text-white`}
      >
        <ThemeProvider>
          <HapticsProvider>{children}</HapticsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
