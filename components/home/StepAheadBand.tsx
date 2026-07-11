"use client";

import { ArrowRight, Handshake } from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { programs } from "@/data/programs";
import { stepAheadProgram } from "@/data/stepAhead";

export function StepAheadBand() {
  const program = programs[0];
  const ribbonSteps = stepAheadProgram.workflow.slice(0, 6);

  if (!program) {
    return null;
  }

  return (
    <Section id="step-ahead" className="py-16 sm:py-20 lg:py-24" variant="white">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-border-soft bg-[linear-gradient(135deg,rgba(244,250,255,1),rgba(221,241,255,0.82),rgba(92,184,92,0.1))] p-6 shadow-soft sm:p-8 lg:p-10">
          <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-accent-green/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Badge variant="green">{program.type}</Badge>
              <div className="mt-5 flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-white text-accent-green shadow-soft">
                  <Handshake aria-hidden="true" className="h-7 w-7" />
                </span>
                <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                  Step-Ahead: {stepAheadProgram.headline}
                </h2>
              </div>
              <p className="mt-5 leading-7 text-text-secondary">{stepAheadProgram.coreDescription}</p>
              <div className="mt-5 grid gap-2 text-sm font-semibold text-primary-dark sm:grid-cols-2">
                {["Technology", "Training", "Inventory", "Clinic setup support"].map((item) => (
                  <span className="rounded-full border border-accent-green/20 bg-white/70 px-3 py-2" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {program.audience.slice(0, 6).map((audience) => (
                  <Badge key={audience} variant="neutral">
                    {audience}
                  </Badge>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-text-secondary">
                Program details, setup models and training modules can be customized based on partner requirements.
              </p>
              <Button className="mt-7" href="/step-ahead">
                Explore Step-Ahead
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
            </div>

            <div className="relative">
              <div className="absolute left-8 right-8 top-[2.15rem] hidden h-1 rounded-full bg-border-soft md:block" />
              <motion.div
                className="absolute left-8 top-[2.15rem] hidden h-1 rounded-full bg-accent-green md:block"
                initial={{ width: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.35 }}
                whileInView={{ width: "calc(100% - 4rem)" }}
              />
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
                {ribbonSteps.map((step, index) => (
                  <motion.div
                    className="relative rounded-[1.15rem] border border-white/80 bg-white px-4 py-3 shadow-soft md:pb-4"
                    initial={{ opacity: 0, y: 18 }}
                    key={step.title}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    viewport={{ once: true, amount: 0.25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-accent-green text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <h3 className="mt-3 text-sm font-semibold md:text-base">{step.title}</h3>
                    <p className="mt-2 hidden text-xs leading-5 text-text-secondary xl:block">{step.purpose}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
