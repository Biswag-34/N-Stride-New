import { notFound } from "next/navigation";

import { BioFitPage } from "@/components/biofit/BioFitPage";
import { InsightPage } from "@/components/insight/InsightPage";
import { KineticsPage } from "@/components/kinetics/KineticsPage";
import { VerticalPageTemplate } from "@/components/verticals/VerticalPageTemplate";
import { WoundCarePage } from "@/components/wound-care/WoundCarePage";
import { verticals } from "@/data/verticals";

type VerticalRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return [
    ...verticals.map((vertical) => ({ slug: vertical.id })),
    { slug: "BioFit" },
    { slug: "Insight" },
    { slug: "Npwt" },
  ];
}

function resolveVertical(slug: string) {
  const lowerSlug = slug.toLowerCase();
  const normalizedSlug =
    lowerSlug === "biofit" ? "bio-fit" : lowerSlug === "npwt" || lowerSlug === "npwtvac" ? "wound-care" : lowerSlug;

  return verticals.find((item) => item.id === normalizedSlug);
}

export async function generateMetadata({ params }: VerticalRouteProps) {
  const { slug } = await params;
  const vertical = resolveVertical(slug);

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
  const vertical = resolveVertical(slug);

  if (!vertical) {
    notFound();
  }

  if (vertical.id === "kinetics") {
    return <KineticsPage vertical={vertical} />;
  }

  if (vertical.id === "insight") {
    return <InsightPage vertical={vertical} />;
  }

  if (vertical.id === "wound-care") {
    return <WoundCarePage vertical={vertical} />;
  }

  if (vertical.id === "bio-fit") {
    return <BioFitPage vertical={vertical} />;
  }

  return <VerticalPageTemplate vertical={vertical} />;
}
