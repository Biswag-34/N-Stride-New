import type { CTA } from "@/data/types";

export const ctas = {
  primary: { label: "Book Consultation", href: "/contact" },
  store: { label: "Visit N-Stride Shop", href: "https://nstride.shop", external: true },
  verticals: { label: "Explore Verticals", href: "/verticals" },
  stepAhead: { label: "Partner with Step-Ahead", href: "/step-ahead" },
  footCheckup: { label: "Book Foot Checkup", href: "/contact?type=foot-checkup" },
  woundCare: { label: "Request Wound Care Support", href: "/contact?type=wound-care" },
  bioFit: { label: "Request Bio-Fit Consultation", href: "/contact?type=bio-fit" },
} satisfies Record<string, CTA>;
