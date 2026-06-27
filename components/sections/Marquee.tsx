"use client";

import { site } from "@/content/site";
import { useMotion } from "@/components/providers/MotionProvider";
import { motion } from "framer-motion";

export function Marquee() {
  const { reducedMotion } = useMotion();

  const items = [...site.marquee.items, ...site.marquee.items];

  if (reducedMotion) {
    return (
      <section className="border-y border-ink/5 bg-porcelain py-8" aria-label="Brand ethos">
        <p className="text-center font-display text-display-md text-ink/80">
          {site.marquee.items.join(" · ")}
        </p>
      </section>
    );
  }

  return (
    <section
      className="overflow-hidden border-y border-ink/5 bg-porcelain py-10"
      aria-label="Brand ethos"
    >
      <motion.div
        className="flex whitespace-nowrap"
        style={{ x: 0 }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-8 font-display text-display-md text-ink/70"
          >
            {item}
            <span className="mx-8 text-coral/40" aria-hidden="true">
              ·
            </span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
