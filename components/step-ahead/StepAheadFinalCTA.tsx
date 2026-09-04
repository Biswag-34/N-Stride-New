"use client";

import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { leadCaptureHref } from "@/data/leadCapture";

import { StepContainer, StepReveal, StepSection } from "./StepAheadPrimitives";

export function StepAheadFinalCTA() {
  return (
    <StepSection className="bg-white pb-14 pt-2">
      <StepContainer>
        <StepReveal>
          <div className="relative grid min-h-[250px] overflow-hidden rounded-[1.55rem] bg-[linear-gradient(105deg,#eefbf0_0%,#f7fdff_48%,#eaf6ff_100%)] shadow-[20px_28px_70px_rgba(20,121,201,0.1)] ring-1 ring-[#d5eafa] lg:grid-cols-[0.48fr_0.52fr]">
            <Image
              alt=""
              className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-55"
              fill
              sizes="100vw"
              src="/step-ahead/soft-green-wave.png"
            />
            <div className="relative z-10 p-8 md:p-10">
              <h2 className="max-w-[520px] font-heading text-[clamp(1.75rem,2.4vw,2.55rem)] font-bold leading-tight text-primary-dark">
                Let&apos;s build better foot care - together.
              </h2>
              <p className="mt-4 max-w-[520px] text-sm leading-7 text-text-secondary">
                Book a strategy call with our team and see how Step-Ahead can transform your clinic and your community.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button className="rounded-[0.5rem]" href={leadCaptureHref({ cta: "discuss_stepahead_partnership", source: "/step-ahead", type: "step-ahead" })} size="lg">
                  Book a Strategy Call
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Button>
                <Button className="rounded-[0.5rem]" href={leadCaptureHref({ cta: "get_brochure_by_email", source: "/step-ahead", type: "step-ahead" })} size="lg" variant="outline">
                  <Mail aria-hidden="true" className="h-4 w-4" />
                  Get Brochure by Email
                </Button>
              </div>
            </div>
            <div className="relative min-h-[240px] overflow-hidden">
              <Image
                alt="Modern diabetic foot care clinic transformation"
                className="object-cover object-center"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                src="/step-ahead/clinic-room-photo.png"
              />
            </div>
          </div>
        </StepReveal>
      </StepContainer>
    </StepSection>
  );
}
