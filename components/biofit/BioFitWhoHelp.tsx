"use client";

import { Activity, HeartHandshake, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import type { Vertical } from "@/data/verticals";

import {
  BioFitContainer,
  BioFitAsset,
  BioFitCurveDivider,
  BioFitDottedField,
  BioFitIconBubble,
  BioFitReveal,
  BioFitSection,
} from "@/components/biofit/BioFitPrimitives";

type BioFitWhoHelpProps = {
  vertical: Vertical;
};

const audienceProfiles = [
  { icon: Activity, tone: "#7357d8", tag: "Mobility" },
  { icon: ShieldCheck, tone: "#26b6c8", tag: "Support" },
  { icon: Sparkles, tone: "#f3a99e", tag: "Restore" },
  { icon: HeartHandshake, tone: "#5a67d8", tag: "Adapt" },
  { icon: UsersRound, tone: "#1479c9", tag: "Care" },
];

export function BioFitWhoHelp({ vertical }: BioFitWhoHelpProps) {
  return (
    <BioFitSection className="bg-[linear-gradient(180deg,#ffffff,#fbf9ff)] pb-14 pt-12">
      <BioFitDottedField className="-left-24 top-0 h-72 w-[44rem]" />
      <BioFitCurveDivider className="top-[-5.2rem] opacity-25 blur-[0.4px]" flip />
      <BioFitContainer>
        <BioFitReveal>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="font-heading text-3xl font-bold text-primary-dark">Who we help</h2>
              <p className="mt-3 max-w-[48rem] text-sm leading-7 text-text-secondary lg:whitespace-nowrap">
                Personalized support for every stage of your restoration or adaptation journey.
              </p>
            </div>
          </div>
        </BioFitReveal>
        <BioFitReveal className="mt-8" delay={0.08}>
          <div className="relative overflow-hidden rounded-[1.35rem] bg-[linear-gradient(135deg,#f4f0ff,#ffffff_50%,#eefbff)] p-4 shadow-[0_24px_68px_rgba(90,103,216,0.11)] ring-1 ring-[#ddd4ff] lg:p-6">
            <div aria-hidden="true" className="absolute -right-24 top-8 h-64 w-64 rounded-full bg-[#d8d0ff]/70 blur-3xl" />
            <div aria-hidden="true" className="absolute -left-24 bottom-0 h-64 w-80 rounded-full bg-[#ddf7ff]/60 blur-3xl" />
            <div className="relative grid gap-4 lg:grid-cols-[0.42fr_0.58fr] lg:items-stretch">
              <div className="relative min-h-[21rem] overflow-hidden rounded-t-[7rem] rounded-br-[1.4rem] rounded-bl-[1.4rem] bg-[#ece8ff] ring-1 ring-white/80">
                <BioFitAsset
                  alt=""
                  className="absolute inset-0 h-full w-full"
                  imageClassName="object-cover object-center"
                  src="/biofit/target-who-help-arch.png"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(22,20,54,0.58))]" />
                <div className="absolute bottom-5 left-5 right-5 rounded-[1rem] bg-white/86 p-4 shadow-[0_16px_36px_rgba(21,31,54,0.12)] backdrop-blur">
                  <p className="font-heading text-lg font-bold text-primary-dark">Patient-specific fit</p>
                  <p className="mt-2 text-xs font-semibold leading-5 text-text-secondary">Support shaped around function, comfort and confidence.</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {vertical.audience.map((item, index) => {
                  const profile = audienceProfiles[index % audienceProfiles.length];
                  const Icon = profile.icon;

                  return (
                    <article
                      className="group relative overflow-hidden rounded-[1rem] bg-white/90 p-4 shadow-[0_14px_38px_rgba(90,103,216,0.08)] ring-1 ring-[#e1dbff] transition duration-300 hover:-translate-y-1 hover:bg-white"
                      key={item}
                    >
                      <div aria-hidden="true" className="absolute inset-y-4 left-0 w-[3px] rounded-r-full" style={{ backgroundColor: profile.tone }} />
                      <div className="flex items-start gap-4">
                        <BioFitIconBubble className="h-12 w-12 rounded-[0.9rem] shadow-[0_12px_28px_rgba(90,103,216,0.11)]" color={profile.tone} size="sm">
                          <Icon aria-hidden="true" className="h-5 w-5" />
                        </BioFitIconBubble>
                        <div>
                          <p className="font-heading text-[0.68rem] font-bold uppercase tracking-[0.14em]" style={{ color: profile.tone }}>{profile.tag}</p>
                          <p className="mt-2 text-sm font-bold leading-6 text-primary-dark">{item}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </BioFitReveal>
      </BioFitContainer>
    </BioFitSection>
  );
}
