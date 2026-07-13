import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { EasyRecipeFooter } from "@/components/easy-recipe/footer";
import { EasyRecipeSubNav } from "@/components/easy-recipe/sub-nav";
import { withBrandSocial } from "@/lib/social-metadata";

export const metadata: Metadata = withBrandSocial("easy-recipe", {
  title: "Support",
});

export default function EasyRecipeSupportPage() {
  return (
    <div className="min-h-screen">
      <div className="pb-12 sm:pb-20">
        <EasyRecipeSubNav />
        <div className="mx-auto max-w-[800px] px-4 pt-8 sm:px-6">
          <p
            className="mb-8 text-black dark:text-white"
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              letterSpacing: "-0.01em",
            }}
          >
            Have a question about Easy Recipe App? Send us a message and we&apos;ll
            get back to you as soon as possible.
          </p>
          <ContactForm
            brand="easy-recipe"
            subject="New Support Form Submission from Easy Recipe App"
          />
        </div>
      </div>
      <EasyRecipeFooter showPrivacyLink={false} />
    </div>
  );
}
