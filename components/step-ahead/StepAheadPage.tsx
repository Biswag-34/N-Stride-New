"use client";

import { StepAheadEcosystem } from "@/components/step-ahead/StepAheadEcosystem";
import { StepAheadFAQ } from "@/components/step-ahead/StepAheadFAQ";
import { StepAheadFinalCTA } from "@/components/step-ahead/StepAheadFinalCTA";
import { StepAheadHero } from "@/components/step-ahead/StepAheadHero";
import { StepAheadJourney } from "@/components/step-ahead/StepAheadJourney";
import { StepAheadPackages } from "@/components/step-ahead/StepAheadPackages";
import { StepAheadValueBand } from "@/components/step-ahead/StepAheadValueBand";
import { StepAheadWhy } from "@/components/step-ahead/StepAheadWhy";

export function StepAheadPage() {
  return (
    <>
      <StepAheadHero />
      <StepAheadWhy />
      <StepAheadJourney />
      <StepAheadPackages />
      <StepAheadValueBand />
      <StepAheadEcosystem />
      <StepAheadFAQ />
      <StepAheadFinalCTA />
    </>
  );
}
