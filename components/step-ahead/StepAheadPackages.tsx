"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, CircleDollarSign, ClipboardList, Headphones, MonitorCog, PackageCheck, Settings2 } from "lucide-react";

import { StepContainer, StepIconBubble, StepKicker, StepReveal, StepSection } from "./StepAheadPrimitives";

const included = [
  { title: "Technology", text: "Diagnostic devices, pressure systems and digital tools", icon: MonitorCog },
  { title: "Training", text: "Clinical training, certification and ongoing learning", icon: ClipboardList },
  { title: "Inventory", text: "Care kits, disposables and consumables", icon: PackageCheck },
  { title: "Service Development", text: "SOPs, patient pathways, marketing and operational support", icon: Settings2 },
  { title: "Ongoing Support", text: "Remote support, outcomes tracking and growth guidance", icon: Headphones },
];

const packages = [
  {
    name: "Starter",
    subtitle: "Launch with confidence",
    price: "₹ 3,50,000*",
    features: ["Essential diagnostic setup", "Basic foot care instruments & kits", "Team training foundation", "Standard SOPs & protocols", "Marketing toolkit", "3 months remote support"],
    best: "Clinics launching first-time services",
  },
  {
    name: "Growth",
    subtitle: "Scale with structure",
    price: "₹ 6,00,000*",
    featured: true,
    features: [
      "Advanced diagnostic tools",
      "Complete foot care instruments & kits",
      "Team training (advanced)",
      "Digital risk assessment module",
      "Patient education & marketing kit",
      "6 months remote support + review",
    ],
    best: "Clinics growing patient base and service scope",
  },
  {
    name: "Impact",
    subtitle: "Lead with excellence",
    price: "₹ 9,50,000*",
    features: [
      "Premium diagnostic & monitoring tools",
      "Comprehensive instruments & kits",
      "Team training framework",
      "Outcomes dashboard & analytics",
      "Branded marketing & outreach support",
      "12 months priority support",
    ],
    best: "Clinics aiming for leadership and advanced outcomes",
  },
];

export function StepAheadPackages() {
  return (
    <StepSection className="bg-[linear-gradient(180deg,#ffffff,#f4fbff_92%)] py-16" id="packages">
      <StepContainer>
        <div className="grid gap-10 lg:grid-cols-[0.29fr_0.71fr]">
          <StepReveal>
            <StepKicker>What is included</StepKicker>
            <h2 className="mt-4 font-heading text-[clamp(2rem,3vw,3.15rem)] font-bold leading-tight text-primary-dark">
              Everything you need.
              <br />
              Nothing you do not.
            </h2>
            <div className="relative mt-8 space-y-0 pl-2">
              <span aria-hidden="true" className="absolute left-[1.28rem] top-5 h-[calc(100%-2.25rem)] w-px bg-[#b9dff5]" />
              {included.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="relative flex gap-5 pb-7 last:pb-0" key={item.title}>
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-[0_12px_30px_rgba(20,121,201,0.11)] ring-1 ring-[#c9e6f8]">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <div className="-mt-1">
                      <h3 className="font-heading text-base font-bold text-primary-dark">{item.title}</h3>
                      <p className="mt-1 max-w-[19rem] text-sm leading-6 text-text-secondary">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </StepReveal>

          <StepReveal delay={0.08}>
            <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#ffffff,#f3fbff)] p-6 shadow-[24px_34px_85px_rgba(20,121,201,0.09)] ring-1 ring-[#d5eafa] lg:p-7">
              <Image
                alt=""
                className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-[0.16]"
                fill
                src="/step-ahead/package-card-shapes.png"
                sizes="100vw"
              />
              <div className="relative">
                <StepKicker>Packages</StepKicker>
                <h2 className="mt-4 max-w-[760px] font-heading text-[clamp(1.7rem,2.3vw,2.45rem)] font-bold leading-tight text-primary-dark">
                  Choose the setup level that fits your clinical goal.
                </h2>
                <p className="mt-2 text-sm text-text-secondary">All packages include training, setup support and post-launch guidance.</p>

                <div className="mt-8 grid gap-5 xl:grid-cols-[1fr_1fr_1fr_0.78fr]">
                  {packages.map((item) => (
                    <div
                      className={
                        item.featured
                          ? "relative rounded-[1.15rem] border border-[#8bd899] bg-white p-6 shadow-[0_22px_55px_rgba(92,184,92,0.16)]"
                          : "relative rounded-[1.15rem] border border-[#d7e9f7] bg-white/95 p-6 shadow-[0_16px_40px_rgba(20,121,201,0.07)]"
                      }
                      key={item.name}
                    >
                      {item.featured ? (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#eefbf2] px-5 py-1 text-[0.68rem] font-bold text-[#2f8a43] ring-1 ring-[#9cdfa8]">
                          Most Popular
                        </span>
                      ) : null}
                      <h3 className="font-heading text-xl font-bold text-primary-dark">{item.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-text-secondary">{item.subtitle}</p>
                      <p className={item.featured ? "mt-5 font-heading text-[2rem] font-bold leading-none text-[#32924a]" : "mt-5 font-heading text-[2rem] font-bold leading-none text-primary"}>
                        {item.price}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {item.features.map((feature) => (
                          <li className="flex gap-2 text-xs leading-5 text-text-secondary" key={feature}>
                            <CheckCircle2 aria-hidden="true" className={item.featured ? "mt-0.5 h-4 w-4 shrink-0 text-[#4caf62]" : "mt-0.5 h-4 w-4 shrink-0 text-primary"} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-6 border-t border-[#e0eef8] pt-4 text-xs leading-5 text-text-secondary">
                        <strong className="text-primary-dark">Best for:</strong> {item.best}
                      </p>
                    </div>
                  ))}

                  <div className="relative flex min-h-[15rem] flex-col justify-center rounded-[1.15rem] bg-[linear-gradient(145deg,#f8fdff,#eef8ff)] p-6 shadow-[0_16px_40px_rgba(20,121,201,0.06)] ring-1 ring-[#d7ebfa]">
                    <StepIconBubble className="mb-5 h-12 w-12" size="sm">
                      <CircleDollarSign aria-hidden="true" className="h-6 w-6" />
                    </StepIconBubble>
                    <h3 className="font-heading text-base font-bold text-primary-dark">Flexible by design</h3>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                      Add-ons and modular upgrades let you customize as you grow.
                    </p>
                    <Link className="mt-6 text-sm font-bold text-primary transition hover:text-primary-dark" href="/contact?type=step-ahead">
                      View all add-ons {"->"}
                    </Link>
                  </div>
                </div>
                <p className="mt-4 text-xs text-text-muted">*Taxes extra as applicable. Custom plans available.</p>
              </div>
            </div>
          </StepReveal>
        </div>
      </StepContainer>
    </StepSection>
  );
}
