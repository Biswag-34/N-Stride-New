import type { Vertical } from "@/data/verticals";

import { WoundCareAudience } from "@/components/wound-care/WoundCareAudience";
import { WoundCareCTA } from "@/components/wound-care/WoundCareCTA";
import { WoundCareHero } from "@/components/wound-care/WoundCareHero";
import { WoundCarePathway } from "@/components/wound-care/WoundCarePathway";
import { WoundCareTechnology } from "@/components/wound-care/WoundCareTechnology";

type WoundCarePageProps = {
  vertical: Vertical;
};

export function WoundCarePage({ vertical }: WoundCarePageProps) {
  return (
    <>
      <WoundCareHero vertical={vertical} />
      <WoundCareAudience />
      <WoundCarePathway />
      <WoundCareTechnology vertical={vertical} />
      <WoundCareCTA vertical={vertical} />
    </>
  );
}
