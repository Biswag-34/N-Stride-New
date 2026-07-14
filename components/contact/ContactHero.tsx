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
  { label: "General Enquiry", mobileLabel: "General" },
];

export function ContactHero() {
  return (
    <Section className="relative isolate overflow-hidden py-9 sm:py-11 lg:py-12" variant="soft">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(38,182,200,0.14),transparent_24rem),linear-gradient(135deg,rgba(255,255,255,0.95),rgba(221,241,255,0.72))]" />
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.98fr)_minmax(25rem,1.02fr)] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-accent-aqua/25 bg-accent-aqua/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-accent-aqua">
              Contact N-Stride
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-primary-dark sm:text-5xl lg:text-[3rem]">
              Find the right N-Stride pathway for your next step.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary">
              Whether you need a foot checkup, therapeutic footwear guidance, wound-care support, Bio-Fit consultation or Step-Ahead partnership, the N-Stride team can guide you to the right care pathway.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="#enquiry-form" size="lg">
                Start Enquiry
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              <Button href={`tel:${brand.contact.phone}`} size="lg" variant="outline">
                Call N-Stride
              </Button>
              <Button external href={brand.ecommerceUrl} size="lg" variant="ghost">
                Visit Store
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative mx-auto h-[19rem] w-full max-w-[32rem] overflow-hidden rounded-[1.25rem] border border-border-soft bg-white/90 shadow-[0_18px_52px_rgba(16,42,67,0.07)]">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 352" aria-hidden="true">
              <path d="M280 176 L112 80 M280 176 L280 58 M280 176 L448 80 M280 176 L112 272 M280 176 L280 294 M280 176 L448 272" fill="none" stroke="#C9E6F8" strokeLinecap="round" strokeWidth="3" />
              <path d="M280 176 L112 80 M280 176 L280 58 M280 176 L448 80 M280 176 L112 272 M280 176 L280 294 M280 176 L448 272" fill="none" stroke="#1479C9" strokeLinecap="round" strokeOpacity="0.35" strokeWidth="1.5" />
            </svg>
            <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/20 bg-white p-4 text-center font-heading text-lg font-semibold text-primary-dark shadow-card">
              N-Stride Support
            </div>
            {nodes.map((node, index) => {
              const positions = [
                "left-5 top-12 sm:left-8",
                "left-1/2 top-8 -translate-x-1/2",
                "right-5 top-12 sm:right-8",
                "left-5 bottom-12 sm:left-8",
                "left-1/2 bottom-8 -translate-x-1/2",
                "right-5 bottom-12 sm:right-8",
              ];

              return (
                <span
                  className={`absolute whitespace-nowrap rounded-full border border-border-soft bg-background-soft px-2.5 py-2 text-[0.7rem] font-bold text-primary-dark shadow-soft sm:px-3 sm:text-xs ${positions[index]}`}
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
