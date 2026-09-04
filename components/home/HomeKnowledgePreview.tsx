"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { resourceReviewNotice, resourceReviewTopics } from "@/data/resources";
import { staggerContainer } from "@/lib/motion";

export function HomeKnowledgePreview() {
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
            <Button className="min-h-11 rounded-[0.65rem]" href="/resources" size="sm" variant="outline">
              View All Resources
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-8 rounded-[1rem] border border-border-soft bg-white p-5 shadow-soft">
            <p className="text-sm leading-7 text-text-secondary">{resourceReviewNotice}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {resourceReviewTopics.slice(0, 4).map((topic) => (
                <span className="rounded-full bg-[#eef8ff] px-3 py-2 text-xs font-extrabold text-primary" key={topic}>
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
