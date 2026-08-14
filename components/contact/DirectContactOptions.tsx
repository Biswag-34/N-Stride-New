import { ExternalLink, Mail, Phone, ShoppingBag } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { brand } from "@/data/brand";

function whatsappHref() {
  const digits = brand.contact.phone.replace(/\D/g, "");
  const message = encodeURIComponent("Hello N-Stride, I would like to enquire about foot/lower-limb care.");
  return `https://wa.me/${digits}?text=${message}`;
}

export function DirectContactOptions() {
  const options = [
    { icon: Phone, title: "Call", value: brand.contact.phone, href: `tel:${brand.contact.phone}`, tone: "text-[#0f6eb9] bg-[#e9f7ff]" },
    { icon: FaWhatsapp, title: "WhatsApp", value: "Start chat", href: whatsappHref(), external: true, tone: "text-[#25D366] bg-[#e9fff2]" },
    { icon: Mail, title: "Email", value: brand.contact.email, href: `mailto:${brand.contact.email}`, tone: "text-[#5a67d8] bg-[#f2f0ff]" },
    { icon: ShoppingBag, title: "Store", value: "N-Stride Shop", href: brand.ecommerceUrl, external: true, tone: "text-[#f59f00] bg-[#fff7e6]" },
  ];

  return (
    <Section className="py-8 xs:py-10 sm:py-12" variant="white">
      <Container>
        <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <h2 className="text-2xl font-semibold leading-tight text-primary-dark sm:text-3xl">Quick contact options</h2>
          <p className="max-w-[34rem] text-sm leading-6 text-text-secondary">Use a direct route when you already know how you want to reach the team.</p>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:gap-3 xl:grid-cols-4">
          {options.map((option) => {
            const Icon = option.icon;

            return (
              <a
                className="group flex min-h-14 items-center gap-2 border-y border-border-soft bg-white py-2 transition hover:border-primary/35 hover:bg-[#f8fcff] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 sm:min-h-16 sm:gap-3 sm:py-3"
                href={option.href}
                key={option.title}
                rel={option.external ? "noreferrer" : undefined}
                target={option.external ? "_blank" : undefined}
              >
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full sm:h-11 sm:w-11 ${option.tone}`}>
                  <Icon aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-bold text-primary-dark sm:text-sm">{option.title}</span>
                  <span className="block break-words text-[0.72rem] leading-tight text-text-secondary sm:text-sm sm:leading-normal">{option.value}</span>
                </span>
                {option.external ? <ExternalLink aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" /> : null}
              </a>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
