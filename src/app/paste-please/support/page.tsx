import type { Metadata } from "next";
import { PastePleaseFooter } from "@/components/paste-please/footer";
import { PastePleaseSubNav } from "@/components/paste-please/sub-nav";
import { ContactForm } from "@/components/contact-form";
import { withBrandSocial } from "@/lib/social-metadata";

export const metadata: Metadata = withBrandSocial("paste-please", {
  title: "Support",
});

export default function PastePleaseSupportPage() {
  return (
    <div className="min-h-screen">
      <div className="pb-12 sm:pb-20">
        <PastePleaseSubNav />
        <div className="mx-auto max-w-[800px] px-4 pt-8 sm:px-6">
          <p
            className="mb-8 text-black dark:text-white"
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              letterSpacing: "-0.01em",
            }}
          >
            Need help with Paste Please? Send us a message and we&apos;ll get back
            to you as soon as possible.
          </p>
          <ContactForm
            brand="paste-please"
            subject="New Support Form Submission from Paste Please"
          />
        </div>
      </div>
      <PastePleaseFooter />
    </div>
  );
}
