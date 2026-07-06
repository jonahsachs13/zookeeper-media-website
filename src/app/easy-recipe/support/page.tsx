import type { Metadata } from "next";
import { EasyRecipeFooter } from "@/components/easy-recipe/footer";
import { EasyRecipeSubNav } from "@/components/easy-recipe/sub-nav";
import { SupportForm } from "@/components/easy-recipe/support-form";

export const metadata: Metadata = {
  title: "Support - Easy Recipe App",
};

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-14 pb-12 sm:pb-20">
        <EasyRecipeSubNav variant="minimal" />
        <div className="mx-auto max-w-[800px] px-4 pt-8 sm:px-6">
          <h1
            className="mb-6 text-black sm:mb-8 dark:text-white"
            style={{ fontSize: "clamp(36px, 8vw, 48px)", fontWeight: 700 }}
          >
            Support
          </h1>
          <p
            className="mb-8 text-black dark:text-white"
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              letterSpacing: "-0.01em",
            }}
          >
            Need help with Easy Recipe App? We&apos;re here to assist you. Send us a
            message and we&apos;ll get back to you as soon as possible.
          </p>
          <SupportForm />
        </div>
      </div>
      <EasyRecipeFooter showPrivacyLink={false} />
    </div>
  );
}
