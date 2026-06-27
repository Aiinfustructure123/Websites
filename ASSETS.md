# Media Assets — The Facial Collective

All media is replaceable. Swap files in `public/` and update paths in `content/assets.ts`.

**Important:** Current treatment and results imagery uses royalty-free stock placeholders (Pexels). Replace with your own clinic photography and video before launch — stock images cannot represent actual patient outcomes.

---

## Hero

| File | Used in | Dimensions | Shoot brief |
|------|---------|------------|-------------|
| `public/video/hero-placeholder.mp4` | Hero background (desktop) | 1920×1080, 10s loop | Slow macro: golden-hour light moving across skin, water droplets, dewy texture. Warm, shallow DOF. No identifiable faces. |
| `public/video/hero-placeholder.webm` | Hero background (WebM fallback) | Same as above | Same footage, WebM encode |
| `public/images/hero-poster.jpg` | Hero poster / reduced-motion fallback | 1920×1080 | Still frame from hero video — warm, luminous |

---

## Treatments (interactive preview — priority for realism)

Each core treatment has a **poster image** and a **slow-motion video loop** shown on hover (desktop) or expand (mobile).

| File | Treatment | Dimensions | Shoot brief |
|------|-----------|------------|-------------|
| `public/images/treatment-anti-wrinkle.jpg` | Anti-Wrinkle Injections | 1920×1080, 4:3 crop | Natural expression at rest; soft forehead/crow's feet area. Editorial, not clinical. Anonymous model, consent on file. |
| `public/video/treatment-anti-wrinkle.mp4` | Anti-Wrinkle (hover video) | 1920×1080, 5s loop | Slow Ken Burns or macro: skin at rest, natural light, subtle movement. |
| `public/images/treatment-dermal-fillers.jpg` | Dermal Fillers | 1920×1080 | Profile or 3/4 view showing balanced cheek/jaw proportion. Undetectable, natural result. |
| `public/video/treatment-dermal-fillers.mp4` | Dermal Fillers (hover video) | 1920×1080, 5s loop | Slow pan across mid-face structure. Warm clinic lighting. |
| `public/images/treatment-microneedling.jpg` | Microneedling | 1920×1080 | Close-up: clear, refined skin texture. Dewy post-treatment glow (not raw/red). |
| `public/video/treatment-microneedling.mp4` | Microneedling (hover video) | 1920×1080, 5s loop | Macro skin texture, light catching pores evenly. Suggests clarity without promising results. |
| `public/images/treatment-skin-boosters.jpg` | Skin Boosters & Mesotherapy | 1920×1080 | Hydrated, luminous skin — cheekbone highlight, golden hour. "Dewy" not oily. |
| `public/video/treatment-skin-boosters.mp4` | Skin Boosters (hover video) | 1920×1080, 5s loop | Slow light sweep across hydrated skin surface. |
| `public/images/treatment-chemical-peels.jpg` | Chemical Peels | 1920×1080 | Even skin tone, soft clarity. No harsh peel recovery imagery. |
| `public/video/treatment-chemical-peels.mp4` | Chemical Peels (hover video) | 1920×1080, 5s loop | Gentle texture reveal, warm tone. |

**Label in UI:** Every preview shows *"Illustrative only · Individual results vary"* — keep this when swapping to real media.

---

## Before / After

| File | Used in | Dimensions | Shoot brief |
|------|---------|------------|-------------|
| `public/images/before-after-before.jpg` | Slider left | 1600×1000 | Same anonymous client, before treatment. Consented, calibrated clinic lighting. |
| `public/images/before-after-after.jpg` | Slider right | 1600×1000 | Same client, ~3 months post. Identical angle/lighting as "before". |

Caption in UI: *"Anonymous client · result shown with consent. Individual results vary."*

---

## Ethos gallery

| File | Used in | Dimensions | Shoot brief |
|------|---------|------------|-------------|
| `public/images/ethos-01.jpg` | Ethos parallax grid | 1200×1600 | Consultation room detail — warm, unhurried |
| `public/images/ethos-02.jpg` | Ethos parallax grid | 1200×1600 | Treatment suite — private, calm |
| `public/images/ethos-03.jpg` | Ethos parallax grid | 1920×1080 | Practitioner hands / clinical detail (no faces required) |

---

## CTA band

| File | Used in | Dimensions | Shoot brief |
|------|---------|------------|-------------|
| `public/video/cta-placeholder.mp4` | CTA section background | 1920×1080, 6s loop | Warm ambient: light on skin or clinic atmosphere. Emotional close. |
| `public/images/cta-poster.jpg` | CTA poster fallback | 1920×1080 | Still from CTA video |

---

## Brand & SEO

| File | Used in | Dimensions | Shoot brief |
|------|---------|------------|-------------|
| `public/images/logo.svg` | Nav, footer | SVG | Full wordmark — replace TFC placeholder |
| `public/images/logo-mark.svg` | Favicon source | SVG | Monogram / mark |
| `public/images/og-image.jpg` | Open Graph / Twitter card | 1200×630 | Hero still or clinic exterior. Text-safe centre area. |

---

## Swapping media

1. Drop new files into `public/images/` or `public/video/` (keep filenames or update `content/assets.ts`)
2. Compress video: H.264 MP4 + WebM, ≤5MB per loop, 5–10s, muted
3. Compress images: WebP/AVIF via `next/image`, source JPG ≥1920px wide
4. Run `npm run build` to verify no broken paths
