export type LeadEnquiryPayload = {
  city: string;
  consent: boolean;
  countryCode: string;
  ctaName: string;
  email: string;
  fullName: string;
  marketingConsent: boolean;
  message: string;
  phone: string;
  preferredContact: string;
  selectedIntent: string;
  sourcePage: string;
};

export type StoredLeadEnquiry = LeadEnquiryPayload & {
  id: string;
  submittedAt: string;
};

const leadStoreKey = "nstride.leadEnquiries.v1";

export function saveLeadEnquiry(payload: LeadEnquiryPayload): StoredLeadEnquiry {
  const record: StoredLeadEnquiry = {
    ...payload,
    id: `NS-${Date.now().toString(36).toUpperCase().slice(-6)}`,
    submittedAt: new Date().toISOString(),
  };

  try {
    const existing = window.localStorage.getItem(leadStoreKey);
    const parsed = existing ? (JSON.parse(existing) as StoredLeadEnquiry[]) : [];
    const safeParsed = Array.isArray(parsed) ? parsed : [];
    const next = [record, ...safeParsed].slice(0, 100);
    window.localStorage.setItem(leadStoreKey, JSON.stringify(next));
  } catch {
    // Storage can fail in private browsing or restricted embeds; the UI still returns the generated reference.
  }

  return record;
}
