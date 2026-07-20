import Link from "next/link";

type FitnessShareFooterProps = {
  showPrivacyLink?: boolean;
};

export function FitnessShareFooter({ showPrivacyLink = true }: FitnessShareFooterProps) {
  return (
    <footer className="py-8 transition-colors duration-300">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <p
          className="mb-2 text-black transition-colors duration-300 dark:text-white"
          style={{ fontSize: "14px" }}
        >
          © 2026 Fitness Share App. All rights reserved.
        </p>
        {showPrivacyLink && (
          <Link
            href="/fitness-share/privacy"
            className="text-black transition-colors hover:text-brand-fitness dark:text-white dark:hover:text-brand-fitness-light"
            style={{ fontSize: "14px" }}
          >
            Privacy Policy
          </Link>
        )}
      </div>
    </footer>
  );
}
