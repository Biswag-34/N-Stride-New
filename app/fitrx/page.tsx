import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Boxes, CheckCircle2, ClipboardCheck, Footprints, GraduationCap, Repeat2, ScanLine, Settings2, Store } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { brand } from "@/data/brand";
import { productShowcase } from "@/data/products";

export const metadata: Metadata = {
  title: "FitRx | Clinical Footwear Customization for Partners",
  description:
    "FitRx is N-Stride's partner-enabled clinical footwear customization system for assessment, insole configuration and fulfilment.",
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

const fitRxProducts = productShowcase.filter((item) =>
  ["diabetic-footwear", "custom-footwear", "off-loading-footwear", "insoles-inserts"].includes(item.id),
);

export default function FitRxPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(112deg,#ffffff_0%,#f8fcff_48%,#eefbf7_100%)] py-10 lg:py-14">
        <Container className="relative grid gap-8 lg:grid-cols-[0.52fr_0.48fr] lg:items-center">
          <div>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary">N-Stride FitRx</p>
            <h1 className="mt-4 max-w-[42rem] font-heading text-[clamp(2.45rem,5vw,5.35rem)] font-extrabold leading-[1.02] text-primary-dark">
              Clinical footwear customization for partners.
            </h1>
            <p className="mt-5 max-w-[39rem] text-base leading-8 text-text-secondary">
              FitRx turns assessment, insole selection and therapeutic footwear pairing into a clean partner-ready system for clinics, care teams and business operators.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-[0.6rem]" href="/contact?type=fitrx" size="lg">
                Bring FitRx to Your Business
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button className="rounded-[0.6rem] bg-white/80" href="/contact?type=partner" size="lg" variant="outline">
                Talk to Partnerships
              </Button>
            </div>
          </div>

          <div className="relative min-h-[22rem] overflow-hidden rounded-[1.15rem] bg-[#edf8fb] shadow-[0_24px_70px_rgba(20,121,201,0.1)] ring-1 ring-[#c9e6f8] sm:min-h-[28rem]">
            <Image
              alt="FitRx insole and clinical footwear customization system"
              className="object-cover object-center"
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              src="/home/fitrx-insoles-clinic.png"
            />
            <div className="absolute bottom-5 left-5 right-5 grid gap-2 rounded-[0.85rem] bg-white/92 p-3 shadow-[0_16px_42px_rgba(7,59,102,0.1)] ring-1 ring-white/80 sm:grid-cols-3">
              {["Assess", "Configure", "Fit"].map((item) => (
                <div className="rounded-[0.65rem] bg-[#f8fcff] px-3 py-2 text-center font-heading text-xs font-extrabold text-primary-dark ring-1 ring-[#d8ecf8]" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-10">
        <Container>
          <div className="mb-7 grid gap-3 lg:grid-cols-[0.4fr_0.6fr] lg:items-end">
            <h2 className="max-w-[34rem] font-heading text-3xl font-bold leading-tight text-primary-dark sm:text-4xl">
              FitRx process from partner setup to repeat fulfilment.
            </h2>
            <p className="max-w-[42rem] text-sm leading-7 text-text-secondary lg:justify-self-end">
              The pathway turns assessment, configuration and fitting into one repeatable operating rhythm for clinics and care businesses.
            </p>
          </div>
          <div className="relative grid gap-4 lg:grid-cols-4">
            <div aria-hidden="true" className="absolute left-[8%] right-[8%] top-12 hidden h-px bg-[linear-gradient(90deg,rgba(20,121,201,0),rgba(20,121,201,0.28),rgba(20,121,201,0))] lg:block" />
            {workflow.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="relative overflow-hidden rounded-[0.95rem] border border-[#d7ebfa] bg-white p-5 shadow-[0_14px_38px_rgba(20,121,201,0.06)]" key={item.title}>
                  <div className="flex items-center justify-between gap-4">
                    <span className={`grid h-20 w-20 place-items-center rounded-[1rem] ${item.tone} shadow-[0_14px_30px_rgba(20,121,201,0.08)]`}>
                      <Icon aria-hidden="true" className="h-10 w-10" />
                    </span>
                    <span className="font-heading text-3xl font-extrabold text-[#e6f3fb]">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold text-primary-dark">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">{item.text}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[linear-gradient(180deg,#ffffff,#f7fcff)] py-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
            <div>
              <p className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary">System architecture</p>
              <h2 className="mt-3 max-w-[30rem] font-heading text-3xl font-bold leading-tight text-primary-dark sm:text-4xl">
                A partner stack built around repeatable clinical decisions.
              </h2>
              <p className="mt-4 max-w-[31rem] text-sm leading-7 text-text-secondary">
                FitRx connects the kit, training, footwear logic and fulfilment rhythm so each partner can run the same clear pathway without starting from scratch.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {partnerStack.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="flex items-center gap-3 rounded-[0.85rem] bg-white p-4 shadow-[0_12px_30px_rgba(20,121,201,0.055)] ring-1 ring-[#d7ebfa]" key={item.label}>
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-[0.8rem] bg-soft-sky text-primary">
                      <Icon aria-hidden="true" className="h-7 w-7" />
                    </span>
                    <p className="font-heading text-sm font-bold text-primary-dark">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-10">
        <Container>
          <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary">Product logic</p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-primary-dark">Where FitRx connects inside N-Stride.</h2>
            </div>
            <p className="max-w-[31rem] text-sm leading-7 text-text-secondary">
              The page uses current N-Stride product data: therapeutic footwear, custom footwear, pressure protection and insole support.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {fitRxProducts.map((product) => (
              <article className="rounded-[0.95rem] border border-[#d7ebfa] bg-[#fbfdff] p-4" key={product.id}>
                <p className="font-heading text-[0.68rem] font-bold uppercase tracking-[0.14em] text-primary">{product.category}</p>
                <h3 className="mt-3 font-heading text-lg font-bold text-primary-dark">{product.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{product.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[linear-gradient(120deg,#073b66,#0f6eb9_62%,#eafaf0)] py-10">
        <Container>
          <div className="grid gap-6 text-white lg:grid-cols-[0.56fr_0.44fr] lg:items-center">
            <div>
              <p className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-white/70">Partner pathway</p>
              <h2 className="mt-3 max-w-[40rem] font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
                Build FitRx as a practical service line, not just a product shelf.
              </h2>
              <p className="mt-4 max-w-[42rem] text-sm leading-7 text-white/82">
                FitRx can support clinics and care businesses that want guided footwear customization, repeat product fulfilment and a clear handoff back into the wider N-Stride care ecosystem.
              </p>
            </div>
            <div className="grid gap-3">
              {["Screen the need", "Select the insole and footwear path", "Train the partner team", "Repeat fulfilment through N-Stride"].map((item) => (
                <div className="flex items-center gap-3 rounded-[0.75rem] bg-white/12 px-4 py-3 text-sm font-bold ring-1 ring-white/18" key={item}>
                  <CheckCircle2 aria-hidden="true" className="h-5 w-5 shrink-0 text-[#8edbd0]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-10">
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
            <Button className="rounded-[0.6rem]" href={brand.consultationUrl + "?type=fitrx"}>
              Start FitRx Discussion
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
