import { ArrowRight, Home, MessageCircle, Newspaper } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { brand } from "@/data/brand";
import { leadCaptureHref } from "@/data/leadCapture";

export default function NotFound() {
  return (
    <Section className="min-h-[70vh] overflow-hidden bg-[linear-gradient(135deg,#eef8ff,#ffffff_54%,#eafaf0)] py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <p className="font-heading text-xs font-extrabold uppercase tracking-[0.18em] text-primary">Page not found</p>
          <h1 className="mt-4 font-heading text-[clamp(2.2rem,7vw,4.6rem)] font-extrabold leading-tight text-primary-dark">
            This N-Stride page is not ready yet.
          </h1>
          <p className="mx-auto mt-4 max-w-[36rem] text-sm font-semibold leading-7 text-text-secondary sm:text-base">
            Some resources may still be under clinical review. You can return home, browse resources, book a consultation or report a broken link.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Button className="rounded-[0.55rem]" href="/">
              <Home aria-hidden="true" className="h-4 w-4" />
              Return Home
            </Button>
            <Button className="rounded-[0.55rem]" href="/resources" variant="outline">
              <Newspaper aria-hidden="true" className="h-4 w-4" />
              View Resources
            </Button>
            <Button className="rounded-[0.55rem]" href={leadCaptureHref({ cta: "book_consultation", source: "404", type: "general" })}>
              Book Consultation
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button className="rounded-[0.55rem]" href={leadCaptureHref({ cta: "report_broken_link", source: "404", type: "general" })} variant="outline">
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              Report Broken Link
            </Button>
          </div>
          <a className="mt-8 inline-flex text-sm font-bold text-primary hover:underline" href={`tel:${brand.contact.phoneHref}`}>
            Call {brand.contact.phone}
          </a>
        </div>
      </Container>
    </Section>
  );
}
