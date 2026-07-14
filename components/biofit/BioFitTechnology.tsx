"use client";

import { ScanLine, ShieldCheck, Sparkles, UserRoundCheck } from "lucide-react";
import type { Vertical } from "@/data/verticals";

import {
  BioFitContainer,
  BioFitAsset,
  BioFitDottedField,
  BioFitIconBubble,
  BioFitReveal,
  BioFitSection,
} from "@/components/biofit/BioFitPrimitives";

type BioFitTechnologyProps = {
  vertical: Vertical;
};

const fallbackTechnology = [
  { icon: ScanLine, title: "Advanced Scanning", text: "3D scanning for precise measurement & analysis." },
  { icon: Sparkles, title: "Custom Fabrication", text: "Digital design and advanced manufacturing for perfect fit." },
  { icon: ShieldCheck, title: "Premium Materials", text: "Lightweight, durable and biocompatible materials." },
  { icon: UserRoundCheck, title: "Clinical Expertise", text: "Experienced professionals guiding every step." },
];

export function BioFitTechnology({ vertical }: BioFitTechnologyProps) {
  const points = fallbackTechnology.map((item, index) => ({
    ...item,
    text: vertical.technologyPoints[index] ?? item.text,
  }));

  return (
    <BioFitSection className="bg-white py-12">
      <BioFitAsset
        alt=""
        className="pointer-events-none absolute -left-14 top-0 h-full w-[24rem] opacity-75"
        imageClassName="object-cover object-left"
        src="/biofit/skeleton-network-left.png"
      />
      <BioFitDottedField className="-left-20 top-0 h-72 w-[34rem]" />
      <BioFitContainer>
        <BioFitReveal className="relative z-10 lg:ml-[14rem]">
          <h2 className="font-heading text-3xl font-bold text-primary-dark">Technology. Expertise. Empathy.</h2>
          <p className="mt-3 max-w-[32rem] text-sm leading-7 text-text-secondary">
            Where advanced innovation meets human care.
          </p>
        </BioFitReveal>
        <BioFitReveal className="relative z-10 mt-8 lg:ml-[14rem]" delay={0.08}>
          <div className="grid bg-white/72 sm:grid-cols-2 lg:grid-cols-4">
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <div className="min-h-[9.5rem] border-b border-[#e5defd] p-7 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0" key={point.title}>
                  <BioFitIconBubble className="h-14 w-14 shadow-[0_15px_32px_rgba(90,103,216,0.12)]" size="sm">
                    <Icon className="h-6 w-6" />
                  </BioFitIconBubble>
                  <h3 className="mt-5 font-heading text-base font-bold text-[#7357d8]">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">{point.text}</p>
                </div>
              );
            })}
          </div>
        </BioFitReveal>
      </BioFitContainer>
    </BioFitSection>
  );
}
