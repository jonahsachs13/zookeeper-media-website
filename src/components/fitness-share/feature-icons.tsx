import { cn } from "@/lib/utils";

type FitnessFeatureIconProps = {
  name: "cards" | "stickers" | "messages" | "health";
  className?: string;
};

const ICON_CLASS = "h-12 w-12";

function CardsIcon({ className, fill }: { className?: string; fill: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <rect x="4" y="3.5" width="13" height="17" rx="2.5" fill={fill} opacity="0.3" />
      <rect x="7" y="3.5" width="13" height="17" rx="2.5" fill={fill} />
      <path d="M10 9h7v1.5h-7V9Zm0 3.5h5.5V14H10v-1.5Z" fill="white" opacity="0.9" />
    </svg>
  );
}

function StickersIcon({ className, fill }: { className?: string; fill: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <path
        d="M12 2.5c5.1 0 9.25 4.15 9.25 9.25 0 1.7-.46 3.3-1.26 4.66L14.9 21.5H12C6.9 21.5 2.75 17.35 2.75 12.25S6.9 2.5 12 2.5Z"
        fill={fill}
      />
      <path d="M14.5 20.2 20 14.7" stroke="white" strokeWidth="1.75" strokeLinecap="round" opacity="0.85" />
    </svg>
  );
}

function MessagesIcon({ className, fill }: { className?: string; fill: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <path
        d="M12 3.5c5.1 0 9.25 3.47 9.25 7.75 0 4.28-4.15 7.75-9.25 7.75-.9 0-1.77-.1-2.6-.3L5 20.5l.85-3.2C4.3 15.9 2.75 13.75 2.75 11.25 2.75 6.97 6.9 3.5 12 3.5Z"
        fill={fill}
      />
    </svg>
  );
}

function HealthIcon({ className, fill }: { className?: string; fill: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <path
        d="M12 20.5s-7.25-4.4-7.25-9.4c0-2.7 2.05-4.85 4.7-4.85 1.35 0 2.55.58 3.55 1.7 1-1.12 2.2-1.7 3.55-1.7 2.65 0 4.7 2.15 4.7 4.85 0 5-7.25 9.4-7.25 9.4Z"
        fill={fill}
      />
    </svg>
  );
}

export function FitnessFeatureIcon({ name, className = ICON_CLASS }: FitnessFeatureIconProps) {
  const iconClass = cn(className);
  const icons = {
    cards: CardsIcon,
    stickers: StickersIcon,
    messages: MessagesIcon,
    health: HealthIcon,
  } as const;
  const Icon = icons[name];

  return (
    <>
      <Icon className={cn(iconClass, "dark:hidden")} fill="#eb57a8" />
      <Icon className={cn(iconClass, "hidden dark:block")} fill="#f5a3d0" />
    </>
  );
}
