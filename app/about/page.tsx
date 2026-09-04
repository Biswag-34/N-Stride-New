import type { Metadata } from "next";

import { AboutPage as AboutExperience } from "@/components/about/AboutPage";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: "About N-Stride | Connected Foot & Lower-Limb Care Ecosystem",
  description: brand.longIntro,
};

export default function AboutPage() {
  return <AboutExperience />;
}
