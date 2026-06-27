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

## Treatments (interactive before/after — priority for realism)

Each core treatment has a **before** and **after** face photograph. Visitors drag a slider on hover (desktop) or expand (mobile) to compare.

| Before file | After file | Treatment | Shoot brief |
|-------------|------------|-----------|-------------|
| `treatment-anti-wrinkle-before.jpg` | `treatment-anti-wrinkle.jpg` | Anti-Wrinkle | Same client, same angle/lighting. Before: natural expression lines visible. After: smooth, natural movement preserved. |
| `treatment-dermal-fillers-before.jpg` | `treatment-dermal-fillers.jpg` | Dermal Fillers | Profile or 3/4. Before: volume loss. After: subtle, balanced restoration. |
| `treatment-microneedling-before.jpg` | `treatment-microneedling.jpg` | Microneedling | Front-facing close-up. Before: uneven texture. After: clear, refined skin. |
| `treatment-skin-boosters-before.jpg` | `treatment-skin-boosters.jpg` | Skin Boosters | Before: dull/dehydrated. After: dewy luminosity. |
| `treatment-chemical-peels-before.jpg` | `treatment-chemical-peels.jpg` | Chemical Peels | Before: uneven tone. After: even, renewed clarity. |

**Current placeholders:** Stock face photography with processed "before" variants. **Replace with paired photos of the same consented, anonymised client** before launch.

**Label in UI:** *"Anonymous model · Illustrative only · Individual results vary"*

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
