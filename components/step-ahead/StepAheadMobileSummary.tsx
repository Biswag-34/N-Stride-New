"use client";

import { ArrowRight, CheckCircle2, ClipboardList, PackageCheck, Rocket, Settings2 } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { leadCaptureHref } from "@/data/leadCapture";

import { StepContainer, StepSection } from "./StepAheadPrimitives";

const mobileStages = [
  { title: "Scope", text: "Clinic type, patient profile and service goals.", icon: ClipboardList },
  { title: "Equip", text: "Foot scan, VIBRASENSE+T, ABI and pressure mapping.", icon: PackageCheck },
  { title: "Train", text: "2 to 4 day role-based training and SOP clarity.", icon: Settings2 },
  { title: "Launch", text: "Starter inventory, patient flow and review support.", icon: Rocket },
];

const packages = [
  { name: "Essential", price: "₹3.5 lakh", text: "Core diagnostics, 2-day training and ₹1 lakh inventory." },
  { name: "Advanced", price: "₹5 lakh", text: "Expanded inventory, 4-day training, Doppler and NPWT." },
];

export function StepAheadMobileSummary() {
  return (
    <StepSection className="bg-[linear-gradient(180deg,#ffffff,#f4fbff)] px-4 pb-8 pt-2 md:hidden">
      <StepContainer className="px-0">
        <div className="rounded-[1rem] border border-[#c9e6f8] bg-white p-4 shadow-[0_18px_46px_rgba(20,121,201,0.08)]">
          <p className="font-heading text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-primary">Program path</p>
          <h2 className="mt-2 font-heading text-[1.55rem] font-extrabold leading-tight text-primary-dark">
            Four clear moves from interest to launch.
          </h2>
          <div className="mt-4 grid gap-2">
            {mobileStages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <div className="grid grid-cols-[2rem_2.75rem_1fr] items-center gap-2 rounded-[0.85rem] bg-[#f8fcff] px-3 py-2.5 ring-1 ring-[#d8edf8]" key={stage.title}>
                  <span className="font-heading text-xs font-extrabold text-primary">0{index + 1}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-[0.7rem] bg-white text-primary shadow-[0_8px_20px_rgba(20,121,201,0.08)]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-heading text-sm font-extrabold text-primary-dark">{stage.title}</span>
                    <span className="mt-0.5 block text-[0.72rem] font-semibold leading-4 text-text-secondary">{stage.text}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          {packages.map((item) => (
            <div className="rounded-[0.9rem] border border-[#c9e6f8] bg-white p-3 shadow-[0_12px_30px_rgba(20,121,201,0.06)]" key={item.name}>
              <p className="font-heading text-xs font-extrabold text-primary">{item.name}</p>
              <p className="mt-1 font-heading text-xl font-extrabold text-primary-dark">{item.price}</p>
              <p className="mt-1 text-[0.68rem] font-semibold leading-4 text-text-secondary">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-[0.9rem] bg-[#073b66] p-3 text-white">
          <p className="font-heading text-sm font-extrabold">Important before pricing</p>
          <div className="mt-2 grid gap-1.5">
            {["GST treatment", "Effective date", "Training scope", "Fulfilment process"].map((item) => (
              <span className="flex items-center gap-2 text-[0.72rem] font-bold text-white/82" key={item}>
                <CheckCircle2 aria-hidden="true" className="h-3.5 w-3.5 text-[#8edbd0]" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <Button className="nstride-mobile-action mt-4 w-full rounded-[0.75rem]" href={leadCaptureHref({ cta: "discuss_stepahead_partnership", source: "/step-ahead", type: "step-ahead" })}>
          Book a Strategy Call
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Button>
      </StepContainer>
    </StepSection>
  );
}
