"use client";

import { StepAheadEcosystem } from "@/components/step-ahead/StepAheadEcosystem";
import { StepAheadFinalCTA } from "@/components/step-ahead/StepAheadFinalCTA";
import { StepAheadHero } from "@/components/step-ahead/StepAheadHero";
import { StepAheadJourney } from "@/components/step-ahead/StepAheadJourney";
import { StepAheadMobileSummary } from "@/components/step-ahead/StepAheadMobileSummary";
import { StepAheadPackages } from "@/components/step-ahead/StepAheadPackages";
import { StepAheadPartnershipFlow } from "@/components/step-ahead/StepAheadPartnershipFlow";
import { StepAheadValueBand } from "@/components/step-ahead/StepAheadValueBand";
import { StepAheadWhy } from "@/components/step-ahead/StepAheadWhy";

export function StepAheadPage() {
  return (
    <>
      <StepAheadHero />
      <StepAheadMobileSummary />
      <StepAheadWhy />
      <StepAheadPartnershipFlow />
      <div className="hidden md:contents">
        <StepAheadJourney />
        <StepAheadPackages />
        <StepAheadValueBand />
        <StepAheadEcosystem />
        <StepAheadFinalCTA />
      </div>
    </>
  );
}
