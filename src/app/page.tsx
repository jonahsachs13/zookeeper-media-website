import { SiteHeader } from "@/components/layout/site-header";
import { HomePageShell } from "@/components/zookeeper/home-page-shell";
import { HomeZkmMark } from "@/components/zookeeper/home-zkm-mark";

export default function HomePage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: "document.documentElement.classList.add('home-page');",
        }}
      />
      <HomePageShell>
      <SiteHeader variant="home" />
      <main className="flex flex-1 flex-col items-center justify-center px-6 pt-14 pb-12">
        <div className="max-w-2xl text-center">
          <HomeZkmMark className="mx-auto mb-8 h-32 w-32 text-black sm:mb-10 sm:h-40 sm:w-40 md:h-48 md:w-48 dark:text-brand-zkm" />
          <p
            className="text-black/80 dark:text-brand-zkm/80"
            style={{
              fontSize: "clamp(18px, 3.5vw, 24px)",
              lineHeight: 1.6,
            }}
          >
            An apps and podcasts company. We build thoughtful software and produce
            shows that help people in everyday life.
          </p>
        </div>
      </main>
      </HomePageShell>
    </>
  );
}
