export type LeadCaptureCopy = {
  description: string;
  heading: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
};

type LeadHrefOptions = {
  cta?: string;
  source?: string;
  type?: string;
};

const defaultCopy = (title: string): LeadCaptureCopy => ({
  heading: `Share the details for ${title}.`,
  description: "Use the same short form for booking, enquiry and partnership requests. The N-Stride team can follow up for deeper details.",
  messageLabel: "Short message",
  messagePlaceholder: "Tell us what you need help with.",
  submitLabel: "Submit Enquiry",
});

const copyByCta: Record<string, Partial<LeadCaptureCopy>> = {
  book_consultation: {
    messageLabel: "What would you like to book?",
    messagePlaceholder: "Briefly describe the appointment or care guidance you need.",
    submitLabel: "Request Callback",
  },
  book_foot_checkup: {
    messageLabel: "Foot-checkup concern",
    messagePlaceholder: "Pain, diabetes history, footwear concern, wound risk or preferred appointment timing.",
    submitLabel: "Book Foot Checkup",
  },
  request_wound_care_support: {
    messageLabel: "Wound-care support needed",
    messagePlaceholder: "Share the wound-care context and whether a clinician is already guiding treatment.",
    submitLabel: "Request Wound-Care Support",
  },
  request_biofit_consultation: {
    messageLabel: "Bio-Fit requirement",
    messagePlaceholder: "Prosthetic, orthotic, silicone restoration or mobility-support requirement.",
    submitLabel: "Request Bio-Fit Consultation",
  },
  discuss_stepahead_partnership: {
    messageLabel: "Partnership context",
    messagePlaceholder: "Clinic type, patient profile, current setup and what you want Step-Ahead to support.",
    submitLabel: "Discuss Step-Ahead Partnership",
  },
  request_program_overview: {
    heading: "Request the Step-Ahead program overview.",
    messageLabel: "Overview request details",
    messagePlaceholder: "Tell us your facility type and what you want covered in the overview.",
    submitLabel: "Request Program Overview",
  },
  get_brochure_by_email: {
    heading: "Get the Step-Ahead brochure by email.",
    messageLabel: "Brochure request details",
    messagePlaceholder: "Add your clinic name, role and any specific Step-Ahead questions.",
    submitLabel: "Get Brochure by Email",
  },
  discuss_fitrx_partnership: {
    messageLabel: "FitRx partnership context",
    messagePlaceholder: "Clinic or business type, current footwear workflow and expected monthly referrals.",
    submitLabel: "Discuss FitRx Partnership",
  },
  order_after_sales_support: {
    messageLabel: "Order or after-sales issue",
    messagePlaceholder: "Order number if available, product name and the support you need.",
    submitLabel: "Request Order Support",
  },
};

export function leadCaptureHref({ cta, source, type = "general" }: LeadHrefOptions = {}) {
  const params = new URLSearchParams({ type });

  if (source) params.set("source", source);
  if (cta) params.set("cta", cta);

  return `/contact?${params.toString()}`;
}

export function getLeadCaptureCopy(ctaName: string, fallbackTitle: string) {
  const normalized = ctaName.replaceAll("-", "_");
  const base = defaultCopy(fallbackTitle);
  const override = copyByCta[normalized] ?? {};

  return { ...base, ...override };
}
