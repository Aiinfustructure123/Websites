"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface MotionContextValue {
  reducedMotion: boolean;
  isTouch: boolean;
  introComplete: boolean;
  setIntroComplete: (value: boolean) => void;
}

const MotionContext = createContext<MotionContextValue>({
  reducedMotion: false,
  isTouch: false,
  introComplete: true,
  setIntroComplete: () => {},
});

export function MotionProvider({ children }: { children: ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    motionQuery.addEventListener("change", handleMotionChange);

    const touchQuery = window.matchMedia("(pointer: coarse)");
    setIsTouch(touchQuery.matches);

    const handleTouchChange = (e: MediaQueryListEvent) => {
      setIsTouch(e.matches);
    };
    touchQuery.addEventListener("change", handleTouchChange);

    return () => {
      motionQuery.removeEventListener("change", handleMotionChange);
      touchQuery.removeEventListener("change", handleTouchChange);
    };
  }, []);

  return (
    <MotionContext.Provider
      value={{ reducedMotion, isTouch, introComplete, setIntroComplete }}
    >
      {children}
    </MotionContext.Provider>
  );
}

export function useMotion() {
  return useContext(MotionContext);
}
