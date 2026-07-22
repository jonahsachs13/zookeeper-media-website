import type { Metadata } from "next";
import { EasyRecipeFooter } from "@/components/easy-recipe/footer";
import { EasyRecipeSubNav } from "@/components/easy-recipe/sub-nav";
import { PRIVACY_SECTIONS } from "@/lib/easy-recipe/privacy-content";
import { withBrandSocial } from "@/lib/social-metadata";

export const metadata: Metadata = withBrandSocial("easy-recipe", {
  title: "Privacy Policy",
});

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <div className="pb-12 sm:pb-20">
        <EasyRecipeSubNav />
        <div className="mx-auto max-w-[800px] px-4 pt-8 sm:px-6">
          <h1
            className="mb-6 text-black sm:mb-8 dark:text-white"
            style={{ fontSize: "clamp(36px, 8vw, 48px)", fontWeight: 700 }}
          >
            Privacy Policy
          </h1>
          <div style={{ fontSize: "18px", lineHeight: "1.6" }}>
            {PRIVACY_SECTIONS.map((section, sectionIndex) => (
              <div key={section.heading ?? "intro"}>
                {section.heading && (
                  <h2
                    className="mt-12 mb-4 text-black dark:text-white"
                    style={{ fontSize: "32px", fontWeight: 700 }}
                  >
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className="mb-8 text-black dark:text-white"
                    style={{
                      marginBottom:
                        sectionIndex === 0 && i === section.paragraphs.length - 1
                          ? "3rem"
                          : "2rem",
                      ...("large" in para && para.large
                        ? { fontSize: "24px", fontWeight: 600 }
                        : { letterSpacing: "-0.01em" }),
                    }}
                  >
                    {para.text}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <EasyRecipeFooter showPrivacyLink={false} />
    </div>
  );
}
