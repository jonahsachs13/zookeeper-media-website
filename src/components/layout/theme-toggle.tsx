"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, type SVGProps } from "react";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  onYellow?: boolean;
};

type ThemeValue = "light" | "dark" | "system";

const THEMES: { value: ThemeValue; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
];

/** SF Symbol: circle.lefthalf.filled — Apple’s Appearance (light / dark) glyph */
function CircleLeftHalfFilled({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 3a9 9 0 0 0 0 18V3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ThemeIcon({ value, className }: { value: ThemeValue; className?: string }) {
  if (value === "light") return <Sun className={className} />;
  if (value === "dark") return <Moon className={className} />;
  return <CircleLeftHalfFilled className={className} />;
}

export function ThemeToggle({ onYellow = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const active: ThemeValue = mounted
    ? theme === "light" || theme === "dark"
      ? theme
      : "system"
    : "system";

  return (
    <div
      role="group"
      aria-label="Color theme"
      className={cn(
        "inline-flex items-center rounded-full p-0.5",
        onYellow
          ? "bg-black/10 dark:bg-brand-zkm/10"
          : "bg-gray-100 dark:bg-zinc-800",
      )}
    >
      {THEMES.map(({ value, label }) => {
        const isActive = mounted && active === value;
        return (
          <button
            key={value}
            type="button"
            onClick={() => setTheme(value)}
            aria-label={`${label} theme`}
            aria-pressed={isActive}
            title={label}
            className={cn(
              "rounded-full p-1.5 transition-colors",
              onYellow
                ? isActive
                  ? "bg-black text-brand-zkm dark:bg-brand-zkm dark:text-black"
                  : "text-black/55 hover:text-black dark:text-brand-zkm/55 dark:hover:text-brand-zkm"
                : isActive
                  ? "bg-white text-black shadow-sm dark:bg-zinc-950 dark:text-yellow-400"
                  : "text-gray-500 hover:text-gray-800 dark:text-zinc-400 dark:hover:text-yellow-400",
            )}
          >
            <ThemeIcon value={value} className="h-3.5 w-3.5" />
          </button>
        );
      })}
    </div>
  );
}
