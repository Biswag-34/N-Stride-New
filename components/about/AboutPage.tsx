"use client";

import { AboutCarePathway } from "@/components/about/AboutCarePathway";
import { AboutFinalCTA } from "@/components/about/AboutFinalCTA";
import { AboutFragmentedCare } from "@/components/about/AboutFragmentedCare";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutTrustSection } from "@/components/about/AboutTrustSection";
import { AboutVerticalArchitecture } from "@/components/about/AboutVerticalArchitecture";

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutFragmentedCare />
      <AboutVerticalArchitecture />
      <AboutCarePathway />
      <AboutTrustSection />
      <AboutFinalCTA />
    </>
  );
}
