import Link from "next/link";

type PastePleaseFooterProps = {
  showPrivacyLink?: boolean;
};

export function PastePleaseFooter({ showPrivacyLink = true }: PastePleaseFooterProps) {
  return (
    <footer className="py-8 transition-colors duration-300">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <p
          className="mb-2 text-black transition-colors duration-300 dark:text-white"
          style={{ fontSize: "14px" }}
        >
          © 2026 Paste Please. All rights reserved.
        </p>
        {showPrivacyLink && (
          <Link
            href="/paste-please/privacy"
            className="text-black transition-colors hover:text-brand-paste dark:text-white dark:hover:text-brand-paste-light"
            style={{ fontSize: "14px" }}
          >
            Privacy Policy
          </Link>
        )}
      </div>
    </footer>
  );
}
