"use client";

import { CheckCircle2, Circle } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { proofPillars } from "@/data/proofPillars";

const fragmented = ["Product seller", "Separate consultation", "Separate wound care", "Separate rehabilitation", "No unified pathway"];
const connected = ["Insight", "Kinetics", "NPWT VAC & Wound Care", "Bio-Fit", "Step-Ahead"];

export function WhyConnectedCare() {
  const featuredPillars = proofPillars.slice(0, 3);

  return (
    <Section id="connected-care" className="overflow-hidden py-16 sm:py-20 lg:py-24" variant="white">
      <Container>
        <SectionHeading
          description="Fragmented care makes decisions harder. N-Stride is structured to connect assessment, protection, wound-care support, mobility restoration and clinical partnerships."
          eyebrow="Why N-Stride"
          title="Why connected care matters"
        />

        <div className="relative mt-12 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <div className="hidden items-center justify-center lg:flex">
            <div className="max-w-[9rem] rounded-full border border-border-soft bg-white px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-primary shadow-soft">
              From scattered decisions to guided care
            </div>
          </div>
          <motion.div
            className="relative overflow-hidden rounded-[1.75rem] border border-border-soft bg-background-soft p-6 lg:order-first"
            initial={{ opacity: 0, x: -24 }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-semibold">Fragmented Care</h3>
            <p className="mt-2 text-sm leading-6 text-text-secondary">Commonly experienced as separate touchpoints.</p>
            <div className="relative mt-8 min-h-60 sm:min-h-64">
              {fragmented.map((item, index) => (
                <motion.span
                  className="absolute rounded-full border border-border-soft bg-white px-4 py-2 text-sm font-semibold text-text-secondary shadow-soft"
                  initial={{ opacity: 0, scale: 0.92 }}
                  key={item}
                  style={{
                    left: `${[2, 40, 16, 54, 8][index]}%`,
                    top: `${[8, 20, 48, 64, 80][index]}%`,
                  }}
                  transition={{ delay: index * 0.08, duration: 0.35 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, scale: 1 }}
                >
                  <Circle aria-hidden="true" className="mr-2 inline h-3 w-3 text-text-muted" />
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-[1.75rem] border border-primary/20 bg-white p-6 shadow-soft"
            initial={{ opacity: 0, x: 24 }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-semibold">N-Stride Connected Care</h3>
            <p className="mt-2 text-sm leading-6 text-text-secondary">One ecosystem built around care continuity.</p>
            <div className="relative mt-8 min-h-60 sm:min-h-64">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 520 300" aria-hidden="true">
                <path d="M75 45 C165 88 205 122 260 150 C320 180 390 205 440 224" fill="none" stroke="#C9E6F8" strokeLinecap="round" strokeWidth="16" />
                <path d="M75 45 C165 88 205 122 260 150 C320 180 390 205 440 224" fill="none" stroke="#1479C9" strokeLinecap="round" strokeWidth="3" />
              </svg>
              {connected.map((item, index) => (
                <motion.span
                  className="absolute rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-bold text-primary-dark shadow-card"
                  initial={{ opacity: 0, y: 12 }}
                  key={item}
                  style={{
                    left: `${[2, 20, 38, 56, 64][index]}%`,
                    top: `${[4, 24, 44, 62, 74][index]}%`,
                  }}
                  transition={{ delay: 0.12 + index * 0.08, duration: 0.35 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle2 aria-hidden="true" className="mr-2 inline h-4 w-4 text-accent-aqua" />
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredPillars.map((pillar, index) => (
            <motion.article
              className="rounded-[1.25rem] border border-border-soft bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-primary/25 hover:shadow-card"
              initial={{ opacity: 0, y: 18 }}
              key={pillar.id}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary">{pillar.icon}</p>
              <h3 className="mt-3 text-lg font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-6 text-text-secondary">{pillar.description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
