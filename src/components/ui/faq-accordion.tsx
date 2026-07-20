"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: readonly FaqItem[];
  accent?: "orange" | "agent" | "paste" | "fitness";
};

const accentStyles = {
  orange: {
    icon: "text-brand-orange",
    iconBgOpen: "group-data-[state=open]:bg-brand-orange/15",
    triggerOpen: "data-[state=open]:bg-brand-orange/[0.04]",
  },
  agent: {
    icon: "text-brand-agent dark:text-brand-agent-light",
    iconBgOpen:
      "group-data-[state=open]:bg-brand-agent/15 dark:group-data-[state=open]:bg-brand-agent-light/15",
    triggerOpen:
      "data-[state=open]:bg-brand-agent/[0.04] dark:data-[state=open]:bg-brand-agent-light/[0.06]",
  },
  paste: {
    icon: "text-brand-paste dark:text-brand-paste-light",
    iconBgOpen:
      "group-data-[state=open]:bg-brand-paste/15 dark:group-data-[state=open]:bg-brand-paste-light/15",
    triggerOpen:
      "data-[state=open]:bg-brand-paste/[0.04] dark:data-[state=open]:bg-brand-paste-light/[0.06]",
  },
  fitness: {
    icon: "text-brand-fitness dark:text-brand-fitness-light",
    iconBgOpen:
      "group-data-[state=open]:bg-brand-fitness/15 dark:group-data-[state=open]:bg-brand-fitness-light/15",
    triggerOpen:
      "data-[state=open]:bg-brand-fitness/[0.04] dark:data-[state=open]:bg-brand-fitness-light/[0.06]",
  },
};

export function FaqAccordion({ items, accent = "orange" }: FaqAccordionProps) {
  const styles = accentStyles[accent];

  return (
    <Accordion.Root
      type="single"
      collapsible
      className="overflow-hidden rounded-2xl border border-gray-200/90 bg-white dark:border-zinc-800 dark:bg-zinc-950"
    >
      {items.map((item, index) => (
        <Accordion.Item
          key={item.question}
          value={`item-${index}`}
          className="border-b border-gray-100 last:border-b-0 dark:border-zinc-800/80"
        >
          <Accordion.Header>
            <Accordion.Trigger
              className={cn(
                "group flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-200 sm:px-6",
                "hover:bg-gray-50/80 dark:hover:bg-zinc-900/60",
                styles.triggerOpen,
              )}
            >
              <span className="text-[15px] leading-snug font-semibold text-black sm:text-base dark:text-white">
                {item.question}
              </span>
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 transition-colors duration-200 dark:bg-zinc-800",
                  styles.iconBgOpen,
                )}
              >
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180",
                    styles.icon,
                  )}
                />
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="px-5 pb-5 text-[15px] leading-relaxed tracking-tight whitespace-pre-line text-gray-600 sm:px-6 sm:pb-6 dark:text-gray-300">
              {item.answer}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
