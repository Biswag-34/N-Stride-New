"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
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
    points: ["Doctor-led care thinking", "Integrated verticals", "Patient-first guidance"],
  },
  {
    label: "What We Are",
    title: "More than a product brand. More than a single clinic service.",
    text: "We are a practical care platform built around assessment, protection, treatment, restoration and long-term support.",
    icon: Layers3,
    points: ["Diagnostics and insight", "Therapeutic product pathways", "Recovery and restoration support"],
  },
  {
    label: "Why We Are",
    title: "Because fragmented care makes every step harder.",
    text: "People often move between disconnected providers, unclear recommendations and generic products. N-Stride makes the next step clearer.",
    icon: Sparkles,
    points: ["Earlier risk awareness", "Clearer care direction", "Better continuity"],
  },
  {
    label: "For Whom",
    title: "For patients, families, clinicians and partners building better mobility.",
    text: "From diabetic foot risk to everyday pain, wound support and mobility restoration, the ecosystem is designed for real-world care needs.",
    icon: UsersRound,
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
  const reduceMotion = useReducedMotion();
  const active = identityTabs[activeIndex];
  const ActiveIcon = active.icon;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % identityTabs.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <AboutSection className="bg-white py-11">
      <AboutContainer>
        <AboutReveal className="grid gap-6 lg:grid-cols-[0.36fr_0.64fr] lg:items-stretch">
          <div>
            <h2 className="font-heading text-[clamp(1.85rem,3vw,2.9rem)] font-bold leading-tight text-primary-dark">
              The N-Stride identity, in four clear answers.
            </h2>
            <p className="mt-4 text-sm leading-7 text-text-secondary">
              The model is built to keep care connected, practical and easier to understand at every stage.
            </p>
            <div className="mt-6 grid gap-2">
              {identityTabs.map((tab, index) => (
                <button
                  aria-pressed={activeIndex === index}
                  className={
                    activeIndex === index
                      ? "flex items-center justify-between rounded-[0.7rem] bg-primary px-4 py-3 text-left font-heading text-sm font-bold text-white shadow-[0_16px_34px_rgba(20,121,201,0.18)]"
                      : "flex items-center justify-between rounded-[0.7rem] bg-[#f6fbff] px-4 py-3 text-left font-heading text-sm font-bold text-primary-dark ring-1 ring-[#d7ebfa] transition hover:bg-white"
                  }
                  key={tab.label}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                >
                  {tab.label}
                  <span className="text-xs opacity-75">0{index + 1}</span>
                </button>
              ))}
            </div>
          </div>

          <motion.div
            className="relative overflow-hidden rounded-[1rem] border border-[#c9e6f8] bg-[linear-gradient(135deg,#f8fcff,#ffffff_48%,#eefbf4)] p-6 shadow-[0_20px_64px_rgba(20,121,201,0.08)]"
            key={active.label}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: aboutEase }}
          >
            <div aria-hidden="true" className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#dff4ff]/80 blur-[42px]" />
            <div className="relative grid gap-6 md:grid-cols-[0.36fr_0.64fr] md:items-center">
              <div className="grid min-h-[13rem] place-items-center rounded-[0.9rem] bg-white/75 ring-1 ring-[#d7ebfa]">
                <AboutIconBubble className="h-24 w-24" size="lg">
                  <ActiveIcon aria-hidden="true" className="h-10 w-10" />
                </AboutIconBubble>
              </div>
              <div>
                <h3 className="font-heading text-[clamp(1.45rem,2.2vw,2.25rem)] font-bold leading-tight text-primary-dark">
                  {active.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-text-secondary">{active.text}</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {active.points.map((point) => (
                    <div className="rounded-[0.7rem] bg-white/82 px-3 py-3 text-xs font-bold leading-5 text-primary-dark ring-1 ring-[#d7ebfa]" key={point}>
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
      <AboutSection className="bg-[linear-gradient(112deg,#ffffff_0%,#fbfdff_45%,#eef8ff_100%)] pt-4">
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,#ffffff_88%)]" />
        <AboutContainer className="relative grid items-center gap-7 pb-10 pt-8 lg:min-h-[540px] lg:grid-cols-[0.48fr_0.52fr] lg:pb-12 lg:pt-10">
          <AboutReveal>
            <h1 className="max-w-[590px] font-heading text-[clamp(2.25rem,5.4vw,4.6rem)] font-bold leading-[1.04] text-primary-dark">
              One ecosystem.
              <br />
              Complete mobility care.
            </h1>
            <p className="mt-5 max-w-[560px] text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">{brand.shortIntro}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-[0.5rem] px-7 text-sm" href={ctas.primary.href} size="lg">
                {ctas.primary.label}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button className="rounded-[0.5rem] px-7 text-sm" href={ctas.verticals.href} size="lg" variant="outline">
                {ctas.verticals.label}
              </Button>
            </div>
          </AboutReveal>

          <AboutReveal className="relative" delay={0.08}>
            <div className="absolute bottom-4 right-[10%] h-28 w-[72%] rounded-full bg-[#dff4ff]/80 blur-[44px]" />
            <div className="relative min-h-[320px] sm:min-h-[390px] lg:min-h-[460px]">
              <Image
                alt="N-Stride mobility and lower-limb care consultation"
                className="object-contain object-center mix-blend-multiply"
                fill
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
                src="/about/hero-ecosystem.png"
                style={{
                  maskImage: "radial-gradient(ellipse at center, #000 58%, rgba(0,0,0,0.78) 74%, transparent 94%)",
                  WebkitMaskImage: "radial-gradient(ellipse at center, #000 58%, rgba(0,0,0,0.78) 74%, transparent 94%)",
                }}
              />
              <div className="absolute left-2 top-4 rounded-full bg-white/82 px-4 py-2 text-xs font-bold text-primary-dark shadow-[0_14px_34px_rgba(20,121,201,0.1)] ring-1 ring-[#d7ebfa] backdrop-blur">
                Connected-care ecosystem
              </div>
              <div className="absolute bottom-5 left-4 max-w-[17rem] rounded-[0.85rem] bg-white/78 px-4 py-3 text-xs font-semibold leading-5 text-text-secondary shadow-[0_14px_34px_rgba(20,121,201,0.1)] ring-1 ring-[#d7ebfa] backdrop-blur">
                Diagnosis, protection, treatment and restoration aligned into one care path.
              </div>
            </div>
          </AboutReveal>

          <AboutReveal className="col-span-full grid gap-3 pt-1 sm:grid-cols-2 lg:grid-cols-4" delay={0.12}>
            {careSignals.map((item) => {
              const Icon = item.icon;
              return (
                <div className="flex items-center gap-3 rounded-[0.8rem] bg-white/72 px-4 py-3 shadow-[0_10px_28px_rgba(20,121,201,0.06)] ring-1 ring-[#d7ebfa]" key={item.label}>
                  <AboutIconBubble className="h-12 w-12 shadow-none" size="sm">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </AboutIconBubble>
                  <span className="font-heading text-sm font-bold text-primary-dark">{item.label}</span>
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
