"use client";

import { ArrowRight } from "lucide-react";
import type { Vertical } from "@/data/verticals";

import { Button } from "@/components/ui/Button";
import { InsightContainer, InsightReveal, InsightSection } from "@/components/insight/InsightPrimitives";

type InsightCTAProps = {
  vertical: Vertical;
};

export function InsightCTA({ vertical }: InsightCTAProps) {
  return (
    <InsightSection className="bg-[#0c5eb4] py-0 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/insight/cta-foot-blue.png')" }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,59,102,0.42),rgba(20,121,201,0.1)_55%,rgba(7,59,102,0.12))]" />
      <InsightContainer>
        <InsightReveal>
          <div className="relative z-10 grid min-h-[178px] gap-8 py-10 lg:grid-cols-[0.52fr_0.48fr] lg:items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl">
                Insight today. Impact every step.
              </h2>
              <p className="mt-4 max-w-[44rem] text-base leading-8 text-white/86">
                Bring advanced diagnostics to your practice or clinic and elevate the standard of foot and wound care.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-center">
              <Button className="rounded-[0.45rem] bg-white text-primary hover:bg-[#e8f5ff]" href={vertical.cta.primary.href}>
                Book Foot Checkup
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button className="rounded-[0.45rem] border-white/70 bg-transparent text-white hover:bg-white/10" href="#technology" variant="outline">
                View Assessment Technology
              </Button>
            </div>
          </div>
        </InsightReveal>
      </InsightContainer>
    </InsightSection>
  );
}
