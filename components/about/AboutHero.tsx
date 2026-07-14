"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { brand } from "@/data/brand";
import { ctas } from "@/data/ctas";
import { cn } from "@/lib/cn";

import { AboutArtImage, AboutBackgroundArt, AboutContainer, AboutKicker, AboutReveal, AboutSection } from "./AboutPrimitives";

const labels = [
  { text: "Therapeutic Footwear", className: "left-[16%] top-[16%] text-left" },
  { text: "Diagnostics & Clinical Support", className: "right-[9%] top-[16%] text-left" },
  { text: "NPWT VAC Wound Care Support", className: "right-[4%] top-[53%] text-left" },
  { text: "Care Programs & Continued Support", className: "left-[47%] bottom-[11%] text-left" },
  { text: "Prosthetics, Orthotics & Silicone", className: "left-[6%] top-[51%] text-left" },
];

export function AboutHero() {
  return (
    <AboutSection className="bg-[linear-gradient(116deg,#ffffff_0%,#fbfdff_46%,#eef8ff_100%)]">
      <div className="absolute inset-x-0 bottom-0 h-px bg-[#d9ebf8]" />
      <AboutBackgroundArt className="-bottom-20 right-0 h-[44%] w-[56%] opacity-55" src="/about/wave-field-wide.png" />
      <AboutContainer className="grid min-h-[520px] items-center gap-10 py-16 lg:grid-cols-[0.46fr_0.54fr] lg:py-[4.5rem]">
        <AboutReveal>
          <AboutKicker>About N-Stride</AboutKicker>
          <h1 className="mt-7 max-w-[570px] font-heading text-[clamp(2.55rem,5.7vw,4.7rem)] font-bold leading-[1.06] text-primary-dark">
            One ecosystem.
            <br />
            <span className="text-primary">Complete foot & lower-limb care.</span>
          </h1>
          <p className="mt-7 max-w-[560px] text-[1.02rem] leading-8 text-text-secondary">{brand.shortIntro}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button className="rounded-[0.5rem] px-7 text-sm" href={ctas.primary.href} size="lg">
              {ctas.primary.label}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button className="rounded-[0.5rem] px-7 text-sm" href={ctas.verticals.href} size="lg" variant="outline">
              {ctas.verticals.label}
            </Button>
          </div>
        </AboutReveal>

        <AboutReveal className="relative" delay={0.08}>
          <div className="relative mx-auto hidden h-[480px] w-full max-w-[720px] lg:block">
            <AboutArtImage
              alt="N-Stride connected care ecosystem with five care verticals"
              className="absolute inset-0"
              priority
              src="/about/hero-ecosystem.png"
            />
            <div className="absolute left-1/2 top-[50%] flex -translate-x-1/2 translate-y-[1.2rem] flex-col items-center text-center">
              <span className="font-heading text-xl font-bold text-primary-dark">N-Stride</span>
              <span className="mt-1 max-w-[7rem] text-[0.7rem] font-semibold leading-4 text-text-secondary">
                Connected Care Ecosystem
              </span>
            </div>
            {labels.map((label) => (
              <p
                className={cn("absolute max-w-[150px] text-[0.76rem] font-bold leading-[1.28] text-primary-dark", label.className)}
                key={label.text}
              >
                {label.text}
              </p>
            ))}
          </div>

          <div className="relative mx-auto h-[360px] w-full max-w-[500px] lg:hidden">
            <AboutArtImage
              alt="N-Stride connected care ecosystem with care icons"
              className="absolute inset-0"
              priority
              src="/about/hero-ecosystem.png"
            />
          </div>
        </AboutReveal>
      </AboutContainer>
    </AboutSection>
  );
}
