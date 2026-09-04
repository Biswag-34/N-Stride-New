"use client";

import Image from "next/image";

import {
  DecorativeWave,
  KineticsContainer,
  KineticsSection,
  MotionReveal,
} from "@/components/kinetics/KineticsPrimitives";

const pathways = [
  { image: "/kinetics/signature.png", title: "Signature Footwear", text: "Soft support for daily care" },
  { image: "/kinetics/comfort-slipper.png", title: "Comfort Slipper", text: "Easy comfort for home movement" },
  { image: "/kinetics/compression-socks.png", title: "Compression Socks", text: "Guided support when suitable" },
  { image: "/kinetics/premium.png", title: "Premium Footwear", text: "Refined protective footwear" },
  { image: "/kinetics/therapeutic-socks.png", title: "Therapeutic Socks", text: "Cushioning and skin-friendly support" },
  { image: "/kinetics/custom-footwear.png", title: "Custom Shoe", text: "Adapted for unique foot needs" },
  { image: "/kinetics/accessories.png", title: "Accessories", text: "Add-on comfort and protection" },
];

export function KineticsPathways() {
  return (
    <KineticsSection className="bg-[linear-gradient(180deg,#ffffff,#f4faff)] py-12">
      <KineticsContainer>
        <MotionReveal>
          <h2 className="max-w-[37rem] font-heading text-3xl font-bold text-primary-dark">
            Choose the support your feet need.
          </h2>
          <p className="mt-2 max-w-[28rem] text-sm leading-7 text-text-secondary">
            Explore therapeutic footwear, custom options, socks, insoles and accessories for daily protection, pressure relief and comfort.
          </p>
        </MotionReveal>

        <MotionReveal className="mt-5">
          <div className="grid gap-y-5 divide-y divide-[#c9e6f8] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-7">
            {pathways.map((item) => (
              <div className="px-3 py-2 text-center" key={item.title}>
                <div className="relative mx-auto h-28 w-full max-w-[8.5rem]">
                  <div className="absolute bottom-1 left-1/2 h-5 w-24 -translate-x-1/2 rounded-full bg-primary-dark/14 blur-lg" />
                  <Image
                    alt={item.title}
                    className="object-contain drop-shadow-[0_18px_16px_rgba(7,59,102,0.2)] transition duration-300 hover:scale-[1.04]"
                    fill
                    sizes="150px"
                    src={item.image}
                  />
                </div>
                <h3 className="mt-2 font-heading text-[0.84rem] font-bold leading-tight text-primary-dark">
                  {item.title}
                </h3>
                <p className="mx-auto mt-1 max-w-[9rem] text-[0.68rem] leading-4 text-text-secondary">{item.text}</p>
              </div>
            ))}
          </div>
          <DecorativeWave className="mt-4" />
          <p className="mt-2 text-center font-heading text-sm font-bold text-primary-dark">One step. Many solutions.</p>
        </MotionReveal>
      </KineticsContainer>
    </KineticsSection>
  );
}
