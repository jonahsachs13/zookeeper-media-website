type HubPageHeroProps = {
  title: string;
  description: string;
};

export function HubPageHero({ title, description }: HubPageHeroProps) {
  return (
    <section className="pb-6 pt-6 sm:pb-10 sm:pt-10">
      <div className="mx-auto max-w-[800px] px-4 sm:px-6">
        <div className="text-center">
          <h1
            className="mb-3 text-balance text-black sm:mb-4 dark:text-white"
            style={{
              fontSize: "clamp(32px, 6vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            {title}
          </h1>
          <p
            className="mx-auto max-w-[560px] text-pretty text-black/80 dark:text-white/80"
            style={{
              fontSize: "clamp(16px, 3vw, 18px)",
              lineHeight: 1.6,
              letterSpacing: "-0.01em",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
