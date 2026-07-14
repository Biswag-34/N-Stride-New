import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Section } from "@/components/ui/Section";
import type { Vertical } from "@/data/types";
import { cn } from "@/lib/cn";
import { getThemeClasses } from "@/lib/theme";

import { ThemeBadge } from "@/components/page-sections/ThemeBadge";

type VerticalHeroProps = {
  vertical: Vertical;
};

export function VerticalHero({ vertical }: VerticalHeroProps) {
  const theme = getThemeClasses(vertical.theme);

  return (
    <Section className={cn("relative isolate overflow-hidden py-9 sm:py-12 lg:py-14", `bg-gradient-to-br ${theme.gradientClass}`)}>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(20,121,201,0.11),transparent_24rem)]" />
      <Container>
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm font-semibold text-text-secondary" aria-label="Breadcrumb">
          <Link className="rounded-sm hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20" href="/">
            Home
          </Link>
          <ChevronRight aria-hidden="true" className="h-4 w-4 text-text-muted" />
          <Link className="rounded-sm hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20" href="/verticals">
            Verticals
          </Link>
          <ChevronRight aria-hidden="true" className="h-4 w-4 text-text-muted" />
          <span className="text-primary-dark">{vertical.shortName}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.7fr)] lg:items-center">
          <div className="max-w-3xl">
            <ThemeBadge theme={vertical.theme}>{vertical.shortName}</ThemeBadge>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-primary-dark sm:text-5xl lg:text-[3.05rem]">
              {vertical.name}
            </h1>
            <p className={cn("mt-4 max-w-2xl text-base font-semibold leading-7 sm:text-lg", theme.textColor)}>
              {vertical.tagline}
            </p>
            <p className="mt-5 max-h-[10.5rem] max-w-2xl overflow-hidden text-sm leading-7 text-text-secondary sm:max-h-none sm:text-base">
              {vertical.longDescription}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button external={vertical.cta.primary.external} href={vertical.cta.primary.href}>
                {vertical.cta.primary.label}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              {vertical.cta.secondary ? (
                <Button external={vertical.cta.secondary.external} href={vertical.cta.secondary.href} variant="outline">
                  {vertical.cta.secondary.label}
                </Button>
              ) : null}
            </div>
            <div className="mt-6 hidden flex-wrap gap-2 sm:flex">
              {vertical.services.slice(0, 3).map((service) => (
                <span className="rounded-full border border-border-soft bg-white/80 px-3 py-1.5 text-xs font-semibold text-primary-dark shadow-soft" key={service}>
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="relative hidden rounded-[1.5rem] border border-border-soft bg-white/80 p-4 shadow-card sm:block">
            <div className={cn("absolute -right-6 -top-6 h-32 w-32 rounded-full blur-3xl", theme.softBackground)} />
            <div className="relative">
              <ImagePlaceholder aspect="wide" label={vertical.imageNeeds[0] ?? `${vertical.name} visual`} />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
