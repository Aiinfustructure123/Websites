"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { site } from "@/content/site";
import { assets } from "@/content/assets";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { useMotion } from "@/components/providers/MotionProvider";

export function Ethos() {
  const sectionRef = useRef<HTMLElement>(null);
  const { reducedMotion } = useMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [120, -40]);
  const y3 = useTransform(scrollYProgress, [0, 1], [40, -120]);

  return (
    <section
      ref={sectionRef}
      id="ethos"
      className="section-padding bg-aubergine text-cream"
      aria-labelledby="ethos-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionNumber number="04" label="Ethos" className="text-rose-gold/80" />

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2
              id="ethos-heading"
              className="font-display text-display-lg text-cream"
            >
              Restraint as a value
            </h2>
            <blockquote className="mt-10 border-l-2 border-coral/60 pl-6 font-display text-2xl leading-snug text-cream/90 md:text-3xl">
              &ldquo;{site.ethos.pullQuote}&rdquo;
            </blockquote>

            <ul className="mt-16 space-y-12">
              {site.ethos.principles.map((principle, i) => (
                <motion.li
                  key={principle.id}
                  initial={reducedMotion ? undefined : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <h3 className="font-display text-xl text-coral">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">
                    {principle.description}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="relative grid grid-cols-2 gap-4">
            <motion.div
              className="relative col-span-1 aspect-[3/4] overflow-hidden rounded-2xl"
              style={reducedMotion ? undefined : { y: y1 }}
            >
              <Image
                src={assets.images.ethos[0]}
                alt="Clinical consultation environment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>
            <motion.div
              className="relative col-span-1 mt-12 aspect-[3/4] overflow-hidden rounded-2xl"
              style={reducedMotion ? undefined : { y: y2 }}
            >
              <Image
                src={assets.images.ethos[1]}
                alt="Treatment suite detail"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>
            <motion.div
              className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl"
              style={reducedMotion ? undefined : { y: y3 }}
            >
              <Image
                src={assets.images.ethos[2]}
                alt="Practitioner at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
