"use client";

import { ArrowDown, HeartPulse, MessageCircle, ScanSearch, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { inquiryTypes } from "@/data/contact";
import { cn } from "@/lib/cn";
import { getThemeClasses } from "@/lib/theme";

type InquiryPathwaySelectorProps = {
  onSelect: (queryValue: string) => void;
  selectedType: string;
};

const icons = {
  scan: ScanSearch,
  shoe: ShieldCheck,
  wound: HeartPulse,
  biofit: Sparkles,
  partner: Stethoscope,
  message: MessageCircle,
};

export function InquiryPathwaySelector({ onSelect, selectedType }: InquiryPathwaySelectorProps) {
  return (
    <Section id="enquiry-pathway" className="py-8 sm:py-10" variant="white">
      <Container>
        <div className="mx-auto max-w-[920px] text-center">
          <h2 className="text-2xl font-semibold leading-tight text-primary-dark sm:text-3xl">Choose your enquiry path.</h2>
          <p className="mt-3 text-sm leading-6 text-text-secondary">Tap one option and we will take you straight to the compact enquiry form.</p>
        </div>
        <div className="mx-auto mt-7 grid max-w-[1040px] grid-cols-1 gap-2.5 xs:grid-cols-2 md:flex md:flex-wrap md:justify-center">
          {inquiryTypes.map((type) => {
            const selected = selectedType === type.queryValue;
            const theme = getThemeClasses(type.theme);
            const Icon = icons[type.icon];

            return (
              <button
                aria-pressed={selected}
                className={cn(
                  "group inline-flex min-h-12 w-full items-center gap-2.5 rounded-[0.75rem] border border-border-soft bg-white px-4 py-2 text-left text-sm font-bold text-primary-dark shadow-[0_10px_26px_rgba(20,121,201,0.05)] transition hover:-translate-y-0.5 hover:border-primary/35 hover:bg-[#f8fcff] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/18 md:w-auto md:rounded-full",
                  selected ? `${theme.borderColor} ${theme.softBackground} ${theme.textColor} ring-2 ${theme.ringClass}` : "",
                )}
                key={type.queryValue}
                onClick={() => onSelect(type.queryValue)}
                type="button"
              >
                <span className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-background-soft", theme.textColor)}>
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </span>
                <span>{type.title}</span>
                <ArrowDown aria-hidden="true" className="h-3.5 w-3.5 opacity-55 transition group-hover:translate-y-0.5" />
              </button>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
