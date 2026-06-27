/**
 * Analytics event tracking utility.
 * TODO: Wire to Vercel Analytics or GA4 — replace console.log with actual tracking calls.
 */

export type TrackEvent =
  | "book_click"
  | "whatsapp_click"
  | "call_click"
  | "treatment_book_click"
  | "contact_form_submit"
  | "nav_click"
  | "scroll_cta_view";

export interface TrackPayload {
  location?: string;
  label?: string;
  treatment?: string;
  [key: string]: string | number | boolean | undefined;
}

export function track(event: TrackEvent, payload?: TrackPayload): void {
  if (typeof window === "undefined") return;

  // TODO: Replace with Vercel Analytics or GA4
  // Example: va.track(event, payload);
  // Example: gtag('event', event, payload);

  if (process.env.NODE_ENV === "development") {
    console.log("[track]", event, payload);
  }
}

export function trackBook(location: string, label?: string): void {
  track("book_click", { location, label });
}

export function trackWhatsApp(location: string): void {
  track("whatsapp_click", { location });
}

export function trackCall(location: string): void {
  track("call_click", { location });
}
