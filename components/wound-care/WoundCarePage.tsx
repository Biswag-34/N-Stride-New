import type { Vertical } from "@/data/verticals";

import { WoundCareAudience } from "@/components/wound-care/WoundCareAudience";
import { WoundCareCTA } from "@/components/wound-care/WoundCareCTA";
import { WoundCareEcosystem } from "@/components/wound-care/WoundCareEcosystem";
import { WoundCareHero } from "@/components/wound-care/WoundCareHero";
import { WoundCarePathway } from "@/components/wound-care/WoundCarePathway";
import { WoundCareRelated } from "@/components/wound-care/WoundCareRelated";
import { WoundCareSupport } from "@/components/wound-care/WoundCareSupport";
import { WoundCareTechnology } from "@/components/wound-care/WoundCareTechnology";

type WoundCarePageProps = {
  vertical: Vertical;
};

export function WoundCarePage({ vertical }: WoundCarePageProps) {
  return (
    <>
      <WoundCareHero vertical={vertical} />
      <WoundCareEcosystem />
      <WoundCareAudience />
      <WoundCarePathway />
      <WoundCareSupport vertical={vertical} />
      <WoundCareTechnology vertical={vertical} />
      <WoundCareRelated />
      <WoundCareCTA vertical={vertical} />
    </>
  );
}
