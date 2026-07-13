import { SiteHeader } from "@/components/layout/site-header";
import { HubFooter } from "@/components/zookeeper/hub-footer";
import { HubPageHero } from "@/components/zookeeper/hub-page-hero";
import { StickerPacksGrid } from "@/components/zookeeper/sticker-packs-grid";
import { STICKER_PACKS, STICKER_PACK_TAGLINE } from "@/lib/sticker-packs";
import { withBrandSocial } from "@/lib/social-metadata";
import type { Metadata } from "next";

export const metadata: Metadata = withBrandSocial("zkm", {
  title: "iMessage Sticker Packs",
  description: STICKER_PACK_TAGLINE,
});

export default function StickerPacksPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="pt-14">
        <HubPageHero
          title="iMessage Sticker Packs"
          description={STICKER_PACK_TAGLINE}
        />
        <section className="pb-12 sm:pb-16">
          <StickerPacksGrid packs={STICKER_PACKS} />
        </section>
      </main>
      <HubFooter />
    </div>
  );
}
