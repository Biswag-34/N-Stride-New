"use client";

import { Building2, HeartPulse, Hospital, Stethoscope, UserRoundCheck } from "lucide-react";
import type { Vertical } from "@/data/verticals";

import {
  InsightContainer,
  InsightIconBubble,
  InsightReveal,
  InsightSection,
} from "@/components/insight/InsightPrimitives";

type InsightAudienceProps = {
  vertical: Vertical;
};

const audience = [
  { icon: Stethoscope, label: "Podiatrists & Foot Specialists" },
  { icon: HeartPulse, label: "Diabetologists & Endocrinologists" },
  { icon: Building2, label: "Wound Care Clinics" },
  { icon: UserRoundCheck, label: "Physical Therapists & Rehab Centers" },
  { icon: UserRoundCheck, label: "Orthotists & Prosthetists" },
  { icon: Hospital, label: "Hospitals & Multi-specialty Centers" },
];

export function InsightAudience({ vertical }: InsightAudienceProps) {
  return (
    <InsightSection className="border-y border-[#c9e6f8]/70 py-12">
      <InsightContainer>
        <InsightReveal className="text-center">
          <p className="font-heading text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary">What it helps</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-primary-dark">
            Better insights for every care pathway
          </h2>
        </InsightReveal>
        <InsightReveal className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-6" delay={0.08}>
          {audience.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="text-center" key={item.label}>
                <InsightIconBubble className="mx-auto h-14 w-14 bg-[#f2fbff]" color={index % 2 ? "#26b6c8" : "#1479c9"}>
                  <Icon className="h-6 w-6" />
                </InsightIconBubble>
                <p className="mx-auto mt-3 max-w-[8.5rem] text-sm font-bold leading-5 text-primary-dark">{item.label}</p>
              </div>
            );
          })}
        </InsightReveal>
        <p className="sr-only">{vertical.audience.join(", ")}</p>
      </InsightContainer>
    </InsightSection>
  );
}
