import type { Metadata } from "next";
import { FitnessShareFooter } from "@/components/fitness-share/footer";
import { FitnessShareSubNav } from "@/components/fitness-share/sub-nav";
import { ContactForm } from "@/components/contact-form";
import { withBrandSocial } from "@/lib/social-metadata";

export const metadata: Metadata = withBrandSocial("fitness-share", {
  title: "Support",
});

export default function FitnessShareSupportPage() {
  return (
    <div className="min-h-screen">
      <div className="pb-12 sm:pb-20">
        <FitnessShareSubNav />
        <div className="mx-auto max-w-[800px] px-4 pt-8 sm:px-6">
          <p
            className="mb-8 text-black dark:text-white"
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              letterSpacing: "-0.01em",
            }}
          >
            Need help with Fitness Share App? Send us a message and we&apos;ll get
            back to you as soon as possible.
          </p>
          <ContactForm
            brand="fitness-share"
            subject="New Support Form Submission from Fitness Share"
          />
        </div>
      </div>
      <FitnessShareFooter />
    </div>
  );
}
