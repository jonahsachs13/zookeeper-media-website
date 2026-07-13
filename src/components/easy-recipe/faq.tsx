"use client";

import { FaqAccordion } from "@/components/ui/faq-accordion";
import { RevealSection } from "@/components/ui/scroll-reveal";
import { FAQ_ITEMS } from "@/lib/easy-recipe/faq";

export function EasyRecipeFaq() {
  return (
    <section id="faq" className="scroll-mt-20 py-12 sm:py-20">
      <RevealSection className="mx-auto max-w-[800px] px-4 sm:px-6" variant="fade" delay={80}>
        <h2
          className="mb-8 text-center text-black sm:mb-12 dark:text-white"
          style={{ fontSize: "clamp(32px, 6vw, 40px)", fontWeight: 700 }}
        >
          Frequently Asked Questions
        </h2>
        <FaqAccordion items={FAQ_ITEMS} accent="orange" />
      </RevealSection>
    </section>
  );
}
