import type { Vertical } from "@/data/verticals";

import { InsightAssessmentFlow } from "@/components/insight/InsightAssessmentFlow";
import { InsightAudience } from "@/components/insight/InsightAudience";
import { InsightConnectedEcosystem } from "@/components/insight/InsightConnectedEcosystem";
import { InsightCTA } from "@/components/insight/InsightCTA";
import { InsightEcosystem } from "@/components/insight/InsightEcosystem";
import { InsightHero } from "@/components/insight/InsightHero";
import { InsightResults } from "@/components/insight/InsightResults";
import { InsightTools } from "@/components/insight/InsightTools";

type InsightPageProps = {
  vertical: Vertical;
};

export function InsightPage({ vertical }: InsightPageProps) {
  return (
    <>
      <InsightHero vertical={vertical} />
      <InsightEcosystem />
      <InsightTools vertical={vertical} />
      <InsightAudience vertical={vertical} />
      <InsightAssessmentFlow />
      <InsightResults />
      <InsightConnectedEcosystem />
      <InsightCTA vertical={vertical} />
    </>
  );
}
