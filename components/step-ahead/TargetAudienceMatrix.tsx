import { Building2 } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stepAheadProgram } from "@/data/stepAhead";

export function TargetAudienceMatrix() {
  return (
    <Section className="py-14 sm:py-16 lg:py-20" variant="soft">
      <Container>
        <SectionHeading
          align="center"
          description="Step-Ahead is designed for providers who want a structured diabetic foot-care and wound-care service inside their existing clinical environment."
          eyebrow="Partner profile"
          title="Who is Step-Ahead designed for?"
        />
        <div className="relative mx-auto mt-10 max-w-5xl rounded-[2rem] border border-border-soft bg-white p-5 shadow-card lg:p-8">
          <div className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-border-soft lg:block" />
          <div className="grid gap-4 lg:grid-cols-2">
            {stepAheadProgram.targetAudience.map((audience) => (
              <article className="relative rounded-[1.25rem] border border-border-soft bg-background-soft p-5 shadow-soft" key={audience.title}>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white text-primary shadow-soft">
                    <Building2 aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-dark">{audience.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">{audience.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
