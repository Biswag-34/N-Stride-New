"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ThemeBadge } from "@/components/page-sections/ThemeBadge";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stepAheadProgram } from "@/data/stepAhead";

export function ProgramWorkflow() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="workflow" className="overflow-hidden py-14 sm:py-16 lg:py-20" variant="soft">
      <Container>
        <SectionHeading
          description="A staged implementation path helps the provider move from assessment to a running service model."
          eyebrow="Workflow"
          title="From clinic assessment to ongoing service development"
        />
        <div className="relative mt-10 rounded-[2rem] border border-border-soft bg-white p-5 shadow-card lg:p-8">
          <motion.div
            className="absolute left-10 right-10 top-16 hidden h-1 rounded-full bg-accent-green lg:block"
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={reduceMotion ? undefined : { scaleX: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
            viewport={{ once: true, amount: 0.3 }}
          />
          <div className="grid gap-4 lg:grid-cols-7">
            {stepAheadProgram.workflow.map((step, index) => (
              <motion.article
                className="relative rounded-[1.2rem] border border-border-soft bg-background-soft p-4 shadow-soft"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                key={step.title}
                transition={{ delay: index * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, amount: 0.2 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              >
                <ThemeBadge theme="green">0{index + 1}</ThemeBadge>
                <h3 className="mt-4 text-base font-semibold text-primary-dark">{step.title}</h3>
                <p className="mt-2 text-xs leading-5 text-text-secondary">{step.purpose}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
