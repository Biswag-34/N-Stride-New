"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { inquiryTypes } from "@/data/contact";

type ContactFormSectionProps = {
  onTypeChange: (queryValue: string) => void;
  selectedType: string;
};

const contactMethods = ["Phone", "WhatsApp", "Email"];

const requiredFields: Record<string, string> = {
  fullName: "Full name is required.",
  phone: "Phone number is required.",
  city: "City or location is required.",
  message: "Please add a short message.",
  consent: "Consent is required before submitting.",
};

export function ContactFormSection({ onTypeChange, selectedType }: ContactFormSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const selectedInquiry = useMemo(
    () => inquiryTypes.find((type) => type.queryValue === selectedType) ?? inquiryTypes[inquiryTypes.length - 1],
    [selectedType],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors: Record<string, string> = {};

    Object.entries(requiredFields).forEach(([name, message]) => {
      const value = formData.get(name);
      if (name === "consent") {
        if (value !== "on") nextErrors[name] = message;
        return;
      }

      if (typeof value !== "string" || value.trim().length === 0) {
        nextErrors[name] = message;
      }
    });

    const email = formData.get("email");
    if (typeof email === "string" && email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    setErrors(nextErrors);
    setSubmitted(false);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = form.querySelector<HTMLElement>(`[name="${Object.keys(nextErrors)[0]}"]`);
      firstInvalid?.focus();
      return;
    }

    // TODO: Connect this form to a secure backend or CRM endpoint before collecting live enquiries.
    setSubmitted(true);
    form.reset();
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
              <div className="mt-5 rounded-[0.8rem] border border-accent-green/25 bg-accent-green/10 p-3 text-sm font-semibold leading-6 text-primary-dark" role="status">
                Thank you. Your enquiry has been captured in the form UI.
              </div>
            ) : null}
          </div>

          <form className="rounded-[1rem] border border-border-soft bg-white p-4 shadow-[0_16px_42px_rgba(20,121,201,0.06)] sm:p-5" noValidate onSubmit={handleSubmit} ref={formRef}>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <Field error={errors.fullName} label="Full name" name="fullName" required />
              <Field error={errors.phone} label="Phone number" name="phone" required type="tel" />
              <Field error={errors.email} label="Email optional" name="email" type="email" />
              <SelectField label="Enquiry type" name="enquiryType" onChange={onTypeChange} value={selectedType}>
                {inquiryTypes.map((type) => (
                  <option key={type.queryValue} value={type.queryValue}>
                    {type.title}
                  </option>
                ))}
              </SelectField>
              <Field error={errors.city} label="City / location" name="city" required />
              <SelectField label="Contact by" name="preferredContact">
                {contactMethods.map((item) => <option key={item}>{item}</option>)}
              </SelectField>
            </div>

            <div className="mt-3 grid gap-3">
              <label className="grid gap-2 text-sm font-semibold text-primary-dark">
                Short message <span className="sr-only">required</span>
                <textarea aria-describedby={errors.message ? "message-error" : undefined} aria-invalid={Boolean(errors.message)} className="min-h-28 rounded-md border border-border-soft bg-white px-4 py-3 text-base text-text-primary outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15" name="message" required />
                {errors.message ? <span className="text-xs font-semibold text-red-700" id="message-error">{errors.message}</span> : null}
              </label>
              <label className="flex min-h-12 items-start gap-3 rounded-[0.75rem] bg-background-soft p-3 text-sm font-semibold leading-5 text-primary-dark ring-1 ring-border-soft">
                <input aria-describedby={errors.consent ? "consent-error" : undefined} aria-invalid={Boolean(errors.consent)} className="mt-1 h-5 w-5 rounded border-border-soft text-primary focus:ring-primary" name="consent" required type="checkbox" />
                <span>
                  I agree to be contacted by the N-Stride team regarding my enquiry.
                  {errors.consent ? <span className="mt-1 block text-xs font-semibold text-red-700" id="consent-error">{errors.consent}</span> : null}
                </span>
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

function Field({ error, label, name, required, type = "text" }: { error?: string; label: string; name: string; required?: boolean; type?: string }) {
  const errorId = `${name}-error`;
  return (
    <label className="grid gap-2 text-sm font-semibold text-primary-dark">
      {label} {required ? <span className="sr-only">required</span> : null}
      <input aria-describedby={error ? errorId : undefined} aria-invalid={Boolean(error)} className="min-h-12 rounded-md border border-border-soft bg-white px-3 text-base text-text-primary outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15" name={name} required={required} type={type} />
      {error ? <span className="text-xs font-semibold text-red-700" id={errorId}>{error}</span> : null}
    </label>
  );
}

function SelectField({ children, label, name, onChange, value }: { children: ReactNode; label: string; name: string; onChange?: (value: string) => void; value?: string }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-primary-dark">
      {label}
      <select
        className="min-h-12 rounded-md border border-border-soft bg-white px-3 text-base text-text-primary outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
        name={name}
        onChange={(event) => onChange?.(event.target.value)}
        value={value}
      >
        {children}
      </select>
    </label>
  );
}
