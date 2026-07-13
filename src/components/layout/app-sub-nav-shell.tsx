import { cn } from "@/lib/utils";

type AppSubNavShellProps = {
  children: React.ReactNode;
  className?: string;
  stickyTopClass?: string;
};

export function AppSubNavShell({
  children,
  className,
  stickyTopClass = "top-0",
}: AppSubNavShellProps) {
  return (
    <nav
      className={cn(
        "sticky z-40 bg-white py-3 sm:py-4 dark:bg-black",
        stickyTopClass,
        className,
      )}
    >
      <div className="mx-auto flex max-w-[1200px] flex-nowrap items-center justify-center gap-1.5 px-3 sm:gap-3 sm:px-6">
        {children}
      </div>
    </nav>
  );
}
