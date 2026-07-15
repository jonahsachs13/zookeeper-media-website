import type { Metadata } from "next";
import { ActiveAgentFooter } from "@/components/active-agent/footer";
import { ActiveAgentSubNav } from "@/components/active-agent/sub-nav";
import { ContactForm } from "@/components/contact-form";
import { withBrandSocial } from "@/lib/social-metadata";

export const metadata: Metadata = withBrandSocial("active-agent", {
  title: "Support",
});

export default function ActiveAgentSupportPage() {
  return (
    <div className="min-h-screen">
      <div className="pb-12 sm:pb-20">
        <ActiveAgentSubNav />
        <div className="mx-auto max-w-[800px] px-4 pt-8 sm:px-6">
          <p
            className="mb-8 text-black dark:text-white"
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              letterSpacing: "-0.01em",
            }}
          >
            Need help with Active Agent? Send us a message and we&apos;ll get back
            to you as soon as possible.
          </p>
          <ContactForm
            brand="active-agent"
            subject="New Support Form Submission from Active Agent"
          />
        </div>
      </div>
      <ActiveAgentFooter />
    </div>
  );
}
