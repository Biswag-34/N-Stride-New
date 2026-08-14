"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Footprints,
  HeartHandshake,
  HeartPulse,
  Hospital,
  Layers3,
  ScanLine,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { brand } from "@/data/brand";
import { ctas } from "@/data/ctas";

import { AboutContainer, AboutIconBubble, AboutReveal, AboutSection, aboutEase } from "./AboutPrimitives";

const identityTabs = [
  {
    label: "Who We Are",
    title: "A connected care ecosystem for foot and lower-limb health.",
    text: "N-Stride brings diagnostics, therapeutic footwear, wound care, prosthetics, orthotics and clinical consultation into one coordinated journey.",
    icon: HeartHandshake,
    image: "/about/identity-who-we-are.png",
    imageAlt: "N-Stride care team reviewing footwear and lower-limb care planning",
    points: ["Doctor-led care thinking", "Integrated verticals", "Patient-first guidance"],
  },
  {
    label: "What We Are",
    title: "More than a product brand. More than a single clinic service.",
    text: "We are a practical care platform built around assessment, protection, treatment, restoration and long-term support.",
    icon: Layers3,
    image: "/about/identity-what-we-are.png",
    imageAlt: "N-Stride clinical care ecosystem with diagnostics, footwear and wound care support",
    points: ["Diagnostics and insight", "Therapeutic product pathways", "Recovery and restoration support"],
  },
  {
    label: "Why We Are",
    title: "Because fragmented care makes every step harder.",
    text: "People often move between disconnected providers, unclear recommendations and generic products. N-Stride makes the next step clearer.",
    icon: Sparkles,
    image: "/about/identity-why-we-are.png",
    imageAlt: "N-Stride clinician explaining foot pressure assessment to a patient",
    points: ["Earlier risk awareness", "Clearer care direction", "Better continuity"],
  },
  {
    label: "For Whom",
    title: "For patients, families, clinicians and partners building better mobility.",
    text: "From diabetic foot risk to everyday pain, wound support and mobility restoration, the ecosystem is designed for real-world care needs.",
    icon: UsersRound,
    image: "/about/identity-for-whom.png",
    imageAlt: "N-Stride consultation with patients and family members",
    points: ["Patients and caregivers", "Doctors and clinics", "Care partners and entrepreneurs"],
  },
];

const certificates = [
  { title: "Clinical Pathway Focus", text: "Structured assessment-to-action thinking across foot and lower-limb needs.", icon: ClipboardCheck },
  { title: "Quality-Led Products", text: "Therapeutic footwear and support solutions built around comfort, protection and fit.", icon: ShieldCheck },
  { title: "Care Continuity", text: "Connected verticals reduce handoff friction from diagnosis to ongoing support.", icon: BadgeCheck },
];

const partners = [
  "N-Stride Insight",
  "N-Stride Kinetics",
  "N-Stride Wound Care",
  "N-Stride Bio-Fit",
  "Step-Ahead",
  "Clinical Partners",
  "Care Clinics",
  "Mobility Centers",
];

const careSignals = [
  { label: "Foot checkups", icon: ScanLine },
  { label: "Therapeutic footwear", icon: Footprints },
  { label: "Wound care", icon: HeartPulse },
  { label: "Clinical partners", icon: Hospital },
];

function IdentitySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = identityTabs[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <AboutSection className="bg-[linear-gradient(180deg,#ffffff,#f5fbff)] py-6 md:py-10">
      <div aria-hidden="true" className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#dff4ff]/70 blur-3xl" />
      <div aria-hidden="true" className="absolute -left-32 bottom-0 h-80 w-96 rounded-full bg-[#eefbf4]/70 blur-3xl" />
      <AboutContainer>
        <AboutReveal className="relative grid gap-4 lg:grid-cols-[0.31fr_0.69fr] lg:items-stretch">
          <div className="relative rounded-[1rem] bg-white/86 p-3 shadow-[0_16px_42px_rgba(20,121,201,0.06)] ring-1 ring-[#d7ebfa] backdrop-blur md:p-4">
            <h2 className="font-heading text-[clamp(1.65rem,2.65vw,2.45rem)] font-bold leading-tight text-primary-dark">
              The N-Stride identity, in four clear answers.
            </h2>
            <p className="mt-3 hidden text-sm leading-6 text-text-secondary md:block">
              The model is built to keep care connected, practical and easier to understand at every stage.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2 md:mt-5 md:grid-cols-1">
              {identityTabs.map((tab, index) => (
                <button
                  aria-pressed={activeIndex === index}
                  className="group relative min-h-10 overflow-hidden rounded-[0.7rem] bg-[#f6fbff] px-2 py-2 text-left font-heading text-[0.7rem] font-bold text-primary-dark ring-1 ring-[#d7ebfa] transition hover:bg-white aria-pressed:bg-primary aria-pressed:text-white aria-pressed:shadow-[0_12px_26px_rgba(20,121,201,0.16)] md:min-h-11 md:px-3 md:py-2.5 md:text-xs"
                  key={tab.label}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-[0.45rem] bg-white/80 text-[0.68rem] text-primary ring-1 ring-[#d7ebfa] group-aria-pressed:bg-white/18 group-aria-pressed:text-white group-aria-pressed:ring-white/20">
                      0{index + 1}
                    </span>
                    <span>{tab.label}</span>
                  </span>
                  {activeIndex === index ? (
                    <motion.span
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 w-[3px] bg-white/82"
                      layoutId="identity-tab-progress"
                    />
                  ) : null}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            className="relative isolate overflow-hidden rounded-[1.15rem] border border-[#c9e6f8] bg-white shadow-[0_20px_60px_rgba(20,121,201,0.1)]"
            key={active.label}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: aboutEase }}
          >
            <div className="relative grid md:min-h-[26rem] md:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)] lg:min-h-[30rem]">
              <div className="relative z-0 aspect-[4/3] min-h-0 overflow-hidden bg-[#f6fbff] md:aspect-auto md:h-full">
                <Image
                  alt={active.imageAlt}
                  className="z-0 object-cover object-center md:object-[center_48%]"
                  fill
                  sizes="(min-width: 1024px) 470px, (min-width: 768px) 48vw, 100vw"
                  src={active.image}
                />
                <div className="absolute inset-x-0 bottom-0 z-10 bg-[linear-gradient(180deg,rgba(7,59,102,0),rgba(7,59,102,0.74))] px-4 pb-4 pt-20 text-white md:hidden">
                  <p className="font-heading text-lg font-bold">{active.label}</p>
                </div>
              </div>
              <div className="relative z-20 flex flex-col justify-center bg-[linear-gradient(135deg,rgba(248,252,255,0.98),#ffffff)] p-4 ring-1 ring-[#d7ebfa] md:border-l md:border-[#d7ebfa] md:p-6 lg:p-8">
                <div className="flex items-center gap-3">
                  <AboutIconBubble className="h-11 w-11 shadow-none" size="sm">
                    <ActiveIcon aria-hidden="true" className="h-5 w-5" />
                  </AboutIconBubble>
                </div>
                <h3 className="mt-4 font-heading text-[clamp(1.35rem,2vw,2rem)] font-bold leading-tight text-primary-dark">{active.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{active.text}</p>
                <div className="mt-4 flex snap-x gap-2 overflow-x-auto pb-1 md:grid md:overflow-visible md:pb-0 xl:grid-cols-3">
                  {active.points.map((point) => (
                    <div className="min-w-[8.7rem] snap-start rounded-[0.65rem] bg-white px-3 py-2 text-xs font-bold leading-5 text-primary-dark shadow-[0_8px_20px_rgba(20,121,201,0.04)] ring-1 ring-[#d7ebfa] md:min-w-0" key={point}>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AboutReveal>
      </AboutContainer>
    </AboutSection>
  );
}

function CertificateSection() {
  return (
    <AboutSection className="bg-[linear-gradient(180deg,#ffffff,#f6fbff)] py-10">
      <AboutContainer>
        <AboutReveal className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <h2 className="max-w-[620px] font-heading text-[clamp(1.8rem,2.8vw,2.7rem)] font-bold leading-tight text-primary-dark">
            Trust signals built into every care pathway.
          </h2>
          <p className="max-w-[440px] text-sm leading-7 text-text-secondary">
            Premium standards, clinical structure and continuity give patients and partners a more reliable way forward.
          </p>
        </AboutReveal>
        <div className="grid gap-4 md:grid-cols-3">
          {certificates.map((item, index) => {
            const Icon = item.icon;

            return (
              <AboutReveal delay={index * 0.06} key={item.title}>
                <motion.div
                  className="group relative h-full overflow-hidden rounded-[1rem] border border-[#d7ebfa] bg-white p-5 shadow-[0_16px_48px_rgba(20,121,201,0.07)]"
                  transition={{ duration: 0.4, ease: aboutEase }}
                  whileHover={{ y: -6, scale: 1.015 }}
                >
                  <div aria-hidden="true" className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#e8f7ff] blur-3xl transition group-hover:scale-125" />
                  <div className="relative">
                    <div className="flex items-center justify-between gap-4">
                      <AboutIconBubble className="h-14 w-14 shadow-none" size="md">
                        <Icon aria-hidden="true" className="h-6 w-6" />
                      </AboutIconBubble>
                      <Award aria-hidden="true" className="h-8 w-8 text-[#5cb85c]/55" />
                    </div>
                    <h3 className="mt-5 font-heading text-lg font-bold text-primary-dark">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-text-secondary">{item.text}</p>
                  </div>
                </motion.div>
              </AboutReveal>
            );
          })}
        </div>
      </AboutContainer>
    </AboutSection>
  );
}

function PartnerCarousel() {
  const reduceMotion = useReducedMotion();
  const items = useMemo(() => [...partners, ...partners], []);

  return (
    <AboutSection className="bg-white py-8">
      <AboutContainer>
        <AboutReveal>
          <div className="overflow-hidden rounded-[1rem] border border-[#d7ebfa] bg-[#f8fcff] py-4 shadow-[0_14px_44px_rgba(20,121,201,0.05)]">
            <motion.div
              className="flex w-max gap-3 px-3"
              animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
              transition={{ duration: 28, ease: "linear", repeat: Infinity }}
            >
              {items.map((name, index) => (
                <div
                  className="flex h-16 min-w-[13rem] items-center justify-center gap-3 rounded-[0.75rem] bg-white px-5 shadow-[0_10px_26px_rgba(20,121,201,0.05)] ring-1 ring-[#e0eef8]"
                  key={`${name}-${index}`}
                >
                  {name.startsWith("N-Stride") ? (
                    <Image alt="" className="h-8 w-auto object-contain" height={40} src="/brand/logo-header.png" width={120} />
                  ) : (
                    <Building2 aria-hidden="true" className="h-5 w-5 text-primary" />
                  )}
                  <span className="font-heading text-sm font-bold text-primary-dark">{name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </AboutReveal>
      </AboutContainer>
    </AboutSection>
  );
}

function FinalCTA() {
  return (
    <AboutSection className="bg-white pb-12">
      <AboutContainer>
        <AboutReveal>
          <div className="relative grid overflow-hidden rounded-[1.1rem] bg-[linear-gradient(105deg,#073b66,#0f6eb9_58%,#eafaf0)] shadow-[0_24px_76px_rgba(20,121,201,0.13)] lg:grid-cols-[0.56fr_0.44fr]">
            <div className="relative z-10 p-7 text-white md:p-10">
              <h2 className="max-w-[610px] font-heading text-[clamp(1.9rem,3vw,3rem)] font-bold leading-tight text-white">
                Start with a consultation built around your next step.
              </h2>
              <p className="mt-4 max-w-[560px] text-sm leading-7 text-white/84">
                Whether you need a foot checkup, therapeutic footwear, wound-care support or a clinic partnership, N-Stride helps you choose the right care path.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button className="rounded-[0.5rem] bg-white text-primary hover:bg-[#eef8ff]" href={ctas.primary.href} size="lg">
                  {ctas.primary.label}
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Button>
                <Button className="rounded-[0.5rem] border-white/70 bg-transparent text-white hover:bg-white/10" href="/verticals" size="lg" variant="outline">
                  Explore Care Verticals
                </Button>
              </div>
            </div>
            <div className="relative min-h-[250px]">
              <Image
                alt="Patient consultation and connected lower-limb care"
                className="object-cover object-center"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                src="/about/final-journey.png"
              />
            </div>
          </div>
        </AboutReveal>
      </AboutContainer>
    </AboutSection>
  );
}

export function AboutPage() {
  return (
    <>
      <AboutSection className="isolate bg-[#eef8ff]">
        <div aria-hidden="true" className="absolute inset-0 bg-[url('/about/about-hero-banner.png')] bg-cover bg-[58%_center] md:bg-center" />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.86)_36%,rgba(255,255,255,0.36)_65%,rgba(255,255,255,0.06)_100%)]" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,#ffffff_86%)]" />
        <AboutContainer className="relative z-10 grid items-center pb-12 pt-14 lg:min-h-[640px] lg:pb-16 lg:pt-16">
          <AboutReveal>
            <h1 className="max-w-[650px] font-heading text-[clamp(2.35rem,5.6vw,5rem)] font-bold leading-[1.02] text-primary-dark">
              One ecosystem.
              <br />
              Complete mobility care.
            </h1>
            <p className="mt-5 max-w-[570px] text-sm font-semibold leading-7 text-text-secondary sm:text-base sm:leading-8">{brand.shortIntro}</p>
            <div className="mt-7 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
              <Button className="w-full rounded-[0.5rem] px-7 text-sm xs:w-auto" href={ctas.primary.href} size="lg">
                {ctas.primary.label}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button className="w-full rounded-[0.5rem] px-7 text-sm xs:w-auto" href={ctas.verticals.href} size="lg" variant="outline">
                {ctas.verticals.label}
              </Button>
            </div>
          </AboutReveal>

          <AboutReveal className="col-span-full grid grid-cols-2 gap-2 pt-1 md:grid-cols-2 md:gap-3 lg:grid-cols-4" delay={0.12}>
            {careSignals.map((item) => {
              const Icon = item.icon;
              return (
                <div className="flex items-center gap-2 rounded-[0.8rem] bg-white/72 px-2.5 py-2.5 shadow-[0_10px_28px_rgba(20,121,201,0.06)] ring-1 ring-[#d7ebfa] md:gap-3 md:px-4 md:py-3" key={item.label}>
                  <AboutIconBubble className="h-9 w-9 shadow-none md:h-12 md:w-12" size="sm">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </AboutIconBubble>
                  <span className="font-heading text-xs font-bold leading-tight text-primary-dark md:text-sm">{item.label}</span>
                </div>
              );
            })}
          </AboutReveal>
        </AboutContainer>
      </AboutSection>
      <IdentitySection />
      <CertificateSection />
      <PartnerCarousel />
      <FinalCTA />
    </>
  );
}
