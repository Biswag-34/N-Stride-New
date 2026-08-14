"use client";

import Link from "next/link";
import { ArrowRight, Bandage, HandHeart, Stethoscope } from "lucide-react";
import { GiRunningShoe } from "react-icons/gi";
import { PiPersonSimpleWalkDuotone } from "react-icons/pi";

import {
  KineticsContainer,
  KineticsIconBubble,
  KineticsKicker,
  KineticsSection,
  MotionReveal,
} from "@/components/kinetics/KineticsPrimitives";

const nodes = [
  { color: "#26b6c8", icon: Stethoscope, label: "Insight", text: "Understand the foot" },
  { color: "#f5a623", icon: Bandage, label: "Wound Care", text: "Support complex wound healing" },
  { color: "#1479c9", icon: GiRunningShoe, label: "N-Stride Kinetics", text: "Footwear for every step of care", center: true },
  { color: "#5a67d8", icon: PiPersonSimpleWalkDuotone, label: "Bio-Fit", text: "Restoration & rehabilitation" },
  { color: "#1479c9", icon: HandHeart, label: "Step-Ahead", text: "Guided care journey" },
];

export function KineticsEcosystemBand() {
  return (
    <KineticsSection className="bg-[linear-gradient(90deg,#f4faff,#ffffff_45%,#f4faff)] py-7">
      <KineticsContainer>
        <div className="grid items-center gap-8 lg:grid-cols-[0.26fr_0.74fr]">
          <MotionReveal>
            <KineticsKicker>Our role</KineticsKicker>
            <h2 className="mt-3 max-w-[21rem] font-heading text-3xl font-bold leading-tight text-primary-dark">
              Part of the N-Stride care ecosystem.
            </h2>
            <p className="mt-4 max-w-[24rem] text-sm leading-7 text-text-secondary">
              Kinetics connects design, science and clinical insight to support your movement, every day.
            </p>
            <Link className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary" href="/verticals">
              See how we work together
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </MotionReveal>

          <MotionReveal className="relative overflow-hidden py-3">
            <div className="absolute left-[7%] right-[5%] top-[4.72rem] hidden h-px bg-[linear-gradient(90deg,transparent,#9ecdf2_11%,#9ecdf2_88%,transparent)] lg:block" />
            <div className="absolute left-[23%] right-[18%] top-[4.72rem] hidden h-px bg-white/70 blur-[2px] lg:block" />
            <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5 lg:items-start">
              {nodes.map((node, index) => {
                const Icon = node.icon;
                return (
                  <div className="relative flex flex-col items-center text-center" key={node.label}>
                    {index > 0 ? (
                      <span className="hidden lg:absolute lg:left-[-18px] lg:top-[4.43rem] lg:flex lg:h-5 lg:w-5 lg:items-center lg:justify-center lg:rounded-full lg:border lg:border-[#c9e6f8] lg:bg-white">
                        <ArrowRight aria-hidden="true" className="h-3 w-3 text-primary" />
                      </span>
                    ) : null}
                    <KineticsIconBubble
                      className={
                        node.center
                          ? "h-32 w-32 border-[#c9e6f8] bg-[radial-gradient(circle,#ffffff,#f4faff)] shadow-[0_22px_50px_rgba(20,121,201,0.2)]"
                          : "h-[4.7rem] w-[4.7rem] border-[#c9e6f8] bg-[radial-gradient(circle,#ffffff,#f7fbff)] shadow-[0_16px_36px_rgba(20,121,201,0.12)]"
                      }
                      color={node.color}
                      size={node.center ? "lg" : "md"}
                    >
                      {node.center ? (
                        <span className="font-heading text-lg font-bold leading-tight text-primary-dark">
                          N-Stride
                          <br />
                          Kinetics
                        </span>
                      ) : (
                        <Icon className="h-7 w-7" />
                      )}
                    </KineticsIconBubble>
                    <p className="mt-4 font-heading text-sm font-bold text-primary-dark">{node.label}</p>
                    <p className="mt-1 max-w-[8.5rem] text-xs leading-5 text-text-secondary">{node.text}</p>
                  </div>
                );
              })}
            </div>
          </MotionReveal>
        </div>
      </KineticsContainer>
    </KineticsSection>
  );
}
