"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { verticals } from "@/data/verticals";

import { BioFitContainer, BioFitReveal, BioFitSection, BioFitSoftDivider } from "@/components/biofit/BioFitPrimitives";

const relatedIds = ["kinetics", "insight", "wound-care"];

export function BioFitConnectedPathways() {
  const related = verticals.filter((item) => relatedIds.includes(item.id));

  return (
    <BioFitSection className="bg-[linear-gradient(180deg,#ffffff,#fbf9ff)] pb-12 pt-12">
      <BioFitSoftDivider className="bottom-[-1.95rem] opacity-75" />
      <BioFitContainer>
        <div className="grid gap-8 lg:grid-cols-[0.28fr_0.72fr] lg:items-center">
          <BioFitReveal>
            <h2 className="font-heading text-3xl font-bold text-primary-dark">Connected care pathways</h2>
            <p className="mt-4 max-w-[25rem] text-sm leading-7 text-text-secondary">
              Bio-Fit works hand-in-hand with our ecosystem to support your complete care.
            </p>
          </BioFitReveal>
          <BioFitReveal delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <Link
                  className="group flex min-h-[4.75rem] items-center justify-between rounded-[0.95rem] bg-white px-6 py-4 shadow-[0_16px_34px_rgba(90,103,216,0.14),inset_0_1px_0_rgba(255,255,255,0.95)] ring-1 ring-[#e0d9ff] transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#7357d8]/25"
                  href={item.href}
                  key={item.id}
                >
                  <span>
                    <span className="block font-heading text-sm font-bold text-[#7357d8]">{item.shortName}</span>
                    <span className="mt-1 block text-xs text-text-secondary">{item.eyebrow}</span>
                  </span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4 text-[#7357d8] transition group-hover:translate-x-1" />
                </Link>
              ))}
              <Link
                className="group flex min-h-[4.75rem] items-center justify-between rounded-[0.95rem] bg-white px-6 py-4 shadow-[0_16px_34px_rgba(90,103,216,0.14),inset_0_1px_0_rgba(255,255,255,0.95)] ring-1 ring-[#e0d9ff] transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#7357d8]/25"
                href="/step-ahead"
              >
                <span>
                  <span className="block font-heading text-sm font-bold text-[#7357d8]">Step-Ahead</span>
                  <span className="mt-1 block text-xs text-text-secondary">Guided care programs</span>
                </span>
                <ArrowRight aria-hidden="true" className="h-4 w-4 text-[#7357d8] transition group-hover:translate-x-1" />
              </Link>
            </div>
          </BioFitReveal>
        </div>
      </BioFitContainer>
    </BioFitSection>
  );
}
