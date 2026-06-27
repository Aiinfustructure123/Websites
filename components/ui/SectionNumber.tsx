"use client";

interface SectionNumberProps {
  number: string;
  label?: string;
  className?: string;
}

export function SectionNumber({
  number,
  label,
  className = "",
}: SectionNumberProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="font-accent text-xs uppercase tracking-[0.25em] text-rose-gold">
        N°{number}
      </span>
      {label && (
        <>
          <span className="h-px w-8 bg-mist" aria-hidden="true" />
          <span className="font-accent text-xs uppercase tracking-[0.2em] text-ink/40">
            {label}
          </span>
        </>
      )}
    </div>
  );
}
