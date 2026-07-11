import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { PageHero } from "@/components/page-sections/PageHero";
import { ThemeBadge } from "@/components/page-sections/ThemeBadge";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Section } from "@/components/ui/Section";
import { resources } from "@/data/resources";

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        description="Simple education for diabetic foot care, footwear decisions, wound-care support and mobility restoration."
        eyebrow="Resources"
        title="Learn before the next step"
        variant="aqua"
      />
      <Section className="py-16 sm:py-20 lg:py-24" variant="white">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {resources.map((resource) => (
              <article className="rounded-[1.35rem] border border-border-soft bg-white p-5 shadow-soft" key={resource.id}>
                <ImagePlaceholder aspect="video" label={resource.image} />
                <ThemeBadge theme="aqua">{resource.category}</ThemeBadge>
                <h2 className="mt-4 text-xl font-semibold text-primary-dark">{resource.title}</h2>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{resource.summary}</p>
                <Link className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary" href={resource.href}>
                  Read guide
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
