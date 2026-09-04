"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

import { inquiryTypes } from "@/data/contact";

import { ContactFormSection } from "./ContactFormSection";
import { InquiryPathwaySelector } from "./InquiryPathwaySelector";

export function ContactPageClient() {
  const searchParams = useSearchParams();
  const sourcePage = searchParams.get("source") ?? "";
  const ctaName = searchParams.get("cta") ?? "";
  const initialType = useMemo(() => {
    const queryType = searchParams.get("type");
    return inquiryTypes.some((type) => type.queryValue === queryType) ? queryType ?? "general" : "general";
  }, [searchParams]);
  const [selectedType, setSelectedType] = useState(initialType);

  function handleSelect(queryValue: string) {
    setSelectedType(queryValue);
    window.requestAnimationFrame(() => {
      document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <>
      <InquiryPathwaySelector onSelect={handleSelect} selectedType={selectedType} />
      <ContactFormSection ctaName={ctaName} onTypeChange={setSelectedType} selectedType={selectedType} sourcePage={sourcePage} />
    </>
  );
}
