import type { Metadata } from "next";
import { Suspense } from "react";

import { BeforeYouContactSection } from "@/components/contact/BeforeYouContactSection";
import { ContactFAQ } from "@/components/contact/ContactFAQ";
import { ContactFinalCTA } from "@/components/contact/ContactFinalCTA";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactPageClient } from "@/components/contact/ContactPageClient";
import { DirectContactOptions } from "@/components/contact/DirectContactOptions";
import { VisitLocationSection } from "@/components/contact/VisitLocationSection";

export const metadata: Metadata = {
  title: "Contact N-Stride | Foot Checkup, Wound Care, Bio-Fit & Step-Ahead Enquiry",
  description:
    "Contact N-Stride for foot checkup, therapeutic footwear guidance, wound-care support, Bio-Fit consultation, Step-Ahead partnership or general enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <Suspense fallback={null}>
        <ContactPageClient />
      </Suspense>
      <DirectContactOptions />
      <VisitLocationSection />
      <BeforeYouContactSection />
      <ContactFAQ />
      <ContactFinalCTA />
    </>
  );
}
