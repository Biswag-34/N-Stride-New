"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Vertical } from "@/data/verticals";

import { Button } from "@/components/ui/Button";
import { KineticsContainer, KineticsSection } from "@/components/kinetics/KineticsPrimitives";

type KineticsCTAProps = {
  vertical: Vertical;
};

export function KineticsCTA({ vertical }: KineticsCTAProps) {
  const secondaryCta = vertical.cta.secondary ?? {
    external: true,
    href: "https://nstride.shop",
    label: "Explore Footwear",
  };

  return (
    <KineticsSection className="pb-14">
      <KineticsContainer>
        <div className="relative isolate overflow-hidden rounded-[1.45rem] shadow-[0_28px_70px_rgba(7,59,102,0.22)]">
          <Image
            alt="The right footwear, guidance and step forward"
            className="h-auto w-full"
            height={437}
            priority={false}
            sizes="(min-width: 1024px) 1380px, 96vw"
            src="/kinetics/lbg.png"
            width={2011}
          />
          <div className="sr-only">
            <h2>
              The right footwear.
              The right guidance.
              The right step forward.
            </h2>
            <p>Start with a foot checkup and discover what Kinetics can do for you.</p>
          </div>
          <div className="absolute left-[43%] top-[73%] z-10 hidden -translate-y-1/2 gap-3 lg:flex">
            <Button className="rounded-[0.45rem] bg-white px-6 text-primary hover:bg-[#e8f5ff]" href={vertical.cta.primary.href}>
              Book Foot Checkup
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button
              className="rounded-[0.45rem] border-white/70 bg-transparent px-6 text-white hover:bg-white/10"
              external={secondaryCta.external}
              href={secondaryCta.href}
              variant="outline"
            >
              Explore Footwear
            </Button>
          </div>
          <div className="flex flex-col gap-3 bg-[#073b66] p-5 sm:flex-row lg:hidden">
            <Button className="rounded-[0.45rem] bg-white text-primary hover:bg-[#e8f5ff]" href={vertical.cta.primary.href}>
              Book Foot Checkup
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button
              className="rounded-[0.45rem] border-white/70 bg-transparent text-white hover:bg-white/10"
              external={secondaryCta.external}
              href={secondaryCta.href}
              variant="outline"
            >
              Explore Footwear
            </Button>
          </div>
        </div>
      </KineticsContainer>
    </KineticsSection>
  );
}
