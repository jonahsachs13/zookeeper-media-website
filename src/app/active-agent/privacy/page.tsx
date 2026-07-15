import { ActiveAgentFooter } from "@/components/active-agent/footer";
import { ActiveAgentSubNav } from "@/components/active-agent/sub-nav";
import { PRIVACY_SECTIONS } from "@/lib/active-agent/privacy-content";
import { withBrandSocial } from "@/lib/social-metadata";
import type { Metadata } from "next";

export const metadata: Metadata = withBrandSocial("active-agent", {
  title: "Privacy Policy",
});

export default function ActiveAgentPrivacyPage() {
  return (
    <div className="min-h-screen">
      <div className="pb-12 sm:pb-20">
        <ActiveAgentSubNav />
        <div className="mx-auto max-w-[800px] px-4 pt-8 sm:px-6">
          <h1
            className="mb-6 text-black transition-colors duration-300 sm:mb-8 dark:text-white"
            style={{ fontSize: "clamp(36px, 8vw, 48px)", fontWeight: 700 }}
          >
            Privacy Policy
          </h1>
          <div style={{ fontSize: "18px", lineHeight: "1.6" }}>
            {PRIVACY_SECTIONS.map((section) => (
              <div key={section.heading ?? "intro"}>
                {section.paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className={`text-black transition-colors duration-300 dark:text-white ${
                      section.heading
                        ? "mb-8"
                        : i === 0
                          ? "mb-8"
                          : i === section.paragraphs.length - 1
                            ? "mb-12"
                            : "mb-6"
                    }`}
                    style={{
                      ...("large" in para && para.large
                        ? { fontSize: "24px", fontWeight: 600 }
                        : { letterSpacing: "-0.01em" }),
                    }}
                  >
                    {para.text}
                  </p>
                ))}
                {section.heading && (
                  <h2
                    className="mt-12 mb-4 text-black transition-colors duration-300 dark:text-white"
                    style={{ fontSize: "32px", fontWeight: 700 }}
                  >
                    {section.heading}
                  </h2>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <ActiveAgentFooter showPrivacyLink={false} />
    </div>
  );
}
