import { notFound } from "next/navigation";

import { VerticalPageTemplate } from "@/components/verticals/VerticalPageTemplate";
import { verticals } from "@/data/verticals";

type VerticalRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return verticals.map((vertical) => ({ slug: vertical.id }));
}

export async function generateMetadata({ params }: VerticalRouteProps) {
  const { slug } = await params;
  const vertical = verticals.find((item) => item.id === slug);

  if (!vertical) {
    return {};
  }

  return {
    description: vertical.seo.description,
    title: vertical.seo.title,
  };
}

export default async function VerticalDetailPage({ params }: VerticalRouteProps) {
  const { slug } = await params;
  const vertical = verticals.find((item) => item.id === slug);

  if (!vertical) {
    notFound();
  }

  return <VerticalPageTemplate vertical={vertical} />;
}
