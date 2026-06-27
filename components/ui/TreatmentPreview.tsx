"use client";

import { useRef, useEffect } from "react";
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const { reducedMotion } = useMotion();
  const media = assets.video.treatments[treatmentId];

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion || !isActive) return;

    if (isActive) {
      video.currentTime = 0;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isActive, reducedMotion]);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-porcelain ${className}`}
      aria-hidden={!isActive}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={treatmentId}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {!reducedMotion ? (
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              muted
              loop
              playsInline
              poster={media.poster}
            >
              <source src={media.mp4} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={media.poster}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          )}

          {/* Subtle warm grade — keeps imagery realistic, not over-stylised */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-cream/10" />
        </motion.div>
      </AnimatePresence>

      {/* Outcome label */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <p className="font-accent text-[10px] uppercase tracking-[0.3em] text-cream/70">
          Typical outcome
        </p>
        <p className="mt-1 font-display text-xl text-cream md:text-2xl">
          {visualOutcome}
        </p>
        <p className="mt-2 text-xs text-cream/60">
          Illustrative only · Individual results vary
        </p>
      </div>
    </div>
  );
}
