"use client";

import Link from "next/link";
import { useEasyRecipeDomain } from "@/components/easy-recipe/domain-context";
import { HUB_HOME_URL } from "@/lib/easy-recipe/paths";

type EasyRecipeFooterProps = {
  showPrivacyLink?: boolean;
};

export function EasyRecipeFooter({ showPrivacyLink = true }: EasyRecipeFooterProps) {
  const { onEraDomain, paths } = useEasyRecipeDomain();

  return (
    <footer className="py-8">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <p className="mb-2 text-black dark:text-white" style={{ fontSize: "14px" }}>
          © 2026 Easy Recipe App. All rights reserved.
        </p>
        {showPrivacyLink && (
          <div className="space-x-4">
            <Link
              href={paths.privacy}
              className="text-black hover:text-brand-orange dark:text-white dark:hover:text-brand-orange"
              style={{ fontSize: "14px" }}
            >
              Privacy Policy
            </Link>
            <span className="text-gray-300 dark:text-zinc-600">|</span>
            {onEraDomain ? (
              <a
                href={HUB_HOME_URL}
                className="text-black hover:text-brand-orange dark:text-white dark:hover:text-brand-orange"
                style={{ fontSize: "14px" }}
              >
                ZooKeeper Media
              </a>
            ) : (
              <Link
                href="/"
                className="text-black hover:text-brand-orange dark:text-white dark:hover:text-brand-orange"
                style={{ fontSize: "14px" }}
              >
                ZooKeeper Media
              </Link>
            )}
          </div>
        )}
      </div>
    </footer>
  );
}
