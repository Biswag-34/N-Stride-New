"use client";

import { UserRoundCheck, UsersRound } from "lucide-react";
import { PiPersonSimpleWalkDuotone } from "react-icons/pi";
import type { Vertical } from "@/data/verticals";

import {
  BioFitContainer,
  BioFitAsset,
  BioFitCurveDivider,
  BioFitDottedField,
  BioFitIconBubble,
  BioFitReveal,
  BioFitSection,
} from "@/components/biofit/BioFitPrimitives";

type BioFitWhoHelpProps = {
  vertical: Vertical;
};

const audienceIcons = [PiPersonSimpleWalkDuotone, UserRoundCheck, UsersRound, PiPersonSimpleWalkDuotone, UserRoundCheck];

export function BioFitWhoHelp({ vertical }: BioFitWhoHelpProps) {
  return (
    <BioFitSection className="bg-[linear-gradient(180deg,#ffffff,#fbf9ff)] pb-12 pt-12">
      <BioFitDottedField className="-left-24 top-0 h-72 w-[44rem]" />
      <BioFitCurveDivider className="top-[-5.2rem]" flip />
      <BioFitContainer>
        <div className="grid items-end gap-9 lg:grid-cols-[0.31fr_0.69fr]">
          <BioFitReveal className="lg:-ml-16">
            <BioFitAsset
              alt="Bio-Fit prosthetic consultation and fitting"
              className="min-h-[250px] shadow-none"
              imageClassName="object-contain object-left"
              src="/biofit/target-who-help-arch.png"
            />
          </BioFitReveal>
          <BioFitReveal delay={0.08}>
            <h2 className="font-heading text-3xl font-bold text-primary-dark">Who we help</h2>
            <p className="mt-3 max-w-[27rem] text-sm leading-7 text-text-secondary">
              Personalized support for every stage of your restoration or adaptation journey.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {vertical.audience.map((item, index) => {
                const Icon = audienceIcons[index % audienceIcons.length];
                return (
                  <div className="flex items-start gap-3" key={item}>
                    <BioFitIconBubble className="h-14 w-14 shadow-[0_14px_30px_rgba(90,103,216,0.12)]" size="sm">
                      <Icon className="h-6 w-6" />
                    </BioFitIconBubble>
                    <p className="text-[0.8rem] font-semibold leading-5 text-primary-dark">{item}</p>
                  </div>
                );
              })}
            </div>
          </BioFitReveal>
        </div>
      </BioFitContainer>
    </BioFitSection>
  );
}
