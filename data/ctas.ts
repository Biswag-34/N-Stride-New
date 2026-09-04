import type { CTA } from "@/data/types";
import { leadCaptureHref } from "@/data/leadCapture";

export const ctas = {
  primary: { label: "Book Consultation", href: leadCaptureHref({ cta: "book_consultation", type: "general" }) },
  store: { label: "Visit N-Stride Shop", href: "https://nstride.shop", external: true },
  verticals: { label: "Explore Care Verticals", href: "/verticals" },
  stepAhead: { label: "Partner with Step-Ahead", href: leadCaptureHref({ cta: "discuss_stepahead_partnership", type: "step-ahead" }) },
  footCheckup: { label: "Book Foot Checkup", href: leadCaptureHref({ cta: "book_foot_checkup", type: "foot-checkup" }) },
  woundCare: { label: "Request Wound Care Support", href: leadCaptureHref({ cta: "request_wound_care_support", type: "wound-care" }) },
  bioFit: { label: "Request Bio-Fit Consultation", href: leadCaptureHref({ cta: "request_biofit_consultation", type: "bio-fit" }) },
  fitRx: { label: "Discuss FitRx Partnership", href: leadCaptureHref({ cta: "discuss_fitrx_partnership", type: "fitrx" }) },
  orderSupport: { label: "Request Order Support", href: leadCaptureHref({ cta: "order_after_sales_support", type: "order-after-sales" }) },
} satisfies Record<string, CTA>;
