import { SiteHeader } from "@/components/layout/site-header";
import { ZkmMark } from "@/components/zookeeper/zkm-mark";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-brand-zkm">
      <SiteHeader variant="home" />
      <main className="flex min-h-screen flex-col items-center justify-center px-6 pt-14 pb-12">
        <div className="max-w-2xl text-center">
          <ZkmMark className="mx-auto mb-8 h-32 w-32 text-black sm:mb-10 sm:h-40 sm:w-40 md:h-48 md:w-48" />
          <p
            className="text-black/80"
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
    </div>
  );
}
