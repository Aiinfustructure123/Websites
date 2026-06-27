"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { site, getCoreTreatments } from "@/content/site";
import type { TreatmentMediaKey } from "@/content/assets";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { TreatmentPreview } from "@/components/ui/TreatmentPreview";
import { LineReveal } from "@/components/ui/LineReveal";
import { track } from "@/lib/track";
import { useMotion } from "@/components/providers/MotionProvider";

const coreTreatments = getCoreTreatments();

export function Treatments() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const { reducedMotion } = useMotion();

  const activeTreatment = coreTreatments[activeIndex];

  const handleActivate = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <section
      id="treatments"
      className="section-padding bg-cream"
      aria-labelledby="treatments-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionNumber number="01" label="Treatments" />
        <LineReveal
          as="h2"
          id="treatments-heading"
          className="mt-4 max-w-2xl font-display text-display-lg text-ink"
          delay={0.1}
        >
          {site.journey.subtitle}
        </LineReveal>
        <p className="mt-4 max-w-xl text-ink/65">
          Hover each treatment to explore realistic outcomes. Every plan begins
          with a free consultation — nothing is committed on the day.
        </p>

        {/* Desktop: interactive list + preview */}
        <div className="mt-16 hidden lg:grid lg:grid-cols-2 lg:gap-16">
          <ul className="flex flex-col" role="list">
            {coreTreatments.map((treatment, index) => {
              const isActive = activeIndex === index;
              return (
                <li key={treatment.id}>
                  <button
                    type="button"
                    className="group relative w-full border-b border-ink/10 py-8 text-left transition-colors duration-500"
                    onMouseEnter={() => handleActivate(index)}
                    onFocus={() => handleActivate(index)}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <div className="flex items-start gap-6">
                      <motion.span
                        className="font-accent text-sm tabular-nums"
                        animate={{
                          color: isActive
                            ? "rgb(241, 132, 92)"
                            : "rgb(34, 26, 31, 0.35)",
                          scale: isActive ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </motion.span>
                      <div className="flex-1">
                        <h3
                          className={`font-display text-2xl transition-colors duration-400 ${
                            isActive ? "text-ink" : "text-ink/50"
                          }`}
                        >
                          {treatment.name}
                        </h3>
                        <motion.p
                          className="mt-1 text-sm text-coral"
                          initial={false}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            height: isActive ? "auto" : 0,
                          }}
                          transition={{ duration: 0.4 }}
                        >
                          {treatment.visualOutcome}
                        </motion.p>
                        <motion.div
                          initial={false}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            height: isActive ? "auto" : 0,
                          }}
                          transition={{ duration: 0.5, delay: isActive ? 0.1 : 0 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 text-sm leading-relaxed text-ink/65">
                            {treatment.description}
                          </p>
                          <div className="mt-4 flex flex-wrap items-center gap-4">
                            <span className="font-display text-lg text-ink">
                              {treatment.priceLabel}
                            </span>
                            {treatment.notes && (
                              <span className="text-xs text-ink/45">
                                {treatment.notes}
                              </span>
                            )}
                            <Link
                              href={site.booking.booksyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-medium text-coral underline-offset-4 hover:underline"
                              onClick={() =>
                                track("treatment_book_click", {
                                  treatment: treatment.name,
                                  location: "treatments-desktop",
                                })
                              }
                            >
                              Book on Booksy →
                            </Link>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                    <motion.div
                      className="absolute bottom-0 left-0 h-px bg-coral"
                      initial={false}
                      animate={{ width: isActive ? "100%" : "0%" }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="sticky top-28 h-[min(70vh,640px)]">
            <TreatmentPreview
              treatmentId={activeTreatment.id as TreatmentMediaKey}
              visualOutcome={activeTreatment.visualOutcome}
              isActive={true}
              className="h-full w-full"
            />
          </div>
        </div>

        {/* Mobile: stacked expandable cards with inline media */}
        <div className="mt-12 flex flex-col gap-4 lg:hidden">
          {coreTreatments.map((treatment, index) => {
            const isExpanded = expandedMobile === treatment.id;
            return (
              <article
                key={treatment.id}
                className="overflow-hidden rounded-2xl border border-ink/10 bg-porcelain/50"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between p-5 text-left"
                  onClick={() =>
                    setExpandedMobile(isExpanded ? null : treatment.id)
                  }
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-accent text-xs text-rose-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-xl text-ink">
                        {treatment.name}
                      </h3>
                      <p className="mt-0.5 text-sm text-coral">
                        {treatment.visualOutcome}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-ink/40 transition-transform duration-300 ${isExpanded ? "rotate-45" : ""}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {isExpanded && (
                  <motion.div
                    initial={reducedMotion ? false : { opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative mx-5 mb-5 aspect-[4/3] overflow-hidden rounded-xl">
                      <TreatmentPreview
                        treatmentId={treatment.id as TreatmentMediaKey}
                        visualOutcome={treatment.visualOutcome}
                        isActive={true}
                        className="h-full w-full"
                      />
                    </div>
                    <div className="px-5 pb-5">
                      <p className="text-sm leading-relaxed text-ink/65">
                        {treatment.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="font-display text-lg">
                          {treatment.priceLabel}
                        </span>
                        <Link
                          href={site.booking.booksyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary px-5 py-2.5 text-xs"
                          onClick={() =>
                            track("treatment_book_click", {
                              treatment: treatment.name,
                              location: "treatments-mobile",
                            })
                          }
                        >
                          Book
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
