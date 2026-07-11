import { Mail, MapPin, Phone, ShoppingBag } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { brand } from "@/data/brand";

export function VisitLocationSection() {
  const rows = [
    { icon: MapPin, label: "Address", value: brand.contact.address },
    { icon: Phone, label: "Phone", value: brand.contact.phone },
    { icon: Mail, label: "Email", value: brand.contact.email },
    { icon: ShoppingBag, label: "Store", value: brand.ecommerceUrl },
  ];

  return (
    <Section className="py-14 sm:py-16 lg:py-20" variant="soft">
      <Container>
        <div className="grid gap-6 rounded-[2rem] border border-border-soft bg-white p-5 shadow-card lg:grid-cols-[0.82fr_1.18fr] lg:p-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Location</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-primary-dark sm:text-4xl">Visit or contact N-Stride</h2>
            <div className="mt-6 grid gap-4">
              {rows.map((row) => {
                const Icon = row.icon;

                return (
                  <div className="flex gap-3 rounded-[1rem] border border-border-soft bg-background-soft p-4" key={row.label}>
                    <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-bold text-primary-dark">{row.label}</p>
                      <p className="mt-1 text-sm leading-6 text-text-secondary">{row.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex min-h-[22rem] items-center justify-center rounded-[1.5rem] border border-dashed border-border-soft bg-background-soft p-6 text-center">
            {/* TODO: Add verified Google Maps embed URL here after the final location embed is approved. */}
            <p className="max-w-sm text-sm font-semibold leading-6 text-text-secondary">
              Map embed placeholder: add verified Google Maps embed URL here.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
