import { FitnessShareCta } from "@/components/fitness-share/cta";
import { FitnessShareFaq } from "@/components/fitness-share/faq";
import { FitnessShareFeatures } from "@/components/fitness-share/features";
import { FitnessShareFooter } from "@/components/fitness-share/footer";
import { FitnessShareHero } from "@/components/fitness-share/hero";
import { FitnessShareSubNav } from "@/components/fitness-share/sub-nav";

export default function FitnessSharePage() {
  return (
    <div className="min-h-screen">
      <FitnessShareSubNav />
      <main>
          <FitnessShareHero />
          <FitnessShareFeatures />
          <FitnessShareFaq />
          <FitnessShareCta />
      </main>
      <FitnessShareFooter />
    </div>
  );
}
