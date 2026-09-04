import { ArrowRight, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { brand } from "@/data/brand";

const nodes = [
  { label: "Foot Checkup", mobileLabel: "Checkup" },
  { label: "Kinetics", mobileLabel: "Kinetics" },
  { label: "Wound Care", mobileLabel: "Wound" },
  { label: "Bio-Fit", mobileLabel: "Bio-Fit" },
  { label: "Step-Ahead", mobileLabel: "Partner" },
  { label: "FitRx", mobileLabel: "FitRx" },
  { label: "Order Support", mobileLabel: "Support" },
  { label: "General Enquiry", mobileLabel: "General" },
];

export function ContactHero() {
  return (
    <Section className="relative isolate overflow-hidden py-8 xs:py-9 sm:py-11 lg:py-12" variant="soft">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(38,182,200,0.14),transparent_24rem),linear-gradient(135deg,rgba(255,255,255,0.95),rgba(221,241,255,0.72))]" />
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.98fr)_minmax(25rem,1.02fr)] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-accent-aqua/25 bg-accent-aqua/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-accent-aqua xs:text-xs">
              Contact N-Stride
            </p>
            <h1 className="mt-4 max-w-3xl text-[clamp(2rem,9vw,2.6rem)] font-semibold leading-tight text-primary-dark sm:text-5xl lg:text-[3rem]">
              Find the right N-Stride pathway for your next step.
            </h1>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-6 text-text-secondary md:text-base md:leading-7">
              <span className="md:hidden">Tell us what you need and the team will guide you to the right care path.</span>
              <span className="hidden md:inline">
              Whether you need a foot checkup, therapeutic footwear guidance, wound-care support, Bio-Fit consultation or Step-Ahead partnership, the N-Stride team can guide you to the right care pathway.
              </span>
            </p>
            <div className="mt-6 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
              <Button className="nstride-mobile-action w-full xs:w-auto md:min-h-12" href="#enquiry-form" size="lg">
                Start Enquiry
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button className="hidden w-full xs:w-auto md:inline-flex" href={`tel:${brand.contact.phoneHref}`} size="lg" variant="outline">
                Call N-Stride
              </Button>
              <Button className="hidden w-full xs:w-auto md:inline-flex" external href={brand.ecommerceUrl} size="lg" variant="ghost">
                Visit Store
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 md:hidden">
            {nodes.map((node, index) => (
              <div
                className="flex min-h-11 items-center gap-2 rounded-[0.75rem] border border-border-soft bg-white px-2.5 py-2 text-xs font-bold text-primary-dark shadow-[0_10px_24px_rgba(16,42,67,0.05)]"
                key={node.label}
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-[0.55rem] bg-soft-sky text-[0.68rem] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{node.mobileLabel}</span>
              </div>
            ))}
          </div>

          <div className="relative mx-auto hidden h-[18rem] w-full max-w-[32rem] overflow-hidden rounded-[1.25rem] border border-border-soft bg-white/90 shadow-[0_18px_52px_rgba(16,42,67,0.07)] xs:h-[19rem] md:block">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 352" aria-hidden="true">
              <path d="M280 176 L92 76 M280 176 L280 54 M280 176 L468 76 M280 176 L92 276 M280 176 L280 298 M280 176 L468 276 M280 176 L92 176 M280 176 L468 176" fill="none" stroke="#C9E6F8" strokeLinecap="round" strokeWidth="3" />
              <path d="M280 176 L92 76 M280 176 L280 54 M280 176 L468 76 M280 176 L92 276 M280 176 L280 298 M280 176 L468 276 M280 176 L92 176 M280 176 L468 176" fill="none" stroke="#1479C9" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="1.5" />
            </svg>
            <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/20 bg-white p-4 text-center font-heading text-lg font-semibold text-primary-dark shadow-card">
              N-Stride Support
            </div>
            {nodes.map((node, index) => {
              const positions = [
                "left-3 top-10 xs:left-5 sm:left-6",
                "left-1/2 top-6 -translate-x-1/2 xs:top-8",
                "right-3 top-10 xs:right-5 sm:right-6",
                "left-3 bottom-10 xs:left-5 sm:left-6",
                "left-1/2 bottom-6 -translate-x-1/2 xs:bottom-8",
                "right-3 bottom-10 xs:right-5 sm:right-6",
                "left-3 top-1/2 -translate-y-1/2 xs:left-5 sm:left-6",
                "right-3 top-1/2 -translate-y-1/2 xs:right-5 sm:right-6",
              ];

              return (
                <span
                  className={`absolute max-w-[8.5rem] whitespace-normal rounded-full border border-border-soft bg-background-soft px-2 py-1.5 text-center text-[0.64rem] font-bold leading-tight text-primary-dark shadow-soft xs:max-w-none xs:whitespace-nowrap xs:px-2.5 xs:py-2 xs:text-[0.7rem] sm:px-3 sm:text-xs ${positions[index]}`}
                  key={node.label}
                >
                  <span className="sm:hidden">{node.mobileLabel}</span>
                  <span className="hidden sm:inline">{node.label}</span>
                </span>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
