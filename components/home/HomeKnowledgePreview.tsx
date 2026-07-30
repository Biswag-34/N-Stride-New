"use client";

import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { resources } from "@/data/resources";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { ImageDrop } from "./HomeDesignPrimitives";

const resourceImages = [
  "/home/resource-foot-check-final.png",
  "/home/resource-footwear-final.png",
  "/home/resource-consultation-final.png",
  "/home/resource-wound-care-final.png",
];

export function HomeKnowledgePreview() {
  const featured = resources.slice(0, 4);

  return (
    <section className="bg-white pb-20 pt-8">
      <Container>
        <motion.div
          className="rounded-[2rem] border border-border-soft bg-[linear-gradient(180deg,#ffffff,#f8fcff)] p-6 shadow-[0_24px_70px_rgba(20,121,201,0.08)] sm:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold leading-tight text-primary-dark">Knowledge for better foot health</h2>
            </div>
            <Button className="rounded-[0.65rem]" href="/contact?type=general" size="sm" variant="outline">
              View All Resources
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featured.map((resource, index) => (
              <motion.article key={resource.id} variants={staggerItem}>
                <Link
                  className="group block overflow-hidden rounded-[1.2rem] border border-border-soft bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
                  href={resource.href}
                >
                  <ImageDrop className="min-h-[14rem] rounded-none border-0">
                    <div className="relative flex h-full min-h-[14rem] items-end p-5 text-white">
                      <Image
                        alt={resource.title}
                        className="object-cover"
                        fill
                        sizes="(min-width: 1280px) 280px, (min-width: 768px) 50vw, 100vw"
                        src={resourceImages[index]}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,59,102,0.04),rgba(7,59,102,0.74))]" />
                      {index === 3 ? (
                        <span className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/18 text-white">
                          <Play aria-hidden="true" className="ml-0.5 h-5 w-5 fill-current" />
                        </span>
                      ) : null}
                      <div className="relative z-10">
                        <h3 className="text-lg font-semibold leading-tight">{resource.title}</h3>
                      </div>
                    </div>
                  </ImageDrop>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
