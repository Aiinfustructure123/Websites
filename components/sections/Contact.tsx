"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  site,
  getWhatsAppUrl,
  getPhoneUrl,
} from "@/content/site";
import { track, trackWhatsApp } from "@/lib/track";

export function Contact() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData) => {
    const newErrors: Record<string, string> = {};
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name) newErrors.name = "Please enter your name";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!message) newErrors.message = "Please enter a message";

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const validationErrors = validate(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Failed");
      track("contact_form_submit", { location: "contact" });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-cream"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div>
          <h2
            id="contact-heading"
            className="font-display text-display-lg text-ink"
          >
            Visit us
          </h2>
          <address className="mt-8 space-y-4 not-italic text-ink/70">
            <p>
              <Link
                href={site.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-coral"
              >
                {site.contact.address.full}
              </Link>
            </p>
            <p>{site.contact.hours}</p>
            <p>
              <Link
                href={getPhoneUrl()}
                className="transition-colors hover:text-coral"
                onClick={() => track("call_click", { location: "contact" })}
              >
                {site.contact.phoneFormatted}
              </Link>
            </p>
            <p>
              <Link
                href={`mailto:${site.contact.email}`}
                className="transition-colors hover:text-coral"
              >
                {site.contact.email}
              </Link>
            </p>
            <p>
              <Link
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-jade transition-colors hover:text-jade/80"
                onClick={() => trackWhatsApp("contact")}
              >
                WhatsApp us →
              </Link>
            </p>
          </address>
        </div>

        <div>
          <h3 className="font-display text-2xl text-ink">Send an enquiry</h3>
          <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-ink/15 bg-porcelain/50 px-5 py-3.5 text-ink placeholder:text-ink/35 focus:border-coral focus:outline-none"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-coral">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl border border-ink/15 bg-porcelain/50 px-5 py-3.5 text-ink placeholder:text-ink/35 focus:border-coral focus:outline-none"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-coral">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="How can we help?"
                className="w-full resize-none rounded-xl border border-ink/15 bg-porcelain/50 px-5 py-3.5 text-ink placeholder:text-ink/35 focus:border-coral focus:outline-none"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-xs text-coral">
                  {errors.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-primary w-full disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Send enquiry"}
            </button>

            <AnimatePresence>
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-xl bg-jade/10 px-4 py-3 text-sm text-jade"
                  role="status"
                >
                  Thank you — we&apos;ll be in touch shortly.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-xl bg-coral/10 px-4 py-3 text-sm text-coral"
                  role="alert"
                >
                  Something went wrong. Please try WhatsApp or call us directly.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
}
