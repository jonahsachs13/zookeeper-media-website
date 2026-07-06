import Link from "next/link";

type EasyRecipeFooterProps = {
  showPrivacyLink?: boolean;
};

export function EasyRecipeFooter({ showPrivacyLink = true }: EasyRecipeFooterProps) {
  return (
    <footer className="border-t border-gray-200 py-8 dark:border-zinc-800">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <p className="mb-2 text-black dark:text-white" style={{ fontSize: "14px" }}>
          © 2026 Easy Recipe App. All rights reserved.
        </p>
        {showPrivacyLink && (
          <div className="space-x-4">
            <Link
              href="/easy-recipe/privacy"
              className="text-black hover:text-brand-orange dark:text-white dark:hover:text-brand-orange"
              style={{ fontSize: "14px" }}
            >
              Privacy Policy
            </Link>
            <span className="text-gray-300 dark:text-zinc-600">|</span>
            <Link
              href="/"
              className="text-black hover:text-brand-orange dark:text-white dark:hover:text-brand-orange"
              style={{ fontSize: "14px" }}
            >
              ZooKeeper Media
            </Link>
          </div>
        )}
      </div>
    </footer>
  );
}
