"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/active-agent/faq";

export function ActiveAgentFaq() {
  return (
    <section id="faq" className="border-t border-gray-200 py-12 sm:py-20 dark:border-zinc-800">
      <div className="mx-auto max-w-[800px] px-4 sm:px-6">
        <h2
          className="mb-8 text-center text-black transition-colors duration-300 sm:mb-12 dark:text-white"
          style={{ fontSize: "clamp(32px, 6vw, 40px)", fontWeight: 700 }}
        >
          Frequently Asked Questions
        </h2>
        <Accordion.Root type="single" collapsible className="space-y-3">
          {FAQ_ITEMS.map((item, index) => (
            <Accordion.Item
              key={item.question}
              value={`item-${index}`}
              className="overflow-hidden rounded-lg border border-gray-400 bg-gray-100 transition-colors duration-300 dark:border-zinc-700 dark:bg-zinc-900"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between px-6 py-4 text-left">
                  <span
                    className="pr-4 text-black transition-colors duration-300 dark:text-white"
                    style={{ fontSize: "16px", fontWeight: 600 }}
                  >
                    {item.question}
                  </span>
                  <ChevronDown className="h-5 w-5 flex-shrink-0 text-brand-agent transition-all duration-300 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div
                  className="px-6 pb-4 whitespace-pre-line text-black transition-colors duration-300 dark:text-white"
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.6",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
