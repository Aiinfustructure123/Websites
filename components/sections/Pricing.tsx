"use client";

import Link from "next/link";
import { site } from "@/content/site";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { BookButton } from "@/components/ui/BookButton";
import { track } from "@/lib/track";

export function Pricing() {
  const pricedTreatments = site.treatments.filter((t) => t.id !== "consultation");

  return (
    <section
      id="pricing"
      className="section-padding bg-porcelain"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionNumber number="06" label="Investment" />
        <h2
          id="pricing-heading"
          className="mt-4 font-display text-display-lg text-ink"
        >
          Transparent pricing
        </h2>
        <p className="mt-4 max-w-xl text-ink/65">
          All prices are &ldquo;from&rdquo; and confirmed at consultation. Your
          first consultation is{" "}
          <strong className="font-medium text-ink">free</strong>.
        </p>

        <div className="mt-12 overflow-hidden rounded-2xl border border-ink/10 bg-cream">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-ink/10">
                <th className="px-6 py-4 font-accent text-xs uppercase tracking-wider text-ink/50">
                  Treatment
                </th>
                <th className="hidden px-6 py-4 font-accent text-xs uppercase tracking-wider text-ink/50 md:table-cell">
                  Notes
                </th>
                <th className="px-6 py-4 font-accent text-xs uppercase tracking-wider text-ink/50">
                  From
                </th>
                <th className="px-6 py-4" aria-label="Book" />
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-ink/10 bg-coral/5">
                <td className="px-6 py-5 font-display text-lg text-ink">
                  Consultation
                </td>
                <td className="hidden px-6 py-5 text-sm text-ink/50 md:table-cell">
                  30 min · No obligation
                </td>
                <td className="px-6 py-5 font-display text-lg text-jade">Free</td>
                <td className="px-6 py-5">
                  <BookButton
                    location="pricing-consultation"
                    label="Book free consultation"
                    className="px-4 py-2 text-xs"
                  />
                </td>
              </tr>
              {pricedTreatments.map((treatment) => (
                <tr
                  key={treatment.id}
                  className="border-b border-ink/5 last:border-0"
                >
                  <td className="px-6 py-5">
                    <span className="font-medium text-ink">{treatment.name}</span>
                    <p className="mt-0.5 text-xs text-coral md:hidden">
                      {treatment.notes}
                    </p>
                  </td>
                  <td className="hidden px-6 py-5 text-sm text-ink/50 md:table-cell">
                    {treatment.notes}
                  </td>
                  <td className="px-6 py-5 font-display text-ink">
                    {treatment.priceLabel}
                  </td>
                  <td className="px-6 py-5">
                    <Link
                      href={site.booking.booksyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-coral hover:underline"
                      onClick={() =>
                        track("treatment_book_click", {
                          treatment: treatment.name,
                          location: "pricing-table",
                        })
                      }
                    >
                      Book →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 text-center">
          <Link
            href={site.booking.booksyMenuUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            onClick={() => track("book_click", { location: "pricing-full-menu" })}
          >
            View full menu on Booksy
          </Link>
          <p className="mt-4 text-xs text-ink/45">
            {site.compliance.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
