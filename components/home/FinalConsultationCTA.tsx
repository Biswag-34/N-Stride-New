"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ctas } from "@/data/ctas";

const pathBadges = ["Checkup", "Footwear", "Wound Care", "Bio-Fit", "Step-Ahead"];

export function FinalConsultationCTA() {
  return (
    <Section id="consultation" className="pb-16 pt-16 sm:pt-20" variant="white">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/15 bg-[linear-gradient(135deg,rgba(221,241,255,0.9),rgba(255,255,255,0.94),rgba(38,182,200,0.12))] p-6 shadow-card sm:p-8 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(20,121,201,0.12),transparent_18rem)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <Badge variant="blue">Guided next step</Badge>
              <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
                Your next step deserves guided care.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-text-secondary">
                Whether you need a foot checkup, therapeutic footwear guidance, wound-care support or
                mobility restoration, N-Stride helps connect you to the right pathway.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={ctas.primary.href}>
                  {ctas.primary.label}
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Button>
                <Button href={ctas.verticals.href} variant="outline">
                  {ctas.verticals.label}
                </Button>
                <Button external href={ctas.store.href} variant="ghost">
                  Visit Store
                  <ExternalLink aria-hidden="true" className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="relative min-h-[18rem]">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 520 280" aria-hidden="true">
                <path d="M35 225 C105 95 180 222 250 115 C315 18 380 132 485 55" fill="none" stroke="#C9E6F8" strokeDasharray="7 12" strokeLinecap="round" strokeWidth="16" />
                <motion.path
                  d="M35 225 C105 95 180 222 250 115 C315 18 380 132 485 55"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  stroke="#1479C9"
                  strokeLinecap="round"
                  strokeWidth="4"
                  transition={{ duration: 1.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileInView={{ pathLength: 1 }}
                />
              </svg>
              {pathBadges.map((label, index) => (
                <motion.span
                  className="absolute rounded-full border border-border-soft bg-white px-4 py-2 text-sm font-bold text-primary-dark shadow-card"
                  initial={{ opacity: 0, y: 12 }}
                  key={label}
                  style={{
                    left: `${[0, 18, 38, 57, 72][index]}%`,
                    top: `${[72, 32, 58, 23, 7][index]}%`,
                  }}
                  transition={{ delay: 0.12 + index * 0.07, duration: 0.35 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  {label}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
