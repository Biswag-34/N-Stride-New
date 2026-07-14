"use client";

import { ArrowRight, BadgeCheck, ClipboardCheck, Eye, Gauge, Radar, ScanLine } from "lucide-react";

import {
  InsightContainer,
  InsightIconBubble,
  InsightReveal,
  InsightSection,
  InsightWaveImage,
} from "@/components/insight/InsightPrimitives";

const steps = [
  { icon: ScanLine, title: "Capture", text: "Scan in minutes with advanced devices." },
  { icon: Gauge, title: "Analyze", text: "AI algorithms process data with precision." },
  { icon: Eye, title: "Interpret", text: "Clear visual insights and risk indicators." },
  { icon: BadgeCheck, title: "Recommend", text: "Personalized care and device suggestions." },
  { icon: ClipboardCheck, title: "Act", text: "Integrate with treatment plan seamlessly." },
  { icon: Radar, title: "Track", text: "Monitor progress and adjust care over time." },
];

export function InsightAssessmentFlow() {
  return (
    <InsightSection className="bg-[linear-gradient(180deg,#ffffff,#f8fcff)] py-12">
      <InsightWaveImage className="inset-x-0 top-9 h-64 w-full opacity-80" src="/insight/assessment-flow-line.png" />
      <InsightContainer>
        <InsightReveal className="text-center">
          <p className="font-heading text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary">How assessment works</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-primary-dark">From scan to actionable insight</h2>
        </InsightReveal>
        <InsightReveal className="relative mt-9" delay={0.08}>
          <div className="absolute left-[6%] right-[6%] top-14 hidden h-px bg-[linear-gradient(90deg,transparent,#9dd5f7,#9ee5c9,#9dd5f7,transparent)] lg:block" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div className="relative rounded-[1.25rem] bg-white/82 p-5 shadow-[0_16px_42px_rgba(20,121,201,0.06)] ring-1 ring-[#d8ebf8]/75 backdrop-blur" key={step.title}>
                  {index < steps.length - 1 ? (
                    <ArrowRight aria-hidden="true" className="absolute -right-4 top-10 hidden h-4 w-8 text-primary/45 lg:block" />
                  ) : null}
                  <p className="font-heading text-xs font-bold text-primary">0{index + 1}</p>
                  <InsightIconBubble className="mt-3 h-10 w-10 shadow-none" size="sm">
                    <Icon className="h-5 w-5" />
                  </InsightIconBubble>
                  <h3 className="mt-4 font-heading text-sm font-bold text-primary-dark">{step.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-text-secondary">{step.text}</p>
                </div>
              );
            })}
          </div>
        </InsightReveal>
      </InsightContainer>
    </InsightSection>
  );
}
