import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { stepAheadProgram } from "@/data/stepAhead";

export function StepAheadCTA() {
  return (
    <Section className="pb-16 pt-14 sm:pb-20" variant="white">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-accent-green/20 bg-[linear-gradient(135deg,rgba(221,241,255,0.9),rgba(255,255,255,0.96),rgba(92,184,92,0.13))] p-6 shadow-card sm:p-8 lg:p-10">
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-accent-green/10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-accent-green/25 bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-accent-green">
                Partner pathway
              </p>
              <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-primary-dark sm:text-4xl">
                Build a modern diabetic foot-care service without starting from zero.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-text-secondary">
                Connect with N-Stride to discuss your clinic, patient profile, package fit and setup pathway.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={stepAheadProgram.ctas.primary.href}>
                  {stepAheadProgram.ctas.primary.label}
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Button>
                <Button href={stepAheadProgram.ctas.compare.href} variant="outline">
                  {stepAheadProgram.ctas.compare.label}
                </Button>
                <Button href={stepAheadProgram.ctas.contact.href} variant="ghost">
                  {stepAheadProgram.ctas.contact.label}
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {stepAheadProgram.finalBadges.map((badge) => (
                <span className="rounded-full border border-border-soft bg-white px-4 py-2 text-sm font-bold text-primary-dark shadow-soft" key={badge}>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
