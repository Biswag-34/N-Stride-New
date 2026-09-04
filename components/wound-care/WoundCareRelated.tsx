"use client";

import Link from "next/link";
import { ArrowRight, Footprints, Stethoscope } from "lucide-react";
import { PiPersonSimpleWalkDuotone } from "react-icons/pi";

import {
  WoundBackgroundImage,
  WoundContainer,
  WoundIconBubble,
  WoundReveal,
  WoundSection,
} from "@/components/wound-care/WoundCarePrimitives";

const related = [
  { icon: Footprints, title: "Kinetics", text: "Movement & Protection", href: "/verticals/kinetics" },
  { icon: Stethoscope, title: "Insight", text: "Assessment & Diagnosis", href: "/verticals/insight" },
  { icon: PiPersonSimpleWalkDuotone, title: "Bio-Fit", text: "Restoration & Reconstruction", href: "/verticals/bio-fit" },
  { icon: Footprints, title: "Insoles & Footwear", text: "Therapeutic Support", href: "https://nstride.shop", external: true },
];

export function WoundCareRelated() {
  return (
    <WoundSection className="py-8">
      <WoundBackgroundImage className="bottom-0 right-0 h-44 w-[34rem] opacity-10" src="/wound-care/amber-wave.png" />
      <WoundContainer>
        <WoundReveal>
          <div className="rounded-[1.25rem] bg-white/96 px-6 py-5 shadow-[0_18px_55px_rgba(16,42,67,0.08)] ring-1 ring-[#c9e6f8] backdrop-blur">
            <p className="font-heading text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#b86b00]">Related solutions</p>
            <div className="mt-5 grid gap-4 lg:grid-cols-[0.28fr_0.18fr_0.18fr_0.18fr_0.18fr] lg:items-center">
              <h2 className="font-heading text-lg font-bold text-primary-dark">Connected support beyond wound dressing.</h2>
              {related.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span className="flex items-center gap-3">
                      <WoundIconBubble className="h-10 w-10 shadow-none" color={item.title === "Insoles & Footwear" ? "#5a67d8" : "#1479c9"} size="sm">
                        <Icon className="h-5 w-5" />
                      </WoundIconBubble>
                      <span>
                        <span className="block font-heading text-sm font-bold text-primary-dark">{item.title}</span>
                        <span className="block text-xs text-text-secondary">{item.text}</span>
                      </span>
                    </span>
                    <ArrowRight aria-hidden="true" className="h-4 w-4 text-primary" />
                  </>
                );

                return item.external ? (
                  <a className="flex items-center justify-between rounded-[0.9rem] bg-[#fbfdff]/95 px-3 py-2.5 shadow-[0_10px_28px_rgba(20,121,201,0.05)] ring-1 ring-[#c9e6f8]" href={item.href} key={item.title} rel="noreferrer" target="_blank">
                    {content}
                  </a>
                ) : (
                  <Link className="flex items-center justify-between rounded-[0.9rem] bg-[#fbfdff]/95 px-3 py-2.5 shadow-[0_10px_28px_rgba(20,121,201,0.05)] ring-1 ring-[#c9e6f8]" href={item.href} key={item.title}>
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>
        </WoundReveal>
      </WoundContainer>
    </WoundSection>
  );
}
