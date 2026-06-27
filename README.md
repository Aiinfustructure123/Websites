# The Facial Collective

Cinematic marketing website for a Marylebone aesthetic medicine practice. Built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, GSAP, and Lenis.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project structure

```
app/                  # Next.js App Router pages & API routes
components/
  sections/           # Page sections (Hero, Treatments, Journey, etc.)
  ui/                 # Reusable UI (cursor, buttons, previews)
  providers/          # Lenis scroll, motion context
content/
  site.ts             # All copy, pricing, testimonials — edit here
  assets.ts           # Media path map — swap filenames here
lib/
  track.ts            # Conversion event tracking (TODO: GA4/Vercel)
  schema.ts           # JSON-LD LocalBusiness schema
public/
  images/             # Placeholder & final photography
  video/              # Ambient loops for hero, treatments, CTA
```

## Editing content

- **Copy & pricing:** `content/site.ts`
- **Media paths:** `content/assets.ts` + see `ASSETS.md` for shoot briefs
- **Colours & typography:** `tailwind.config.ts` + `app/globals.css`

## Key features

- Interactive **Treatments** section — hover to preview realistic photo/video per service
- GSAP horizontal-scroll **Journey** (vertical stepper fallback for reduced motion)
- Draggable **Before/After** slider with compliance labelling
- Booksy booking links + WhatsApp deep links throughout
- Custom cursor, Lenis smooth scroll, line-mask reveals (all respect `prefers-reduced-motion`)

## TODO before production

- [ ] Replace stock placeholder imagery with clinic photography (see `ASSETS.md`)
- [ ] Wire contact form: set `FORMSPREE_ENDPOINT` in `app/api/contact/route.ts`
- [ ] Wire analytics: `lib/track.ts` → Vercel Analytics or GA4
- [ ] Add real logo SVG
- [ ] Set `site.url` in `content/site.ts` to production domain

## Deploy to Vercel

1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Framework preset: **Next.js** (auto-detected)
4. Deploy — no env vars required for static preview

```bash
npm run build   # verify locally first
```

## Compliance

- No outcome promises in copy
- Before/after labelled: *"Individual results vary"*
- Prices shown as "from" — live menu on Booksy
- Footer disclaimer on all treatments
