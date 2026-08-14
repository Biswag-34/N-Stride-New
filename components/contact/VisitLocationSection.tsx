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
    <Section className="py-8 sm:py-10 lg:py-12" variant="soft">
      <Container>
        <div className="grid gap-5 rounded-[1.25rem] border border-border-soft bg-white p-4 shadow-[0_18px_52px_rgba(16,42,67,0.07)] lg:grid-cols-[0.72fr_1.28fr] lg:p-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Location</p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-primary-dark sm:text-3xl">Visit or contact N-Stride</h2>
            <div className="mt-5 grid grid-cols-2 gap-2 md:gap-3">
              {rows.map((row) => {
                const Icon = row.icon;

                return (
                  <div className={`flex gap-2 rounded-[0.8rem] border border-border-soft bg-background-soft p-2.5 md:gap-3 md:p-3 ${row.label === "Address" ? "col-span-2" : ""}`} key={row.label}>
                    <Icon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary md:h-5 md:w-5" />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-primary-dark md:text-sm">{row.label}</p>
                      <p className="mt-1 break-words text-[0.72rem] leading-5 text-text-secondary md:text-[0.82rem]">{row.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="min-h-[19rem] overflow-hidden rounded-[1rem] bg-background-soft">
            <iframe
              allowFullScreen
              className="h-full min-h-[19rem] w-full border-0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.332708080544!2d77.6096967733017!3d12.886315016745943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15749a6f3c39%3A0x87c930d166c58778!2sN-Stride%20(Nayapada%20Healing%20Solutions%20Pvt%20Ltd)!5e0!3m2!1sen!2sin!4v1784057216308!5m2!1sen!2sin"
              title="N-Stride location map"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
