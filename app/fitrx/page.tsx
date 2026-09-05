import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  BadgeIndianRupee,
  Boxes,
  Building2,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Footprints,
  GraduationCap,
  Link2,
  MapPin,
  MessageCircle,
  Repeat2,
  Ruler,
  ScanLine,
  Settings2,
  ShieldCheck,
  Sparkles,
  Store,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { leadCaptureHref } from "@/data/leadCapture";
import { productShowcase } from "@/data/products";

export const metadata: Metadata = {
  title: "FitRx | Guided Therapeutic Footwear for Partners",
  description:
    "FitRx is N-Stride's partner workflow for therapeutic footwear assessment, insole configuration and fulfilment.",
};

const workflow = [
  {
    title: "Partner intake",
    text: "Understand the clinic, patient profile and footwear-service goals before setup begins.",
    icon: GraduationCap,
    tone: "text-primary bg-[#e9f7ff]",
  },
  {
    title: "Clinical assessment",
    text: "Screen comfort, pressure and support needs through a practical partner workflow.",
    icon: ClipboardCheck,
    tone: "text-primary bg-[#e9f7ff]",
  },
  {
    title: "Insole configuration",
    text: "Choose the right insole category and pair it with compatible N-Stride footwear.",
    icon: Settings2,
    tone: "text-[#2f8a49] bg-[#eafaf0]",
  },
  {
    title: "Fit and fulfil",
    text: "Deliver a guided footwear setup with partner training and repeatable fulfilment.",
    icon: Footprints,
    tone: "text-[#7357d8] bg-[#f3efff]",
  },
];

const partnerStack = [
  { label: "Clinical insole kit", icon: Boxes },
  { label: "Partner training", icon: GraduationCap },
  { label: "Recurring fulfilment", icon: Repeat2 },
  { label: "Footwear compatibility", icon: Store },
];

const partnerSignals = [
  { value: "01", label: "Assess", text: "Foot profile, pressure priority and use case." },
  { value: "02", label: "Configure", text: "Insole, footwear and support pathway selected." },
  { value: "03", label: "Fulfil", text: "Partner-ready handoff with repeat ordering logic." },
];

const fitRxProducts = productShowcase.filter((item) =>
  ["diabetic-footwear", "custom-footwear", "off-loading-footwear", "insoles-inserts"].includes(item.id),
);

const mobileFitRxPath = [
  { title: "Qualify", text: "Partner type, patient profile and monthly need.", icon: ClipboardCheck },
  { title: "Map", text: "Solution categories for footwear and insole support.", icon: Settings2 },
  { title: "Train", text: "Team workflow, fitting language and repeat process.", icon: GraduationCap },
  { title: "Fulfil", text: "Order flow, after-sales support and repeat supply.", icon: Repeat2 },
];

const mobileFitRxChecks = ["Eligibility", "Kit contents", "Training scope", "Commercial terms"];

const cassetteHighlights = [
  { value: "₹20k", label: "per cassette", icon: BadgeIndianRupee },
  { value: "1 size", label: "selected foot size", icon: Ruler },
  { value: "9", label: "named MCR correction options", icon: Settings2 },
];

const correctionLibrary = [
  "Medial wedge",
  "Lateral wedge",
  "Arch support",
  "Metatarsal bar",
  "Hollow / reverse scooping",
  "Heel raise",
  "Lego / modular offloading",
  "Front offloading",
  "Back offloading",
];

const partnershipInputs = [
  { title: "Organisation fit", text: "Clinic, hospital, rehab, pharmacy or distributor.", icon: Building2 },
  { title: "Service goal", text: "Add footwear-insole service, training or fulfilment.", icon: ShieldCheck },
  { title: "Location signal", text: "City, state, patient volume and number of locations.", icon: MapPin },
  { title: "Callback route", text: "Preferred time goes to the partnerships team.", icon: CalendarClock },
];

export default function FitRxPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#eefbf7,#ffffff)] px-4 pb-6 pt-5 md:hidden">
        <div className="relative overflow-hidden rounded-[1.05rem] bg-[linear-gradient(145deg,#073b66,#087a74_64%,#8edbd0)] p-4 text-white shadow-[0_22px_54px_rgba(7,59,102,0.16)]">
          <div className="relative z-10">
            <p className="font-heading text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#8edbd0]">FitRx</p>
            <h1 className="mt-3 max-w-none font-heading text-[2rem] font-extrabold leading-[1.06] text-white">
              Build a guided insole and footwear service in your clinic.
            </h1>
            <p className="mt-3 max-w-none text-[0.88rem] font-medium leading-6 text-white/88">
              FitRx combines a configurable insole kit, compatible N-Stride footwear, partner training and repeat fulfilment in one practical workflow.
            </p>
          </div>

          <div className="relative mt-5 h-[12.75rem] overflow-hidden rounded-[0.9rem] bg-white/10 ring-1 ring-white/20">
            <Image
              alt="FitRx insole and clinical footwear customization system"
              className="object-cover object-[63%_center]"
              fill
              priority
              sizes="100vw"
              src="/home/fitrx-insoles-clinic.png"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,59,102,0),rgba(7,59,102,0.28))]" />
          </div>
        </div>
        <div className="mt-3">
          <div className="nstride-mobile-card grid grid-cols-3 divide-x divide-[#d7ebfa] p-3 text-center">
            {partnerStack.slice(0, 3).map((item) => {
              const Icon = item.icon;
              return (
                <div className="grid justify-items-center gap-1 px-1.5" key={item.label}>
                  <Icon aria-hidden="true" className="h-5 w-5 text-primary" />
                  <span className="text-[0.64rem] font-extrabold leading-tight text-primary-dark">{item.label}</span>
                </div>
              );
            })}
          </div>
          <Button className="nstride-mobile-action mt-4 w-full rounded-[0.75rem]" href={leadCaptureHref({ cta: "discuss_fitrx_partnership", source: "/fitrx", type: "fitrx" })} size="lg">
            Discuss FitRx partnership
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#ffffff,#eefbf7)] px-4 pb-8 pt-2 md:hidden">
        <div className="rounded-[1rem] border border-[#c9e6f8] bg-white p-4 shadow-[0_18px_46px_rgba(20,121,201,0.08)]">
          <p className="font-heading text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#009b92]">Partner workflow</p>
          <h2 className="mt-2 font-heading text-[1.55rem] font-extrabold leading-tight text-primary-dark">
            FitRx in four practical partner moves.
          </h2>
          <div className="mt-4 grid gap-2">
            {mobileFitRxPath.map((item, index) => {
              const Icon = item.icon;

              return (
                <div className="grid grid-cols-[2rem_2.75rem_1fr] items-center gap-2 rounded-[0.85rem] bg-[#f8fcff] px-3 py-2.5 ring-1 ring-[#d8edf8]" key={item.title}>
                  <span className="font-heading text-xs font-extrabold text-[#009b92]">0{index + 1}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-[0.7rem] bg-white text-[#009b92] shadow-[0_8px_20px_rgba(20,121,201,0.08)]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-heading text-sm font-extrabold text-primary-dark">{item.title}</span>
                    <span className="mt-0.5 block text-[0.72rem] font-semibold leading-4 text-text-secondary">{item.text}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-3 rounded-[0.9rem] bg-[#073b66] p-3 text-white">
          <p className="font-heading text-sm font-extrabold">Discuss before onboarding</p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {mobileFitRxChecks.map((item) => (
              <span className="rounded-full bg-white/10 px-3 py-2 text-center text-[0.68rem] font-extrabold ring-1 ring-white/14" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <Button className="nstride-mobile-action mt-4 w-full rounded-[0.75rem] bg-[#009b92] hover:bg-[#087a74]" href={leadCaptureHref({ cta: "discuss_fitrx_partnership", source: "/fitrx", type: "fitrx" })}>
          Discuss FitRx Partnership
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Button>
      </section>

      <section className="relative hidden overflow-hidden bg-[linear-gradient(112deg,#ffffff_0%,#f8fcff_48%,#eefbf7_100%)] py-10 md:block lg:py-14">
        <Container className="relative grid gap-8 lg:grid-cols-[0.52fr_0.48fr] lg:items-center">
          <div>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary">N-Stride FitRx</p>
            <h1 className="mt-4 max-w-[42rem] font-heading text-[clamp(2.45rem,5vw,5.35rem)] font-extrabold leading-[1.02] text-primary-dark">
              Build a guided insole and footwear service in your clinic.
            </h1>
            <p className="mt-5 max-w-[39rem] text-base leading-8 text-text-secondary">
              FitRx combines a configurable insole kit, compatible N-Stride footwear, partner training and repeat fulfilment in one practical workflow.
            </p>
            <div className="mt-7 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
              <Button className="w-full rounded-[0.6rem] xs:w-auto" href={leadCaptureHref({ cta: "discuss_fitrx_partnership", source: "/fitrx", type: "fitrx" })} size="lg">
                Bring FitRx to Your Business
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button className="w-full rounded-[0.6rem] bg-white/80 xs:w-auto" href={leadCaptureHref({ cta: "discuss_fitrx_partnership", source: "/fitrx", type: "fitrx" })} size="lg" variant="outline">
                Talk to Partnerships
              </Button>
            </div>
          </div>

          <div className="relative aspect-[16/11] min-h-0 overflow-hidden rounded-[1.15rem] bg-[#edf8fb] shadow-[0_24px_70px_rgba(20,121,201,0.1)] ring-1 ring-[#c9e6f8] md:min-h-[28rem]">
            <Image
              alt="FitRx insole and clinical footwear customization system"
              className="object-contain object-center p-2"
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              src="/home/fitrx-insoles-clinic.png"
            />
            <div className="absolute bottom-4 left-4 right-4 grid gap-2 rounded-[0.85rem] bg-white/92 p-3 shadow-[0_16px_42px_rgba(7,59,102,0.1)] ring-1 ring-white/80 md:bottom-5 md:left-5 md:right-5 md:grid-cols-3">
              {["Assess", "Configure", "Fit"].map((item) => (
                <div className="rounded-[0.65rem] bg-[#f8fcff] px-3 py-2 text-center font-heading text-xs font-extrabold text-primary-dark ring-1 ring-[#d8ecf8]" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative hidden overflow-hidden bg-white py-10 md:block md:py-14">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
            <div>
              <h2 className="max-w-[32rem] font-heading text-3xl font-bold leading-tight text-primary-dark sm:text-4xl">
                A footwear service line that behaves like a system.
              </h2>
            </div>
            <p className="max-w-[46rem] text-sm leading-7 text-text-secondary lg:justify-self-end">
              FitRx packages the partner workflow as one guided console: confirm eligibility, understand the kit, train the team, configure the right support path and keep fulfilment repeatable.
            </p>
          </div>

          <div className="mt-7 overflow-hidden rounded-[1.15rem] bg-[#071f3a] text-white shadow-[0_28px_82px_rgba(7,31,58,0.22)] ring-1 ring-[#bfe5f7]">
            <div className="grid lg:grid-cols-[0.38fr_0.62fr]">
              <div className="border-b border-white/12 bg-white/[0.04] p-5 lg:border-b-0 lg:border-r lg:p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-[0.75rem] bg-white text-primary shadow-[0_14px_34px_rgba(0,0,0,0.2)]">
                    <Sparkles aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-heading text-lg font-extrabold leading-tight">FitRx console</p>
                    <p className="mt-1 text-xs font-semibold leading-5 text-white/62">One operating path for setup, fitting and repeat supply.</p>
                  </div>
                </div>

                <div className="mt-5 grid gap-2.5">
                {workflow.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div className="grid grid-cols-[2.65rem_1fr] items-start gap-3 rounded-[0.85rem] bg-white/[0.075] p-3 ring-1 ring-white/10" key={item.title}>
                      <span className="grid h-10 w-10 place-items-center rounded-[0.7rem] bg-white text-primary shadow-[0_10px_26px_rgba(0,0,0,0.16)]">
                        <Icon aria-hidden="true" className="h-[1.15rem] w-[1.15rem]" />
                      </span>
                      <span>
                        <span className="block font-heading text-sm font-extrabold leading-tight text-white">0{index + 1}. {item.title}</span>
                        <span className="mt-1 block text-xs font-semibold leading-5 text-white/62">{item.text}</span>
                      </span>
                    </div>
                  );
                })}
              </div>
              </div>

              <div className="p-5 lg:p-7">
                <div className="rounded-[1rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.035))] p-4 lg:p-5">
                  <div className="grid items-center gap-5 xl:grid-cols-[0.36fr_0.64fr]">
                    <div className="rounded-[0.95rem] bg-[radial-gradient(circle_at_50%_28%,#ffffff,#eefbf7_62%,#c7f0ec)] p-5 text-primary-dark shadow-[0_26px_70px_rgba(0,0,0,0.24)]">
                      <div className="grid h-32 place-items-center rounded-[0.85rem] border border-[#bfe9e5] bg-white/78 text-center">
                        <span>
                          <Sparkles aria-hidden="true" className="mx-auto h-7 w-7 text-primary" />
                          <span className="mt-2 block font-heading text-2xl font-extrabold">FitRx</span>
                          <span className="mt-1 block text-xs font-bold text-text-secondary">Workflow OS</span>
                        </span>
                      </div>
                      <p className="mt-4 text-xs font-bold leading-5 text-[#31556a]">
                        A guided service model connecting clinical intake, product logic, partner training and repeat fulfilment.
                      </p>
                    </div>

                    <div className="relative">
                      <div aria-hidden="true" className="absolute left-6 right-6 top-7 hidden h-px bg-[linear-gradient(90deg,#8edbd0,#73dcff,#8edbd0)] xl:block" />
                      <div className="relative grid gap-3 xl:grid-cols-3">
                        {partnerSignals.map((signal) => (
                          <div className="rounded-[0.95rem] bg-white p-4 text-primary-dark shadow-[0_18px_44px_rgba(0,0,0,0.16)] ring-1 ring-white/75" key={signal.label}>
                            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#e7fbf8] font-heading text-xs font-extrabold text-[#087a74] ring-1 ring-[#b9ebe5]">{signal.value}</span>
                            <p className="mt-4 font-heading text-base font-extrabold leading-tight">{signal.label}</p>
                            <p className="mt-2 text-xs font-semibold leading-5 text-text-secondary">{signal.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 lg:grid-cols-4">
                    {["Eligibility check", "Kit and category mapping", "Training-backed fulfilment", "Commercial terms review"].map((item) => (
                      <div className="flex min-h-12 items-center gap-2 rounded-[0.75rem] bg-white/[0.08] px-3 py-2 text-xs font-extrabold leading-4 text-white ring-1 ring-white/12" key={item}>
                        <CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0 text-[#8edbd0]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {partnerStack.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div className="rounded-[0.85rem] bg-white/[0.06] p-3 ring-1 ring-white/10" key={item.label}>
                        <Icon aria-hidden="true" className="h-5 w-5 text-[#8edbd0]" />
                        <p className="mt-3 font-heading text-sm font-extrabold leading-tight text-white">{item.label}</p>
                        <p className="mt-1 text-xs font-semibold leading-5 text-white/58">Connected module</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="hidden bg-[linear-gradient(180deg,#ffffff,#f7fcff)] py-10 md:block md:py-14">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.36fr_0.64fr] lg:items-center">
            <div>
              <p className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary">System architecture</p>
              <h2 className="mt-3 max-w-[30rem] font-heading text-3xl font-bold leading-tight text-primary-dark sm:text-4xl">
                Four connected parts, one partner experience.
              </h2>
              <p className="mt-4 max-w-[31rem] text-sm leading-7 text-text-secondary">
                FitRx connects the kit, training, footwear logic and fulfilment rhythm so each partner can run the same clear pathway without starting from scratch.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[1.2rem] bg-white p-4 shadow-[0_22px_64px_rgba(20,121,201,0.09)] ring-1 ring-[#d7ebfa] md:p-6">
              <div aria-hidden="true" className="absolute inset-x-6 top-1/2 hidden h-px bg-[#d7ebfa] md:block" />
              <div aria-hidden="true" className="absolute inset-y-6 left-1/2 hidden w-px bg-[#d7ebfa] md:block" />
              <div className="relative grid gap-3 sm:grid-cols-2">
              {partnerStack.map((item) => {
                const Icon = item.icon;

                return (
                    <div className="group relative overflow-hidden rounded-[0.95rem] bg-[#f8fcff] p-4 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_38px_rgba(20,121,201,0.08)]" key={item.label}>
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-[0.8rem] bg-white text-primary shadow-[0_12px_28px_rgba(20,121,201,0.08)] ring-1 ring-[#d7ebfa]">
                      <Icon aria-hidden="true" className="h-7 w-7" />
                    </span>
                      <p className="mt-4 font-heading text-base font-extrabold text-primary-dark">{item.label}</p>
                      <div className="mt-3 flex items-center gap-2 text-xs font-bold text-primary">
                        <Link2 aria-hidden="true" className="h-4 w-4" />
                        Connected module
                      </div>
                  </div>
                );
              })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[linear-gradient(180deg,#f7fcff,#ffffff)] px-4 py-8 md:px-0 md:py-14">
        <Container className="px-0 md:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-5 lg:grid-cols-[0.44fr_0.56fr] lg:items-stretch">
            <div className="relative overflow-hidden rounded-[1.1rem] bg-[#061f3b] p-4 text-white shadow-[0_24px_70px_rgba(7,31,58,0.18)] ring-1 ring-[#bfe5f7] md:p-6">
              <div className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(142,219,208,0.16))]" />
              <div className="relative">
                <h2 className="max-w-[30rem] font-heading text-[1.65rem] font-extrabold leading-tight md:text-3xl">
                  One cassette. One selected size. Nine clear MCR support options.
                </h2>
                <p className="mt-3 max-w-[34rem] text-sm leading-6 text-white/72">
                  FitRx is a clinic-partner cassette for comparing support and off-loading approaches, then connecting the selected pathway to compatible footwear and repeat fulfilment.
                </p>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {cassetteHighlights.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div className="rounded-[0.85rem] bg-white/[0.08] p-3 ring-1 ring-white/12" key={item.label}>
                        <Icon aria-hidden="true" className="h-5 w-5 text-[#8edbd0]" />
                        <p className="mt-3 font-heading text-xl font-extrabold leading-none text-white md:text-2xl">{item.value}</p>
                        <p className="mt-1 text-[0.68rem] font-bold leading-4 text-white/58 md:text-xs">{item.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.1rem] border border-[#d7ebfa] bg-white shadow-[0_18px_54px_rgba(20,121,201,0.07)]">
              <div className="grid gap-px bg-[#d7ebfa] sm:grid-cols-3">
                {correctionLibrary.map((item, index) => (
                  <div className="group min-h-[5rem] bg-[#fbfdff] p-3 transition hover:bg-white md:p-4" key={item}>
                    <div className="flex items-start justify-between gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-[0.7rem] bg-white font-heading text-xs font-extrabold text-primary shadow-[0_8px_22px_rgba(20,121,201,0.08)] ring-1 ring-[#d7ebfa]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <Footprints aria-hidden="true" className="h-4 w-4 text-[#009b92] transition group-hover:rotate-6" />
                    </div>
                    <p className="mt-3 font-heading text-sm font-extrabold leading-tight text-primary-dark">{item}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#eefbf7] px-4 py-3 text-xs font-semibold leading-5 text-[#31556a]">
                Final material, durometer, laterality, replenishment, GST, lead time and compatibility are confirmed during partner onboarding.
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-4 rounded-[1.05rem] border border-[#c9e6f8] bg-[linear-gradient(135deg,#ffffff,#eefbf7)] p-4 shadow-[0_18px_52px_rgba(20,121,201,0.07)] lg:grid-cols-[0.26fr_0.74fr] lg:items-center">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-[0.8rem] bg-white text-primary shadow-soft ring-1 ring-[#d7ebfa]">
                <MessageCircle aria-hidden="true" className="h-6 w-6" />
              </div>
              <h3 className="mt-3 font-heading text-xl font-extrabold leading-tight text-primary-dark md:text-2xl">
                Partnership enquiry data stays practical.
              </h3>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {partnershipInputs.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="rounded-[0.85rem] bg-white p-3 ring-1 ring-[#d8edf8]" key={item.title}>
                    <Icon aria-hidden="true" className="h-5 w-5 text-[#009b92]" />
                    <p className="mt-3 font-heading text-sm font-extrabold text-primary-dark">{item.title}</p>
                    <p className="mt-1 text-xs font-semibold leading-5 text-text-secondary">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="hidden bg-white py-10 md:block md:py-14">
        <Container>
          <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary">Product logic</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-primary-dark">FitRx solution categories.</h2>
            </div>
            <p className="max-w-[31rem] text-sm leading-7 text-text-secondary">
              Solution categories are selected around therapeutic footwear, custom footwear, pressure protection and insole support needs.
            </p>
          </div>
          <div className="overflow-hidden rounded-[1.1rem] border border-[#d7ebfa] bg-[#fbfdff] shadow-[0_18px_54px_rgba(20,121,201,0.06)]">
            {fitRxProducts.map((product, index) => (
              <article className="grid gap-4 border-b border-[#d7ebfa] bg-white/70 p-4 last:border-b-0 md:grid-cols-[0.18fr_0.32fr_0.5fr] md:items-center md:p-5" key={product.id}>
                <p className="font-heading text-2xl font-extrabold text-[#c5e4f6]">0{index + 1}</p>
                <div>
                  <p className="font-heading text-[0.68rem] font-bold uppercase tracking-[0.14em] text-primary">{product.category}</p>
                  <h3 className="mt-2 font-heading text-lg font-bold text-primary-dark">{product.title}</h3>
                </div>
                <p className="text-sm leading-6 text-text-secondary">{product.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="hidden bg-[linear-gradient(120deg,#073b66,#0f6eb9_62%,#eafaf0)] py-10 md:block">
        <Container>
          <div className="grid gap-6 text-white lg:grid-cols-[0.56fr_0.44fr] lg:items-center">
            <div>
              <p className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-white/70">Partner pathway</p>
              <h2 className="mt-3 max-w-[40rem] font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
                Build FitRx as a practical service line, not just a product shelf.
              </h2>
              <p className="mt-4 max-w-[42rem] text-sm leading-7 text-white/82">
                FitRx can support clinics and care businesses that want guided footwear customization, onboarding clarity, repeat product fulfilment and a clear handoff back into the wider N-Stride care ecosystem.
              </p>
            </div>
            <div className="grid gap-3">
              {["Confirm partner eligibility", "Review kit contents and training scope", "Select the insole and footwear path", "Repeat fulfilment through N-Stride"].map((item) => (
                <div className="flex items-center gap-3 rounded-[0.75rem] bg-white/12 px-4 py-3 text-sm font-bold ring-1 ring-white/18" key={item}>
                  <CheckCircle2 aria-hidden="true" className="h-5 w-5 shrink-0 text-[#8edbd0]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="hidden bg-white py-10 md:block">
        <Container>
          <div className="grid gap-5 rounded-[1rem] border border-[#d7ebfa] bg-[linear-gradient(135deg,#f8fcff,#ffffff_58%,#eefbf7)] p-5 shadow-[0_20px_54px_rgba(20,121,201,0.07)] md:grid-cols-[auto_1fr_auto] md:items-center">
            <span className="grid h-14 w-14 place-items-center rounded-[0.85rem] bg-white text-primary shadow-soft ring-1 ring-[#d7ebfa]">
              <ScanLine aria-hidden="true" className="h-6 w-6" />
            </span>
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary-dark">Ready to explore FitRx?</h2>
              <p className="mt-2 text-sm leading-6 text-text-secondary">
                Share your partner model, patient profile or clinic setup and N-Stride can help shape the right FitRx pathway.
              </p>
            </div>
            <Button className="rounded-[0.6rem]" href={leadCaptureHref({ cta: "discuss_fitrx_partnership", source: "/fitrx", type: "fitrx" })}>
              Start FitRx Discussion
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
