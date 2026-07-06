"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

type ThemeToggleProps = {
  onYellow?: boolean;
};

export function ThemeToggle({ onYellow = false }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={
        onYellow
          ? "rounded-full bg-black/10 p-2 text-black transition-transform hover:scale-110"
          : "rounded-full bg-gray-100 p-2 text-gray-600 transition-transform hover:scale-110 dark:bg-zinc-800 dark:text-yellow-400"
      }
      aria-label="Toggle dark mode"
    >
      <Sun className="hidden h-4 w-4 dark:block" />
      <Moon className="h-4 w-4 dark:hidden" />
    </button>
  );
}
