import { ExternalLink, Mail, MessageCircle, Phone, ShoppingBag } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brand } from "@/data/brand";

function whatsappHref() {
  const digits = brand.contact.phone.replace(/\D/g, "");
  const message = encodeURIComponent("Hello N-Stride, I would like to enquire about foot/lower-limb care.");
  return `https://wa.me/${digits}?text=${message}`;
}

export function DirectContactOptions() {
  const options = [
    { icon: Phone, title: "Call N-Stride", value: brand.contact.phone, href: `tel:${brand.contact.phone}` },
    { icon: MessageCircle, title: "WhatsApp N-Stride", value: "Start WhatsApp enquiry", href: whatsappHref(), external: true },
    { icon: Mail, title: "Email N-Stride", value: brand.contact.email, href: `mailto:${brand.contact.email}` },
    { icon: ShoppingBag, title: "Visit N-Stride Shop", value: "Dedicated product store", href: brand.ecommerceUrl, external: true },
  ];

  return (
    <Section className="py-14 sm:py-16 lg:py-20" variant="white">
      <Container>
        <SectionHeading
          description="Use a direct route when you already know how you want to reach the team."
          eyebrow="Direct contact"
          title="Quick contact options"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {options.map((option) => {
            const Icon = option.icon;

            return (
              <a
                className="group rounded-[1.25rem] border border-border-soft bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-card focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
                href={option.href}
                key={option.title}
                rel={option.external ? "noreferrer" : undefined}
                target={option.external ? "_blank" : undefined}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-background-soft text-primary">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-primary-dark">{option.title}</h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{option.value}</p>
                {option.external ? <ExternalLink aria-hidden="true" className="mt-4 h-4 w-4 text-primary" /> : null}
              </a>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
