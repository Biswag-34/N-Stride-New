"use client";

import { BadgeCheck, ClipboardCheck, Eye, Gauge, Radar, ScanLine } from "lucide-react";
import { motion } from "framer-motion";

import {
  InsightContainer,
  InsightIconBubble,
  InsightReveal,
  InsightSection,
  insightEase,
} from "@/components/insight/InsightPrimitives";

const steps = [
  { icon: ScanLine, title: "Capture", text: "scan inputs" },
  { icon: Gauge, title: "Measure", text: "pressure + gait" },
  { icon: Eye, title: "Interpret", text: "clinical view" },
  { icon: BadgeCheck, title: "Prioritize", text: "risk level" },
  { icon: ClipboardCheck, title: "Recommend", text: "care path" },
  { icon: Radar, title: "Track", text: "follow-up" },
];

export function InsightAssessmentFlow() {
  return (
    <InsightSection className="bg-[linear-gradient(180deg,#ffffff,#f7fcff)] py-14">
      <InsightContainer>
        <InsightReveal className="text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-dark md:text-[2.25rem]">From scan to actionable insight</h2>
        </InsightReveal>
        <InsightReveal className="relative mt-9 overflow-hidden rounded-[1.15rem] border border-[#c9e6f8]/80 bg-white px-4 py-7 shadow-[0_22px_66px_rgba(20,121,201,0.08)] sm:px-6 lg:px-8 lg:py-10" delay={0.08}>
          <div aria-hidden="true" className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#e8fbff] blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-28 left-10 h-64 w-80 rounded-full bg-[#eefcf7] blur-3xl" />
          <div aria-hidden="true" className="absolute bottom-10 left-10 top-10 w-px bg-[linear-gradient(180deg,transparent,#1479c9,#26b6c8,transparent)] lg:bottom-auto lg:left-[9%] lg:right-[9%] lg:top-[5.55rem] lg:h-px lg:w-auto" />
          <div className="relative grid gap-5 lg:grid-cols-6 lg:gap-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const color = index % 2 ? "#26b6c8" : "#1479c9";
              return (
                <motion.div
                  className="relative grid grid-cols-[auto_1fr] items-center gap-4 rounded-[0.9rem] bg-white/86 p-3 shadow-[0_14px_34px_rgba(20,121,201,0.06)] ring-1 ring-[#d8edf8] lg:min-h-[11.5rem] lg:grid-cols-1 lg:justify-items-center lg:p-4 lg:text-center"
                  key={step.title}
                  transition={{ delay: index * 0.06, duration: 0.55, ease: insightEase }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative">
                    <span className="absolute inset-[-0.45rem] rounded-[1.25rem] bg-[#dff4ff]/80 blur-md" />
                    <span className="absolute inset-[-0.18rem] rounded-[1rem] border border-white/80" />
                    <InsightIconBubble className="relative h-[4.4rem] w-[4.4rem] rounded-[1rem] border-white bg-[linear-gradient(145deg,#ffffff,#f3fbff)] shadow-[0_16px_34px_rgba(20,121,201,0.14)]" color={color} size="lg">
                      <Icon className="h-8 w-8" strokeWidth={1.65} />
                    </InsightIconBubble>
                    <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-white text-[0.66rem] font-bold shadow-[0_8px_18px_rgba(20,121,201,0.13)] ring-1 ring-[#d8edf8]" style={{ color }}>
                      {index + 1}
                    </span>
                  </div>
                  <div className="max-w-[12rem]">
                    <h3 className="font-heading text-sm font-bold text-primary-dark">{step.title}</h3>
                    <p className="mt-1 text-xs font-semibold leading-5 text-text-secondary">{step.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="relative mt-7 grid gap-3 border-t border-[#d8ebf8] pt-5 md:grid-cols-[0.35fr_0.3fr_0.35fr]">
            <div className="rounded-[0.75rem] bg-[#f7fcff] px-4 py-3">
              <p className="font-heading text-sm font-bold text-primary-dark">Input</p>
              <p className="mt-1 text-xs font-semibold leading-5 text-text-secondary">foot scan, pressure and wound data</p>
            </div>
            <div className="rounded-[0.75rem] bg-[linear-gradient(135deg,#e9f8ff,#eefcf7)] px-4 py-3 text-center">
              <p className="font-heading text-sm font-bold text-primary-dark">Insight engine</p>
              <p className="mt-1 text-xs font-semibold leading-5 text-text-secondary">risk and care logic</p>
            </div>
            <div className="rounded-[0.75rem] bg-[#f7fcff] px-4 py-3 md:text-right">
              <p className="font-heading text-sm font-bold text-primary-dark">Output</p>
              <p className="mt-1 text-xs font-semibold leading-5 text-text-secondary">clear next-step recommendation</p>
            </div>
          </div>
        </InsightReveal>
      </InsightContainer>
    </InsightSection>
  );
}
