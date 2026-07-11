import { PageHero } from "@/components/page-sections/PageHero";
import { brand } from "@/data/brand";
import { ctas } from "@/data/ctas";

export default function AboutPage() {
  return (
    <PageHero
      description={brand.longIntro}
      eyebrow={brand.descriptor}
      primaryCta={ctas.primary}
      secondaryCta={ctas.verticals}
      title="About N-Stride"
      variant="blue"
    />
  );
}
