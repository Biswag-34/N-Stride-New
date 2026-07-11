import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { brand } from "@/data/brand";
import { ctas } from "@/data/ctas";

const badges = ["Insight", "Kinetics", "Wound Care", "Bio-Fit", "Step-Ahead"];

export function ContactFinalCTA() {
  return (
    <Section className="pb-16 pt-14 sm:pb-20" variant="white">
      <Container>
        <div className="rounded-[2rem] border border-primary/15 bg-[linear-gradient(135deg,rgba(221,241,255,0.9),rgba(255,255,255,0.96),rgba(38,182,200,0.11))] p-6 shadow-card sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Guided enquiry</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-primary-dark sm:text-4xl">Not sure where to start?</h2>
              <p className="mt-4 max-w-2xl leading-7 text-text-secondary">
                Start with a simple enquiry. N-Stride can help guide you toward Insight, Kinetics, Wound Care, Bio-Fit or Step-Ahead depending on your need.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="#enquiry-form">
                  Submit Enquiry
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Button>
                <Button href={`tel:${brand.contact.phone}`} variant="outline">
                  Call N-Stride
                </Button>
                <Button href={ctas.verticals.href} variant="ghost">
                  Explore Verticals
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span className="rounded-full border border-border-soft bg-white px-4 py-2 text-sm font-bold text-primary-dark shadow-soft" key={badge}>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
