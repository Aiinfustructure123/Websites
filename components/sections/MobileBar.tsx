"use client";

import Link from "next/link";
import { getWhatsAppUrl } from "@/content/site";
import { BookButton } from "@/components/ui/BookButton";
import { trackWhatsApp } from "@/lib/track";

export function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-2 border-t border-ink/10 bg-cream/95 p-3 backdrop-blur-xl md:hidden">
      <BookButton
        location="mobile-bar"
        label="Book Now"
        className="flex-1 py-3 text-xs"
      />
      <Link
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary flex-1 py-3 text-xs"
        onClick={() => trackWhatsApp("mobile-bar")}
      >
        WhatsApp
      </Link>
    </div>
  );
}
