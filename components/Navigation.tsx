"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/content/site";
import { BookButton } from "@/components/ui/BookButton";
import { track } from "@/lib/track";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (label: string) => {
    track("nav_click", { label });
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-premium ${
          scrolled ? "frosted-nav" : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex h-[var(--nav-height)] max-w-7xl items-center justify-between px-5 md:px-8 lg:px-12"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="relative z-10 font-display text-base tracking-tight text-ink md:text-lg"
            onClick={() => handleNavClick("logo")}
          >
            <span className="hidden sm:inline">The Facial Collective</span>
            <span className="sm:hidden">TFC</span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {site.nav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ink/70 transition-colors duration-300 hover:text-ink"
                  onClick={() => handleNavClick(link.label)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <BookButton
              location="nav"
              variant="glow"
              label="Book"
              className="hidden px-5 py-2.5 text-xs sm:inline-flex"
            />

            <button
              type="button"
              className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span
                className={`block h-px w-5 bg-ink transition-all duration-300 ${
                  mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-5 bg-ink transition-all duration-300 ${
                  mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col bg-cream lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-1 flex-col items-center justify-center gap-8 pt-[var(--nav-height)]">
              {site.nav.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    className="font-display text-display-md text-ink"
                    onClick={() => handleNavClick(link.label)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: site.nav.length * 0.06, duration: 0.5 }}
                className="mt-4"
              >
                <BookButton location="mobile-nav" variant="glow" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
