"use client";

import { FormEvent, useMemo, useState } from "react";
import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { inquiryTypes } from "@/data/contact";

type ContactFormSectionProps = {
  onTypeChange: (queryValue: string) => void;
  selectedType: string;
};

const contactMethods = ["Phone", "WhatsApp", "Email"];

export function ContactFormSection({ onTypeChange, selectedType }: ContactFormSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const selectedInquiry = useMemo(
    () => inquiryTypes.find((type) => type.queryValue === selectedType) ?? inquiryTypes[inquiryTypes.length - 1],
    [selectedType],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: Connect this form to a secure backend or CRM endpoint before collecting live enquiries.
    setSubmitted(true);
  }

  return (
    <Section id="enquiry-form" className="py-8 xs:py-10 sm:py-12" variant="soft">
      <Container>
        <div className="grid gap-5 lg:grid-cols-[0.58fr_1.42fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold leading-tight text-primary-dark xs:text-3xl">
              Share the details for {selectedInquiry?.title ?? "your enquiry"}.
            </h2>
            <p className="mt-3 text-sm leading-6 text-text-secondary">
              Keep it short. The team can follow up for deeper clinical or partnership details.
            </p>
            {submitted ? (
              <div className="mt-5 rounded-[0.8rem] border border-accent-green/25 bg-accent-green/10 p-3 text-sm font-semibold leading-6 text-primary-dark">
                Thank you. Your enquiry has been captured in the form UI.
              </div>
            ) : null}
          </div>

          <form className="rounded-[1rem] border border-border-soft bg-white p-4 shadow-[0_16px_42px_rgba(20,121,201,0.06)] sm:p-5" onSubmit={handleSubmit}>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <Field label="Full name" name="fullName" required />
              <Field label="Phone number" name="phone" required type="tel" />
              <Field label="Email optional" name="email" type="email" />
              <SelectField label="Enquiry type" name="enquiryType" onChange={onTypeChange} value={selectedType}>
                {inquiryTypes.map((type) => (
                  <option key={type.queryValue} value={type.queryValue}>
                    {type.title}
                  </option>
                ))}
              </SelectField>
              <Field label="City / location" name="city" required />
              <SelectField label="Contact by" name="preferredContact">
                {contactMethods.map((item) => <option key={item}>{item}</option>)}
              </SelectField>
            </div>

            <div className="mt-3 grid gap-3">
              <label className="grid gap-2 text-sm font-semibold text-primary-dark">
                Short message
                <textarea className="min-h-24 rounded-md border border-border-soft bg-white px-4 py-3 text-sm text-text-primary outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15" name="message" required />
              </label>
              <label className="flex items-start gap-3 rounded-[0.75rem] bg-background-soft p-3 text-xs font-semibold leading-5 text-primary-dark ring-1 ring-border-soft">
                <input className="mt-1 h-4 w-4 rounded border-border-soft text-primary focus:ring-primary" name="consent" required type="checkbox" />
                I agree to be contacted by the N-Stride team regarding my enquiry.
              </label>
              <button className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-6 font-semibold text-white shadow-soft transition hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25" type="submit">
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
}

function Field({ label, name, required, type = "text" }: { label: string; name: string; required?: boolean; type?: string }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-primary-dark">
      {label}
      <input className="min-h-10 rounded-md border border-border-soft bg-white px-3 text-sm text-text-primary outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15" name={name} required={required} type={type} />
    </label>
  );
}

function SelectField({ children, label, name, onChange, value }: { children: ReactNode; label: string; name: string; onChange?: (value: string) => void; value?: string }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-primary-dark">
      {label}
      <select
        className="min-h-10 rounded-md border border-border-soft bg-white px-3 text-sm text-text-primary outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
        name={name}
        onChange={(event) => onChange?.(event.target.value)}
        value={value}
      >
        {children}
      </select>
    </label>
  );
}
