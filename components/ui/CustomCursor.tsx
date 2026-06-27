"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { useMotion } from "@/components/providers/MotionProvider";

export function CustomCursor() {
  const { reducedMotion, isTouch } = useMotion();
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorRef = useRef({ x: 0, y: 0 });

  const springConfig = { damping: 28, stiffness: 280, mass: 0.6 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);
  const scale = useSpring(1, springConfig);

  useEffect(() => {
    if (reducedMotion || isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    const handleHoverStart = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [role='button'], input, textarea, select, label")
      ) {
        setHovering(true);
        scale.set(2.2);
      }
    };

    const handleHoverEnd = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [role='button'], input, textarea, select, label")
      ) {
        setHovering(false);
        scale.set(1);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseout", handleHoverEnd);

    document.body.classList.add("hide-cursor");

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
      document.body.classList.remove("hide-cursor");
    };
  }, [reducedMotion, isTouch, visible, x, y, scale]);

  if (reducedMotion || isTouch) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="rounded-full"
        style={{
          width: hovering ? 48 : 24,
          height: hovering ? 48 : 24,
          scale,
          background:
            "radial-gradient(circle, rgba(251,247,242,0.9) 0%, rgba(244,198,192,0.4) 50%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
    </motion.div>
  );
}
