import { HomeCareJourney } from "@/components/home/HomeCareJourney";
import { HomeConnectedCare } from "@/components/home/HomeConnectedCare";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeKnowledgePreview } from "@/components/home/HomeKnowledgePreview";
import { HomePathwayRail } from "@/components/home/HomePathwayRail";
import { HomeStatsRibbon } from "@/components/home/HomeStatsRibbon";
import { HomeStepAheadFeature } from "@/components/home/HomeStepAheadFeature";
import { HomeVerticalCards } from "@/components/home/HomeVerticalCards";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeStatsRibbon />
      <HomeCareJourney />
      <HomeConnectedCare />
      <HomeVerticalCards />
      <HomeStepAheadFeature />
      <HomePathwayRail />
      <HomeKnowledgePreview />
    </>
  );
}
