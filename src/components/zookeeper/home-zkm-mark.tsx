"use client";

import { useCallback, useState } from "react";
import { ZkmMark } from "@/components/zookeeper/zkm-mark";
import { cn } from "@/lib/utils";

type HomeZkmMarkProps = {
  className?: string;
};

function tapHaptic() {
  if (typeof navigator !== "undefined" && "vibrate" in navigator) {
    navigator.vibrate(12);
  }
}

export function HomeZkmMark({ className }: HomeZkmMarkProps) {
  const [pulsing, setPulsing] = useState(false);

  const handleClick = useCallback(() => {
    if (pulsing) return;
    tapHaptic();
    setPulsing(true);
  }, [pulsing]);

  return (
    <button
      type="button"
      onClick={handleClick}
      onAnimationEnd={() => setPulsing(false)}
      className="cursor-pointer border-0 bg-transparent p-0 transition-transform hover:scale-105"
      aria-label="ZooKeeper Media"
    >
      <ZkmMark className={cn(className, pulsing && "animate-logo-pulse-burst")} />
    </button>
  );
}
