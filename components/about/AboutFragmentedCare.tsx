"use client";

import { CheckCircle2, XCircle } from "lucide-react";

import { AboutArtImage, AboutBackgroundArt, AboutContainer, AboutKicker, AboutReveal, AboutSection } from "./AboutPrimitives";

const traditional = ["Multiple appointments", "Disconnected providers", "Repeat assessments", "Gaps in care", "Uncertain outcomes"];
const connected = ["One connected ecosystem", "Coordinated care", "Streamlined experience", "No care gaps", "Better outcomes"];

export function AboutFragmentedCare() {
  return (
    <AboutSection className="border-y border-[#dbeef9] bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] py-16">
      <AboutBackgroundArt className="left-[21%] top-0 h-full w-[55%] opacity-30" src="/about/wave-field-rings.png" />
      <AboutContainer>
        <div className="grid items-center gap-10 lg:grid-cols-[0.28fr_0.72fr]">
          <AboutReveal>
            <AboutKicker>What N-Stride solves</AboutKicker>
            <h2 className="mt-5 font-heading text-[clamp(2rem,3.25vw,3.05rem)] font-bold leading-[1.08] text-primary-dark">
              Fragmented care.
              <br />
              <span className="text-primary">Unified outcomes.</span>
            </h2>
            <p className="mt-6 max-w-[360px] text-[0.95rem] leading-7 text-text-secondary">
              Foot and lower-limb conditions require more than one solution. N-Stride eliminates fragmentation by aligning assessment,
              treatment and support across every step of the care journey.
            </p>
          </AboutReveal>

          <AboutReveal delay={0.08}>
            <div className="relative min-h-[300px] overflow-hidden">
              <AboutArtImage
                alt="Traditional fragmented care paths becoming one coordinated N-Stride experience"
                className="absolute inset-0"
                src="/about/fragmented-flow.png"
              />
              <div className="relative z-10 grid min-h-[300px] grid-cols-2 items-center gap-6 px-1 md:px-8">
                <div className="max-w-[275px]">
                  <p className="mb-5 font-heading text-sm font-bold text-primary">Traditional experience</p>
                  <ul className="space-y-4">
                    {traditional.map((item) => (
                      <li className="flex items-center gap-3 text-[0.78rem] font-semibold text-text-secondary" key={item}>
                        <XCircle aria-hidden="true" className="h-4 w-4 text-[#6f94b4]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ml-auto max-w-[275px]">
                  <p className="mb-5 font-heading text-sm font-bold text-primary">N-Stride experience</p>
                  <ul className="space-y-4">
                    {connected.map((item) => (
                      <li className="flex items-center gap-3 text-[0.78rem] font-semibold text-text-secondary" key={item}>
                        <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AboutReveal>
        </div>
      </AboutContainer>
    </AboutSection>
  );
}
