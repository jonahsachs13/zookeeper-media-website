"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type ThemeToggleProps = {
  onYellow?: boolean;
};

/** Cycle: system (device) → light → dark → system */
function nextTheme(theme: string | undefined): "system" | "light" | "dark" {
  if (theme === "light") return "dark";
  if (theme === "dark") return "system";
  return "light";
}

export function ThemeToggle({ onYellow = false }: ThemeToggleProps) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const active = mounted ? (theme ?? "system") : "system";
  const resolved = mounted ? resolvedTheme : undefined;

  const label =
    active === "system"
      ? "Theme: system (follows device). Click for light."
      : active === "light"
        ? "Theme: light. Click for dark."
        : "Theme: dark. Click for system.";

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme(theme))}
      className={
        onYellow
          ? "rounded-full bg-black/10 p-2 text-black transition-transform hover:scale-110 dark:bg-brand-zkm/10 dark:text-brand-zkm"
          : "rounded-full bg-gray-100 p-2 text-gray-600 transition-transform hover:scale-110 dark:bg-zinc-800 dark:text-yellow-400"
      }
      aria-label={label}
      title={label}
    >
      {!mounted ? (
        <Monitor className="h-4 w-4" />
      ) : active === "system" ? (
        <Monitor className="h-4 w-4" />
      ) : resolved === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
