import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { Vertical } from "@/data/types";

import { RelatedSolutions } from "./RelatedSolutions";
import { RelatedVerticals } from "./RelatedVerticals";
import { VerticalAudience } from "./VerticalAudience";
import { VerticalCTA } from "./VerticalCTA";
import { VerticalHero } from "./VerticalHero";
import { VerticalImageNeeds } from "./VerticalImageNeeds";
import { VerticalOverview } from "./VerticalOverview";
import { VerticalProcess } from "./VerticalProcess";
import { VerticalServices } from "./VerticalServices";
import { VerticalTechnology } from "./VerticalTechnology";

type VerticalPageTemplateProps = {
  vertical: Vertical;
};

export function VerticalPageTemplate({ vertical }: VerticalPageTemplateProps) {
  return (
    <>
      <VerticalHero vertical={vertical} />
      <Section className="py-10 sm:py-12 lg:py-14" variant="white">
        <Container>
          <div className="grid gap-10 lg:gap-12">
            <VerticalOverview vertical={vertical} />
            <VerticalAudience vertical={vertical} />
            <VerticalServices vertical={vertical} />
            <VerticalProcess vertical={vertical} />
            <VerticalTechnology vertical={vertical} />
            <RelatedSolutions vertical={vertical} />
            <VerticalImageNeeds vertical={vertical} />
            <VerticalCTA vertical={vertical} />
            <RelatedVerticals current={vertical} />
          </div>
        </Container>
      </Section>
    </>
  );
}
