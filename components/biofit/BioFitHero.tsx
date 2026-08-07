"use client";

import { ArrowRight, HeartHandshake, LifeBuoy, ShieldCheck } from "lucide-react";
import { PiPersonSimpleWalkDuotone } from "react-icons/pi";
import type { Vertical } from "@/data/verticals";

import { Button } from "@/components/ui/Button";
import {
  BioFitContainer,
  BioFitAsset,
  BioFitDottedField,
  BioFitReveal,
  BioFitSection,
  BioFitWaveImage,
} from "@/components/biofit/BioFitPrimitives";

type BioFitHeroProps = {
  vertical: Vertical;
};

const proof = [
  { icon: PiPersonSimpleWalkDuotone, label: "Custom Fitting" },
  { icon: ShieldCheck, label: "Clinical Expertise" },
  { icon: HeartHandshake, label: "Mobility Confidence" },
  { icon: LifeBuoy, label: "Ongoing Support" },
];

export function BioFitHero({ vertical }: BioFitHeroProps) {
  return (
    <BioFitSection className="bg-[linear-gradient(112deg,#ffffff,#fbf9ff_50%,#f2efff)] py-10 lg:py-14">
      <BioFitWaveImage
        className="bottom-[-4.75rem] h-60 bg-bottom opacity-24 blur-[1px] [mask-image:linear-gradient(to_top,black_0%,rgba(0,0,0,0.7)_42%,transparent_92%)]"
        src="/biofit/wave-divider-soft.png"
      />
      <BioFitDottedField className="bottom-1 right-0 h-56 w-[26rem] opacity-45 sm:h-72 sm:w-[38rem]" />
      <BioFitContainer className="relative z-20 grid gap-8 lg:min-h-[560px] lg:grid-cols-[0.46fr_0.54fr] lg:items-center">
        <BioFitReveal>
          <h1 className="max-w-[38rem] font-heading text-[clamp(2.2rem,5.3vw,4.6rem)] font-bold leading-[1.02] text-primary-dark">
            <span className="block whitespace-nowrap">Restoring form.</span>
            <span className="block whitespace-nowrap">Restoring life.</span>
          </h1>
          <p className="mt-5 max-w-[34rem] text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
            Orthotics, prosthetics, silicone restoration. Personalized solutions that fit you, support your journey,
            and help you move forward with confidence.
          </p>
          <div className="mt-7 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
            <Button className="w-full rounded-[0.45rem] bg-[#7357d8] px-5 hover:bg-[#5a42bd] xs:w-auto xs:px-7" href={vertical.cta.primary.href}>
              Request Bio-Fit Consultation
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button className="w-full rounded-[0.45rem] border-[#7357d8] px-5 text-[#7357d8] xs:w-auto xs:px-7" href="/contact?type=bio-fit" variant="outline">
              Explore Care Pathways
            </Button>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {proof.map((item) => {
              const Icon = item.icon;
              return (
                <div className="flex items-center gap-3 rounded-[0.8rem] bg-white/82 px-3 py-3 shadow-[0_12px_28px_rgba(90,103,216,0.08)] ring-1 ring-[#ddd4ff]" key={item.label}>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[0.7rem] bg-[#f0ebff] text-[#7357d8]">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-bold text-primary-dark">{item.label}</span>
                </div>
              );
            })}
          </div>
        </BioFitReveal>

        <BioFitReveal className="relative">
          <div className="relative rounded-[1.35rem] bg-[linear-gradient(135deg,#ede8ff,#ffffff_58%,#eef9ff)] p-3 shadow-[0_26px_76px_rgba(90,103,216,0.14)] ring-1 ring-[#ddd4ff]">
            <BioFitAsset
              alt="Bio-Fit patient walking with prosthetic support and clinical alignment overlay"
              className="relative z-10 min-h-[320px] rounded-[1rem] bg-white/60 xs:min-h-[390px] lg:min-h-[500px]"
              imageClassName="object-cover object-center mix-blend-multiply"
              priority
              src="/requested-assets/biofit-hero.png"
            />
            <div className="pointer-events-none absolute inset-3 rounded-[1rem] bg-[linear-gradient(90deg,rgba(255,255,255,0.24),rgba(255,255,255,0))]" />
          </div>
        </BioFitReveal>
      </BioFitContainer>
    </BioFitSection>
  );
}
