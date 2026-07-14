"use client";

import { Activity, BrainCircuit, ChartNoAxesCombined, Droplets, Footprints, ShieldCheck } from "lucide-react";
import type { Vertical } from "@/data/verticals";

import {
  InsightAsset,
  InsightContainer,
  InsightIconBubble,
  InsightKicker,
  InsightReveal,
  InsightSection,
  InsightWaveImage,
} from "@/components/insight/InsightPrimitives";

type InsightToolsProps = {
  vertical: Vertical;
};

const tools = [
  { icon: Footprints, title: "3D Foot Scanning", text: "High-resolution capture for structure, alignment and morphology." },
  { icon: Droplets, title: "Wound Assessment", text: "Size, depth and tissue analysis with healing indicators." },
  { icon: Activity, title: "Pressure Mapping", text: "Dynamic and static pressure insights to identify risk and imbalance." },
  { icon: BrainCircuit, title: "Risk Stratification", text: "AI-powered scoring for ulceration and complication risk." },
  { icon: ChartNoAxesCombined, title: "Gait & Movement Analysis", text: "Step mechanics, load distribution and movement efficiency." },
  { icon: ShieldCheck, title: "Clinical Decision Support", text: "Evidence-based recommendations for faster confident decisions." },
];

export function InsightTools({ vertical }: InsightToolsProps) {
  return (
    <InsightSection className="bg-[linear-gradient(180deg,#ffffff,#f8fcff)] py-14">
      <InsightWaveImage className="-right-20 bottom-0 h-[34rem] w-[42rem] opacity-25" src="/insight/diagnostic-bg-soft.png" />
      <InsightContainer>
        <div className="grid items-center gap-9 lg:grid-cols-[0.42fr_0.34fr_0.24fr]">
          <InsightReveal>
            <InsightKicker>What Insight includes</InsightKicker>
            <h2 className="mt-3 max-w-[34rem] font-heading text-3xl font-bold text-primary-dark md:text-4xl">
              Advanced tools. Intelligent analysis.
            </h2>
            <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <div className="flex gap-4" key={tool.title}>
                    <InsightIconBubble className="h-11 w-11 shadow-none" size="sm">
                      <Icon className="h-5 w-5" />
                    </InsightIconBubble>
                    <div>
                      <h3 className="font-heading text-sm font-bold text-primary-dark">{tool.title}</h3>
                      <p className="mt-1 text-xs leading-5 text-text-secondary">{tool.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </InsightReveal>

          <InsightReveal delay={0.08}>
            <InsightAsset
              alt="Foot scan platform diagnostic visualization"
              className="mx-auto min-h-[350px] max-w-[430px] [mask-image:radial-gradient(ellipse_at_center,black_72%,transparent_94%)]"
              imageClassName="object-contain"
              sizes="(max-width: 1024px) 80vw, 30vw"
              src="/insight/scan-foot-platform.png"
            />
          </InsightReveal>

          <InsightReveal className="grid gap-5" delay={0.14}>
            <InsightAsset
              alt="Pressure map and gait analysis illustration"
              className="min-h-[10.5rem] rounded-[1.25rem] bg-white shadow-[0_18px_52px_rgba(20,121,201,0.1)] ring-1 ring-[#c9e6f8]"
              imageClassName="object-contain p-2"
              sizes="(max-width: 1024px) 90vw, 22vw"
              src="/insight/pressure-map-card.png"
            />
            <InsightAsset
              alt="Wound assessment diagnostics visual"
              className="min-h-[10.5rem] rounded-[1.25rem] bg-white shadow-[0_18px_52px_rgba(20,121,201,0.1)] ring-1 ring-[#c9e6f8]"
              imageClassName="object-contain p-2"
              sizes="(max-width: 1024px) 90vw, 22vw"
              src="/insight/wound-assessment-card.png"
            />
            <p className="text-xs font-semibold leading-5 text-text-secondary">{vertical.shortDescription}</p>
          </InsightReveal>
        </div>
      </InsightContainer>
    </InsightSection>
  );
}
