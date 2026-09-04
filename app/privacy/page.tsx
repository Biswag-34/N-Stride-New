import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { brand } from "@/data/brand";

export const metadata: Metadata = {
  title: "Privacy Policy | N-Stride",
  description: "How N-Stride handles enquiry information and contact details shared through the website.",
};

export default function PrivacyPage() {
  return (
    <Section className="py-12 md:py-16" variant="soft">
      <Container className="max-w-4xl">
        <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-primary">Privacy Policy</p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight text-primary-dark md:text-5xl">
          Your enquiry information is used to respond to your request.
        </h1>
        <div className="mt-6 grid gap-5 text-sm leading-7 text-text-secondary md:text-base">
          <p>
            N-Stride collects the details you choose to share through enquiry forms, calls, email or WhatsApp so the relevant team can respond to your care, product, partnership or support request.
          </p>
          <p>
            Website enquiries are not an emergency service and should not be used for urgent medical issues. For urgent symptoms, contact local emergency services or visit the nearest appropriate healthcare facility.
          </p>
          <p>
            For privacy questions or corrections to information you submitted, contact N-Stride at{" "}
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
