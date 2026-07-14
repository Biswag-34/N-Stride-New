"use client";

import { ArrowRight } from "lucide-react";
import type { Vertical } from "@/data/verticals";

import { Button } from "@/components/ui/Button";
import {
  BioFitAsset,
  BioFitContainer,
  BioFitDottedField,
  BioFitKicker,
  BioFitReveal,
  BioFitSoftDivider,
  BioFitSection,
  BioFitWaveImage,
} from "@/components/biofit/BioFitPrimitives";

type BioFitCTAProps = {
  vertical: Vertical;
};

export function BioFitCTA({ vertical }: BioFitCTAProps) {
  return (
    <BioFitSection className="bg-[linear-gradient(105deg,#f8f5ff,#ffffff_55%,#f1edff)] pb-14 pt-20">
      <BioFitWaveImage
        className="top-[-5.5rem] h-44 bg-top opacity-34 [mask-image:linear-gradient(to_bottom,black_15%,black_58%,transparent_100%)]"
        src="/biofit/wave-divider-large.png"
      />
      <BioFitSoftDivider className="top-[-3.75rem] opacity-55" color="#9f8af0" />
      <BioFitDottedField className="-left-24 bottom-0 h-64 w-[42rem]" />
      <BioFitContainer>
        <BioFitReveal>
          <div className="relative isolate overflow-hidden rounded-t-[1.55rem] rounded-b-[0.85rem] bg-[linear-gradient(105deg,#f1eaff,#ffffff_50%,#f4eefe)] px-8 py-10 shadow-[0_24px_70px_rgba(90,103,216,0.10)] md:px-12">
            <div aria-hidden="true" className="absolute -right-24 bottom-[-7rem] h-72 w-[38rem] rounded-full bg-[#d8d0ff]/64 blur-3xl" />
            <div aria-hidden="true" className="absolute right-0 top-0 h-full w-[42%] bg-[radial-gradient(circle_at_86%_54%,rgba(243,179,169,0.24),transparent_42%)]" />
            <BioFitAsset
              alt=""
              className="pointer-events-none absolute bottom-0 right-0 hidden h-full w-[22rem] opacity-95 [mask-image:linear-gradient(90deg,transparent_0%,black_24%)] lg:block"
              imageClassName="object-contain object-[right_bottom]"
              src="/biofit/target-cta-hand-clean.png"
            />
            <svg aria-hidden="true" className="absolute inset-x-0 top-0 h-16 w-full text-[#9f8af0]" fill="none" preserveAspectRatio="none" viewBox="0 0 1200 90">
              <path d="M-30 34C168 80 342 25 526 37c236 16 376 60 598 14 54-12 94-20 122-20" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
            </svg>
            <div className="relative z-10 grid gap-8 lg:grid-cols-[0.46fr_0.54fr] lg:items-center">
              <div>
                <BioFitKicker>Your next step</BioFitKicker>
                <h2 className="mt-4 max-w-[35rem] font-heading text-3xl font-bold leading-tight text-primary-dark md:text-4xl">
                  Let&apos;s build the right solution for you.
                </h2>
                <p className="mt-4 max-w-[35rem] text-sm leading-7 text-text-secondary">
                  Book a consultation with our Bio-Fit team and take the first step toward restored mobility.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-center">
                <Button className="rounded-[0.45rem] bg-[#7357d8] px-7 hover:bg-[#5a42bd]" href={vertical.cta.primary.href}>
                  Request Bio-Fit Consultation
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Button>
                <Button className="rounded-[0.45rem] border-[#7357d8] px-7 text-[#7357d8]" href="/contact?type=bio-fit" variant="outline">
                  Explore All Verticals
                </Button>
              </div>
            </div>
          </div>
        </BioFitReveal>
      </BioFitContainer>
    </BioFitSection>
  );
}
