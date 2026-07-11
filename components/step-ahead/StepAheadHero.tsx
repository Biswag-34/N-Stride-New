"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { stepAheadProgram } from "@/data/stepAhead";

const systemNodes = ["Technology", "Training", "Inventory", "Wound Care", "Clinic Setup"];
const partnerNodes = ["Doctors", "Clinics", "Nursing Homes", "Hospitals"];

export function StepAheadHero() {
  const reduceMotion = useReducedMotion();

  return (
    <Section className="relative isolate overflow-hidden py-12 sm:py-16 lg:py-20" variant="soft">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(92,184,92,0.16),transparent_24rem),linear-gradient(135deg,rgba(255,255,255,0.96),rgba(221,241,255,0.72))]" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.96fr)_minmax(28rem,1.04fr)] lg:items-center">
          <div>
            <motion.p
              className="inline-flex rounded-full border border-accent-green/25 bg-accent-green/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.13em] text-accent-green"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {stepAheadProgram.name}
            </motion.p>
            <motion.h1
              className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-primary-dark sm:text-5xl lg:text-[3.35rem]"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
            >
              {stepAheadProgram.headline}
            </motion.h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
              {stepAheadProgram.coreDescription}
            </p>
            <p className="mt-5 font-heading text-lg font-semibold text-primary-dark">
              {stepAheadProgram.communicationLines[0]}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={stepAheadProgram.ctas.primary.href} size="lg">
                {stepAheadProgram.ctas.primary.label}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button href={stepAheadProgram.ctas.compare.href} size="lg" variant="outline">
                {stepAheadProgram.ctas.compare.label}
              </Button>
              <Button href={stepAheadProgram.ctas.workflow.href} size="lg" variant="ghost">
                {stepAheadProgram.ctas.workflow.label}
              </Button>
            </div>
          </div>

          <motion.div
            className="relative mx-auto h-[24rem] w-full max-w-[36rem] overflow-hidden rounded-[2rem] border border-border-soft bg-white/80 shadow-card"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ delay: 0.18, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Step-Ahead program system visual"
          >
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 380" aria-hidden="true">
              <defs>
                <linearGradient id="stepAheadLine" x1="0" x2="1" y1="0" y2="1">
                  <stop stopColor="#1479C9" stopOpacity="0.35" />
                  <stop offset="1" stopColor="#5CB85C" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              {[80, 170, 280, 390, 480].map((x) => (
                <motion.path
                  d={`M280 190 C280 145 ${x} 130 ${x} 88`}
                  fill="none"
                  initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
                  animate={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.35, duration: 0.9, ease: "easeOut" }}
                  key={x}
                  stroke="url(#stepAheadLine)"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              ))}
              {[120, 230, 340, 450].map((x) => (
                <motion.path
                  d={`M280 190 C280 236 ${x} 250 ${x} 300`}
                  fill="none"
                  initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
                  animate={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.45, duration: 0.9, ease: "easeOut" }}
                  key={`partner-${x}`}
                  stroke="#C9E6F8"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              ))}
            </svg>
            <motion.div
              className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-accent-green/25 bg-white text-center shadow-card"
              animate={reduceMotion ? undefined : { scale: [1, 1.025, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="font-heading text-xl font-semibold text-primary-dark">Step-Ahead</span>
              <span className="mt-1 text-xs font-semibold text-accent-green">Partner setup</span>
            </motion.div>
            {systemNodes.map((node, index) => (
              <motion.div
                className="absolute top-12 w-[6.8rem] rounded-lg border border-border-soft bg-white px-3 py-2 text-center text-xs font-bold text-primary-dark shadow-soft"
                style={{ left: `calc(${[14, 30, 50, 69, 85][index]}% - 3.4rem)` }}
                initial={reduceMotion ? false : { opacity: 0, y: -10 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 0.42 + index * 0.06, duration: 0.38, ease: "easeOut" }}
                key={node}
              >
                {node}
              </motion.div>
            ))}
            {partnerNodes.map((node, index) => (
              <motion.div
                className="absolute bottom-12 w-[7rem] rounded-full border border-border-soft bg-background-soft px-3 py-2 text-center text-xs font-bold text-primary-dark"
                style={{ left: `calc(${[21, 40, 60, 79][index]}% - 3.5rem)` }}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + index * 0.06, duration: 0.38, ease: "easeOut" }}
                key={node}
              >
                {node}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
