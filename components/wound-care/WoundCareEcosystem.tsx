"use client";

import { Bandage, Footprints, Stethoscope } from "lucide-react";
import { PiPersonSimpleWalkDuotone } from "react-icons/pi";

import {
  WoundContainer,
  WoundBackgroundImage,
  WoundIconBubble,
  WoundReveal,
  WoundSection,
} from "@/components/wound-care/WoundCarePrimitives";

const nodes = [
  { icon: Footprints, label: "Kinetics", text: "Movement & Protection", color: "#1479c9" },
  { icon: Stethoscope, label: "Insight", text: "Assessment & Diagnosis", color: "#26b6c8" },
  { icon: Bandage, label: "Wound Care", text: "Dressing & Healing Support", color: "#f5a623", active: true },
  { icon: PiPersonSimpleWalkDuotone, label: "Bio-Fit", text: "Restoration & Reconstruction", color: "#5a67d8" },
];

export function WoundCareEcosystem() {
  return (
    <WoundSection className="pb-9 pt-2">
      <WoundBackgroundImage className="-top-20 right-0 h-[22rem] w-[58rem] opacity-14" src="/wound-care/amber-wave.png" />
      <WoundContainer>
        <WoundReveal>
          <div className="grid gap-6 rounded-[1.35rem] bg-white/94 px-6 py-6 shadow-[0_22px_60px_rgba(16,42,67,0.07)] ring-1 ring-[#efd8b3]/55 backdrop-blur lg:grid-cols-[0.32fr_0.68fr] lg:items-center">
            <div>
              <h2 className="font-heading text-xl font-bold text-primary-dark">
                Where this belongs in the N-Stride ecosystem
              </h2>
              <p className="mt-5 max-w-[32rem] text-sm leading-7 text-text-secondary">
                Wound care is most effective when connected to the right insights, protection and restoration pathways.
              </p>
            </div>
            <div className="relative">
                <div className="absolute left-[8%] right-[8%] top-12 hidden h-px bg-[linear-gradient(90deg,transparent,#9dd5f7,#f5a623,#b8a9fb,transparent)] lg:block" />
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {nodes.map((node) => {
                  const Icon = node.icon;
                  return (
                    <div className="relative text-center" key={node.label}>
                      <WoundIconBubble className={node.active ? "h-[5.4rem] w-[5.4rem] bg-[radial-gradient(circle,#ffffff,#fff7e8)] shadow-[0_18px_42px_rgba(245,166,35,0.15)]" : "bg-white/95"} color={node.color} size="lg">
                        <Icon className="h-7 w-7" />
                      </WoundIconBubble>
                      <p className="mt-3 font-heading text-sm font-bold text-primary-dark">{node.label}</p>
                      <p className="mt-1 text-xs leading-5 text-text-secondary">{node.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </WoundReveal>
      </WoundContainer>
    </WoundSection>
  );
}
