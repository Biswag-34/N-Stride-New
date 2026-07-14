import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Section } from "@/components/ui/Section";
import type { CTA } from "@/data/types";
import { cn } from "@/lib/cn";

import { type PageTheme, ThemeBadge } from "./ThemeBadge";

type PageHeroProps = {
  description?: string;
  eyebrow?: string;
  imageLabel?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  title: string;
  variant?: Extract<PageTheme, "default" | "blue" | "aqua" | "green" | "amber" | "indigo">;
};

const heroAccents: Record<NonNullable<PageHeroProps["variant"]>, string> = {
  default: "from-white via-background-soft to-white",
  blue: "from-primary/10 via-background-soft to-white",
  aqua: "from-accent-aqua/10 via-background-soft to-white",
  green: "from-accent-green/10 via-background-soft to-white",
  amber: "from-accent-amber/10 via-background-soft to-white",
  indigo: "from-accent-indigo/10 via-background-soft to-white",
};

export function PageHero({
  description,
  eyebrow,
  imageLabel,
  primaryCta,
  secondaryCta,
  title,
  variant = "default",
}: PageHeroProps) {
  return (
    <Section className={cn("relative isolate overflow-hidden py-10 xs:py-12 sm:py-16 lg:py-20", `bg-gradient-to-br ${heroAccents[variant]}`)}>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(221,241,255,0.78),transparent_26rem)]" />
      <Container>
        <div className={cn("grid gap-10", imageLabel && "lg:grid-cols-[1fr_0.78fr] lg:items-center")}>
          <div className="max-w-3xl">
            {eyebrow ? <ThemeBadge theme={variant === "default" ? "blue" : variant}>{eyebrow}</ThemeBadge> : null}
            <h1 className="mt-5 text-[clamp(2rem,9vw,2.75rem)] font-semibold leading-tight text-primary-dark sm:text-5xl lg:text-[3.5rem]">
              {title}
            </h1>
            {description ? <p className="mt-5 max-w-2xl text-sm leading-7 text-text-secondary sm:text-lg sm:leading-8">{description}</p> : null}
            {primaryCta || secondaryCta ? (
              <div className="mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
                {primaryCta ? (
                  <Button className="w-full xs:w-auto" external={primaryCta.external} href={primaryCta.href}>
                    {primaryCta.label}
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Button>
                ) : null}
                {secondaryCta ? (
                  <Button className="w-full xs:w-auto" external={secondaryCta.external} href={secondaryCta.href} variant="outline">
                    {secondaryCta.label}
                  </Button>
                ) : null}
              </div>
            ) : null}
          </div>
          {imageLabel ? (
            <div className="rounded-[1.25rem] border border-border-soft bg-white/75 p-3 shadow-card xs:p-4 sm:rounded-[2rem]">
              <ImagePlaceholder aspect="wide" label={imageLabel} />
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
