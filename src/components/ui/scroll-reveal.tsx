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

function useRevealObserver(threshold: number, rootMargin: string) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, visible };
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

  return (
    <div
      ref={ref}
      className={cn("reveal-section", VARIANT_CLASS[variant], visible && "is-visible", className)}
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

  return (
    <div
      ref={ref}
      className={cn("reveal-section", VARIANT_CLASS[variant], visible && "is-visible", className)}
      style={{ "--reveal-delay": `${delay}ms`, ...style } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
