import type { Vertical } from "@/data/verticals";

import { BioFitConnectedPathways } from "@/components/biofit/BioFitConnectedPathways";
import { BioFitCTA } from "@/components/biofit/BioFitCTA";
import { BioFitEcosystem } from "@/components/biofit/BioFitEcosystem";
import { BioFitHero } from "@/components/biofit/BioFitHero";
import { BioFitJourney } from "@/components/biofit/BioFitJourney";
import { BioFitSolutions } from "@/components/biofit/BioFitSolutions";
import { BioFitTechnology } from "@/components/biofit/BioFitTechnology";
import { BioFitWhoHelp } from "@/components/biofit/BioFitWhoHelp";

type BioFitPageProps = {
  vertical: Vertical;
};

export function BioFitPage({ vertical }: BioFitPageProps) {
  return (
    <>
      <BioFitHero vertical={vertical} />
      <BioFitEcosystem />
      <BioFitWhoHelp vertical={vertical} />
      <BioFitSolutions vertical={vertical} />
      <BioFitJourney />
      <BioFitTechnology vertical={vertical} />
      <BioFitConnectedPathways />
      <BioFitCTA vertical={vertical} />
    </>
  );
}
