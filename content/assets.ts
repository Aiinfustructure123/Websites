/**
 * Central asset map — swap placeholder files here when final media is ready.
 * See ASSETS.md for full slot documentation.
 *
 * Treatment before/after pairs use stock face photography.
 * Replace with consented, anonymised client photos before launch.
 */

export const assets = {
  video: {
    hero: {
      mp4: "/video/hero-placeholder.mp4",
      webm: "/video/hero-placeholder.webm",
      poster: "/images/hero-poster.jpg",
    },
    cta: {
      mp4: "/video/cta-placeholder.mp4",
      webm: "/video/cta-placeholder.webm",
      poster: "/images/cta-poster.jpg",
    },
  },

  treatments: {
    "anti-wrinkle": {
      before: "/images/treatment-anti-wrinkle-before.jpg",
      after: "/images/treatment-anti-wrinkle.jpg",
      alt: "Anti-wrinkle treatment — face before and after illustrative comparison",
    },
    "dermal-fillers": {
      before: "/images/treatment-dermal-fillers-before.jpg",
      after: "/images/treatment-dermal-fillers.jpg",
      alt: "Dermal filler treatment — face before and after illustrative comparison",
    },
    microneedling: {
      before: "/images/treatment-microneedling-before.jpg",
      after: "/images/treatment-microneedling.jpg",
      alt: "Microneedling — face before and after illustrative comparison",
    },
    "skin-boosters": {
      before: "/images/treatment-skin-boosters-before.jpg",
      after: "/images/treatment-skin-boosters.jpg",
      alt: "Skin boosters — face before and after illustrative comparison",
    },
    "chemical-peels": {
      before: "/images/treatment-chemical-peels-before.jpg",
      after: "/images/treatment-chemical-peels.jpg",
      alt: "Chemical peel — face before and after illustrative comparison",
    },
  },

  images: {
    logo: "/images/logo.svg",
    logoMark: "/images/logo-mark.svg",
    beforeAfter: {
      before: "/images/before-after-before.jpg",
      after: "/images/before-after-after.jpg",
    },
    ethos: [
      "/images/ethos-01.jpg",
      "/images/ethos-02.jpg",
      "/images/ethos-03.jpg",
    ],
    og: "/images/og-image.jpg",
  },
} as const;

export type AssetKey = keyof typeof assets;
export type TreatmentMediaKey = keyof typeof assets.treatments;
