import Link from "next/link";

type ActiveAgentFooterProps = {
  showPrivacyLink?: boolean;
};

export function ActiveAgentFooter({
  showPrivacyLink = true,
}: ActiveAgentFooterProps) {
  return (
    <footer className="border-t border-gray-200 py-8 transition-colors duration-300 dark:border-zinc-800">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <p
          className="mb-2 text-black transition-colors duration-300 dark:text-white"
          style={{ fontSize: "14px" }}
        >
          © 2026 Active Agent. All rights reserved.
        </p>
        {showPrivacyLink && (
          <Link
            href="/active-agent/privacy"
            className="text-black transition-colors hover:text-brand-agent dark:text-white dark:hover:text-brand-agent"
            style={{ fontSize: "14px" }}
          >
            Privacy Policy
          </Link>
        )}
      </div>
    </footer>
  );
}
