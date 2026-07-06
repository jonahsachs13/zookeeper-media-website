import { Activity, Eye, Menu, Zap } from "lucide-react";
import { AssetImage } from "@/components/ui/asset-image";
import { MarketingImage } from "@/components/ui/marketing-image";
import { ASSETS } from "@/lib/active-agent/constants";

const FEATURES = [
  {
    title: "Live menu bar status",
    description:
      "See what your Cursor agents are doing from the macOS menu bar — always visible, never in the way.",
    Icon: Activity,
  },
  {
    title: "Glanceable states",
    description:
      "Know instantly when an agent is thinking, searching, planning, or ready for your next move.",
    Icon: Eye,
  },
  {
    title: "Stays out of your flow",
    description:
      "No extra windows or tab switching. Active Agent lives where macOS utilities belong.",
    Icon: Menu,
  },
  {
    title: "Lightweight companion",
    description:
      "Built for speed and simplicity — a focused utility that keeps you oriented during long agent sessions.",
    Icon: Zap,
  },
] as const;

export function ActiveAgentFeatures() {
  return (
    <section id="features" className="border-t border-gray-200 py-12 sm:py-20 dark:border-zinc-800">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h2
          className="mb-8 text-center text-black transition-colors duration-300 sm:mb-12 dark:text-white"
          style={{ fontSize: "clamp(32px, 6vw, 40px)", fontWeight: 700 }}
        >
          Built for Cursor power users
        </h2>

        <div className="mb-12 sm:mb-16">
          <MarketingImage>
            <AssetImage
              src={ASSETS.menuBarGlance}
              alt="Active Agent glance view in the menu bar"
              intrinsicWidth={2707}
              intrinsicHeight={1521}
              className="w-full max-w-[720px]"
            />
          </MarketingImage>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-colors duration-300 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-agent/10">
                <Icon className="h-6 w-6 text-brand-agent" />
              </div>
              <h3
                className="mb-2 text-black transition-colors duration-300 dark:text-white"
                style={{ fontSize: "20px", fontWeight: 600 }}
              >
                {title}
              </h3>
              <p
                className="text-gray-600 transition-colors duration-300 dark:text-gray-400"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  letterSpacing: "-0.01em",
                }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
