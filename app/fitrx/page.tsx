import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Boxes, CheckCircle2, ClipboardCheck, Footprints, GraduationCap, Link2, Repeat2, ScanLine, Settings2, Sparkles, Store } from "lucide-react";

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

export default function FitRxPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-white md:hidden">
        <div className="relative min-h-[29rem] overflow-hidden px-4 pb-5 pt-6 text-white">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,59,102,0.94)_0%,rgba(7,59,102,0.78)_42%,rgba(7,59,102,0.18)_100%),url('/home/fitrx-insoles-clinic.png')] bg-cover bg-[63%_center]" />
          <div className="relative z-10 max-w-[18.5rem]">
            <p className="font-heading text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#51d8cf]">FitRx</p>
            <h1 className="mt-3 font-heading text-[2rem] font-extrabold leading-[1.06] text-white">
              Build a guided insole and footwear service in your clinic.
            </h1>
            <p className="mt-3 text-[0.88rem] font-medium leading-6 text-white/88">
              FitRx combines a configurable insole kit, compatible N-Stride footwear, partner training and repeat fulfilment in one practical workflow.
            </p>
          </div>
        </div>
        <div className="-mt-12 px-4 pb-6">
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
          <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr] lg:items-end">
            <div>
              <p className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary">Partner workflow</p>
              <h2 className="mt-3 max-w-[32rem] font-heading text-3xl font-bold leading-tight text-primary-dark sm:text-4xl">
                A footwear service line that behaves like a system.
              </h2>
            </div>
            <p className="max-w-[48rem] text-sm leading-7 text-text-secondary lg:justify-self-end">
              FitRx packages the partner workflow as one guided console: confirm eligibility, understand the kit, train the team, configure the right support path and keep fulfilment repeatable.
            </p>
          </div>

          <div className="mt-7 grid overflow-hidden rounded-[1.25rem] bg-[#071f3a] text-white shadow-[0_28px_82px_rgba(7,31,58,0.22)] ring-1 ring-[#bfe5f7] lg:grid-cols-[0.3fr_0.44fr_0.26fr]">
            <div className="border-b border-white/12 p-5 lg:border-b-0 lg:border-r lg:p-6">
              <p className="font-heading text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-[#8edbd0]">FitRx console</p>
              <div className="mt-5 grid gap-2.5">
                {workflow.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div className="grid grid-cols-[2.35rem_1fr] items-center gap-3 rounded-[0.85rem] bg-white/[0.07] p-2.5 ring-1 ring-white/10" key={item.title}>
                      <span className="grid h-9 w-9 place-items-center rounded-[0.65rem] bg-white text-primary">
                        <Icon aria-hidden="true" className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block font-heading text-xs font-extrabold text-white">0{index + 1}. {item.title}</span>
                        <span className="mt-0.5 block text-[0.68rem] font-semibold leading-4 text-white/58">{item.text}</span>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative min-h-[24rem] overflow-hidden p-5 lg:p-7">
              <div aria-hidden="true" className="absolute inset-x-7 top-1/2 h-px bg-[linear-gradient(90deg,transparent,rgba(142,219,208,0.62),transparent)]" />
              <div aria-hidden="true" className="absolute bottom-8 left-1/2 top-8 w-px bg-[linear-gradient(180deg,transparent,rgba(142,219,208,0.38),transparent)]" />
              <div className="relative grid h-full place-items-center">
                <div className="grid h-44 w-44 place-items-center rounded-full bg-[radial-gradient(circle,#ffffff_0%,#f7fcff_52%,#d9f6f3_100%)] text-center text-primary-dark shadow-[0_30px_70px_rgba(0,0,0,0.28)] ring-[18px] ring-white/[0.07]">
                  <span>
                    <Sparkles aria-hidden="true" className="mx-auto h-8 w-8 text-primary" />
                    <span className="mt-2 block font-heading text-xl font-extrabold">FitRx</span>
                    <span className="mt-1 block text-[0.68rem] font-bold uppercase tracking-[0.16em] text-text-secondary">Partner Workflow</span>
                  </span>
                </div>

                {partnerSignals.map((signal, index) => (
                  <div
                    className={
                      index === 0
                        ? "absolute left-0 top-3 max-w-[11rem] rounded-[0.95rem] bg-white p-3 text-primary-dark shadow-[0_18px_44px_rgba(0,0,0,0.18)]"
                        : index === 1
                          ? "absolute right-0 top-[42%] max-w-[11rem] rounded-[0.95rem] bg-[#e9fff8] p-3 text-primary-dark shadow-[0_18px_44px_rgba(0,0,0,0.18)]"
                          : "absolute bottom-2 left-[18%] max-w-[12rem] rounded-[0.95rem] bg-[#eef6ff] p-3 text-primary-dark shadow-[0_18px_44px_rgba(0,0,0,0.18)]"
                    }
                    key={signal.label}
                  >
                    <p className="font-heading text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-primary">{signal.value}</p>
                    <p className="mt-1 font-heading text-sm font-extrabold">{signal.label}</p>
                    <p className="mt-1 text-xs font-semibold leading-5 text-text-secondary">{signal.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid content-between gap-4 border-t border-white/12 p-5 lg:border-l lg:border-t-0 lg:p-6">
              <div>
                <p className="font-heading text-lg font-extrabold">Partner-ready outputs</p>
                <p className="mt-2 text-xs font-semibold leading-5 text-white/66">
                  What the clinic gets after eligibility, kit contents, training scope and fulfilment terms are aligned.
                </p>
              </div>
              <div className="grid gap-2.5">
                {["Eligibility check", "Kit and category mapping", "Training-backed fulfilment", "Commercial terms review"].map((item) => (
                  <div className="flex items-center gap-2 rounded-full bg-white/[0.08] px-3 py-2 text-xs font-extrabold ring-1 ring-white/10" key={item}>
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0 text-[#8edbd0]" />
                    {item}
                  </div>
                ))}
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
