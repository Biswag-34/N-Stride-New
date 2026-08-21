import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { PageHero } from "@/components/page-sections/PageHero";
import { ThemeBadge } from "@/components/page-sections/ThemeBadge";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Section } from "@/components/ui/Section";
import { resources } from "@/data/resources";

export default function ResourcesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#072f56,#0b4f88)] px-4 pb-5 pt-6 text-white md:hidden">
        <div className="absolute -right-20 top-4 h-52 w-52 rounded-full bg-primary/50 blur-3xl" />
        <div className="relative z-10">
          <p className="font-heading text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#73dcff]">Resources</p>
          <h1 className="mt-3 font-heading text-[2rem] font-extrabold leading-[1.06] text-white">
            Foot-care guidance you can trust.
          </h1>
          <p className="mt-3 max-w-[19rem] text-[0.88rem] font-medium leading-6 text-white/82">
            Practical explainers for better foot health decisions.
          </p>
          <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
            {["All", "Diabetic foot", "Footwear", "Wound care", "Bio-Fit"].map((chip, index) => (
              <span className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-extrabold ${index === 0 ? "bg-white text-primary-dark" : "bg-white/12 text-white ring-1 ring-white/22"}`} key={chip}>
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-5 md:hidden">
        <div className="grid gap-3">
          {resources.map((resource) => (
            <Link className="nstride-mobile-card grid grid-cols-[5.8rem_1fr_auto] items-center gap-3 p-2.5" href={resource.href} key={resource.id}>
              <ImagePlaceholder aspect="square" label={resource.image} />
              <span>
                <span className="block text-[0.64rem] font-extrabold uppercase tracking-[0.1em] text-primary">{resource.category}</span>
                <span className="mt-1 block font-heading text-sm font-extrabold leading-tight text-primary-dark">{resource.title}</span>
                <span className="mt-1 block text-[0.74rem] font-medium leading-5 text-text-secondary">{resource.summary}</span>
              </span>
              <ArrowRight aria-hidden="true" className="h-4 w-4 text-primary" />
            </Link>
          ))}
        </div>
      </section>

      <div className="hidden md:block">
        <PageHero
          description="Simple education for diabetic foot care, footwear decisions, wound-care support and mobility restoration."
          eyebrow="Resources"
          title="Learn before the next step"
          variant="aqua"
        />
      </div>
      <Section className="hidden py-16 md:block sm:py-20 lg:py-24" variant="white">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {resources.map((resource) => (
              <article className="rounded-[1.35rem] border border-border-soft bg-white p-5 shadow-soft" key={resource.id}>
                <ImagePlaceholder aspect="video" label={resource.image} />
                <ThemeBadge theme="aqua">{resource.category}</ThemeBadge>
                <h2 className="mt-4 text-xl font-semibold text-primary-dark">{resource.title}</h2>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{resource.summary}</p>
                <Link className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-primary" href={resource.href}>
                  Read guide
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
