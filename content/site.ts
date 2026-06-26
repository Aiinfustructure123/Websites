export interface Treatment {
  id: string;
  slug: string;
  name: string;
  fromPrice: number;
  priceLabel: string;
  notes?: string;
  description: string;
}

export interface JourneyStep {
  id: string;
  number: string;
  title: string;
  duration: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  clientSince: number;
  quote: string;
}

export interface EthosPrinciple {
  id: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export const site = {
  name: "The Facial Collective",
  strapline: "Considered Aesthetic Medicine",
  established: 2019,
  title:
    "The Facial Collective — Considered Aesthetic Medicine, Marylebone London",
  description:
    "Natural, undramatic aesthetic medicine in Marylebone, London. GMC-registered practitioners offering consultation-led treatments with restraint and clinical credibility.",
  url: "https://facialcollective.london",

  contact: {
    address: {
      street: "12 Wimpole Mews",
      area: "Marylebone",
      city: "London",
      postcode: "W1G",
      full: "12 Wimpole Mews, Marylebone, London W1G",
    },
    phone: "+44 7724 294228",
    phoneFormatted: "+44 7724 294228",
    email: "hello@facialcollective.london",
    hours: "By appointment, Tuesday–Saturday",
    whatsapp: {
      number: "447724294228",
      message:
        "Hello, I'd like to enquire about a consultation at The Facial Collective.",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=12%20Wimpole%20Mews%2C%20Marylebone%2C%20London%20W1G",
  },

  booking: {
    booksyUrl:
      "https://booksy.com/en-gb/instant-experiences/widget/187062",
    booksyMenuUrl:
      "https://booksy.com/en-gb/instant-experiences/widget/187062",
  },

  hero: {
    headline: "Confidence begins with natural beauty.",
    headlineAccent: "natural",
    subcopy:
      "Consultation-led aesthetic medicine in Marylebone. GMC-registered practitioners who measure success by how little is needed.",
    trustChips: [
      "Est. 2019",
      "Marylebone",
      "GMC-registered",
      "By appointment",
    ],
  },

  marquee: {
    items: [
      "Restraint",
      "The long view",
      "Medical at heart",
      "No two faces alike",
    ],
  },

  ethos: {
    pullQuote:
      "We measure success not by how much we do, but by how little is needed.",
    principles: [
      {
        id: "medical",
        title: "Medical at heart",
        description:
          "Every practitioner is GMC-registered. Aesthetics treated with the seriousness of the rest of medicine.",
      },
      {
        id: "subtlety",
        title: "Drawn to subtlety",
        description:
          "The most flattering work is the work no one sees. Known for talking clients out of treatments.",
      },
      {
        id: "longview",
        title: "Made for the long view",
        description:
          "Planning for the face in ten years, not next week's photo. Reversible, paced, never pressured.",
      },
    ] as EthosPrinciple[],
  },

  journey: {
    title: "The Journey",
    subtitle: "Each treatment begins with a conversation.",
    steps: [
      {
        id: "conversation",
        number: "01",
        title: "Conversation",
        duration: "45 min",
        description:
          "Unhurried call or in-person meeting. Listen first: history, hopes, hesitations.",
      },
      {
        id: "assessment",
        number: "02",
        title: "Assessment",
        duration: "30 min",
        description:
          "Clinical study of facial proportion, skin, and movement, photographed in calibrated light.",
      },
      {
        id: "plan",
        number: "03",
        title: "Plan",
        duration: "At leisure",
        description:
          "A written, transparently costed proposal. Nothing committed that day; the client takes it home.",
      },
      {
        id: "treatment",
        number: "04",
        title: "Treatment",
        duration: "60–90 min",
        description:
          "Performed by the practitioner who designed the plan, in a private suite.",
      },
      {
        id: "aftercare",
        number: "05",
        title: "Aftercare",
        duration: "Ongoing",
        description:
          "Follow-up at two weeks. Adjustments are included, never an extra charge.",
      },
    ] as JourneyStep[],
  },

  treatments: [
    {
      id: "consultation",
      slug: "consultation",
      name: "Consultation",
      fromPrice: 0,
      priceLabel: "Free",
      notes: "30 min",
      description:
        "An unhurried conversation to understand your history, hopes, and hesitations. No pressure to begin.",
    },
    {
      id: "anti-wrinkle",
      slug: "anti-wrinkle-injections",
      name: "Anti-Wrinkle Injections",
      fromPrice: 140,
      priceLabel: "From £140",
      notes: "One Area £140 · Two Areas £180 · Three Areas £220 · Masseter/Jaw Slimming £250 · +more on Booksy",
      description:
        "Precise, natural movement preservation. Each area considered within the context of your whole face.",
    },
    {
      id: "dermal-fillers",
      slug: "dermal-fillers",
      name: "Dermal Fillers",
      fromPrice: 180,
      priceLabel: "From £180",
      notes: "9 treatments on Booksy",
      description:
        "Restoration and refinement, never overfilling. Structural support with an undetectable finish.",
    },
    {
      id: "microneedling",
      slug: "microneedling",
      name: "Microneedling",
      fromPrice: 120,
      priceLabel: "From £120",
      notes: "4 treatments",
      description:
        "Collagen induction for texture, tone, and luminosity. A considered approach to skin quality.",
    },
    {
      id: "skin-boosters",
      slug: "skin-boosters-mesotherapy",
      name: "Skin Boosters & Mesotherapy",
      fromPrice: 150,
      priceLabel: "From £150",
      notes: "6 treatments",
      description:
        "Deep hydration and nourishment for dewy, healthy-looking skin from within.",
    },
    {
      id: "chemical-peels",
      slug: "chemical-peels",
      name: "Chemical Peels",
      fromPrice: 110,
      priceLabel: "From £110",
      notes: "3 treatments",
      description:
        "Controlled resurfacing tailored to your skin type and concerns.",
    },
    {
      id: "vitamin-injections",
      slug: "vitamin-injections",
      name: "Vitamin Injections",
      fromPrice: 30,
      priceLabel: "From £30",
      notes: "15 min",
      description:
        "Targeted vitamin delivery for skin vitality and overall wellness.",
    },
  ] as Treatment[],

  coreTreatments: [
    "anti-wrinkle",
    "dermal-fillers",
    "microneedling",
    "skin-boosters",
    "chemical-peels",
  ] as const,

  testimonials: [
    {
      id: "eloise",
      name: "Eloise R.",
      clientSince: 2023,
      quote:
        "I left my first consultation with a written plan and no pressure to begin. A year later I'm still grateful for that conversation.",
    },
    {
      id: "maya",
      name: "Maya O.",
      clientSince: 2021,
      quote:
        "The team talked me out of more than they recommended. That is the rarest thing in this industry and the reason I trust them entirely.",
    },
    {
      id: "charlotte",
      name: "Charlotte D.",
      clientSince: 2020,
      quote:
        "It is the only place I have been where the person treating me also designed my plan. The continuity is the difference.",
    },
  ] as Testimonial[],

  beforeAfter: {
    caption:
      "Anonymous client · result shown with consent. Individual results vary.",
    beforeLabel: "Before",
    afterLabel: "After · three months",
  },

  cta: {
    headline: "When you're ready, we'll be here.",
    subcopy:
      "Begin with a free consultation. No pressure, no catalogue — just a conversation.",
  },

  compliance: {
    disclaimer:
      "All treatments are subject to consultation and suitability assessment. Prices shown are indicative and may vary. Individual results vary.",
    beforeAfterNote: "Individual results vary.",
  },

  nav: [
    { label: "Treatments", href: "#treatments" },
    { label: "Journey", href: "#journey" },
    { label: "Results", href: "#results" },
    { label: "Ethos", href: "#ethos" },
    { label: "Voices", href: "#voices" },
    { label: "Contact", href: "#contact" },
  ] as NavLink[],

  social: {
    // TODO: Add social links when available
  },
} as const;

export type Site = typeof site;

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return site.treatments.find((t) => t.slug === slug);
}

export function getCoreTreatments(): Treatment[] {
  return site.coreTreatments
    .map((id) => site.treatments.find((t) => t.id === id))
    .filter((t): t is Treatment => t !== undefined);
}

export function formatPrice(price: number): string {
  if (price === 0) return "Free";
  return `From £${price}`;
}

export function getWhatsAppUrl(): string {
  const { number, message } = site.contact.whatsapp;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getPhoneUrl(): string {
  return `tel:${site.contact.phone.replace(/\s/g, "")}`;
}
