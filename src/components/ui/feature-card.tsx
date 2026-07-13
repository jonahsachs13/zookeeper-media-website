import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[320px] rounded-xl border border-gray-400 bg-gray-100 p-8 sm:max-w-none dark:border-zinc-700 dark:bg-zinc-900",
        className,
      )}
    >
      {icon && <div className="mb-4 flex justify-center">{icon}</div>}
      <h3
        className="mb-2 text-center text-black dark:text-white"
        style={{ fontSize: "20px", fontWeight: 600 }}
      >
        {title}
      </h3>
      <p
        className="min-h-[4.8em] text-center text-black dark:text-white"
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          letterSpacing: "-0.01em",
        }}
      >
        {description}
      </p>
    </div>
  );
}
