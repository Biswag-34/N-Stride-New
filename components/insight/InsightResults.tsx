"use client";

import { ArrowRight, BadgeCheck, ClipboardList, Footprints, ShieldAlert, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/Button";
import {
  InsightAsset,
  InsightContainer,
  InsightIconBubble,
  InsightReveal,
  InsightSection,
  InsightWaveField,
} from "@/components/insight/InsightPrimitives";

const outcomes = [
  { icon: ShieldAlert, text: "Early detection of risk" },
  { icon: ClipboardList, text: "Personalized care plans" },
  { icon: TrendingUp, text: "Stronger patient outcomes" },
  { icon: BadgeCheck, text: "Reduced complications" },
  { icon: Footprints, text: "Better compliance & follow-up" },
];

export function InsightResults() {
  return (
    <InsightSection className="border-y border-[#c9e6f8]/70 bg-white py-16">
      <InsightContainer>
        <div className="grid gap-9 lg:grid-cols-[0.5fr_0.22fr_0.28fr]">
          <InsightReveal>
            <h2 className="font-heading text-3xl font-bold text-primary-dark">
              Intelligence that drives real-world results
            </h2>
            <InsightAsset
              alt="Insight diagnostic dashboard with patient overview, pressure maps and wound assessment"
              className="mt-7 min-h-[310px] rounded-[1.35rem] bg-white shadow-[18px_24px_70px_rgba(20,121,201,0.12)] ring-1 ring-[#c9e6f8]"
              imageClassName="object-cover object-left-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
              src="/insight/insight-dashboard.png"
            />
          </InsightReveal>

          <InsightReveal className="grid content-end gap-4" delay={0.08}>
            {outcomes.map((item) => {
              const Icon = item.icon;
              return (
                <div className="flex items-center gap-3 rounded-[1rem] bg-white p-4 shadow-[0_14px_34px_rgba(20,121,201,0.1)] ring-1 ring-[#c9e6f8]" key={item.text}>
                  <InsightIconBubble className="h-10 w-10 shadow-none" size="sm">
                    <Icon className="h-5 w-5" />
                  </InsightIconBubble>
                  <p className="text-sm font-bold text-primary-dark">{item.text}</p>
                </div>
              );
            })}
          </InsightReveal>

          <InsightReveal delay={0.14}>
            <div className="relative isolate h-full min-h-[20rem] overflow-hidden rounded-[1.35rem] bg-[linear-gradient(135deg,#f4faff,#ffffff)] p-9 shadow-[18px_24px_70px_rgba(20,121,201,0.12)] ring-1 ring-[#c9e6f8]">
              <InsightWaveField className="-right-32 bottom-0 h-56 w-[34rem]" />
              <h3 className="relative z-10 font-heading text-3xl font-bold leading-tight text-primary-dark">
                Turn diagnostic clarity into confident care.
              </h3>
              <p className="relative z-10 mt-4 text-sm leading-7 text-text-secondary">
                Empower your team with intelligent insights at every step.
              </p>
              <Button className="relative z-10 mt-8 rounded-[0.45rem]" href="/contact?type=foot-checkup">
                Book Foot Checkup
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
            </div>
          </InsightReveal>
        </div>
      </InsightContainer>
    </InsightSection>
  );
}
