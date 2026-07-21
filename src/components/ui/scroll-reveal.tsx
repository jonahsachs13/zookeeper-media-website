"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type RevealVariant = "up" | "fade" | "scale" | "left" | "right";

const VARIANT_CLASS: Record<RevealVariant, string> = {
  up: "reveal-up",
  fade: "reveal-fade",
  scale: "reveal-scale",
  left: "reveal-left",
  right: "reveal-right",
};

/** Match longest default reveal in globals.css, plus buffer. */
const SETTLE_BUFFER_MS = 80;
const VARIANT_DURATION_MS: Record<RevealVariant, number> = {
  up: 850,
  fade: 900,
  scale: 800,
  left: 850,
  right: 850,
};

/** Fire once when entering view — never re-apply transforms on scroll. */
function useRevealObserver(threshold: number, rootMargin: string) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, visible]);

  return { ref, visible };
}

/** Drop leftover transforms after the reveal so Safari keeps images sharp. */
function useRevealSettle(visible: boolean, variant: RevealVariant, delay: number) {
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    if (!visible || settled) return;
    const ms = delay + VARIANT_DURATION_MS[variant] + SETTLE_BUFFER_MS;
    const timer = window.setTimeout(() => setSettled(true), ms);
    return () => window.clearTimeout(timer);
  }, [visible, variant, delay, settled]);

  return settled;
}

type RevealSectionProps = {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
};

export function RevealSection({
  children,
  className,
  variant = "up",
  delay = 0,
}: RevealSectionProps) {
  const { ref, visible } = useRevealObserver(0.12, "0px 0px -6% 0px");
  const settled = useRevealSettle(visible, variant, delay);

  return (
    <div
      ref={ref}
      className={cn(
        settled
          ? null
          : cn("reveal-section", VARIANT_CLASS[variant], visible && "is-visible"),
        className,
      )}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

type RevealItemProps = {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  style?: React.CSSProperties;
};

export function RevealItem({
  children,
  className,
  variant = "scale",
  delay = 0,
  style,
}: RevealItemProps) {
  const { ref, visible } = useRevealObserver(0.2, "0px 0px -4% 0px");
  const settled = useRevealSettle(visible, variant, delay);

  return (
    <div
      ref={ref}
      className={cn(
        settled
          ? null
          : cn("reveal-section", VARIANT_CLASS[variant], visible && "is-visible"),
        className,
      )}
      style={{ "--reveal-delay": `${delay}ms`, ...style } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
