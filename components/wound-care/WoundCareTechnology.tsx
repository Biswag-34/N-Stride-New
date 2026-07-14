"use client";

import { ArrowRight, Droplets, ShieldCheck, Sparkles, Waves } from "lucide-react";
import type { Vertical } from "@/data/verticals";

import {
  WoundBackgroundImage,
  WoundContainer,
  WoundIconBubble,
  WoundKicker,
  WoundReveal,
  WoundSection,
} from "@/components/wound-care/WoundCarePrimitives";

type WoundCareTechnologyProps = {
  vertical: Vertical;
};

const advantages = [
  { icon: Droplets, title: "Removes Exudate", text: "Helps manage fluid & reduces edema." },
  { icon: Waves, title: "Improves Perfusion", text: "Enhances blood flow & tissue oxygenation." },
  { icon: Sparkles, title: "Promotes Granulation", text: "Supports tissue formation & wound closure." },
  { icon: ShieldCheck, title: "Reduces Infection Risk", text: "Helps reduce bacterial load & infection risk." },
];

export function WoundCareTechnology({ vertical }: WoundCareTechnologyProps) {
  return (
    <WoundSection className="bg-[linear-gradient(180deg,#ffffff,#fbfdff)] py-11" id="technology">
      <WoundBackgroundImage className="-left-20 bottom-0 h-56 w-[52rem] opacity-10" src="/wound-care/blue-amber-wave.png" />
      <WoundContainer>
        <div className="grid items-center gap-8 lg:grid-cols-[0.28fr_0.72fr]">
          <WoundReveal>
            <WoundKicker>Technology & logic</WoundKicker>
            <h2 className="mt-4 max-w-[24rem] font-heading text-3xl font-bold leading-tight text-primary-dark">
              The NPWT VAC advantage
            </h2>
            <p className="mt-5 max-w-[24rem] text-sm leading-7 text-text-secondary">
              Negative Pressure Wound Therapy helps create an optimal healing environment.
            </p>
            <a className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary" href="#wound-support">
              Learn about NPWT VAC
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </WoundReveal>

          <WoundReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" delay={0.08}>
            {advantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <div className="border-[#c9e6f8]/85 px-5 text-center lg:border-r lg:last:border-r-0" key={item.title}>
                  <WoundIconBubble className="mx-auto h-[4.5rem] w-[4.5rem] bg-white/95 shadow-[0_18px_45px_rgba(245,166,35,0.1)]" color={index === 0 ? "#f5a623" : "#1479c9"} size="lg">
                    <Icon className="h-7 w-7" />
                  </WoundIconBubble>
                  <h3 className="mt-4 font-heading text-sm font-bold text-primary-dark">{item.title}</h3>
                  <p className="mx-auto mt-2 max-w-[11rem] text-xs leading-5 text-text-secondary">{item.text}</p>
                </div>
              );
            })}
          </WoundReveal>
        </div>
        <p className="sr-only">{vertical.technologyPoints.join(", ")}</p>
      </WoundContainer>
    </WoundSection>
  );
}
