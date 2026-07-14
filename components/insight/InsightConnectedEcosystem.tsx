"use client";

import Link from "next/link";
import { ArrowRight, Bandage, Footprints } from "lucide-react";
import { PiPersonSimpleWalkDuotone } from "react-icons/pi";

import {
  InsightContainer,
  InsightIconBubble,
  InsightReveal,
  InsightSection,
  InsightWaveImage,
} from "@/components/insight/InsightPrimitives";

const cards = [
  { icon: Footprints, title: "Kinetics", text: "Footwear and movement solution aligned to assessment insights.", href: "/verticals/kinetics" },
  { icon: Bandage, title: "Wound Care", text: "Structured wound management with N-Stride NPWT VAC & advanced care.", href: "/verticals/wound-care" },
  { icon: PiPersonSimpleWalkDuotone, title: "Bio-Fit", text: "Restoration through prosthetics, orthotics and silicone solutions.", href: "/verticals/bio-fit" },
  { icon: ArrowRight, title: "Step-Ahead", text: "Business-in-a-box model to launch and grow your foot care service.", href: "/step-ahead" },
];

export function InsightConnectedEcosystem() {
  return (
    <InsightSection className="bg-[linear-gradient(180deg,#ffffff,#f8fcff)] py-16">
      <InsightWaveImage className="inset-x-0 top-20 h-64 w-full opacity-82" src="/insight/connected-flow-bg.png" />
      <InsightContainer>
        <InsightReveal className="text-center">
          <p className="font-heading text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary">Connected ecosystem</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-primary-dark">One platform. Complete care continuity.</h2>
        </InsightReveal>
        <InsightReveal className="relative mt-10" delay={0.08}>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  className="group relative rounded-[1.4rem] bg-white/92 p-7 shadow-[0_18px_50px_rgba(20,121,201,0.09)] ring-1 ring-[#c9e6f8] backdrop-blur transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25"
                  href={card.href}
                  key={card.title}
                >
                  <InsightIconBubble className="h-12 w-12 shadow-none" size="sm">
                    <Icon className="h-5 w-5" />
                  </InsightIconBubble>
                  <h3 className="mt-5 font-heading text-lg font-bold text-primary-dark">{card.title}</h3>
                  <p className="mt-3 min-h-[4rem] text-sm leading-6 text-text-secondary">{card.text}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">
                    Explore {card.title}
                    <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </InsightReveal>
      </InsightContainer>
    </InsightSection>
  );
}
