"use client";

import { Bandage, Footprints, Stethoscope } from "lucide-react";
import { PiPersonSimpleWalkDuotone } from "react-icons/pi";

import {
  InsightContainer,
  InsightIconBubble,
  InsightReveal,
  InsightSection,
  InsightWaveImage,
} from "@/components/insight/InsightPrimitives";

const nodes = [
  { icon: Footprints, label: "Kinetics", text: "Movement & Footwear", color: "#1479c9" },
  { icon: Stethoscope, label: "Insight", text: "Diagnostics & Assessment", color: "#1479c9", active: true },
  { icon: Bandage, label: "Wound Care", text: "Complex Wound Management", color: "#5cb85c" },
  { icon: PiPersonSimpleWalkDuotone, label: "Bio-Fit", text: "Restoration & Rehabilitation", color: "#5a67d8" },
];

export function InsightEcosystem() {
  return (
    <InsightSection className="border-y border-[#c9e6f8]/55 py-11">
      <InsightWaveImage className="inset-x-0 bottom-0 h-[18rem] w-full opacity-70" src="/insight/wave-ecosystem.png" />
      <InsightContainer>
        <InsightReveal className="text-center">
          <p className="font-heading text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary">Role in the N-Stride ecosystem</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-primary-dark">
            Diagnostics that power better outcomes
          </h2>
          <p className="mx-auto mt-3 max-w-[44rem] text-sm leading-7 text-text-secondary">
            Insight is the diagnostic and intelligence layer of the N-Stride system. It captures accurate data,
            reveals risk earlier and guides every next step with confidence.
          </p>
        </InsightReveal>
        <InsightReveal className="relative mt-8 pb-2" delay={0.08}>
          <div className="absolute left-[9%] right-[9%] top-12 hidden h-px bg-[linear-gradient(90deg,transparent,#9dd5f7,#9ee5c9,#9dd5f7,transparent)] lg:block" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {nodes.map((node) => {
              const Icon = node.icon;
              return (
                <div className="relative flex flex-col items-center text-center" key={node.label}>
                  <InsightIconBubble
                    className={node.active ? "h-[6.15rem] w-[6.15rem] bg-[radial-gradient(circle,#ffffff,#edf8ff)] shadow-[0_22px_54px_rgba(20,121,201,0.18)]" : "bg-white/92"}
                    color={node.color}
                    size="lg"
                  >
                    <Icon className="h-7 w-7" />
                  </InsightIconBubble>
                  <p className="mt-3 font-heading text-sm font-bold text-primary-dark">{node.label}</p>
                  <p className="mt-1 max-w-[9rem] text-xs leading-5 text-text-secondary">{node.text}</p>
                </div>
              );
            })}
          </div>
        </InsightReveal>
      </InsightContainer>
    </InsightSection>
  );
}
