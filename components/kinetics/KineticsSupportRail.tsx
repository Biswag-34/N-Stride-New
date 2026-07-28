"use client";

import { PackageCheck } from "lucide-react";
import { GiSocks } from "react-icons/gi";
import { FaShoePrints } from "react-icons/fa6";

import {
  KineticsContainer,
  KineticsIconBubble,
  KineticsSection,
  MotionReveal,
} from "@/components/kinetics/KineticsPrimitives";

const accessories = [
  { icon: FaShoePrints, label: "Orthotic Insoles" },
  { icon: FaShoePrints, label: "Arch Supports" },
  { icon: PackageCheck, label: "Heel Cups" },
  { icon: PackageCheck, label: "Toe Protectors" },
  { icon: PackageCheck, label: "Silicone Gel Pads" },
  { icon: GiSocks, label: "Ankle Supports" },
  { icon: PackageCheck, label: "Care Kits" },
];

export function KineticsSupportRail() {
  return (
    <KineticsSection className="pb-14">
      <KineticsContainer>
        <MotionReveal>
          <div className="rounded-[1.35rem] border border-[#c9e6f8] bg-[linear-gradient(90deg,#f4faff,#ffffff,#f4faff)] px-7 py-6 shadow-[0_20px_55px_rgba(20,121,201,0.1)]">
            <div className="grid gap-6 lg:grid-cols-[0.24fr_0.76fr] lg:items-end">
              <div>
                <h2 className="font-heading text-2xl font-bold text-primary-dark">Support beyond footwear.</h2>
                <p className="mt-2 text-sm text-text-secondary">
                  Add-on solutions that enhance protection, comfort and recovery.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 xl:grid-cols-7">
                {accessories.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div className="text-center" key={item.label}>
                      <KineticsIconBubble className="mx-auto h-14 w-14 shadow-none" size="md">
                        <Icon className="h-7 w-7" />
                      </KineticsIconBubble>
                      <p className="mt-3 text-xs font-bold text-primary-dark">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </MotionReveal>
      </KineticsContainer>
    </KineticsSection>
  );
}
