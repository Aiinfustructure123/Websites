"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { site } from "@/content/site";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { useMotion } from "@/components/providers/MotionProvider";

export function Voices() {
  const { reducedMotion } = useMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (reducedMotion || !emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 8000);
    return () => clearInterval(interval);
  }, [emblaApi, reducedMotion]);

  return (
    <section
      id="voices"
      className="section-padding bg-cream"
      aria-labelledby="voices-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionNumber number="05" label="Voices" />
        <h2
          id="voices-heading"
          className="mt-4 font-display text-display-lg text-ink"
        >
          In their words
        </h2>

        <div className="mt-16 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {site.testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="min-w-0 shrink-0 grow-0 basis-full px-4 md:basis-2/3 lg:basis-1/2 lg:px-8"
              >
                <span
                  className="font-display text-8xl leading-none text-blush/80"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote className="-mt-8 font-display text-2xl leading-snug text-ink md:text-3xl">
                  {testimonial.quote}
                </blockquote>
                <footer className="mt-8">
                  <cite className="not-italic">
                    <span className="font-medium text-ink">
                      {testimonial.name}
                    </span>
                    <span className="ml-2 text-sm text-ink/50">
                      · client since {testimonial.clientSince}
                    </span>
                  </cite>
                </footer>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2" role="tablist">
          {site.testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={selectedIndex === i}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                selectedIndex === i
                  ? "w-8 bg-coral"
                  : "w-1.5 bg-ink/20"
              }`}
              onClick={() => emblaApi?.scrollTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
