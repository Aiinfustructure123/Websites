"use client";

import Link from "next/link";
import { trackBook } from "@/lib/track";
import { site } from "@/content/site";
import { MagneticWrap } from "./MagneticButton";

interface BookButtonProps {
  location: string;
  className?: string;
  variant?: "primary" | "secondary" | "glow";
  label?: string;
}

export function BookButton({
  location,
  className = "",
  variant = "primary",
  label = "Book Your Appointment",
}: BookButtonProps) {
  const baseClass =
    variant === "primary"
      ? "btn-primary"
      : variant === "glow"
        ? "btn-primary btn-glow"
        : "btn-secondary";

  return (
    <MagneticWrap>
      <Link
        href={site.booking.booksyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${className}`}
        onClick={() => trackBook(location, label)}
      >
        {label}
      </Link>
    </MagneticWrap>
  );
}
