"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { staggerContainer, staggerItem } from "@/lib/motion";
import {
  CircularIcon,
  overviewIconMap,
  OverviewKicker,
  type VerticalTone,
} from "./VerticalsOverviewPrimitives";

const pathwayTone: VerticalTone[] = ["kinetics", "insight", "woundCare", "bioFit", "kinetics", "insight"];

const pathwaySteps: Array<{
  description: string;
  icon: keyof typeof overviewIconMap;
  title: string;
}> = [
  { title: "Understand", description: "Listen, assess and identify needs", icon: "analysis" },
  { title: "Analyze", description: "Measure, scan and analyze precisely", icon: "diagnostics" },
  { title: "Plan", description: "Create a personalized care plan", icon: "protect" },
  { title: "Treat", description: "Deliver solutions that heal and support", icon: "care" },
  { title: "Restore", description: "Rebuild function and confidence", icon: "restore" },
  { title: "Continue", description: "Ongoing support for lasting outcomes", icon: "partner" },
];

export function VerticalsCarePathwayBand() {
  return (
    <section className="bg-white py-8">
      <Container>
        <motion.div
          className="relative overflow-hidden rounded-[2rem] border border-border-soft bg-[linear-gradient(135deg,rgba(244,250,255,0.96),rgba(255,255,255,0.92))] px-5 py-9 shadow-[0_20px_58px_rgba(20,121,201,0.08)] sm:px-8 lg:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="text-center">
            <OverviewKicker>Care pathway</OverviewKicker>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-primary-dark sm:text-4xl">
              From concern to continued care
            </h2>
            <p className="mx-auto mt-3 max-w-[36rem] text-sm leading-7 text-text-secondary">
              A connected journey built around you.
            </p>
          </div>

          <div className="relative mt-8 hidden lg:block">
            <svg className="pointer-events-none absolute left-0 top-[2.9rem] h-10 w-full" viewBox="0 0 1200 54" preserveAspectRatio="none" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((index) => (
                <path
                  d={`M${126 + index * 194} 18 H${248 + index * 194}`}
                  fill="none"
                  key={index}
                  stroke="#1479C9"
                  strokeDasharray="1 12"
                  strokeLinecap="round"
                  strokeOpacity="0.35"
                  strokeWidth="3"
                />
              ))}
            </svg>
            <div className="relative grid grid-cols-6 gap-4">
              {pathwaySteps.map((step, index) => {
                const Icon = overviewIconMap[step.icon];
                return (
                  <motion.div className="text-center" key={step.title} variants={staggerItem}>
                    <CircularIcon className="mx-auto h-20 w-20 bg-white" tone={pathwayTone[index]}>
                      <Icon aria-hidden="true" className="h-9 w-9" strokeWidth={1.55} />
                    </CircularIcon>
                    <h3 className="mt-4 text-sm font-bold text-primary-dark">{step.title}</h3>
                    <p className="mx-auto mt-2 max-w-[8.5rem] text-xs font-semibold leading-5 text-text-secondary">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:hidden">
            {pathwaySteps.map((step, index) => {
              const Icon = overviewIconMap[step.icon];
              return (
                <motion.div className="flex gap-4 rounded-[1rem] border border-border-soft bg-white p-4 shadow-soft" key={step.title} variants={staggerItem}>
                  <CircularIcon className="h-12 w-12 shrink-0" tone={pathwayTone[index]}>
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </CircularIcon>
                  <div>
                    <p className="text-xs font-bold text-primary">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-1 font-heading font-semibold text-primary-dark">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-text-secondary">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
