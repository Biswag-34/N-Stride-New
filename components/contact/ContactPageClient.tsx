"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

import { inquiryTypes } from "@/data/contact";

import { ContactFormSection } from "./ContactFormSection";
import { InquiryPathwaySelector } from "./InquiryPathwaySelector";

export function ContactPageClient() {
  const searchParams = useSearchParams();
  const initialType = useMemo(() => {
    const queryType = searchParams.get("type");
    return inquiryTypes.some((type) => type.queryValue === queryType) ? queryType ?? "general" : "general";
  }, [searchParams]);
  const [selectedType, setSelectedType] = useState(initialType);

  return (
    <>
      <InquiryPathwaySelector onSelect={setSelectedType} selectedType={selectedType} />
      <ContactFormSection onTypeChange={setSelectedType} selectedType={selectedType} />
    </>
  );
}
