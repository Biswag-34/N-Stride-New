import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { brand } from "@/data/brand";
import { footerNavigation } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { SITE_NAME } from "@/lib/constants";

const socialHoverStyles: Record<string, string> = {
  Facebook: "hover:text-[#1877f2]",
  Instagram: "hover:text-[#dd2a7b]",
  YouTube: "hover:text-[#ff0000]",
};

const importantLinks = new Set(["FitRx", "Step-Ahead", "Book Consultation", "Visit Store"]);

export function Footer() {
  const socialIcons = {
    Instagram,
    Facebook,
    YouTube: Youtube,
  };

  return (
    <footer className="relative isolate overflow-hidden border-t border-[#c9e6f8] bg-[linear-gradient(180deg,#f8fcff_0%,#eef8ff_55%,#ffffff_100%)] text-text-primary">
      <div aria-hidden="true" className="absolute -left-24 top-8 hidden h-60 w-60 rounded-full bg-[#dff4ff]/70 blur-3xl md:block" />
      <div aria-hidden="true" className="absolute -right-28 bottom-0 hidden h-72 w-72 rounded-full bg-[#dff7f4]/70 blur-3xl md:block" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#073b66,#1479c9,#26b6c8,#5cb85c)]" />

      <Container className="relative z-10 py-4 md:py-7">
        <div className="flex flex-col gap-4 border-b border-[#c9e6f8] pb-4 md:flex-row md:items-center md:justify-between md:gap-5 md:pb-5">
          <div className="flex flex-row items-center gap-3 md:gap-5">
            <Link className="relative flex h-9 w-32 shrink-0 items-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 md:h-11 md:w-40" href="/">
              <Image
                alt={`${SITE_NAME} logo`}
                className="object-contain object-left"
                fill
                sizes="160px"
                src="/brand/logo-header.png"
              />
            </Link>
            <div className="max-w-3xl md:border-l md:border-[#c9e6f8] md:pl-5">
              <p className="font-heading text-base font-extrabold leading-tight text-primary-dark md:text-lg">Connected foot and lower-limb care.</p>
              <p className="nstride-footer-summary mt-1 text-xs font-semibold leading-5 text-text-secondary md:max-w-2xl">{brand.summary}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 xs:flex xs:flex-row">
            <Link className="inline-flex min-h-10 items-center justify-center gap-2 rounded-[0.5rem] bg-primary px-4 text-xs font-extrabold text-white shadow-[0_12px_28px_rgba(20,121,201,0.18)] transition hover:-translate-y-0.5 hover:bg-primary-dark" href="/contact">
              Book Consultation
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <a className="inline-flex min-h-10 items-center justify-center gap-2 rounded-[0.5rem] border border-primary/30 bg-white/60 px-4 text-xs font-extrabold text-primary transition hover:-translate-y-0.5 hover:bg-white" href={brand.ecommerceUrl} rel="noreferrer" target="_blank">
              Visit Store
              <ExternalLink aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-4 py-4 md:grid-cols-[1.05fr_1.6fr_0.6fr] md:gap-7 md:py-5">
          <div className="space-y-3">
            <h2 className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-primary">Reach N-Stride</h2>
            <div className="grid gap-2 text-[0.8rem] leading-5 text-text-secondary">
              <a className="flex min-w-0 items-start gap-2 transition hover:text-primary" href={`tel:${brand.contact.phoneHref}`}>
                <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="font-extrabold text-primary-dark">{brand.contact.phone}</span>
              </a>
              <a className="flex min-w-0 items-start gap-2 transition hover:text-primary" href={`mailto:${brand.contact.email}`}>
                <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="font-extrabold text-primary-dark">{brand.contact.email}</span>
              </a>
              <p className="flex min-w-0 items-start gap-2">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{brand.contact.address}</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 md:border-x md:border-[#c9e6f8] md:px-7">
            {footerNavigation.map((group) => (
              <div key={group.title}>
                <h2 className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-primary">{group.title}</h2>
                <ul className="mt-3 grid gap-2">
                  {group.links.map((link) => {
                    const isExternal = link.href.startsWith("http");
                    const isImportant = importantLinks.has(link.label);
                    const linkClassName = cn(
                      "group/link inline-flex min-h-8 w-fit items-center gap-2 text-[0.82rem] font-bold transition",
                      isImportant ? "text-primary-dark decoration-primary/40 decoration-2 underline-offset-4 hover:text-primary hover:underline" : "text-text-secondary hover:text-primary-dark",
                    );

                    return (
                      <li key={`${group.title}-${link.href}`}>
                        {isExternal ? (
                          <a className={linkClassName} href={link.href} rel="noreferrer" target="_blank">
                            {link.label}
                            <ExternalLink aria-hidden="true" className="h-3.5 w-3.5 opacity-70 transition group-hover/link:translate-x-0.5" />
                          </a>
                        ) : (
                          <Link className={linkClassName} href={link.href}>
                            {link.label}
                            {isImportant ? <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 opacity-70 transition group-hover/link:translate-x-0.5" /> : null}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-primary">Stay connected</h2>
            <div className="mt-3 flex gap-3">
              {brand.socialLinks.map((link) => {
                const Icon = socialIcons[link.label as keyof typeof socialIcons];

                return (
                  <a
                    aria-label={link.label}
                    className={cn(
                      "inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#c9e6f8] bg-white/58 text-primary-dark transition hover:-translate-y-0.5 hover:bg-white",
                      socialHoverStyles[link.label],
                    )}
                    href={link.href}
                    key={link.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {Icon ? <Icon aria-hidden="true" className="h-4 w-4" /> : link.label.slice(0, 1)}
                  </a>
                );
              })}
            </div>
            <p className="mt-4 text-xs font-bold leading-5 text-primary-dark">
              One coordinated ecosystem for diagnostics, protection, wound support and mobility restoration.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[0.85rem] bg-[linear-gradient(90deg,#073b66,#1479c9,#26b6c8)] px-4 py-2 text-white shadow-[0_16px_38px_rgba(20,121,201,0.12)] md:rounded-full">
          <div aria-hidden="true" className="absolute inset-y-0 left-1/2 w-24 -translate-x-1/2 bg-white/18 blur-2xl" />
          <div className="relative z-10 flex flex-col gap-1 text-[0.74rem] font-semibold xs:flex-row xs:items-center xs:justify-between">
            <p>&copy; 2026 Nayapada&apos;s N-Stride. All rights reserved.</p>
            <div className="flex gap-4 font-heading font-extrabold">
              <Link className="hover:underline" href="/privacy">
                Privacy Policy
              </Link>
              <Link className="hover:underline" href="/terms">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
