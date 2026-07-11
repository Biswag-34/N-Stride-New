import { Route } from "lucide-react";

import { ThemeBadge } from "@/components/page-sections/ThemeBadge";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stepAheadProgram } from "@/data/stepAhead";

export function PackageBestFit() {
  return (
    <Section className="py-14 sm:py-16 lg:py-20" variant="soft">
      <Container>
        <SectionHeading eyebrow="Decision guide" title="Which package fits which setup?" />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {stepAheadProgram.packages.map((programPackage) => (
            <article className="rounded-[1.75rem] border border-border-soft bg-white p-6 shadow-card" key={programPackage.name}>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-accent-green/10 text-accent-green">
                  <Route aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <ThemeBadge theme={programPackage.tone === "premium" ? "green" : "blue"}>{programPackage.name} - Best Fit</ThemeBadge>
                </div>
              </div>
              <p className="mt-5 leading-7 text-text-secondary">{programPackage.bestFit}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {programPackage.bestFor.map((item) => (
                  <span className="rounded-full border border-border-soft bg-background-soft px-3 py-1.5 text-xs font-semibold text-primary-dark" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
