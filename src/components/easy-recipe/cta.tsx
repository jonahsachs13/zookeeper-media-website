import { APP_STORE_URL } from "@/lib/easy-recipe/constants";

export function EasyRecipeCta() {
  return (
    <section className="py-12 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="text-center">
          <h2
            className="mb-4 text-black dark:text-white"
            style={{ fontSize: "clamp(32px, 6vw, 40px)", fontWeight: 700 }}
          >
            Ready to start cooking?
          </h2>
          <p
            className="mb-8 text-black dark:text-white"
            style={{
              fontSize: "clamp(16px, 3vw, 18px)",
              lineHeight: "1.6",
              letterSpacing: "-0.01em",
            }}
          >
            Join thousands of home cooks using Easy Recipe App every day.
          </p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-brand-orange px-10 py-4 text-white transition-all hover:scale-105 hover:bg-brand-orange-hover"
            style={{ fontSize: "18px", fontWeight: 600 }}
          >
            Download Now
          </a>
        </div>
      </div>
    </section>
  );
}
