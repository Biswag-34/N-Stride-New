import { CareCompassVerticals } from "@/components/home/CareCompassVerticals";
import { CarePathwayFlow } from "@/components/home/CarePathwayFlow";
import { EducationPreview } from "@/components/home/EducationPreview";
import { FinalConsultationCTA } from "@/components/home/FinalConsultationCTA";
import { HeroCareSystem } from "@/components/home/HeroCareSystem";
import { SolutionShowcase } from "@/components/home/SolutionShowcase";
import { StepAheadBand } from "@/components/home/StepAheadBand";
import { WhyConnectedCare } from "@/components/home/WhyConnectedCare";

export default function Home() {
  return (
    <>
      <HeroCareSystem />
      <CarePathwayFlow />
      <CareCompassVerticals />
      <WhyConnectedCare />
      <SolutionShowcase />
      <StepAheadBand />
      <EducationPreview />
      <FinalConsultationCTA />
    </>
  );
}
