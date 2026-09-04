import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { draftResources, resourceReviewNotice } from "@/data/resources";
import { leadCaptureHref } from "@/data/leadCapture";

type ResourceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return draftResources.map((resource) => ({
    slug: resource.href.split("/").pop() ?? resource.id,
  }));
}

export async function generateMetadata({ params }: ResourceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);

  if (!resource) {
    return {
      title: "Resource Not Found | N-Stride",
    };
  }

  return {
    title: `${resource.title} | N-Stride Resources`,
    description: resource.summary,
  };
}

export default async function ResourceDetailPage({ params }: ResourceDetailPageProps) {
  const { slug } = await params;
  const resource = getResource(slug);

  if (!resource) notFound();

  return (
    <Section className="bg-[linear-gradient(180deg,#eef8ff,#ffffff_48%,#f7fcff)] py-10 sm:py-14">
      <Container>
        <article className="mx-auto max-w-[860px] overflow-hidden rounded-[1.15rem] bg-white shadow-[0_24px_72px_rgba(20,121,201,0.1)] ring-1 ring-[#d7ebfa]">
          <div className="bg-[#073b66] px-5 py-8 text-white sm:px-8 sm:py-10">
            <p className="font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-[#73dcff]">{resource.category}</p>
            <h1 className="mt-4 font-heading text-[clamp(2rem,6vw,3.4rem)] font-extrabold leading-tight">{resource.title}</h1>
            <p className="mt-4 max-w-[42rem] text-sm font-semibold leading-7 text-white/82 sm:text-base">{resource.summary}</p>
          </div>
          <div className="px-5 py-6 sm:px-8 sm:py-8">
            <div className="rounded-[0.95rem] bg-[#fff7e8] p-4 text-sm font-semibold leading-7 text-[#71440a] ring-1 ring-[#f4d7a8]">
              {resourceReviewNotice}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Author review", "Clinical review", "References"].map((item) => (
                <div className="flex items-center gap-2 rounded-[0.75rem] bg-[#f8fcff] px-3 py-3 text-sm font-extrabold text-primary-dark ring-1 ring-[#d7ebfa]" key={item}>
                  <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-primary" />
                  {item} pending
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-[0.55rem]" href="/resources" variant="outline">
                Back to Resources
              </Button>
              <Button className="rounded-[0.55rem]" href={leadCaptureHref({ cta: "book_consultation", source: resource.href, type: suggestedType(resource.id) })}>
                Ask About This Topic
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </article>
      </Container>
    </Section>
  );
}

function getResource(slug: string) {
  return draftResources.find((resource) => resource.href.endsWith(`/${slug}`));
}

function suggestedType(id: string) {
  if (id.includes("wound") || id.includes("npwt")) return "wound-care";
  if (id.includes("prosthetics") || id.includes("orthotics")) return "bio-fit";
  if (id.includes("footwear") || id.includes("off-loading")) return "product-guidance";
  return "foot-checkup";
}
