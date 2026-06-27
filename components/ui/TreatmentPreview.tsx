"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { assets, type TreatmentMediaKey } from "@/content/assets";
import { useMotion } from "@/components/providers/MotionProvider";

interface TreatmentPreviewProps {
  treatmentId: TreatmentMediaKey;
  visualOutcome: string;
  isActive: boolean;
  className?: string;
}

export function TreatmentPreview({
  treatmentId,
  visualOutcome,
  isActive,
  className = "",
}: TreatmentPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const { reducedMotion } = useMotion();
  const media = assets.treatments[treatmentId];

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(92, Math.max(8, x)));
  }, []);

  useEffect(() => {
    setPosition(50);
  }, [treatmentId]);

  useEffect(() => {
    if (reducedMotion || !isActive) return;
    const timer = setTimeout(() => {
      setPosition(58);
      setTimeout(() => setPosition(50), 700);
    }, 800);
    return () => clearTimeout(timer);
  }, [treatmentId, isActive, reducedMotion]);

  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      updatePosition(clientX);
    };
    const handleUp = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchmove", handleMove, { passive: true });
    window.addEventListener("touchend", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleUp);
    };
  }, [isDragging, updatePosition]);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-porcelain ${className}`}
      aria-hidden={!isActive}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={treatmentId}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.01 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {/* Before / after face comparison */}
          <div
            ref={containerRef}
            className="relative h-full w-full cursor-ew-resize select-none"
            onMouseDown={(e) => {
              setIsDragging(true);
              updatePosition(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              updatePosition(e.touches[0].clientX);
            }}
            role="slider"
            aria-label={`${treatmentId} before and after face comparison`}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
          >
            {/* After — full frame */}
            <Image
              src={media.after}
              alt={`After — ${media.alt}`}
              fill
              className="object-cover object-[center_20%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={isActive}
            />

            {/* Before — clipped */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <Image
                src={media.before}
                alt={`Before — ${media.alt}`}
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={isActive}
              />
            </div>

            {/* Slider handle */}
            <div
              className="absolute bottom-0 top-0 z-10 w-0.5 bg-cream/90 shadow-[0_0_16px_rgba(0,0,0,0.25)]"
              style={{ left: `${position}%` }}
            >
              <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cream/40 bg-cream/95 backdrop-blur-sm">
                <span className="font-accent text-[9px] tracking-widest text-ink/50">
                  ↔
                </span>
              </div>
            </div>

            <span className="absolute left-4 top-4 z-10 rounded-full bg-ink/55 px-3 py-1 text-[10px] uppercase tracking-wider text-cream backdrop-blur-sm">
              Before
            </span>
            <span className="absolute right-4 top-4 z-10 rounded-full bg-ink/55 px-3 py-1 text-[10px] uppercase tracking-wider text-cream backdrop-blur-sm">
              After
            </span>
          </div>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8">
        <p className="font-accent text-[10px] uppercase tracking-[0.3em] text-cream/70">
          Drag to compare · Typical outcome
        </p>
        <p className="mt-1 font-display text-xl text-cream md:text-2xl">
          {visualOutcome}
        </p>
        <p className="mt-2 text-xs text-cream/60">
          Anonymous model · Illustrative only · Individual results vary
        </p>
      </div>
    </div>
  );
}
