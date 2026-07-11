import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import type { CTA } from "@/data/types";
import { cn } from "@/lib/cn";

import { type PageTheme, ThemeBadge } from "./ThemeBadge";

type CTASectionProps = {
  description: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
  title: string;
  variant?: PageTheme;
};

const gradientByTheme: Record<PageTheme, string> = {
  default: "from-background-soft via-white to-background-soft",
  blue: "from-primary/10 via-white to-background-soft",
  aqua: "from-accent-aqua/10 via-white to-background-soft",
  green: "from-accent-green/10 via-white to-background-soft",
  amber: "from-accent-amber/10 via-white to-background-soft",
  indigo: "from-accent-indigo/10 via-white to-background-soft",
  kinetics: "from-primary/10 via-white to-background-soft",
  insight: "from-accent-aqua/10 via-white to-background-soft",
  woundCare: "from-accent-amber/10 via-white to-background-soft",
  bioFit: "from-accent-indigo/10 via-white to-background-soft",
  stepAhead: "from-accent-green/10 via-white to-background-soft",
};

export function CTASection({ description, primaryCta, secondaryCta, title, variant = "default" }: CTASectionProps) {
  return (
    <div className={cn("rounded-[2rem] border border-border-soft bg-gradient-to-br p-6 shadow-card sm:p-8 lg:p-10", gradientByTheme[variant])}>
      <ThemeBadge theme={variant}>Next step</ThemeBadge>
      <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-primary-dark sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-2xl leading-7 text-text-secondary">{description}</p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button external={primaryCta.external} href={primaryCta.href}>
          {primaryCta.label}
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Button>
        {secondaryCta ? (
          <Button external={secondaryCta.external} href={secondaryCta.href} variant="outline">
            {secondaryCta.label}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
