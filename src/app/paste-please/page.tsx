import { PastePleaseCta } from "@/components/paste-please/cta";
import { PastePleaseFaq } from "@/components/paste-please/faq";
import { PastePleaseFeatures } from "@/components/paste-please/features";
import { PastePleaseFooter } from "@/components/paste-please/footer";
import { PastePleaseHero } from "@/components/paste-please/hero";
import { PastePleaseScreenshots } from "@/components/paste-please/screenshots";
import { PastePleaseSubNav } from "@/components/paste-please/sub-nav";

export default function PastePleasePage() {
  return (
    <div className="min-h-screen">
      <PastePleaseSubNav />
      <main>
        <PastePleaseHero />
        <PastePleaseScreenshots />
        <PastePleaseFeatures />
        <PastePleaseFaq />
        <PastePleaseCta />
      </main>
      <PastePleaseFooter />
    </div>
  );
}
