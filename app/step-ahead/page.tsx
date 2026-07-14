import type { Metadata } from "next";

import { StepAheadPage as StepAheadExperience } from "@/components/step-ahead/StepAheadPage";
import { stepAheadProgram } from "@/data/stepAhead";

export const metadata: Metadata = {
  title: stepAheadProgram.seo.title,
  description: stepAheadProgram.seo.description,
};

export default function StepAheadPage() {
  return <StepAheadExperience />;
}
