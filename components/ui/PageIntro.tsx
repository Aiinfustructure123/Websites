"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMotion } from "@/components/providers/MotionProvider";
import { site } from "@/content/site";

const INTRO_KEY = "tfc_intro_seen";

export function PageIntro() {
  const { reducedMotion, setIntroComplete } = useMotion();
  const [show, setShow] = useState(false);

  const dismiss = useCallback(() => {
    sessionStorage.setItem(INTRO_KEY, "1");
    setShow(false);
    setIntroComplete(true);
  }, [setIntroComplete]);

  useEffect(() => {
    const seen = sessionStorage.getItem(INTRO_KEY);
    if (seen || reducedMotion) {
      setIntroComplete(true);
      return;
    }
    setShow(true);
  }, [reducedMotion, setIntroComplete]);

  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(dismiss, 1200);
    return () => clearTimeout(timer);
  }, [show, dismiss]);

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[10000] flex items-center justify-center bg-cream"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        onClick={dismiss}
        role="presentation"
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-display text-display-md text-ink">{site.name}</p>
          <p className="mt-2 font-accent text-xs uppercase tracking-[0.3em] text-rose-gold">
            {site.strapline}
          </p>
        </motion.div>
        <motion.div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-coral/60 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
