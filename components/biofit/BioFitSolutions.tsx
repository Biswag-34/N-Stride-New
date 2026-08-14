"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { Vertical } from "@/data/verticals";

import {
  BioFitContainer,
  BioFitDottedField,
  BioFitReveal,
  BioFitSection,
  BioFitWaveImage,
} from "@/components/biofit/BioFitPrimitives";

type BioFitSolutionsProps = {
  vertical: Vertical;
};

const solutionCards = [
  {
    title: "Orthotics",
    subtitle: "Support. Alignment. Relief.",
    image: "/requested-assets/biofit-orthotics.png",
    items: ["Custom foot orthotics", "Ankle-foot orthoses (AFO)", "Knee, spinal & upper limb orthotic solutions", "Gait & posture support"],
  },
  {
    title: "Prosthetics",
    subtitle: "Restore. Adapt. Thrive.",
    image: "/requested-assets/biofit-prosthetics.png",
    items: ["Upper & lower limb prosthetics", "Microprocessor & dynamic knee systems", "Custom sockets & liners", "Rehabilitation & training support"],
  },
  {
    title: "Silicone Alteration",
    subtitle: "Restore. Refine. Renew.",
    image: "/requested-assets/biofit-silicone.png",
    items: ["Silicone socket restoration", "Socket adjustments & relining", "Cosmetic restoration", "Comfort & fit enhancement"],
  },
];

export function BioFitSolutions({ vertical }: BioFitSolutionsProps) {
  const [activeGallery, setActiveGallery] = useState<(typeof solutionCards)[number] | null>(null);

  useEffect(() => {
    if (!activeGallery) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveGallery(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeGallery]);

  return (
    <BioFitSection className="bg-white pb-16 pt-12">
      <BioFitWaveImage
        className="hidden left-[-13rem] top-[-8rem] h-[52rem] w-[45rem] rotate-90 opacity-18 blur-sm [mask-image:linear-gradient(90deg,transparent_0%,black_18%,black_70%,transparent_100%)] md:block"
        src="/biofit/wave-divider-thin.png"
      />
      <div aria-hidden="true" className="absolute left-[-15rem] top-[-5rem] hidden h-[50rem] w-[50rem] rounded-[48%] border border-[#b8a9fb]/30 md:block" />
      <div aria-hidden="true" className="absolute left-[-17rem] top-[-2rem] hidden h-[43rem] w-[43rem] rounded-[48%] border border-[#b8a9fb]/12 md:block" />
      <BioFitDottedField className="hidden -right-28 bottom-0 h-72 w-[42rem] md:block" />
      <BioFitContainer>
        <div className="grid gap-8 lg:grid-cols-[0.22fr_0.78fr]">
          <BioFitReveal>
            <h2 className="font-heading text-3xl font-bold text-primary-dark">Our solutions</h2>
            <p className="mt-4 max-w-[18rem] text-sm leading-7 text-text-secondary">
              Precision-crafted solutions designed around your body, your needs, and your goals.
            </p>
          </BioFitReveal>

          <BioFitReveal delay={0.08}>
            <div className="grid gap-5 lg:grid-cols-3">
              {solutionCards.map((card) => {
                return (
                  <button
                    aria-label={`Open ${card.title} gallery`}
                    className="group/card relative min-h-[24rem] overflow-hidden rounded-tl-[2.35rem] rounded-tr-[0.75rem] rounded-br-[3.4rem] rounded-bl-[0.75rem] bg-primary-dark text-left shadow-[0_20px_50px_rgba(90,103,216,0.11)] ring-1 ring-[#d8d0ff] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(90,103,216,0.18)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#7357d8]/28 md:min-h-[305px]"
                    key={card.title}
                    onClick={() => setActiveGallery(card)}
                    type="button"
                  >
                    <Image
                      alt=""
                      className="object-cover transition duration-700 group-hover/card:scale-105 group-focus-visible/card:scale-105"
                      fill
                      sizes="(max-width: 1024px) 100vw, 26vw"
                      src={card.image}
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,18,0.08)_10%,rgba(4,8,18,0.52)_62%,rgba(4,8,18,0.86)_100%)]" />
                    <div aria-hidden="true" className="absolute inset-x-4 bottom-5 h-24 rounded-full bg-black/70 blur-2xl transition duration-500 group-hover/card:h-48 group-hover/card:bg-black/82 group-focus-visible/card:h-48 group-focus-visible/card:bg-black/82" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="relative rounded-[0.85rem] bg-black/42 px-4 py-3 text-white shadow-[0_16px_40px_rgba(0,0,0,0.34)] backdrop-blur-[2px] transition duration-500 group-hover/card:bg-black/76 group-focus-visible/card:bg-black/76">
                        <h3 className="font-heading text-2xl font-bold text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.75)]">{card.title}</h3>
                        <div className="max-h-56 translate-y-0 overflow-hidden opacity-100 transition-all duration-500 md:max-h-0 md:translate-y-5 md:opacity-0 md:group-hover/card:max-h-56 md:group-hover/card:translate-y-0 md:group-hover/card:opacity-100 md:group-focus-visible/card:max-h-56 md:group-focus-visible/card:translate-y-0 md:group-focus-visible/card:opacity-100">
                          <p className="mt-2 text-sm font-extrabold text-white">{card.subtitle}</p>
                          <ul className="mt-3 space-y-2">
                          {card.items.map((item) => (
                            <li className="flex gap-2 text-[0.82rem] font-semibold leading-5 text-white" key={item}>
                              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                              {item}
                            </li>
                          ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            <p className="mt-5 text-xs font-semibold text-text-secondary">
              {vertical.shortDescription}
            </p>
          </BioFitReveal>
        </div>
      </BioFitContainer>
      {activeGallery ? (
        <div className="fixed inset-0 z-[90] overflow-y-auto bg-[#100b27]/92 px-4 py-5 text-white backdrop-blur-xl sm:px-6 lg:px-10" role="dialog" aria-modal="true" aria-label={`${activeGallery.title} gallery`}>
          <div className="mx-auto max-w-[1420px]">
            <div className="sticky top-3 z-20 mb-5 flex items-center justify-between gap-4 rounded-[0.75rem] border border-white/14 bg-white/10 px-4 py-3 shadow-[0_18px_48px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#cfc3ff]">Bio-Fit gallery</p>
                <h3 className="mt-1 font-heading text-2xl font-bold">{activeGallery.title}</h3>
              </div>
              <button
                aria-label="Close gallery"
                className="flex h-11 w-11 items-center justify-center rounded-[0.55rem] bg-white text-primary-dark transition hover:rotate-3 hover:bg-[#ece8ff] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                onClick={() => setActiveGallery(null)}
                type="button"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
            <div className="grid auto-rows-[130px] grid-cols-2 gap-3 sm:auto-rows-[150px] md:grid-cols-4 lg:grid-cols-8">
              {Array.from({ length: 16 }).map((_, index) => (
                <figure
                  className={[
                    "group relative overflow-hidden rounded-[0.65rem] bg-white/10 shadow-[0_22px_55px_rgba(0,0,0,0.24)] ring-1 ring-white/14",
                    index % 11 === 0 ? "md:col-span-2 md:row-span-2" : "",
                    index % 7 === 2 ? "lg:col-span-2" : "",
                    index % 5 === 4 ? "md:row-span-2" : "",
                  ].join(" ")}
                  key={`${activeGallery.title}-${index}`}
                >
                  <Image
                    alt=""
                    className="object-cover transition duration-700 group-hover:scale-110 group-hover:saturate-125"
                    fill
                    sizes="(max-width: 768px) 50vw, 18vw"
                    src={activeGallery.image}
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,11,39,0)_42%,rgba(16,11,39,0.72)_100%)] opacity-80" />
                  <figcaption className="absolute bottom-3 left-3 rounded-[0.45rem] bg-white/12 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                    Frame {String(index + 1).padStart(2, "0")}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </BioFitSection>
  );
}
