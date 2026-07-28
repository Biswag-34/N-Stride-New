import type { Vertical } from "@/data/verticals";

import { KineticsAudience } from "@/components/kinetics/KineticsAudience";
import { KineticsCTA } from "@/components/kinetics/KineticsCTA";
import { KineticsHero } from "@/components/kinetics/KineticsHero";
import { KineticsJourney } from "@/components/kinetics/KineticsJourney";
import { KineticsPathways } from "@/components/kinetics/KineticsPathways";
import { KineticsScience } from "@/components/kinetics/KineticsScience";
import { KineticsSupportRail } from "@/components/kinetics/KineticsSupportRail";

type KineticsPageProps = {
  vertical: Vertical;
};

export function KineticsPage({ vertical }: KineticsPageProps) {
  return (
    <>
      <KineticsHero vertical={vertical} />
      <KineticsAudience vertical={vertical} />
      <KineticsPathways />
      <KineticsJourney />
      <KineticsScience />
      <KineticsSupportRail />
      <KineticsCTA vertical={vertical} />
    </>
  );
}
