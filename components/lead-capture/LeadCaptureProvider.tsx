"use client";

import { FormEvent, PropsWithChildren, useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, X } from "lucide-react";

import { inquiryTypes } from "@/data/contact";
import { getLeadCaptureCopy } from "@/data/leadCapture";
import { saveLeadEnquiry } from "@/lib/leadStore";

type LeadModalState = {
  ctaName: string;
  sourcePage: string;
  type: string;
};

const requiredFields: Record<string, string> = {
  fullName: "Full name is required.",
  phone: "Phone number is required.",
  city: "City or location is required.",
  message: "Please add a short message.",
  consent: "Consent is required before submitting.",
};

const contactMethods = ["Phone", "WhatsApp", "Email"];

export function LeadCaptureProvider({ children }: PropsWithChildren) {
  const [modalState, setModalState] = useState<LeadModalState | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target as Element | null;
      const anchor = target?.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;

      const url = new URL(anchor.href, window.location.href);
      const isLocalContact = url.origin === window.location.origin && url.pathname === "/contact";
      const anchorLabel = anchor.textContent ?? "";
      const isLeadCta = anchor.dataset.leadCapture === "true" || (isLocalContact && (url.searchParams.has("type") || looksLikeLeadCta(anchorLabel)));

      if (!isLocalContact || !isLeadCta) return;

      event.preventDefault();
      event.stopPropagation();
      setModalState({
        ctaName: url.searchParams.get("cta") ?? normalizeCtaName(anchor.textContent ?? "book_consultation"),
        sourcePage: url.searchParams.get("source") ?? window.location.pathname,
        type: url.searchParams.get("type") ?? "general",
      });
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return (
    <>
      {children}
      <LeadCaptureModal modalState={modalState} onClose={() => setModalState(null)} />
    </>
  );
}

function looksLikeLeadCta(label: string) {
  return /\b(book|request|enquire|enquiry|consultation|consult|partner|partnership|discuss|callback|brochure|overview|support|team)\b/i.test(label);
}

function LeadCaptureModal({ modalState, onClose }: { modalState: LeadModalState | null; onClose: () => void }) {
  const [selectedType, setSelectedType] = useState("general");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedReference, setSubmittedReference] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!modalState) return;

    const validType = inquiryTypes.some((type) => type.queryValue === modalState.type) ? modalState.type : "general";
    setSelectedType(validType);
    setErrors({});
    setSubmittedReference("");
    document.body.style.overflow = "hidden";

    window.requestAnimationFrame(() => {
      formRef.current?.querySelector<HTMLInputElement>("[name='fullName']")?.focus();
    });

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalState, onClose]);

  const selectedInquiry = useMemo(
    () => inquiryTypes.find((type) => type.queryValue === selectedType) ?? inquiryTypes[inquiryTypes.length - 1],
    [selectedType],
  );
  const captureCopy = useMemo(
    () => getLeadCaptureCopy(modalState?.ctaName ?? "", selectedInquiry?.title ?? "your enquiry"),
    [modalState?.ctaName, selectedInquiry],
  );

  if (!modalState) return null;
  const activeState = modalState;

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
      if (typeof value !== "string" || value.trim().length === 0) nextErrors[name] = message;
    });

    const email = formData.get("email");
    if (typeof email === "string" && email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    setErrors(nextErrors);
    setSubmittedReference("");

    if (Object.keys(nextErrors).length > 0) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(nextErrors)[0]}"]`)?.focus();
      return;
    }

    const saved = saveLeadEnquiry({
      city: String(formData.get("city") ?? "").trim(),
      consent: formData.get("consent") === "on",
      countryCode: String(formData.get("countryCode") ?? "+91"),
      ctaName: activeState.ctaName,
      email: String(formData.get("email") ?? "").trim(),
      fullName: String(formData.get("fullName") ?? "").trim(),
      marketingConsent: formData.get("marketingConsent") === "on",
      message: String(formData.get("message") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      preferredContact: String(formData.get("preferredContact") ?? "Phone"),
      selectedIntent: selectedType,
      sourcePage: activeState.sourcePage,
    });

    setSubmittedReference(saved.id);
    form.reset();
  }

  return (
    <div
      aria-labelledby="lead-capture-title"
      aria-modal="true"
      className="fixed inset-0 z-[120] grid place-items-end bg-[#061f3b]/48 px-3 py-3 backdrop-blur-md sm:place-items-center sm:px-5"
      role="dialog"
      ref={dialogRef}
    >
      <button aria-label="Close enquiry form" className="absolute inset-0 h-full w-full cursor-default" onClick={onClose} type="button" />
      <div className="relative max-h-[min(92vh,760px)] w-full max-w-[760px] overflow-y-auto rounded-[1.1rem] bg-white shadow-[0_30px_90px_rgba(6,31,59,0.32)] ring-1 ring-white/70">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-[#d7ebfa] bg-white/94 px-4 py-4 backdrop-blur sm:px-5">
          <div>
            <p className="font-heading text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-primary">N-Stride enquiry</p>
            <h2 className="mt-1 font-heading text-xl font-extrabold leading-tight text-primary-dark sm:text-2xl" id="lead-capture-title">
              {captureCopy.heading}
            </h2>
          </div>
          <button className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#eef8ff] text-primary transition hover:bg-[#dff1ff]" onClick={onClose} type="button">
            <X aria-hidden="true" className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </button>
        </div>

        <div className="grid gap-4 px-4 py-4 sm:px-5 sm:py-5">
          <p className="text-sm font-semibold leading-6 text-text-secondary">{captureCopy.description}</p>
          <div className="rounded-[0.8rem] border border-red-200 bg-red-50 p-3 text-sm font-semibold leading-6 text-red-800">
            This form is not an emergency service. For urgent medical symptoms, contact local emergency services or visit the nearest appropriate healthcare facility.
          </div>
          {submittedReference ? (
            <div className="rounded-[0.8rem] border border-accent-green/25 bg-accent-green/10 p-3 text-sm font-semibold leading-6 text-primary-dark" role="status">
              Thank you. Your enquiry reference is {submittedReference}. We typically respond within 24 hours.
            </div>
          ) : null}

          <form className="grid gap-3" noValidate onSubmit={handleSubmit} ref={formRef}>
            <input name="selectedIntent" type="hidden" value={selectedType} />
            <input name="sourcePage" type="hidden" value={activeState.sourcePage} />
            <input name="ctaName" type="hidden" value={activeState.ctaName} />
            <div className="grid gap-3 sm:grid-cols-2">
              <Field autoComplete="name" error={errors.fullName} label="Full name" name="fullName" required />
              <Field autoComplete="tel-national" error={errors.phone} inputMode="tel" label="Phone number" name="phone" required type="tel" />
              <Field autoComplete="email" error={errors.email} label="Email optional" name="email" type="email" />
              <Field autoComplete="address-level2" error={errors.city} label="City / location" name="city" required />
              <SelectField label="Enquiry type" name="enquiryType" onChange={setSelectedType} value={selectedType}>
                {inquiryTypes.map((type) => (
                  <option key={type.queryValue} value={type.queryValue}>
                    {type.title}
                  </option>
                ))}
              </SelectField>
              <SelectField label="Contact by" name="preferredContact">
                {contactMethods.map((method) => <option key={method}>{method}</option>)}
              </SelectField>
              <SelectField label="Country code" name="countryCode">
                <option value="+91">+91 India</option>
                <option value="+61">+61 Australia</option>
                <option value="+1">+1 US / Canada</option>
              </SelectField>
            </div>

            <label className="grid gap-2 text-sm font-semibold text-primary-dark">
              {captureCopy.messageLabel} <span className="sr-only">required</span>
              <textarea aria-describedby={errors.message ? "modal-message-error" : undefined} aria-invalid={Boolean(errors.message)} className="min-h-24 rounded-md border border-border-soft bg-white px-4 py-3 text-base text-text-primary outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15" name="message" placeholder={captureCopy.messagePlaceholder} required />
              {errors.message ? <span className="text-xs font-semibold text-red-700" id="modal-message-error">{errors.message}</span> : null}
            </label>

            <label className="flex min-h-12 items-start gap-3 rounded-[0.75rem] bg-background-soft p-3 text-sm font-semibold leading-5 text-primary-dark ring-1 ring-border-soft">
              <input aria-describedby={errors.consent ? "modal-consent-error" : undefined} aria-invalid={Boolean(errors.consent)} className="mt-1 h-5 w-5 rounded border-border-soft text-primary focus:ring-primary" name="consent" required type="checkbox" />
              <span>
                I agree to be contacted by the N-Stride team regarding my enquiry.
                {errors.consent ? <span className="mt-1 block text-xs font-semibold text-red-700" id="modal-consent-error">{errors.consent}</span> : null}
              </span>
            </label>
            <label className="flex min-h-12 items-start gap-3 rounded-[0.75rem] bg-white p-3 text-sm font-semibold leading-5 text-primary-dark ring-1 ring-border-soft">
              <input className="mt-1 h-5 w-5 rounded border-border-soft text-primary focus:ring-primary" name="marketingConsent" type="checkbox" />
              <span>I also agree to receive occasional N-Stride product or care updates.</span>
            </label>

            <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 font-semibold text-white shadow-soft transition hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25" type="submit">
              {captureCopy.submitLabel}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({ autoComplete, error, inputMode, label, name, required, type = "text" }: { autoComplete?: string; error?: string; inputMode?: "search" | "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal"; label: string; name: string; required?: boolean; type?: string }) {
  const errorId = `modal-${name}-error`;

  return (
    <label className="grid gap-2 text-sm font-semibold text-primary-dark">
      {label} {required ? <span className="sr-only">required</span> : null}
      <input aria-describedby={error ? errorId : undefined} aria-invalid={Boolean(error)} autoComplete={autoComplete} className="min-h-12 rounded-md border border-border-soft bg-white px-3 text-base text-text-primary outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15" inputMode={inputMode} name={name} required={required} type={type} />
      {error ? <span className="text-xs font-semibold text-red-700" id={errorId}>{error}</span> : null}
    </label>
  );
}

function SelectField({ children, label, name, onChange, value }: { children: React.ReactNode; label: string; name: string; onChange?: (value: string) => void; value?: string }) {
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

function normalizeCtaName(label: string) {
  return label
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "") || "book_consultation";
}
