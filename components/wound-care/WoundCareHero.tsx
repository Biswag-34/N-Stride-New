"use client";

import { ArrowRight, HeartPulse, ShieldCheck, Stethoscope, UserRoundCheck } from "lucide-react";
import type { Vertical } from "@/data/verticals";

import { Button } from "@/components/ui/Button";
import {
  WoundAsset,
  WoundBackgroundImage,
  WoundContainer,
  WoundPill,
  WoundReveal,
  WoundSection,
} from "@/components/wound-care/WoundCarePrimitives";

type WoundCareHeroProps = {
  vertical: Vertical;
};

const proof = [
  { icon: Stethoscope, label: "Evidence-aligned care" },
  { icon: UserRoundCheck, label: "Personalized support" },
  { icon: HeartPulse, label: "Guided pathways" },
  { icon: ShieldCheck, label: "Better outcomes" },
];

export function WoundCareHero({ vertical }: WoundCareHeroProps) {
  return (
    <WoundSection className="bg-[linear-gradient(105deg,#ffffff,#fbfdff_56%,#fff7e8)] pb-12 pt-8">
      <WoundBackgroundImage className="bottom-[-2rem] right-0 h-[24rem] w-[54rem] opacity-20 sm:h-[31rem] sm:w-[70rem] sm:opacity-30" src="/wound-care/blue-amber-wave.png" />
      <WoundContainer className="relative">
        <div className="grid items-start gap-7 lg:min-h-[445px] lg:grid-cols-[0.52fr_0.48fr] lg:gap-9">
          <WoundReveal>
            <h1 className="max-w-[42rem] font-heading text-[clamp(1.7rem,5.4vw,3.62rem)] font-bold leading-[1.04] text-primary-dark">
              <span className="block whitespace-nowrap">N-Stride NPWT VAC &</span>
              {" "}
              <span className="block whitespace-nowrap">Wound Care</span>
            </h1>
            <p className="mt-5 max-w-[36rem] font-heading text-lg font-semibold leading-7 text-[#b86b00] sm:text-xl sm:leading-8">
              Advanced wound-care support for complex foot and lower-limb needs.
            </p>
            <p className="mt-4 max-w-[35rem] text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
              N-Stride NPWT VAC & Wound Care brings structured support, modern dressing strategy and clinical guidance
              under one ecosystem.
            </p>
            <div className="mt-7 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
              <Button className="w-full rounded-[0.45rem] px-5 xs:w-auto xs:px-7" href={vertical.cta.primary.href}>
                Request Wound Care Support
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button className="w-full rounded-[0.45rem] px-5 xs:w-auto xs:px-7" href="/contact?type=step-ahead" variant="outline">
                Partner with Step-Ahead
              </Button>
            </div>
          </WoundReveal>

          <WoundReveal delay={0.08}>
            <div className="relative min-h-[250px] xs:min-h-[300px] sm:min-h-[335px]">
              <div className="absolute right-[4%] top-[10%] h-[78%] w-[82%] rounded-[3.5rem] bg-[#fff2dd]/38 blur-[48px]" />
              <WoundAsset
                alt="NPWT VAC dressing setup with device and wound dressing"
                className="relative z-10 ml-auto min-h-[250px] max-w-[590px] overflow-visible shadow-none xs:min-h-[300px] sm:min-h-[335px]"
                imageClassName="object-contain object-right"
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                src="/wound-care/hero-vac-setup-cutout.png"
              />
              <WoundAsset
                alt=""
                className="pointer-events-none absolute -right-20 top-[-0.5rem] z-20 hidden h-[350px] w-[240px] opacity-34 mix-blend-multiply sm:block"
                imageClassName="object-contain object-right"
                sizes="20vw"
                src="/wound-care/foot-line-amber.png"
              />
            </div>
          </WoundReveal>
        </div>
        <WoundReveal className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proof.map((item) => {
            const Icon = item.icon;
            return <WoundPill className="justify-center bg-transparent shadow-none ring-0" icon={<Icon className="h-4 w-4 text-primary" />} key={item.label}>{item.label}</WoundPill>;
          })}
        </WoundReveal>
      </WoundContainer>
    </WoundSection>
  );
}
