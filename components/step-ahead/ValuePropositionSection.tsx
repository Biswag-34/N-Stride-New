import { CircleDot } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stepAheadProgram } from "@/data/stepAhead";

export function ValuePropositionSection() {
  return (
    <Section className="py-14 sm:py-16 lg:py-20" variant="white">
      <Container>
        <SectionHeading
          align="center"
          description="The program is built for providers who need a practical platform, not isolated equipment supply."
          eyebrow="Partner value"
          title="Why partners choose Step-Ahead"
        />
        <div className="relative mx-auto mt-10 max-w-5xl rounded-[2rem] border border-border-soft bg-background-soft p-5 shadow-soft lg:p-8">
          <div className="absolute left-1/2 top-1/2 hidden h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-green/20 bg-white lg:block" />
          <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {stepAheadProgram.valueProposition.map((value) => (
              <article className="rounded-[1.2rem] border border-border-soft bg-white p-5 shadow-soft" key={value}>
                <CircleDot aria-hidden="true" className="h-5 w-5 text-accent-green" />
                <p className="mt-4 text-sm font-semibold leading-6 text-primary-dark">{value}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
