import { HomeCareJourney } from "@/components/home/HomeCareJourney";
import { HomeConnectedCare } from "@/components/home/HomeConnectedCare";
import { HomeFitRxFeature } from "@/components/home/HomeFitRxFeature";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeKnowledgePreview } from "@/components/home/HomeKnowledgePreview";
import { HomeStatsRibbon } from "@/components/home/HomeStatsRibbon";
import { HomeStepAheadFeature } from "@/components/home/HomeStepAheadFeature";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeStatsRibbon />
      <HomeCareJourney />
      <HomeConnectedCare />
      <HomeStepAheadFeature />
      <HomeFitRxFeature />
      <HomeKnowledgePreview />
    </>
  );
}
