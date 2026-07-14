"use client";

import { ChartNoAxesCombined, CheckCircle2, ClipboardList, HeartHandshake, MessageCircle } from "lucide-react";
import type { Vertical } from "@/data/verticals";

import {
  WoundAsset,
  WoundBackgroundImage,
  WoundContainer,
  WoundIconBubble,
  WoundKicker,
  WoundReveal,
  WoundSection,
} from "@/components/wound-care/WoundCarePrimitives";

type WoundCareSupportProps = {
  vertical: Vertical;
};

const supportSteps = [
  { icon: MessageCircle, title: "Connect", text: "Share wound details & history with our care team." },
  { icon: ClipboardList, title: "Plan", text: "Receive a personalized wound-care plan & dressing strategy." },
  { icon: HeartHandshake, title: "Support", text: "Get ongoing guidance, dressing management & monitoring." },
  { icon: ChartNoAxesCombined, title: "Improve", text: "Track progress, adapt care & achieve better outcomes." },
];

const benefits = ["Expert clinical guidance", "Structured dressing protocols", "Follow-up & monitoring support", "Education for caregivers & self-care"];

export function WoundCareSupport({ vertical }: WoundCareSupportProps) {
  return (
    <WoundSection className="py-12" id="wound-support">
      <WoundBackgroundImage className="-right-16 top-2 h-[24rem] w-[48rem] opacity-12" src="/wound-care/amber-wave.png" />
      <WoundContainer>
        <WoundReveal>
          <WoundKicker>Care support</WoundKicker>
          <h2 className="mt-4 font-heading text-3xl font-bold text-primary-dark">How our wound-care support works</h2>
          <p className="sr-only">{vertical.name}</p>
        </WoundReveal>
        <div className="mt-7 grid gap-7 lg:grid-cols-[0.28fr_0.44fr_0.28fr]">
          <WoundReveal>
            <div className="relative min-h-[300px] overflow-hidden rounded-[1.1rem] bg-[#f4faff]">
              <WoundAsset
                alt="Clinical wound-care dressing consultation"
                className="absolute inset-0"
                imageClassName="object-cover opacity-72 saturate-[0.78]"
                sizes="(max-width: 1024px) 100vw, 28vw"
                src="/wound-care/wound-dressing-care.png"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.20),rgba(221,241,255,0.12))]" />
            </div>
          </WoundReveal>

          <WoundReveal className="grid gap-4" delay={0.08}>
            {supportSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-[1rem] bg-white/96 px-5 py-4 shadow-[0_14px_38px_rgba(16,42,67,0.07)] ring-1 ring-[#c9e6f8]" key={step.title}>
                  <span className="font-heading text-sm font-bold text-primary">0{index + 1}</span>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-primary-dark">{step.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-text-secondary">{step.text}</p>
                  </div>
                  <Icon aria-hidden="true" className="h-7 w-7 text-primary/70" />
                </div>
              );
            })}
          </WoundReveal>

          <WoundReveal delay={0.14}>
            <div className="h-full rounded-[1.25rem] bg-[linear-gradient(135deg,#fff7e8,#ffffff_62%,#fff2dd)] p-6 shadow-[18px_24px_65px_rgba(245,166,35,0.12)] ring-1 ring-[#efd8b3]">
              <h3 className="font-heading text-lg font-bold text-[#b86b00]">You get</h3>
              <ul className="mt-6 space-y-4">
                {benefits.map((item) => (
                  <li className="flex gap-3 text-sm font-semibold text-primary-dark" key={item}>
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-[1rem] bg-[#fff2dd] p-5">
                <ShieldIcon />
                <p className="mt-3 font-heading text-sm font-bold leading-6 text-[#b86b00]">
                  Our goal is simple: faster support, fewer complications, better quality of life.
                </p>
              </div>
            </div>
          </WoundReveal>
        </div>
      </WoundContainer>
    </WoundSection>
  );
}

function ShieldIcon() {
  return (
    <WoundIconBubble className="h-10 w-10 shadow-none" size="sm">
      <CheckCircle2 className="h-5 w-5" />
    </WoundIconBubble>
  );
}
