"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { carePathway } from "@/data/carePathway";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { homeIconMap, IconBubble } from "./HomeDesignPrimitives";

const iconForStep: Record<string, keyof typeof homeIconMap> = {
  "clipboard-list": "scan",
  "scan-search": "clipboard",
  "shield-check": "shield",
  "heart-pulse": "heart",
  move: "refresh",
  "refresh-cw": "userCare",
};

export function HomeCareJourney() {
  return (
    <section className="bg-white py-8">
      <Container>
        <motion.div
          className="relative overflow-hidden rounded-[1.35rem] border border-border-soft bg-white px-4 py-7 shadow-[0_24px_70px_rgba(20,121,201,0.08)] xs:px-5 sm:rounded-[2.25rem] sm:px-8 sm:py-8 lg:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={staggerContainer}
        >
          <div className="grid gap-5 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <motion.div variants={staggerItem}>
              <h2 className="max-w-[24rem] text-2xl font-semibold leading-tight text-primary-dark sm:text-3xl">
                Guided care. Every step of the way.
              </h2>
            </motion.div>
            <motion.div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between" variants={staggerItem}>
              <p className="max-w-[34rem] text-sm leading-6 text-text-secondary">
                From your first concern to long-term recovery, we are with you at every step to assess, treat, protect
                and restore.
              </p>
              <Button className="w-full shrink-0 rounded-[0.65rem] xs:w-auto" href="/contact?type=general" size="sm" variant="outline">
                See the full journey
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          <div className="relative mt-9 hidden lg:block">
            <svg className="pointer-events-none absolute left-0 top-1 z-0 h-28 w-full" viewBox="0 0 1200 112" preserveAspectRatio="none" aria-hidden="true">
              <path
                d="M72 47 C155 47 163 47 228 47 C289 47 303 47 366 47 C430 47 443 47 505 47 C568 47 583 47 646 47 C710 47 724 47 786 47 C850 47 866 47 928 47 C992 47 1042 47 1084 61 C1138 79 1168 99 1182 115"
                fill="none"
                stroke="#1479C9"
                strokeDasharray="1 13"
                strokeLinecap="round"
                strokeOpacity="0.34"
                strokeWidth="3"
              />
            </svg>
            <div className="relative z-10 grid grid-cols-6 gap-2">
              {carePathway.map((step, index) => {
                const Icon = homeIconMap[iconForStep[step.icon] ?? "activity"];

                return (
                  <motion.article className="relative text-center" key={step.id} variants={staggerItem}>
                    <span className="absolute left-1/2 top-0 z-20 ml-[-2.8rem] rounded-full bg-soft-sky px-2 py-1 text-[0.65rem] font-bold text-primary">
                      {step.step}
                    </span>
                    <IconBubble className="mx-auto h-20 w-20 bg-white shadow-[0_18px_38px_rgba(20,121,201,0.12)]" tone="blue">
                      <Icon aria-hidden="true" className="h-8 w-8" strokeWidth={1.6} />
                    </IconBubble>
                    <h3 className="mt-4 text-sm font-bold text-primary-dark">{step.title}</h3>
                    <p className="mx-auto mt-2 max-w-[8.8rem] text-xs leading-5 text-text-secondary">
                      {index === 0
                        ? "Share your concern and medical history"
                        : index === 1
                          ? "Clinical evaluation, scans & assessments"
                          : index === 2
                            ? "Prevent complications & plan the right care"
                            : index === 3
                              ? "Personalized treatment & device solutions"
                              : index === 4
                                ? "Rehabilitation & functional recovery"
                                : "Ongoing follow-up & long-term support"}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:hidden">
            {carePathway.map((step) => {
              const Icon = homeIconMap[iconForStep[step.icon] ?? "activity"];

              return (
                <motion.article className="flex gap-3 rounded-[1rem] border border-border-soft bg-background-soft/60 p-3 xs:gap-4 xs:rounded-[1.2rem] xs:p-4" key={step.id} variants={staggerItem}>
                  <IconBubble className="h-12 w-12 shrink-0" tone="blue">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </IconBubble>
                  <div>
                    <p className="text-xs font-bold text-primary">{step.step}</p>
                    <h3 className="mt-1 font-heading text-lg font-semibold text-primary-dark">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-text-secondary">{step.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
