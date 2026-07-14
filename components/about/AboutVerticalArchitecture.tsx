"use client";

import { ArrowRight, BriefcaseMedical, Footprints, Stethoscope, UserRoundCheck } from "lucide-react";
import Link from "next/link";

import { verticals } from "@/data/verticals";

import { AboutArtImage, AboutBackgroundArt, AboutContainer, AboutKicker, AboutReveal, AboutSection } from "./AboutPrimitives";

const iconMap = {
  kinetics: Footprints,
  insight: Stethoscope,
  "wound-care": BriefcaseMedical,
  "bio-fit": UserRoundCheck,
};

const colors = {
  kinetics: "#36a8d7",
  insight: "#40b972",
  "wound-care": "#d79a1b",
  "bio-fit": "#8058e7",
};

export function AboutVerticalArchitecture() {
  return (
    <AboutSection className="bg-[linear-gradient(180deg,#ffffff_0%,#f4fbff_100%)] py-16">
      <AboutBackgroundArt className="-left-10 bottom-0 h-[90%] w-[46%] opacity-28" src="/about/wave-field-rings.png" />
      <AboutContainer>
        <div className="grid items-center gap-12 lg:grid-cols-[0.28fr_0.72fr]">
          <AboutReveal>
            <AboutKicker>Our ecosystem architecture</AboutKicker>
            <h2 className="mt-5 font-heading text-[clamp(2rem,3.25vw,3.05rem)] font-bold leading-[1.08] text-primary-dark">
              Specialized verticals.
              <br />
              <span className="text-primary">Seamlessly connected.</span>
            </h2>
            <p className="mt-6 max-w-[360px] text-[0.95rem] leading-7 text-text-secondary">
              Four care verticals working in sync - powered by technology, clinical protocols and a patient-first philosophy.
            </p>
            <Link className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark" href="/verticals">
              Explore Verticals
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </AboutReveal>

          <AboutReveal delay={0.08}>
            <div className="relative hidden min-h-[330px] lg:block">
              <AboutArtImage
                alt="Four N-Stride care vertical cards connected into one care program"
                className="absolute inset-0"
                src="/about/vertical-architecture.png"
              />
              <div className="relative z-10 grid min-h-[318px] grid-cols-4 gap-7 px-[4.6%] pt-[12.3rem]">
                {verticals.map((vertical, index) => (
                  <Link
                    className="group rounded-[1.4rem] px-6 pb-5 pt-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
                    href={vertical.href}
                    key={vertical.id}
                  >
                    <p className="text-[0.68rem] font-bold" style={{ color: colors[vertical.id as keyof typeof colors] }}>
                      0{index + 1}
                    </p>
                    <h3 className="mt-1 font-heading text-lg font-bold text-primary-dark group-hover:text-primary">{vertical.shortName}</h3>
                    <p className="mt-3 max-w-[10.5rem] text-[0.75rem] leading-5 text-text-secondary">
                      {vertical.id === "kinetics"
                        ? "Therapeutic footwear and lower-limb support solutions."
                        : vertical.id === "insight"
                          ? "Diagnostics, clinical consultation and personalized care recommendations."
                          : vertical.id === "wound-care"
                            ? "NPWT VAC support, diabetic wound management and advanced protocols."
                            : "Prosthetics, orthotics and silicone cosmetic restoration."}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:hidden">
              {verticals.map((vertical, index) => {
                const Icon = iconMap[vertical.id as keyof typeof iconMap];
                const color = colors[vertical.id as keyof typeof colors];

                return (
                  <Link
                    className="rounded-[1.2rem] bg-white p-5 shadow-[0_20px_50px_rgba(20,121,201,0.10)] ring-1 ring-[#d7ebf8]"
                    href={vertical.href}
                    key={vertical.id}
                  >
                    <Icon aria-hidden="true" className="h-10 w-10" style={{ color }} />
                    <p className="mt-5 text-xs font-bold" style={{ color }}>
                      0{index + 1}
                    </p>
                    <h3 className="mt-1 font-heading text-lg font-bold text-primary-dark">{vertical.shortName}</h3>
                    <p className="mt-3 text-sm leading-6 text-text-secondary">{vertical.description}</p>
                  </Link>
                );
              })}
            </div>
          </AboutReveal>
        </div>
      </AboutContainer>
    </AboutSection>
  );
}
