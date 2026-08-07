"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { staggerContainer, staggerItem } from "@/lib/motion";

const connectedBullets = [
  "Assessment directs the first care decision",
  "Footwear, wound care and restoration stay connected",
  "Follow-up keeps the care plan accountable",
  "Complex needs move into the right specialist vertical",
];

const hotspots = [
  {
    id: "insights",
    label: "Open Insights",
    href: "/verticals/insight",
    left: 3.1898,
    top: 17.6236,
    width: 37.1611,
    height: 27.2727,
    zIndex: 2,
  },
  {
    id: "kinetics",
    label: "Open Kinetics",
    href: "/verticals/kinetics",
    left: 60.0478,
    top: 17.6236,
    width: 36.8421,
    height: 27.1132,
    zIndex: 2,
  },
  {
    id: "bio-fit",
    label: "Open Bio-Fit",
    href: "/verticals/bio-fit",
    left: 3.748,
    top: 56.5391,
    width: 35.4067,
    height: 29.5056,
    zIndex: 2,
  },
  {
    id: "wound-care",
    label: "Open Wound Care",
    href: "/verticals/wound-care",
    left: 59.9681,
    top: 56.6986,
    width: 36.5231,
    height: 29.1866,
    zIndex: 2,
  },
  {
    id: "nstride",
    label: "Open N-Stride",
    href: "/verticals",
    left: 34.689,
    top: 35.0079,
    width: 30.622,
    height: 29.3461,
    zIndex: 3,
  },
];

export function HomeConnectedCare() {
  return (
    <section className="bg-white py-10">
      <Container>
        <motion.div
          className="relative overflow-hidden rounded-[1.35rem] border border-border-soft bg-[linear-gradient(135deg,#ffffff,#f8fcff)] p-4 shadow-[0_24px_70px_rgba(20,121,201,0.08)] xs:p-5 sm:rounded-[2rem] sm:p-8 lg:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={staggerContainer}
        >
          <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
            <motion.div variants={staggerItem}>
              <h2 className="max-w-[24rem] text-2xl font-semibold leading-tight text-primary-dark xs:text-3xl sm:text-4xl">
                Connected care. Clearer outcomes.
              </h2>
              <p className="mt-4 max-w-[28rem] text-sm leading-7 text-text-secondary">
                One ecosystem links the right assessment, product, treatment and recovery support without making patients navigate disconnected paths.
              </p>
              <div className="mt-7 grid gap-3">
                {connectedBullets.map((item, index) => (
                  <div className="grid grid-cols-[auto_1fr] gap-3 rounded-[0.8rem] border border-[#d7ebfa] bg-white/78 px-3 py-3 text-sm font-semibold text-primary-dark shadow-[0_10px_24px_rgba(20,121,201,0.05)]" key={item}>
                    <span className="grid h-7 w-7 place-items-center rounded-[0.55rem] bg-soft-sky text-[0.7rem] font-bold text-primary">
                      0{index + 1}
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="relative -mx-2 overflow-visible sm:-mx-1 lg:-mr-10" variants={staggerItem}>
              <div className="relative mx-auto aspect-square w-full max-w-[48rem]">
                <Image
                  alt="N-Stride connected care ecosystem"
                  className="block h-auto w-full select-none"
                  height={1254}
                  priority={false}
                  sizes="(min-width: 1024px) 760px, 100vw"
                  src="/requested-assets/mainly.png"
                  width={1254}
                />
                {hotspots.map((hotspot) => (
                  <Link
                    aria-label={hotspot.label}
                    className="group absolute block rounded-full outline-none motion-safe:transition-colors"
                    href={hotspot.href}
                    key={hotspot.id}
                    style={{
                      clipPath: "ellipse(50% 50% at 50% 50%)",
                      height: `${hotspot.height}%`,
                      left: `${hotspot.left}%`,
                      top: `${hotspot.top}%`,
                      width: `${hotspot.width}%`,
                      zIndex: hotspot.zIndex,
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full border border-primary/0 bg-primary/0 transition-colors duration-200 group-hover:border-primary/40 group-hover:bg-primary/10 group-focus-visible:border-primary group-focus-visible:bg-primary/12 motion-reduce:transition-none"
                    />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
