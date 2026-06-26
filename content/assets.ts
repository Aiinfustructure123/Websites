/**
 * Central asset map — swap placeholder files here when final media is ready.
 * See ASSETS.md for full slot documentation.
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
    treatments: {
      "anti-wrinkle": {
        mp4: "/video/treatment-anti-wrinkle.mp4",
        poster: "/images/treatment-anti-wrinkle.jpg",
      },
      "dermal-fillers": {
        mp4: "/video/treatment-dermal-fillers.mp4",
        poster: "/images/treatment-dermal-fillers.jpg",
      },
      microneedling: {
        mp4: "/video/treatment-microneedling.mp4",
        poster: "/images/treatment-microneedling.jpg",
      },
      "skin-boosters": {
        mp4: "/video/treatment-skin-boosters.mp4",
        poster: "/images/treatment-skin-boosters.jpg",
      },
      "chemical-peels": {
        mp4: "/video/treatment-chemical-peels.mp4",
        poster: "/images/treatment-chemical-peels.jpg",
      },
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
