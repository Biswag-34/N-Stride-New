"use client";

import { Activity, BrainCircuit, ChartNoAxesCombined, Droplets, Footprints, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import type { Vertical } from "@/data/verticals";

import {
  InsightAsset,
  InsightContainer,
  InsightIconBubble,
  InsightReveal,
  InsightSection,
  InsightWaveImage,
  insightEase,
} from "@/components/insight/InsightPrimitives";

type InsightToolsProps = {
  vertical: Vertical;
};

const tools = [
  { icon: Footprints, title: "3D Foot Scan" },
  { icon: Activity, title: "Pressure Map" },
  { icon: ChartNoAxesCombined, title: "Gait Review" },
  { icon: Droplets, title: "Wound Capture" },
  { icon: BrainCircuit, title: "Risk Scoring" },
  { icon: ShieldCheck, title: "Care Decision" },
];

export function InsightTools({ vertical }: InsightToolsProps) {
  return (
    <InsightSection className="bg-[linear-gradient(180deg,#ffffff,#f7fcff)] py-10">
      <InsightWaveImage className="-right-20 bottom-0 h-[30rem] w-[42rem] opacity-24" src="/insight/diagnostic-bg-soft.png" />
      <InsightWaveImage className="-left-28 top-0 h-72 w-[34rem] opacity-16" src="/insight/wave-ecosystem.png" />
      <InsightContainer>
        <InsightReveal className="mx-auto max-w-[42rem] text-center">
          <h2 className="font-heading text-3xl font-bold leading-tight text-primary-dark md:text-[2.35rem]">
              Advanced tools. Intelligent analysis.
            </h2>
          </InsightReveal>

        <div className="relative mt-8 grid items-center gap-5 lg:grid-cols-[0.3fr_0.4fr_0.3fr]">
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 hidden h-[78%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dff4ff]/72 blur-[54px] lg:block" />
          <InsightReveal className="grid gap-3" delay={0.04}>
            {tools.slice(0, 3).map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  className="group flex items-center gap-3 rounded-l-[2.5rem] rounded-r-[0.8rem] border border-[#c9e6f8]/75 bg-white/76 p-3 shadow-[0_14px_34px_rgba(20,121,201,0.07)] backdrop-blur transition hover:-translate-x-1 hover:bg-white"
                  key={tool.title}
                  transition={{ delay: index * 0.04, duration: 0.5, ease: insightEase }}
                  whileHover={{ scale: 1.02 }}
                >
                  <InsightIconBubble className="h-14 w-14 bg-[#f2fbff] shadow-none" size="lg">
                    <Icon className="h-7 w-7" />
                  </InsightIconBubble>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-primary-dark">{tool.title}</h3>
                  </div>
                </motion.div>
              );
            })}
          </InsightReveal>

          <InsightReveal className="relative min-h-[320px]" delay={0.1}>
            <div className="absolute inset-x-8 bottom-7 h-16 rounded-full bg-[#a7ddf7]/50 blur-[28px]" />
            <InsightAsset
              alt="Foot scan platform diagnostic visualization"
              className="mx-auto min-h-[320px] max-w-[460px] mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,black_58%,rgba(0,0,0,0.78)_76%,transparent_96%)]"
              imageClassName="object-contain"
              sizes="(max-width: 1024px) 86vw, 32vw"
              src="/insight/scan-foot-platform.png"
            />
            <InsightAsset
              alt="Pressure map diagnostic visual"
              className="absolute -bottom-2 left-1 min-h-[8.5rem] w-[46%] rotate-[-3deg] opacity-90 mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,black_52%,transparent_94%)]"
              imageClassName="object-contain"
              sizes="(max-width: 1024px) 40vw, 16vw"
              src="/insight/pressure-map-card.png"
            />
            <InsightAsset
              alt="Wound assessment diagnostics visual"
              className="absolute -right-1 top-4 min-h-[8.25rem] w-[44%] rotate-[3deg] opacity-86 mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_94%)]"
              imageClassName="object-contain"
              sizes="(max-width: 1024px) 40vw, 15vw"
              src="/insight/wound-assessment-card.png"
            />
          </InsightReveal>

          <InsightReveal className="grid gap-3" delay={0.16}>
            {tools.slice(3).map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  className="group flex items-center gap-3 rounded-l-[0.8rem] rounded-r-[2.5rem] border border-[#c9e6f8]/75 bg-white/76 p-3 shadow-[0_14px_34px_rgba(20,121,201,0.07)] backdrop-blur transition hover:translate-x-1 hover:bg-white"
                  key={tool.title}
                  transition={{ delay: index * 0.04, duration: 0.5, ease: insightEase }}
                  whileHover={{ scale: 1.02 }}
                >
                  <InsightIconBubble className="h-14 w-14 bg-[#f2fbff] shadow-none" color="#26b6c8" size="lg">
                    <Icon className="h-7 w-7" />
                  </InsightIconBubble>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-primary-dark">{tool.title}</h3>
                  </div>
                </motion.div>
              );
            })}
          </InsightReveal>
        </div>
        <p className="sr-only">{vertical.shortDescription}</p>
      </InsightContainer>
    </InsightSection>
  );
}
