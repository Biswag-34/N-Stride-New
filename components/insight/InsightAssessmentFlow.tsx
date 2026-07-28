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
    <InsightSection className="bg-[linear-gradient(180deg,#ffffff,#f7fcff)] py-12">
      <InsightContainer>
        <InsightReveal className="text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-dark md:text-[2.25rem]">From scan to actionable insight</h2>
        </InsightReveal>
        <InsightReveal className="relative mt-9 overflow-hidden rounded-[1rem] border border-[#c9e6f8]/70 bg-white/72 px-4 py-6 shadow-[0_20px_60px_rgba(20,121,201,0.07)] backdrop-blur sm:px-6 lg:px-8 lg:py-9" delay={0.08}>
          <div aria-hidden="true" className="absolute left-8 top-8 bottom-8 w-px bg-[linear-gradient(180deg,transparent,#7ccbef,#70d7c0,#7ccbef,transparent)] lg:hidden" />
          <div aria-hidden="true" className="absolute left-[8%] right-[8%] top-[5.2rem] hidden h-px bg-[linear-gradient(90deg,transparent,#7ccbef,#70d7c0,#7ccbef,transparent)] lg:block" />
          <div className="relative grid gap-5 lg:grid-cols-6 lg:gap-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  className="relative flex items-center gap-4 pl-2 lg:flex-col lg:gap-3 lg:pl-0 lg:text-center"
                  key={step.title}
                  transition={{ delay: index * 0.06, duration: 0.55, ease: insightEase }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative">
                    <span className="absolute inset-[-0.35rem] rounded-full bg-[#dff4ff]/70 blur-md" />
                    <InsightIconBubble className="relative h-14 w-14 border-white bg-white shadow-[0_14px_32px_rgba(20,121,201,0.13)]" color={index % 2 ? "#26b6c8" : "#1479c9"} size="lg">
                      <Icon className="h-7 w-7" />
                    </InsightIconBubble>
                  </div>
                  <div className="max-w-[12rem]">
                    <p className="font-heading text-[0.7rem] font-bold text-primary/80">0{index + 1}</p>
                    <h3 className="mt-1 font-heading text-sm font-bold text-primary-dark">{step.title}</h3>
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
