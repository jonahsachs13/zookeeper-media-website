import { DOWNLOAD_URL } from "@/lib/active-agent/constants";

export function ActiveAgentCta() {
  return (
    <section id="download" className="border-t border-gray-200 py-12 sm:py-20 dark:border-zinc-800">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="text-center">
          <h2
            className="mb-4 text-black transition-colors duration-300 dark:text-white"
            style={{ fontSize: "clamp(32px, 6vw, 40px)", fontWeight: 700 }}
          >
            Ready to stay in the loop?
          </h2>
          <p
            className="mb-8 text-black transition-colors duration-300 dark:text-white"
            style={{
              fontSize: "clamp(16px, 3vw, 18px)",
              lineHeight: "1.6",
              letterSpacing: "-0.01em",
            }}
          >
            Download Active Agent for macOS and keep Cursor agent status one glance
            away.
          </p>
          <a
            href={DOWNLOAD_URL}
            className="inline-block rounded-full bg-brand-agent px-10 py-4 text-white transition-all hover:scale-105 hover:bg-brand-agent-hover"
            style={{ fontSize: "18px", fontWeight: 600 }}
          >
            Download for Mac
          </a>
        </div>
      </div>
    </section>
  );
}
