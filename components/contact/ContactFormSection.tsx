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
const organizationTypes = ["Doctor chamber", "Pharmacy consultation chamber", "Nursing home", "Hospital", "Multispecialty facility", "Clinic", "Other"];
const packages = ["Basic Package", "Premium Package", "Need guidance"];
const setupOptions = ["Yes", "No", "Planning"];
const concernAreas = ["Foot pain", "Diabetic foot risk", "Wound care", "Footwear guidance", "Prosthetics / orthotics", "Other"];

export function ContactFormSection({ onTypeChange, selectedType }: ContactFormSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const selectedInquiry = useMemo(
    () => inquiryTypes.find((type) => type.queryValue === selectedType) ?? inquiryTypes[inquiryTypes.length - 1],
    [selectedType],
  );
  const stepAhead = selectedType === "step-ahead";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: Connect this form to a secure backend or CRM endpoint before collecting live enquiries.
    setSubmitted(true);
  }

  return (
    <Section id="enquiry-form" className="py-14 sm:py-16 lg:py-20" variant="soft">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Enquiry form</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-primary-dark sm:text-4xl">
              Share the details for {selectedInquiry?.title ?? "your enquiry"}.
            </h2>
            <p className="mt-4 leading-7 text-text-secondary">
              The form is currently a frontend UI. Backend submission can be connected in the next development stage.
            </p>
            {submitted ? (
              <div className="mt-6 rounded-[1.2rem] border border-accent-green/25 bg-accent-green/10 p-4 text-sm font-semibold leading-6 text-primary-dark">
                Thank you. Your enquiry has been captured in the form UI. Backend submission can be connected in the next development stage.
              </div>
            ) : null}
          </div>

          <form className="rounded-[2rem] border border-border-soft bg-white p-5 shadow-card sm:p-6" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" name="fullName" required />
              <Field label="Phone number" name="phone" required type="tel" />
              <Field label="Email address optional" name="email" type="email" />
              <SelectField label="Enquiry type" name="enquiryType" onChange={onTypeChange} value={selectedType}>
                {inquiryTypes.map((type) => (
                  <option key={type.queryValue} value={type.queryValue}>
                    {type.title}
                  </option>
                ))}
              </SelectField>
              <Field label="Patient / Organization name optional" name="subjectName" />
              <Field label="City / location" name="city" required />
            </div>

            {stepAhead ? (
              <div className="mt-6 rounded-[1.35rem] border border-accent-green/20 bg-accent-green/10 p-4">
                <h3 className="font-heading text-lg font-semibold text-primary-dark">Step-Ahead partnership details</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  <SelectField label="Organization type" name="organizationType">
                    {organizationTypes.map((item) => <option key={item}>{item}</option>)}
                  </SelectField>
                  <SelectField label="Interested package" name="interestedPackage">
                    {packages.map((item) => <option key={item}>{item}</option>)}
                  </SelectField>
                  <SelectField label="Existing foot-care setup?" name="existingSetup">
                    {setupOptions.map((item) => <option key={item}>{item}</option>)}
                  </SelectField>
                </div>
              </div>
            ) : (
              <div className="mt-6 rounded-[1.35rem] border border-border-soft bg-background-soft p-4">
                <h3 className="font-heading text-lg font-semibold text-primary-dark">Care concern details</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <SelectField label="Concern area" name="concernArea">
                    {concernAreas.map((item) => <option key={item}>{item}</option>)}
                  </SelectField>
                  <SelectField label="Is this urgent?" name="urgent">
                    <option>No</option>
                    <option>Yes</option>
                  </SelectField>
                </div>
              </div>
            )}

            <div className="mt-6 grid gap-4">
              <label className="grid gap-2 text-sm font-semibold text-primary-dark">
                Message
                <textarea className="min-h-32 rounded-md border border-border-soft bg-white px-4 py-3 text-sm text-text-primary outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15" name="message" required />
              </label>
              <SelectField label="Preferred contact method" name="preferredContact">
                {contactMethods.map((item) => <option key={item}>{item}</option>)}
              </SelectField>
              <label className="flex items-start gap-3 rounded-[1rem] border border-border-soft bg-background-soft p-4 text-sm font-semibold leading-6 text-primary-dark">
                <input className="mt-1 h-4 w-4 rounded border-border-soft text-primary focus:ring-primary" name="consent" required type="checkbox" />
                I agree to be contacted by the N-Stride team regarding my enquiry.
              </label>
              <button className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-6 font-semibold text-white shadow-soft transition hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25" type="submit">
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
      <input className="min-h-11 rounded-md border border-border-soft bg-white px-4 text-sm text-text-primary outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15" name={name} required={required} type={type} />
    </label>
  );
}

function SelectField({ children, label, name, onChange, value }: { children: ReactNode; label: string; name: string; onChange?: (value: string) => void; value?: string }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-primary-dark">
      {label}
      <select
        className="min-h-11 rounded-md border border-border-soft bg-white px-4 text-sm text-text-primary outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
        name={name}
        onChange={(event) => onChange?.(event.target.value)}
        value={value}
      >
        {children}
      </select>
    </label>
  );
}
