"use client";

import { useMotion } from "@/components/providers/MotionProvider";

interface GradientMeshProps {
  className?: string;
  animated?: boolean;
}

export function GradientMesh({
  className = "",
  animated = true,
}: GradientMeshProps) {
  const { reducedMotion } = useMotion();
  const shouldAnimate = animated && !reducedMotion;

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div
        className={`absolute -inset-[20%] ${shouldAnimate ? "gradient-mesh-animated" : "gradient-mesh"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-transparent to-cream/50" />
    </div>
  );
}
