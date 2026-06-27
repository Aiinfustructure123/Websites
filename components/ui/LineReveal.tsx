"use client";

import { motion } from "framer-motion";
import { useMotion } from "@/components/providers/MotionProvider";

interface LineRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  id?: string;
}

export function LineReveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "p",
  id,
}: LineRevealProps) {
  const { reducedMotion } = useMotion();
  const lines = children.split("\n");

  if (reducedMotion) {
    return (
      <Tag className={className} id={id}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag className={className} id={id} aria-label={children}>
      {lines.map((line, i) => (
        <span key={i} className="text-mask-line block">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.1,
              delay: delay + i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            aria-hidden="true"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

interface WordRevealProps {
  text: string;
  accentWord: string;
  accentClassName?: string;
  className?: string;
  delay?: number;
}

export function HeadlineReveal({
  text,
  accentWord,
  accentClassName = "italic text-coral",
  className = "",
  delay = 0.3,
}: WordRevealProps) {
  const { reducedMotion } = useMotion();

  const parts = text.split(new RegExp(`(${accentWord})`, "i"));
  const accentLower = accentWord.toLowerCase();

  if (reducedMotion) {
    return (
      <h1 className={className}>
        {parts.map((part, i) =>
          part.toLowerCase() === accentLower ? (
            <em key={i} className={accentClassName}>
              {part}
            </em>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </h1>
    );
  }

  return (
    <h1 className={className} aria-label={text}>
      <span className="text-mask-line block">
        <motion.span
          className="inline-block"
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 1.2,
            delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {parts.map((part, i) =>
            part.toLowerCase() === accentLower ? (
              <em key={i} className={accentClassName}>
                {part}
              </em>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </motion.span>
      </span>
    </h1>
  );
}
