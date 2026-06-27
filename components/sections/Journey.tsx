"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/content/site";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { useMotion } from "@/components/providers/MotionProvider";

gsap.registerPlugin(ScrollTrigger);

export function Journey() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { reducedMotion } = useMotion();

  useEffect(() => {
    if (reducedMotion || !sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const totalScroll = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalScroll}`,
          pin: true,
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <section
        id="journey"
        className="section-padding bg-cream"
        aria-labelledby="journey-heading"
      >
        <div className="mx-auto max-w-7xl">
          <SectionNumber number="03" label="The Journey" />
          <h2 id="journey-heading" className="mt-4 font-display text-display-lg text-ink">
            {site.journey.title}
          </h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {site.journey.steps.map((step) => (
              <li key={step.id} className="rounded-2xl border border-ink/10 p-8">
                <span className="font-accent text-xs text-rose-gold">
                  {step.number}
                </span>
                <h3 className="mt-2 font-display text-2xl">{step.title}</h3>
                <p className="mt-1 text-sm text-coral">{step.duration}</p>
                <p className="mt-4 text-sm text-ink/65">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative overflow-hidden bg-cream"
      aria-labelledby="journey-heading"
    >
      <div className="flex h-screen flex-col justify-center px-5 md:px-8 lg:px-12">
        <SectionNumber number="03" label="The Journey" />
        <h2
          id="journey-heading"
          className="mt-4 font-display text-display-lg text-ink"
        >
          {site.journey.title}
        </h2>
        <p className="mt-2 text-ink/65">{site.journey.subtitle}</p>
      </div>

      <div
        ref={trackRef}
        className="flex h-[70vh] items-center gap-8 px-5 pb-16 md:gap-12 md:px-8 lg:px-12"
      >
        {site.journey.steps.map((step) => (
          <article
            key={step.id}
            className="flex h-full w-[85vw] max-w-md shrink-0 flex-col justify-between rounded-2xl border border-ink/10 bg-porcelain/80 p-8 backdrop-blur-sm md:w-[420px] md:p-10"
          >
            <div>
              <span className="font-accent text-xs uppercase tracking-[0.25em] text-rose-gold">
                N°{step.number}
              </span>
              <h3 className="mt-6 font-display text-3xl text-ink">
                {step.title}
              </h3>
              <p className="mt-2 font-accent text-sm text-coral">
                {step.duration}
              </p>
            </div>
            <p className="text-base leading-relaxed text-ink/70">
              {step.description}
            </p>
          </article>
        ))}
        <div className="w-8 shrink-0" aria-hidden="true" />
      </div>
    </section>
  );
}
