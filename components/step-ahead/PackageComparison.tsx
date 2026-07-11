import { CheckCircle2 } from "lucide-react";

import { ThemeBadge } from "@/components/page-sections/ThemeBadge";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stepAheadProgram } from "@/data/stepAhead";
import { cn } from "@/lib/cn";

export function PackageComparison() {
  return (
    <Section id="packages" className="py-14 sm:py-16 lg:py-20" variant="white">
      <Container>
        <SectionHeading
          align="center"
          description="This is a B2B setup investment comparison for clinic enablement. Final scope can be discussed after assessment."
          eyebrow="Packages"
          title="Choose the setup level that fits your clinical goal"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {stepAheadProgram.packages.map((programPackage) => (
            <article
              className={cn(
                "rounded-[2rem] border bg-white p-6 shadow-card",
                programPackage.tone === "premium" ? "border-accent-green/30 ring-4 ring-accent-green/10" : "border-border-soft",
              )}
              key={programPackage.name}
            >
              <ThemeBadge theme={programPackage.tone === "premium" ? "green" : "blue"}>
                {programPackage.tone === "premium" ? "Broader setup" : "Focused setup"}
              </ThemeBadge>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-primary-dark">{programPackage.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-text-secondary">{programPackage.training}</p>
                </div>
                <p className="font-heading text-3xl font-semibold text-primary">{programPackage.investment}</p>
              </div>
              <div className="mt-6 grid gap-3">
                {programPackage.features.map((feature) => (
                  <div className="flex gap-3 rounded-[1rem] border border-border-soft bg-background-soft p-3" key={feature.label}>
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-accent-green" />
                    <div>
                      <p className="text-sm font-bold text-primary-dark">{feature.label}</p>
                      <p className="mt-1 text-sm leading-5 text-text-secondary">{feature.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 rounded-[1rem] border border-border-soft bg-background-soft p-4 text-center text-sm font-semibold text-text-secondary">
          Package details can be finalized after clinic assessment and scope discussion.
        </p>
      </Container>
    </Section>
  );
}
