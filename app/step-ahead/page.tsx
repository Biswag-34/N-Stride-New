import type { Metadata } from "next";

import { CoreComponentsSection } from "@/components/step-ahead/CoreComponentsSection";
import { EcosystemConnectionSection } from "@/components/step-ahead/EcosystemConnectionSection";
import { PackageBestFit } from "@/components/step-ahead/PackageBestFit";
import { PackageComparison } from "@/components/step-ahead/PackageComparison";
import { ProgramWorkflow } from "@/components/step-ahead/ProgramWorkflow";
import { StepAheadCTA } from "@/components/step-ahead/StepAheadCTA";
import { StepAheadFAQ } from "@/components/step-ahead/StepAheadFAQ";
import { StepAheadHero } from "@/components/step-ahead/StepAheadHero";
import { TargetAudienceMatrix } from "@/components/step-ahead/TargetAudienceMatrix";
import { ValuePropositionSection } from "@/components/step-ahead/ValuePropositionSection";
import { WhyStepAhead } from "@/components/step-ahead/WhyStepAhead";
import { stepAheadProgram } from "@/data/stepAhead";

export const metadata: Metadata = {
  title: stepAheadProgram.seo.title,
  description: stepAheadProgram.seo.description,
};

export default function StepAheadPage() {
  return (
    <>
      <StepAheadHero />
      <WhyStepAhead />
      <TargetAudienceMatrix />
      <CoreComponentsSection />
      <ProgramWorkflow />
      <PackageComparison />
      <PackageBestFit />
      <ValuePropositionSection />
      <EcosystemConnectionSection />
      <StepAheadFAQ />
      <StepAheadCTA />
    </>
  );
}
