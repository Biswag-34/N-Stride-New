import { CheckCircle2, Circle } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stepAheadProgram } from "@/data/stepAhead";

export function WhyStepAhead() {
  return (
    <Section className="py-14 sm:py-16 lg:py-20" variant="white">
      <Container>
        <SectionHeading
          description={stepAheadProgram.whyExists}
          eyebrow="Clinic enablement"
          title="Why Step-Ahead?"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <div className="rounded-[1.75rem] border border-border-soft bg-background-soft p-6">
            <h3 className="text-2xl font-semibold text-primary-dark">The clinic gap</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {stepAheadProgram.clinicGap.map((item) => (
                <span className="rounded-full border border-border-soft bg-white px-4 py-2 text-sm font-semibold text-text-secondary shadow-soft" key={item}>
                  <Circle aria-hidden="true" className="mr-2 inline h-3 w-3 text-text-muted" />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden items-center justify-center lg:flex">
            <span className="rounded-full border border-border-soft bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-primary shadow-card">
              Step-Ahead
            </span>
          </div>
          <div className="rounded-[1.75rem] border border-accent-green/25 bg-white p-6 shadow-card">
            <h3 className="text-2xl font-semibold text-primary-dark">The Step-Ahead response</h3>
            <div className="mt-6 grid gap-3">
              {stepAheadProgram.response.map((item) => (
                <div className="flex items-center gap-3 rounded-[1rem] border border-border-soft bg-background-soft px-4 py-3" key={item}>
                  <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-accent-green" />
                  <span className="text-sm font-semibold text-primary-dark">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
