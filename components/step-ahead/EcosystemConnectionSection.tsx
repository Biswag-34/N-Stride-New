import Link from "next/link";

import { ThemeBadge } from "@/components/page-sections/ThemeBadge";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stepAheadProgram } from "@/data/stepAhead";
import { verticals } from "@/data/verticals";

export function EcosystemConnectionSection() {
  return (
    <Section className="py-14 sm:py-16 lg:py-20" variant="soft">
      <Container>
        <SectionHeading
          align="center"
          description="Step-Ahead is supported by the same N-Stride ecosystem that connects Insight, Kinetics, NPWT VAC & Wound Care and Bio-Fit."
          eyebrow="N-Stride ecosystem"
          title="Connected to the complete N-Stride ecosystem"
        />
        <div className="relative mx-auto mt-10 min-h-[36rem] max-w-5xl rounded-[2rem] border border-border-soft bg-white p-5 shadow-card lg:min-h-[30rem]">
          <div className="absolute left-1/2 top-1/2 hidden h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-green/20 bg-background-soft lg:block" />
          <div className="relative z-10 mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-accent-green/25 bg-white text-center font-heading text-lg font-semibold text-primary-dark shadow-card lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
            Step-Ahead Partner Setup
          </div>
          <div className="mt-6 grid gap-4 lg:mt-0">
            {stepAheadProgram.ecosystemConnections.map((connection, index) => {
              const matched = verticals.find((vertical) => connection.vertical.includes(vertical.shortName) || vertical.name.includes(connection.vertical));
              const positions = [
                "lg:absolute lg:left-8 lg:top-8 lg:w-72",
                "lg:absolute lg:right-8 lg:top-8 lg:w-72",
                "lg:absolute lg:left-8 lg:bottom-8 lg:w-72",
                "lg:absolute lg:right-8 lg:bottom-8 lg:w-72",
              ];

              return (
                <Link
                  className={`rounded-[1.25rem] border border-border-soft bg-background-soft p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-card focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 ${positions[index]}`}
                  href={matched?.href ?? "/verticals"}
                  key={connection.vertical}
                >
                  <ThemeBadge theme={matched?.theme ?? "blue"}>{connection.vertical}</ThemeBadge>
                  <p className="mt-4 text-sm leading-6 text-text-secondary">{connection.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
