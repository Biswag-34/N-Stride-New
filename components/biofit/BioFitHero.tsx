"use client";

import { ArrowRight, HeartHandshake, LifeBuoy, ShieldCheck } from "lucide-react";
import { PiPersonSimpleWalkDuotone } from "react-icons/pi";
import type { Vertical } from "@/data/verticals";

import { Button } from "@/components/ui/Button";
import {
  BioFitContainer,
  BioFitAsset,
  BioFitCurveDivider,
  BioFitDottedField,
  BioFitKicker,
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
    <BioFitSection className="bg-[linear-gradient(105deg,#ffffff,#fbf9ff_52%,#f2efff)] pb-8 pt-8 xs:pb-10 xs:pt-10">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_76%_24%,rgba(115,87,216,0.12),transparent_28%)]" />
      <BioFitWaveImage
        className="bottom-[-2.75rem] h-48 bg-bottom opacity-40 [mask-image:linear-gradient(to_top,black_16%,black_68%,transparent_100%)]"
        src="/biofit/wave-divider-soft.png"
      />
      <BioFitDottedField className="bottom-1 right-0 h-56 w-[26rem] opacity-55 sm:h-72 sm:w-[38rem] sm:opacity-100" />
      <BioFitCurveDivider className="bottom-[-2.35rem] opacity-55" />
      <BioFitContainer className="relative grid items-center gap-7 lg:min-h-[540px] lg:grid-cols-[0.68fr_1.32fr] lg:gap-8">
        <BioFitReveal>
          <BioFitKicker>{vertical.shortName}</BioFitKicker>
          <h1 className="mt-5 max-w-[39rem] font-heading text-[clamp(2.08rem,10vw,4.75rem)] font-bold leading-[1.03] tracking-[-0.025em] text-primary-dark">
            Restoring form.
            <br />
            Restoring life.
          </h1>
          <p className="mt-6 max-w-[31rem] text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
            Orthotics, prosthetics, silicone restoration. Personalized solutions that fit you, support your journey,
            and help you move forward with confidence.
          </p>
          <div className="mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
            <Button className="w-full rounded-[0.45rem] bg-[#7357d8] px-5 hover:bg-[#5a42bd] xs:w-auto xs:px-7" href={vertical.cta.primary.href}>
              Request Bio-Fit Consultation
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button className="w-full rounded-[0.45rem] border-[#7357d8] px-5 text-[#7357d8] xs:w-auto xs:px-7" href="/contact?type=bio-fit" variant="outline">
              Explore Care Pathways
            </Button>
          </div>
          <div className="mt-8 grid gap-4 xs:grid-cols-2 lg:mt-10 lg:grid-cols-4">
            {proof.map((item) => {
              const Icon = item.icon;
              return (
                <div className="flex items-center gap-2.5" key={item.label}>
                  <Icon aria-hidden="true" className="h-6 w-6 text-[#7357d8]" />
                  <span className="text-xs font-bold text-primary-dark">{item.label}</span>
                </div>
              );
            })}
          </div>
        </BioFitReveal>

        <BioFitReveal className="relative min-h-[260px] xs:min-h-[340px] sm:min-h-[440px]">
          <div className="absolute right-[2%] top-[4%] h-[86%] w-[88%] rounded-[50%] bg-[#ece8ff]/60 blur-[56px]" />
          <BioFitAsset
            alt="Bio-Fit patient walking with prosthetic support and clinical alignment overlay"
            className="relative z-10 ml-auto min-h-[260px] w-full max-w-[910px] [mask-image:radial-gradient(ellipse_at_58%_50%,black_38%,rgba(0,0,0,0.96)_55%,transparent_76%)] xs:min-h-[340px] sm:min-h-[440px]"
            imageClassName="object-contain object-right mix-blend-multiply"
            priority
            src="/biofit/target-hero-visual-clean.png"
          />
        </BioFitReveal>
      </BioFitContainer>
    </BioFitSection>
  );
}
