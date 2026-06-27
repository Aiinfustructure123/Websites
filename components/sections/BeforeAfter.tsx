"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/content/site";
import { assets } from "@/content/assets";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { useMotion } from "@/components/providers/MotionProvider";

export function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const { reducedMotion } = useMotion();

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(95, Math.max(5, x)));
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = setTimeout(() => {
      setPosition(55);
      setTimeout(() => setPosition(50), 600);
    }, 1500);
    return () => clearTimeout(timer);
  }, [reducedMotion]);

  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      updatePosition(clientX);
    };

    const handleUp = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("touchend", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleUp);
    };
  }, [isDragging, updatePosition]);

  return (
    <section
      id="results"
      className="section-padding bg-porcelain"
      aria-labelledby="results-heading"
    >
      <div className="mx-auto max-w-5xl">
        <SectionNumber number="02" label="Results" />
        <h2
          id="results-heading"
          className="mt-4 font-display text-display-lg text-ink"
        >
          Subtle change, considered carefully
        </h2>
        <p className="mt-4 max-w-xl text-ink/65">
          Drag to compare. We never promise outcomes — only thoughtful,
          consultation-led care.
        </p>

        <motion.div
          ref={containerRef}
          className="relative mt-12 aspect-[4/5] cursor-ew-resize select-none overflow-hidden rounded-2xl md:aspect-[16/10]"
          initial={reducedMotion ? undefined : { opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          onMouseDown={(e) => {
            setIsDragging(true);
            updatePosition(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            updatePosition(e.touches[0].clientX);
          }}
          role="slider"
          aria-label="Before and after comparison slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
        >
          {/* After (full) */}
          <Image
            src={assets.images.beforeAfter.after}
            alt="After treatment — illustrative placeholder"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />

          {/* Before (clipped) */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <Image
              src={assets.images.beforeAfter.before}
              alt="Before treatment — illustrative placeholder"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>

          {/* Handle */}
          <div
            className="absolute bottom-0 top-0 z-10 w-px bg-cream shadow-[0_0_20px_rgba(0,0,0,0.3)]"
            style={{ left: `${position}%` }}
          >
            <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cream/30 bg-cream/90 backdrop-blur-sm">
              <span className="font-accent text-[10px] tracking-widest text-ink/60">
                ↔
              </span>
            </div>
          </div>

          {/* Labels */}
          <span className="absolute left-4 top-4 rounded-full bg-ink/60 px-3 py-1 text-xs text-cream backdrop-blur-sm">
            {site.beforeAfter.beforeLabel}
          </span>
          <span className="absolute right-4 top-4 rounded-full bg-ink/60 px-3 py-1 text-xs text-cream backdrop-blur-sm">
            {site.beforeAfter.afterLabel}
          </span>
        </motion.div>

        <p className="mt-4 text-center text-xs text-ink/50">
          {site.beforeAfter.caption}
        </p>
      </div>
    </section>
  );
}
