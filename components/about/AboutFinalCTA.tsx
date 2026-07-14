"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { ctas } from "@/data/ctas";

import { AboutArtImage, AboutContainer, AboutKicker, AboutReveal, AboutSection } from "./AboutPrimitives";

export function AboutFinalCTA() {
  return (
    <AboutSection className="bg-white py-16">
      <AboutContainer>
        <div className="grid items-center gap-14 lg:grid-cols-[0.52fr_0.48fr]">
          <AboutReveal>
            <div className="relative min-h-[290px] overflow-hidden rounded-[0.75rem] bg-[linear-gradient(135deg,#f9fdff,#eef8ff)] shadow-[0_22px_70px_rgba(20,121,201,0.10)] ring-1 ring-[#cfe6f7]">
              <AboutArtImage
                alt="Foot care journey pathway illustration"
                className="absolute inset-0"
                imgClassName="object-cover"
                src="/about/final-journey.png"
              />
            </div>
          </AboutReveal>

          <AboutReveal delay={0.08}>
            <AboutKicker>More than treatment</AboutKicker>
            <h2 className="mt-5 max-w-[560px] font-heading text-[clamp(2.1rem,3.7vw,3.55rem)] font-bold leading-[1.08] text-primary-dark">
              A partner for
              <br />
              <span className="text-primary">every step ahead.</span>
            </h2>
            <p className="mt-6 max-w-[540px] text-[0.98rem] leading-8 text-text-secondary">
              N-Stride is committed to walking with you through every challenge, every milestone and every step toward a healthier
              tomorrow.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button className="rounded-[0.5rem] px-7 text-sm" href={ctas.primary.href} size="lg">
                {ctas.primary.label}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button className="rounded-[0.5rem] px-7 text-sm" href={ctas.stepAhead.href} size="lg" variant="outline">
                {ctas.stepAhead.label}
              </Button>
            </div>
          </AboutReveal>
        </div>
      </AboutContainer>
    </AboutSection>
  );
}
