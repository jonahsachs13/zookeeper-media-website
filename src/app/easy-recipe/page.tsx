import { EasyRecipeAppIcons } from "@/components/easy-recipe/app-icons";
import { EasyRecipeCta } from "@/components/easy-recipe/cta";
import { EasyRecipeFaq } from "@/components/easy-recipe/faq";
import { EasyRecipeFeatures } from "@/components/easy-recipe/features";
import { EasyRecipeFooter } from "@/components/easy-recipe/footer";
import { EasyRecipeHero } from "@/components/easy-recipe/hero";
import { EasyRecipeScreenshots } from "@/components/easy-recipe/screenshots";
import { EasyRecipeSubNav } from "@/components/easy-recipe/sub-nav";

export default function EasyRecipePage() {
  return (
    <div className="min-h-screen">
      <EasyRecipeSubNav />
      <main>
          <EasyRecipeHero />
          <EasyRecipeScreenshots />
          <EasyRecipeFeatures />
          <EasyRecipeAppIcons />
          <EasyRecipeFaq />
          <EasyRecipeCta />
      </main>
      <EasyRecipeFooter />
    </div>
  );
}
