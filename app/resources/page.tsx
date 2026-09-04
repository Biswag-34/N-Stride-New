import { PageHero } from "@/components/page-sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { resourceReviewNotice, resourceReviewTopics } from "@/data/resources";

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
            {["Clinical review", "Diabetic foot", "Footwear", "Wound care", "Bio-Fit"].map((chip, index) => (
              <span className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-extrabold ${index === 0 ? "bg-white text-primary-dark" : "bg-white/12 text-white ring-1 ring-white/22"}`} key={chip}>
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-5 md:hidden">
        <div className="nstride-mobile-card p-4">
          <p className="font-heading text-lg font-extrabold text-primary-dark">Resources are under clinical review.</p>
          <p className="mt-2 text-sm font-medium leading-6 text-text-secondary">{resourceReviewNotice}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {resourceReviewTopics.map((topic) => (
              <span className="rounded-full bg-[#eef8ff] px-3 py-1.5 text-[0.68rem] font-extrabold text-primary" key={topic}>
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="hidden md:block">
        <PageHero
          description="Practical, clinician-reviewed guidance will be published after author, reviewer, publication date, clinical review date, references, disclaimer and CTA details are finalized."
          eyebrow="Resources"
          title="Practical guidance for foot health and mobility"
          variant="aqua"
        />
      </div>
      <Section className="hidden py-16 md:block sm:py-20 lg:py-24" variant="white">
        <Container>
          <div className="rounded-[1.2rem] border border-border-soft bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-semibold text-primary-dark">Resources are under clinical review.</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-text-secondary">{resourceReviewNotice}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {resourceReviewTopics.map((topic) => (
                <span className="rounded-full bg-[#eef8ff] px-3 py-2 text-xs font-extrabold text-primary" key={topic}>
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
