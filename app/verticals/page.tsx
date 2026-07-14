import { VerticalsCarePathwayBand } from "@/components/verticals-overview/VerticalsCarePathwayBand";
import { VerticalsHero } from "@/components/verticals-overview/VerticalsHero";
import { VerticalsNextStepCta } from "@/components/verticals-overview/VerticalsNextStepCta";
import { VerticalsPromiseTimeline } from "@/components/verticals-overview/VerticalsPromiseTimeline";

export default function VerticalsPage() {
  return (
    <>
      <VerticalsHero />
      <VerticalsPromiseTimeline />
      <VerticalsCarePathwayBand />
      <VerticalsNextStepCta />
    </>
  );
}
