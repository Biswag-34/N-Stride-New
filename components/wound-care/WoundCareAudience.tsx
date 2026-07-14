"use client";

import { HeartPulse, ShieldAlert, Stethoscope, UserRound, UsersRound } from "lucide-react";

import {
  WoundBackgroundImage,
  WoundContainer,
  WoundIconBubble,
  WoundReveal,
  WoundSection,
} from "@/components/wound-care/WoundCarePrimitives";

const audience = [
  { icon: HeartPulse, title: "People with diabetic foot wounds", text: "Chronic or complex wounds requiring advanced dressing support." },
  { icon: UserRound, title: "Individuals with lower-limb wounds", text: "Post-surgical, traumatic or pressure injuries needing structured care." },
  { icon: ShieldAlert, title: "People at risk of wound complications", text: "Those needing preventive management and early intervention." },
  { icon: Stethoscope, title: "Clinics & care teams", text: "Needing protocols, training support and dressing management guidance." },
  { icon: UsersRound, title: "Caregivers & families", text: "Seeking guidance for safe home-care and follow-up support." },
];

export function WoundCareAudience() {
  return (
    <WoundSection className="py-10">
      <WoundBackgroundImage className="-left-24 bottom-[-2rem] h-52 w-[42rem] opacity-10" src="/wound-care/blue-amber-wave.png" />
      <WoundContainer>
        <WoundReveal className="text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-dark">Who this helps</h2>
        </WoundReveal>
        <WoundReveal className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5" delay={0.08}>
          {audience.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="border-[#c9e6f8]/80 px-5 text-center lg:border-r lg:last:border-r-0" key={item.title}>
                <WoundIconBubble className="mx-auto h-16 w-16 bg-white/90 shadow-[0_14px_32px_rgba(16,42,67,0.05)]" color={index === 2 ? "#f5a623" : "#8aa0b4"} size="lg">
                  <Icon className="h-7 w-7" />
                </WoundIconBubble>
                <h3 className="mx-auto mt-4 max-w-[12rem] font-heading text-sm font-bold leading-5 text-primary-dark">{item.title}</h3>
                <p className="mx-auto mt-3 max-w-[13rem] text-xs leading-5 text-text-secondary">{item.text}</p>
              </div>
            );
          })}
        </WoundReveal>
      </WoundContainer>
    </WoundSection>
  );
}
