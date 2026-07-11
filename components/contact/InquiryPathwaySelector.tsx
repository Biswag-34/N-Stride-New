"use client";

import { HeartPulse, MessageCircle, ScanSearch, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";

import { ThemeBadge } from "@/components/page-sections/ThemeBadge";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
    <Section id="enquiry-pathway" className="py-14 sm:py-16 lg:py-20" variant="white">
      <Container>
        <SectionHeading
          align="center"
          description="Choose the reason you are contacting N-Stride. The enquiry form will adapt to the selected pathway."
          eyebrow="Guided pathway"
          title="What do you need help with?"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {inquiryTypes.map((type) => {
            const selected = selectedType === type.queryValue;
            const theme = getThemeClasses(type.theme);
            const Icon = icons[type.icon];

            return (
              <button
                aria-pressed={selected}
                className={cn(
                  "group rounded-[1.35rem] border bg-white p-5 text-left shadow-soft transition hover:-translate-y-1 hover:shadow-card focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20",
                  selected ? `${theme.borderColor} ring-4 ${theme.ringClass}` : "border-border-soft",
                )}
                key={type.queryValue}
                onClick={() => onSelect(type.queryValue)}
                type="button"
              >
                <div className="flex items-start gap-4">
                  <span className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-md", theme.softBackground, theme.textColor)}>
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div>
                    <ThemeBadge theme={type.theme}>{selected ? "Selected" : "Pathway"}</ThemeBadge>
                    <h3 className="mt-3 text-lg font-semibold text-primary-dark">{type.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">{type.description}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
