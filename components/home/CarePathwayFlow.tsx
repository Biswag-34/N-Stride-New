"use client";

import { Activity, ClipboardList, HeartPulse, Move, RefreshCw, ScanSearch, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { carePathway } from "@/data/carePathway";

const icons = {
  "clipboard-list": ClipboardList,
  "scan-search": ScanSearch,
  "shield-check": ShieldCheck,
  "heart-pulse": HeartPulse,
  move: Move,
  "refresh-cw": RefreshCw,
};

export function CarePathwayFlow() {
  return (
    <Section id="care-pathway" className="overflow-hidden py-16 sm:py-20 lg:py-24" variant="white">
      <Container>
        <SectionHeading
          align="center"
          description="N-Stride connects each stage of foot and lower-limb care into one guided pathway."
          eyebrow="Care pathway"
          title="From first concern to confident movement"
        />

        <div className="relative mt-12 hidden overflow-hidden rounded-[2rem] border border-border-soft bg-[linear-gradient(135deg,rgba(244,250,255,0.92),rgba(255,255,255,0.96))] px-7 py-12 shadow-soft lg:block">
          <div className="absolute inset-x-10 top-10 h-px bg-gradient-to-r from-transparent via-border-soft to-transparent" />
          <motion.svg
            className="absolute left-8 right-8 top-[7.15rem] h-28 w-[calc(100%-4rem)]"
            viewBox="0 0 1180 160"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.path
              d="M40 84 C170 18 270 138 390 84 C510 30 610 138 730 84 C850 30 960 124 1140 70"
              fill="none"
              initial={{ pathLength: 0 }}
              stroke="#C9E6F8"
              strokeLinecap="round"
              strokeWidth="16"
              transition={{ duration: 1.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileInView={{ pathLength: 1 }}
            />
            <motion.path
              d="M40 84 C170 18 270 138 390 84 C510 30 610 138 730 84 C850 30 960 124 1140 70"
              fill="none"
              initial={{ pathLength: 0 }}
              stroke="#1479C9"
              strokeLinecap="round"
              strokeWidth="3"
              transition={{ duration: 1.25, delay: 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              whileInView={{ pathLength: 1 }}
            />
          </motion.svg>

          <div className="relative grid grid-cols-6 gap-4">
            {carePathway.map((item, index) => {
              const Icon = icons[item.icon as keyof typeof icons] ?? Activity;
              const offset = index % 2 === 0 ? "mt-24" : "mb-24";

              return (
                <motion.article
                  className={`relative z-10 min-h-[11.75rem] rounded-[1.15rem] border border-border-soft bg-white/95 p-4 shadow-soft transition duration-200 focus-within:-translate-y-1 hover:-translate-y-1 hover:shadow-card ${offset}`}
                  initial={{ opacity: 0, y: 24 }}
                  key={item.id}
                  tabIndex={0}
                  transition={{ delay: index * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <span className="absolute left-1/2 top-[-1.55rem] h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-8 ring-background-soft" />
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-heading text-sm font-semibold text-primary">{item.step}</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-background-soft text-primary">
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-text-secondary">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.connectedVerticals.slice(0, 2).map((vertical) => (
                      <Badge key={vertical} variant="neutral">
                        {vertical}
                      </Badge>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="relative mt-10 grid gap-4 border-l border-border-soft pl-5 lg:hidden">
          {carePathway.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons] ?? Activity;

            return (
              <motion.article
                className="relative rounded-[1.15rem] border border-border-soft bg-white p-5 shadow-soft"
                initial={{ opacity: 0, x: -18 }}
                key={item.id}
                transition={{ delay: index * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, amount: 0.2 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <span className="absolute -left-[1.2rem] top-6 h-3 w-3 rounded-full bg-primary ring-4 ring-background-soft" />
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-background-soft text-primary">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-primary">{item.step}</p>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
