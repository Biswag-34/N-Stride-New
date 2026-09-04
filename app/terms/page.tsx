import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: "Terms | N-Stride",
  description: "Important website, enquiry and clinical-information terms for N-Stride visitors.",
};

export default function TermsPage() {
  return (
    <Section className="py-12 md:py-16" variant="soft">
      <Container className="max-w-4xl">
        <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-primary">Terms</p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight text-primary-dark md:text-5xl">
          Website information supports enquiries and does not replace professional care.
        </h1>
        <div className="mt-6 grid gap-5 text-sm leading-7 text-text-secondary md:text-base">
          <p>
            N-Stride website content is provided for general education, service discovery and enquiry routing. It should not be treated as a diagnosis, treatment plan or substitute for qualified professional judgment.
          </p>
          <p>
            Product, program and service availability may depend on assessment, location, partner scope, clinical suitability, inventory and fulfilment conditions.
          </p>
          <p>
            For terms questions, contact N-Stride at{" "}
            <a className="font-bold text-primary hover:underline" href={`mailto:${brand.contact.email}`}>
              {brand.contact.email}
            </a>
            .
          </p>
        </div>
      </Container>
    </Section>
  );
}
