"use client";

import type { Vertical } from "@/data/verticals";

import {
  BioFitContainer,
  BioFitAsset,
  BioFitCurveDivider,
  BioFitDottedField,
  BioFitReveal,
  BioFitSection,
} from "@/components/biofit/BioFitPrimitives";

type BioFitWhoHelpProps = {
  vertical: Vertical;
};

const audienceImages = [
  "/biofit/runner-sea-tech.png",
  "/biofit/target-hero-visual-clean.png",
  "/biofit/target-who-help-arch.png",
  "/biofit/target-cta-hand-clean.png",
  "/biofit/runner-sea-tech.png",
];

export function BioFitWhoHelp({ vertical }: BioFitWhoHelpProps) {
  return (
    <BioFitSection className="bg-[linear-gradient(180deg,#ffffff,#fbf9ff)] pb-14 pt-12">
      <BioFitDottedField className="-left-24 top-0 h-72 w-[44rem]" />
      <BioFitCurveDivider className="top-[-5.2rem] opacity-25 blur-[0.4px]" flip />
      <BioFitContainer>
        <BioFitReveal>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="font-heading text-3xl font-bold text-primary-dark">Who we help</h2>
              <p className="mt-3 max-w-[48rem] text-sm leading-7 text-text-secondary lg:whitespace-nowrap">
                Personalized support for every stage of your restoration or adaptation journey.
              </p>
            </div>
          </div>
        </BioFitReveal>
        <BioFitReveal className="mt-8" delay={0.08}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {vertical.audience.map((item, index) => (
              <article
                className="group relative min-h-[285px] overflow-hidden bg-[#ece8ff] shadow-[0_20px_48px_rgba(90,103,216,0.10)] ring-1 ring-white/80 transition duration-500 hover:-translate-y-2 hover:shadow-[0_28px_62px_rgba(90,103,216,0.16)]"
                key={item}
                style={{
                  borderRadius:
                    index % 2 === 0
                      ? "2.8rem 0.75rem 2rem 0.75rem"
                      : "0.75rem 2.6rem 0.75rem 2.2rem",
                }}
              >
                <BioFitAsset
                  alt=""
                  className="absolute inset-0 h-full w-full"
                  imageClassName="object-cover object-center transition duration-700 group-hover:scale-110"
                  src={audienceImages[index % audienceImages.length]}
                />
                <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,31,54,0.03)_24%,rgba(27,22,56,0.74)_100%)]" />
                <div aria-hidden="true" className="absolute left-4 top-4 h-12 w-12 rounded-[0.55rem] border border-white/55 bg-white/16 backdrop-blur-md" />
                <p className="absolute inset-x-0 bottom-0 min-h-[5.3rem] bg-white/88 px-4 py-4 text-[0.82rem] font-bold leading-5 text-primary-dark backdrop-blur-xl">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </BioFitReveal>
      </BioFitContainer>
    </BioFitSection>
  );
}
