import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/page-sections/PageHero";
import { ThemeBadge } from "@/components/page-sections/ThemeBadge";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { brand } from "@/data/brand";
import { carePathway } from "@/data/carePathway";
import { ctas } from "@/data/ctas";
import { verticals } from "@/data/verticals";
import { cn } from "@/lib/cn";
import { getThemeClasses } from "@/lib/theme";

export default function VerticalsPage() {
  return (
    <>
      <PageHero
        description={brand.positioningStatement}
        eyebrow="Care ecosystem"
        primaryCta={ctas.primary}
        secondaryCta={ctas.stepAhead}
        title="N-Stride care verticals"
        variant="aqua"
      />
      <Section className="py-16 sm:py-20 lg:py-24" variant="white">
        <Container>
          <div className="grid gap-14">
            <section className="grid gap-6 rounded-[2rem] border border-border-soft bg-background-soft p-5 shadow-soft lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
              <div>
                <ThemeBadge theme="blue">Connected ecosystem</ThemeBadge>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-primary-dark sm:text-4xl">
                  Four verticals, one guided care direction.
                </h2>
                <p className="mt-4 leading-7 text-text-secondary">
                  N-Stride brings diagnostics, protective product pathways, wound-care support and mobility restoration into a single brand architecture.
                </p>
              </div>
              <div className="relative min-h-72 rounded-[1.5rem] border border-border-soft bg-white p-5 shadow-card">
                <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 bg-background-soft" />
                <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-center text-sm font-bold text-primary-dark shadow-card">
                  N-Stride
                </div>
                {verticals.map((vertical, index) => {
                  const positions = [
                    "left-5 top-5",
                    "right-5 top-5",
                    "bottom-5 left-5",
                    "bottom-5 right-5",
                  ];
                  return (
                    <Link
                      className={cn(
                        "absolute rounded-full border bg-white px-4 py-2 text-sm font-bold shadow-soft transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20",
                        positions[index],
                        getThemeClasses(vertical.theme).badgeClass,
                      )}
                      href={vertical.href}
                      key={vertical.id}
                    >
                      {vertical.shortName}
                    </Link>
                  );
                })}
              </div>
            </section>

            <section className="relative mx-auto max-w-5xl">
              <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-border-soft md:block" />
              <div className="grid gap-5">
                {verticals.map((vertical, index) => (
                  <article
                    className="relative rounded-[1.5rem] border border-border-soft bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-card md:ml-14"
                    key={vertical.id}
                  >
                    <span className={cn("absolute -left-[4.25rem] top-8 hidden h-4 w-4 rounded-full ring-8 ring-background-soft md:block", getThemeClasses(vertical.theme).softBackground)} />
                    <ThemeBadge theme={vertical.theme}>0{index + 1} / {vertical.shortName}</ThemeBadge>
                    <h2 className="mt-4 text-2xl font-semibold text-primary-dark">{vertical.name}</h2>
                    <p className="mt-3 max-w-3xl leading-7 text-text-secondary">{vertical.shortDescription}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {vertical.services.slice(0, 4).map((service) => (
                        <span className="rounded-full border border-border-soft bg-background-soft px-3 py-1.5 text-xs font-semibold text-primary-dark" key={service}>
                          {service}
                        </span>
                      ))}
                    </div>
                    <Link className="mt-5 inline-flex items-center gap-2 rounded-sm text-sm font-bold text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20" href={vertical.href}>
                      Explore {vertical.shortName}
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-border-soft bg-background-soft p-5 shadow-soft lg:p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <ThemeBadge theme="aqua">Care pathway</ThemeBadge>
                  <h2 className="mt-4 text-3xl font-semibold leading-tight text-primary-dark sm:text-4xl">
                    From concern to continued care
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-6 text-text-secondary">
                  The pathway summarizes how N-Stride verticals can connect assessment, protection, treatment and restoration.
                </p>
              </div>
              <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-6">
                {carePathway.map((step) => (
                  <div className="rounded-[1rem] border border-border-soft bg-white p-4 shadow-soft" key={step.id}>
                    <p className="font-heading text-sm font-semibold text-primary">{step.step}</p>
                    <h3 className="mt-2 font-semibold text-primary-dark">{step.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-text-secondary">{step.connectedVerticals.join(" / ")}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-primary/15 bg-[linear-gradient(135deg,rgba(221,241,255,0.88),rgba(255,255,255,0.96))] p-6 shadow-card sm:p-8 lg:p-10">
              <ThemeBadge theme="blue">Next step</ThemeBadge>
              <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-primary-dark sm:text-4xl">
                Choose the pathway that matches the care need.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-text-secondary">
                Start with consultation when the right vertical is unclear. N-Stride can guide the next step responsibly.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={ctas.primary.href}>{ctas.primary.label}</Button>
                <Button href={ctas.stepAhead.href} variant="outline">{ctas.stepAhead.label}</Button>
              </div>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
