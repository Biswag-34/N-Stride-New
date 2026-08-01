"use client";

import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import type { Vertical } from "@/data/verticals";

import { Button } from "@/components/ui/Button";
import {
  BioFitContainer,
  BioFitDottedField,
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
          <div className="relative isolate overflow-hidden rounded-[1.45rem] bg-[#151f36] px-5 py-5 shadow-[0_28px_76px_rgba(21,31,54,0.18)] ring-1 ring-[#ddd4ff] md:px-6 md:py-6">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(115,87,216,0.42),transparent_32%),radial-gradient(circle_at_86%_62%,rgba(38,182,200,0.24),transparent_34%)]" />
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/45" />
            <div className="relative z-10 grid gap-5 lg:grid-cols-[0.58fr_0.42fr] lg:items-stretch">
              <div className="rounded-[1.05rem] bg-white px-6 py-7 shadow-[0_20px_54px_rgba(0,0,0,0.12)] md:px-8 md:py-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-[0.9rem] bg-[#ece8ff] text-[#7357d8]">
                  <Sparkles aria-hidden="true" className="h-6 w-6" />
                </div>
                <h2 className="mt-5 max-w-[35rem] font-heading text-3xl font-bold leading-tight text-primary-dark md:text-4xl">
                  Plan your Bio-Fit solution.
                </h2>
                <p className="mt-4 max-w-[35rem] text-sm leading-7 text-text-secondary">
                  Book a focused consultation for prosthetics, orthotics or silicone restoration support built around your mobility goal.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {["Assess need", "Fit pathway", "Restore function"].map((item) => (
                    <div className="rounded-[0.75rem] bg-[#f8f5ff] px-3 py-3 text-xs font-bold leading-5 text-primary-dark ring-1 ring-[#e1dbff]" key={item}>
                      <CheckCircle2 aria-hidden="true" className="mb-2 h-4 w-4 text-[#7357d8]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex min-h-[18rem] flex-col justify-end rounded-[1.05rem] border border-white/18 bg-[linear-gradient(145deg,rgba(21,31,54,0.86),rgba(35,52,84,0.74))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-md">
                <p className="max-w-[20rem] font-heading text-2xl font-bold leading-tight text-white">
                  A clearer next step for fit, comfort and confidence.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Button className="justify-center rounded-[0.55rem] bg-white px-7 text-[#7357d8] hover:bg-[#f6f2ff]" href={vertical.cta.primary.href}>
                    Request Bio-Fit Consultation
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Button>
                  <Button className="justify-center rounded-[0.55rem] border-white/65 bg-transparent px-7 text-white hover:bg-white/10" href="/contact?type=bio-fit" variant="outline">
                    Explore All Verticals
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </BioFitReveal>
      </BioFitContainer>
    </BioFitSection>
  );
}
