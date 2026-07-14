"use client";

import { Activity, ClipboardCheck, HeartHandshake, HeartPulse, ShieldCheck, Sparkles } from "lucide-react";

import { AboutArtImage, AboutContainer, AboutIconBubble, AboutKicker, AboutReveal, AboutSection } from "./AboutPrimitives";

const pillars = [
  {
    title: "Integrated Ecosystem",
    description: "All critical services under one connected model.",
    icon: HeartHandshake,
    color: "#2d82d8",
  },
  {
    title: "Advanced Technology",
    description: "Diagnostics and treatments driven by modern technology.",
    icon: ShieldCheck,
    color: "#58b96c",
  },
  {
    title: "Expert-Led Care",
    description: "Multi-disciplinary specialists with clinical excellence.",
    icon: ClipboardCheck,
    color: "#2d82d8",
  },
  {
    title: "Transparency & Trust",
    description: "Clear communication at every step.",
    icon: ClipboardCheck,
    color: "#58b96c",
  },
  {
    title: "Personalized Approach",
    description: "Care plans tailored to your unique needs.",
    icon: HeartPulse,
    color: "#2d82d8",
  },
  {
    title: "Long-Term Outcomes",
    description: "Focus on prevention, recovery and quality of life.",
    icon: Activity,
    color: "#58b96c",
  },
];

export function AboutTrustSection() {
  return (
    <AboutSection className="bg-[linear-gradient(180deg,#ffffff_0%,#f4fbff_100%)] py-16">
      <AboutContainer>
        <div className="grid items-center gap-14 lg:grid-cols-[0.52fr_0.48fr]">
          <AboutReveal>
            <div className="relative min-h-[360px] overflow-hidden rounded-[0.7rem] bg-[linear-gradient(135deg,#f9fdff,#eef8ff)] shadow-[0_22px_70px_rgba(20,121,201,0.10)] ring-1 ring-[#cfe6f7]">
              <AboutArtImage
                alt="N-Stride expert care and clinical support collage"
                className="absolute inset-0 opacity-95"
                imgClassName="object-cover"
                src="/about/trust-collage.png"
              />
              <div className="relative z-10 ml-auto flex min-h-[360px] max-w-[360px] flex-col justify-center bg-[linear-gradient(90deg,rgba(244,250,255,0)_0%,rgba(244,250,255,0.86)_34%,rgba(244,250,255,0.96)_100%)] p-8">
                <AboutKicker>Complete care, real impact</AboutKicker>
                <h2 className="mt-5 font-heading text-[2rem] font-bold leading-tight text-primary-dark">
                  Expert care.
                  <br />
                  <span className="text-primary">Human touch.</span>
                </h2>
                <p className="mt-5 text-sm leading-7 text-text-secondary">
                  From everyday foot pain to complex wound care, our specialists and technology work together to restore mobility,
                  confidence and independence.
                </p>
              </div>
            </div>
          </AboutReveal>

          <AboutReveal delay={0.08}>
            <AboutKicker>Why patients trust N-Stride</AboutKicker>
            <div className="mt-7 grid gap-x-10 gap-y-8 md:grid-cols-2">
              {pillars.map((pillar) => {
                const Icon = pillar.icon ?? Sparkles;

                return (
                  <div className="flex gap-4" key={pillar.title}>
                    <AboutIconBubble className="h-14 w-14" color={pillar.color} size="sm">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </AboutIconBubble>
                    <div>
                      <h3 className="font-heading text-base font-bold text-primary-dark">{pillar.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-text-secondary">{pillar.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </AboutReveal>
        </div>
      </AboutContainer>
    </AboutSection>
  );
}
