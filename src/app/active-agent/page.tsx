import { ActiveAgentCta } from "@/components/active-agent/cta";
import { ActiveAgentFaq } from "@/components/active-agent/faq";
import { ActiveAgentFeatures } from "@/components/active-agent/features";
import { ActiveAgentFooter } from "@/components/active-agent/footer";
import { ActiveAgentHero } from "@/components/active-agent/hero";
import { ActiveAgentSubNav } from "@/components/active-agent/sub-nav";

export default function ActiveAgentPage() {
  return (
    <div className="min-h-screen">
      <ActiveAgentSubNav />
      <main>
          <ActiveAgentHero />
          <ActiveAgentFeatures />
          <ActiveAgentFaq />
          <ActiveAgentCta />
      </main>
      <ActiveAgentFooter />
    </div>
  );
}
