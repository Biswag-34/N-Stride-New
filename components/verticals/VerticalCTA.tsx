import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { ctas } from "@/data/ctas";
import type { Vertical } from "@/data/types";
import { cn } from "@/lib/cn";
import { getThemeClasses } from "@/lib/theme";

import { ThemeBadge } from "@/components/page-sections/ThemeBadge";

type VerticalCTAProps = {
  vertical: Vertical;
};

const titles: Record<string, string> = {
  kinetics: "Find the right protective solution for your feet.",
  insight: "Start with a guided foot checkup.",
  "wound-care": "Get structured wound-care support.",
  "bio-fit": "Restore mobility, function and confidence.",
};

const descriptions: Record<string, string> = {
  kinetics:
    "N-Stride can help you understand which therapeutic footwear, socks, insoles or support accessories may suit your care need after appropriate evaluation.",
  insight:
    "Begin with a structured foot-health conversation, checkup pathway or home scan enquiry so your next care decision is better informed.",
  "wound-care":
    "For wound-care needs, N-Stride can help coordinate support pathways with clinician-led direction, off-loading considerations and follow-up planning.",
  "bio-fit":
    "Bio-Fit consultations focus on patient-specific prosthetic, orthotic or silicone restoration needs with practical mobility and adaptation guidance.",
};

export function VerticalCTA({ vertical }: VerticalCTAProps) {
  const theme = getThemeClasses(vertical.theme);
  const primary = vertical.cta.primary ?? ctas.primary;

  return (
    <section className={cn("relative overflow-hidden rounded-[2rem] border p-6 shadow-card sm:p-8 lg:p-10", theme.borderColor, `bg-gradient-to-br ${theme.gradientClass}`)}>
      <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-white/70 blur-3xl" />
      <div className="relative">
        <ThemeBadge theme={vertical.theme}>Next step</ThemeBadge>
        <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-primary-dark sm:text-4xl">
          {titles[vertical.id] ?? `Start with ${vertical.shortName}.`}
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-text-secondary">
          {descriptions[vertical.id] ?? "Share your care need with N-Stride and we will help point you toward the right consultation or support pathway."}
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button external={primary.external} href={primary.href}>
            {primary.label}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Button>
          {vertical.cta.secondary ? (
            <Button external={vertical.cta.secondary.external} href={vertical.cta.secondary.href} variant="outline">
              {vertical.cta.secondary.label}
            </Button>
          ) : (
            <Button href={ctas.primary.href} variant="outline">
              {ctas.primary.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
