import { SiteHeader } from "@/components/layout/site-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Share - ZooKeeper Media",
  description: "Health Share — coming soon from ZooKeeper Media.",
};

export default function HealthSharePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center px-6 pt-14">
        <div className="max-w-lg text-center">
          <h1
            className="mb-4 text-black dark:text-white"
            style={{ fontSize: "clamp(36px, 7vw, 48px)", fontWeight: 700 }}
          >
            Health Share
          </h1>
          <p
            className="text-gray-600 dark:text-gray-400"
            style={{ fontSize: "clamp(18px, 3vw, 22px)", lineHeight: 1.6 }}
          >
            Coming soon.
          </p>
        </div>
      </main>
    </div>
  );
}
