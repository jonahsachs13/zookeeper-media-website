import { PodcastShowPage } from "@/components/zookeeper/podcast-show-page";
import { getPodcastBySlug, PODCASTS } from "@/lib/podcasts";
import { withBrandSocial } from "@/lib/social-metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PodcastShowRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PODCASTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PodcastShowRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const show = getPodcastBySlug(slug);
  if (!show) {
    return withBrandSocial("zkm", { title: "Podcast" });
  }

  return withBrandSocial("zkm", {
    title: show.name,
    description: show.about,
  });
}

export default async function PodcastShowRoute({ params }: PodcastShowRouteProps) {
  const { slug } = await params;
  const show = getPodcastBySlug(slug);
  if (!show) notFound();

  return <PodcastShowPage show={show} />;
}
