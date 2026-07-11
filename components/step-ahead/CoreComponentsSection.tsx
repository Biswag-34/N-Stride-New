import { Layers3 } from "lucide-react";

import { ThemeBadge } from "@/components/page-sections/ThemeBadge";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stepAheadProgram, type StepAheadComponentGroup } from "@/data/stepAhead";

const groups: StepAheadComponentGroup[] = ["Diagnostic Technology", "Training & Workflow", "Product Inventory", "Premium Add-ons"];

export function CoreComponentsSection() {
  return (
    <Section className="py-14 sm:py-16 lg:py-20" variant="white">
      <Container>
        <SectionHeading
          description="Equipment, workflow, inventory and optional wound-care components come together as one coordinated implementation."
          eyebrow="Program blueprint"
          title="Technology, training and inventory in one coordinated setup"
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="rounded-[2rem] border border-border-soft bg-background-soft p-5 shadow-soft">
            <div className="rounded-[1.5rem] border border-white/80 bg-white p-5 shadow-card">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-green/10 text-accent-green">
                <Layers3 aria-hidden="true" className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-primary-dark">Clinic setup blueprint</h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                A practical stack for screening, documentation, patient counselling, inventory access and premium wound-care capability.
              </p>
            </div>
            <div className="mt-4 grid gap-3">
              {stepAheadProgram.componentImageNeeds.map((image) => (
                <ImagePlaceholder aspect="video" key={image} label={image} />
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {groups.map((group) => (
              <section className="rounded-[1.5rem] border border-border-soft bg-white p-5 shadow-soft" key={group}>
                <ThemeBadge theme={group === "Premium Add-ons" ? "amber" : "green"}>{group}</ThemeBadge>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {stepAheadProgram.components
                    .filter((component) => component.group === group)
                    .map((component) => (
                      <div className="rounded-[1rem] border border-border-soft bg-background-soft p-4" key={component.title}>
                        <h3 className="font-semibold text-primary-dark">{component.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-text-secondary">{component.description}</p>
                      </div>
                    ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
