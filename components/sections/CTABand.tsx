"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { site, getPhoneUrl } from "@/content/site";
import { assets } from "@/content/assets";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { BookButton } from "@/components/ui/BookButton";
import { LineReveal } from "@/components/ui/LineReveal";
import { MagneticWrap } from "@/components/ui/MagneticButton";
import { trackCall } from "@/lib/track";
import { useMotion } from "@/components/providers/MotionProvider";

export function CTABand() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { reducedMotion } = useMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;
    video.play().catch(() => {});
  }, [reducedMotion]);

  return (
    <section
      className="relative overflow-hidden py-28 md:py-36"
      aria-labelledby="cta-heading"
    >
      {!reducedMotion && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          loop
          playsInline
          poster={assets.video.cta.poster}
          aria-hidden="true"
        >
          <source src={assets.video.cta.mp4} type="video/mp4" />
        </video>
      )}

      <div
        className="absolute inset-0 bg-aubergine/75"
        aria-hidden="true"
      />
      <GradientMesh animated className="opacity-60" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
        <LineReveal
          as="h2"
          id="cta-heading"
          className="font-display text-display-lg text-cream"
        >
          {site.cta.headline}
        </LineReveal>
        <p className="mt-6 text-lg text-cream/75">{site.cta.subcopy}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <BookButton
            location="cta-band"
            variant="glow"
            label="Book a consultation"
          />
          <MagneticWrap>
            <Link
              href={getPhoneUrl()}
              className="btn-secondary border-cream/30 bg-cream/10 text-cream hover:bg-cream/20"
              onClick={() => trackCall("cta-band")}
            >
              Call the practice
            </Link>
          </MagneticWrap>
        </div>
      </div>
    </section>
  );
}
