"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { site } from "@/content/site";
import { assets } from "@/content/assets";
import { BookButton } from "@/components/ui/BookButton";
import { HeadlineReveal, LineReveal } from "@/components/ui/LineReveal";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { MagneticWrap } from "@/components/ui/MagneticButton";
import { useMotion } from "@/components/providers/MotionProvider";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { reducedMotion, introComplete } = useMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay blocked — poster fallback remains visible
      });
    }
  }, [reducedMotion]);

  const scrollToTreatments = () => {
    document.querySelector("#treatments")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-[100dvh] items-end overflow-hidden"
      aria-label="Hero"
    >
      {/* Background video / poster */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: reducedMotion ? 1 : videoScale }}
      >
        {!reducedMotion ? (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={assets.video.hero.poster}
            aria-hidden="true"
          >
            <source src={assets.video.hero.webm} type="video/webm" />
            <source src={assets.video.hero.mp4} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={assets.video.hero.poster}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        )}

        {/* Warm overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-cream/20 to-cream/80" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blush/20 via-transparent to-amber/10" />
      </motion.div>

      <GradientMesh animated className="opacity-70" />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full px-5 pb-16 pt-32 md:px-8 md:pb-24 lg:px-12 lg:pb-28"
        style={
          reducedMotion
            ? undefined
            : { y: contentY, opacity: contentOpacity }
        }
        initial={reducedMotion ? undefined : { opacity: 0 }}
        animate={introComplete || reducedMotion ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="mx-auto max-w-7xl">
          <HeadlineReveal
            text={site.hero.headline}
            accentWord={site.hero.headlineAccent}
            accentClassName="font-display italic text-coral"
            className="max-w-4xl font-display text-display-xl text-balance text-ink"
            delay={introComplete ? 0.4 : 1.0}
          />

          <LineReveal
            as="p"
            className="mt-6 max-w-xl text-base leading-relaxed text-ink/75 md:text-lg"
            delay={introComplete ? 0.7 : 1.3}
          >
            {site.hero.subcopy}
          </LineReveal>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
            animate={
              introComplete || reducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{
              duration: 0.8,
              delay: introComplete ? 0.9 : 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <BookButton location="hero" variant="glow" />
            <MagneticWrap>
              <button
                type="button"
                onClick={scrollToTreatments}
                className="btn-secondary"
              >
                Explore Treatments
              </button>
            </MagneticWrap>
          </motion.div>

          {/* Trust chips with parallax drift */}
          <motion.ul
            className="mt-12 flex flex-wrap gap-3"
            initial={reducedMotion ? undefined : { opacity: 0 }}
            animate={introComplete || reducedMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: introComplete ? 1.1 : 1.7 }}
            aria-label="Trust indicators"
          >
            {site.hero.trustChips.map((chip, i) => (
              <motion.li
                key={chip}
                className="rounded-full border border-ink/10 bg-cream/50 px-4 py-2 text-xs font-accent uppercase tracking-wider text-ink/70 backdrop-blur-sm"
                animate={
                  reducedMotion
                    ? undefined
                    : { y: [0, -4, 0] }
                }
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              >
                {chip}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={
          introComplete || reducedMotion ? { opacity: 1 } : { opacity: 0 }
        }
        transition={{ delay: introComplete ? 1.4 : 2.0, duration: 0.6 }}
        aria-hidden="true"
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={reducedMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-ink/40">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-ink/30 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
