"use client";

import { Bandage, CircleDot, Footprints, Stethoscope } from "lucide-react";
import { PiPersonSimpleWalkDuotone } from "react-icons/pi";

import {
  BioFitContainer,
  BioFitDottedField,
  BioFitIconBubble,
  BioFitSoftDivider,
  BioFitSection,
  BioFitReveal,
} from "@/components/biofit/BioFitPrimitives";

const nodes = [
  { icon: Footprints, label: "Kinetics", text: "Movement & footwear", x: "left-[10%] top-[8%]" },
  { icon: Stethoscope, label: "Insight", text: "Assessment & diagnostics", x: "right-[8%] top-[10%]" },
  { icon: Bandage, label: "Wound Care", text: "Protection & healing", x: "left-[12%] bottom-[4%]" },
  { icon: PiPersonSimpleWalkDuotone, label: "Bio-Fit", text: "Restoration & custom solutions", x: "right-[9%] bottom-[3%]" },
];

export function BioFitEcosystem() {
  return (
    <BioFitSection className="bg-white pb-20 pt-20">
      <BioFitDottedField className="-left-28 bottom-0 h-72 w-[42rem]" />
      <BioFitDottedField className="-right-24 top-4 h-80 w-[38rem]" />
      <BioFitSoftDivider className="bottom-[-1.8rem]" />
      <BioFitContainer>
        <div className="grid items-center gap-10 lg:grid-cols-[0.37fr_0.34fr_0.29fr]">
          <BioFitReveal>
            <h2 className="font-heading text-3xl font-bold tracking-[-0.02em] text-primary-dark">
              A vital part of the N-Stride ecosystem
            </h2>
            <p className="mt-4 max-w-[34rem] text-sm leading-7 text-text-secondary">
              Bio-Fit connects advanced fabrication with clinical insight and compassionate care, delivering support
              that goes beyond the device.
            </p>
          </BioFitReveal>

          <BioFitReveal delay={0.08}>
            <div className="relative mx-auto h-[330px] w-full max-w-[390px]">
              <svg aria-hidden="true" className="absolute inset-0 h-full w-full text-[#d8d0ff]" fill="none" viewBox="0 0 390 330">
                <circle cx="195" cy="165" r="122" stroke="currentColor" strokeOpacity=".72" />
                <circle cx="195" cy="165" r="88" stroke="currentColor" strokeDasharray="4 9" strokeOpacity=".72" />
                <path d="M86 86C150 26 236 28 300 88M82 244c74 54 147 55 222 0" stroke="currentColor" strokeOpacity=".28" />
              </svg>
              <div className="absolute inset-[25%] rounded-full bg-[#f8f5ff]/70 blur-sm" />
              <div className="absolute inset-[34%] flex items-center justify-center rounded-full bg-white text-center shadow-[0_20px_46px_rgba(90,103,216,0.14)] ring-1 ring-[#d8d0ff]">
                <p className="font-heading text-sm font-bold text-primary-dark">
                  N-Stride
                  <br />
                  <span className="text-[0.7rem] text-text-secondary">You at the center of everything</span>
                </p>
              </div>
              {nodes.map((node) => {
                const Icon = node.icon;
                return (
                  <div className={`absolute flex w-28 flex-col items-center text-center ${node.x}`} key={node.label}>
                    <BioFitIconBubble size="md">
                      <Icon className="h-6 w-6" />
                    </BioFitIconBubble>
                    <p className="mt-2 font-heading text-xs font-bold text-[#7357d8]">{node.label}</p>
                    <p className="mt-1 text-[0.66rem] leading-4 text-text-secondary">{node.text}</p>
                  </div>
                );
              })}
            </div>
          </BioFitReveal>

          <BioFitReveal delay={0.14}>
            <div className="relative rounded-[0.95rem] rounded-br-[4rem] bg-white p-9 shadow-[-18px_22px_55px_rgba(90,103,216,0.11)] ring-1 ring-[#d8d0ff]">
              <span className="absolute left-[-5.5rem] top-1/2 hidden h-px w-24 -translate-y-1/2 bg-[#d8d0ff] lg:block" />
              <CircleDot aria-hidden="true" className="h-5 w-5 text-[#7357d8]" />
              <p className="mt-7 font-heading text-xl font-bold leading-relaxed text-[#7357d8]">
                Bio-Fit brings restoration, accuracy, and adaptation together so you can focus on living.
              </p>
            </div>
          </BioFitReveal>
        </div>
      </BioFitContainer>
    </BioFitSection>
  );
}
