import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "rgb(var(--cream-rgb) / <alpha-value>)",
        porcelain: "rgb(var(--porcelain-rgb) / <alpha-value>)",
        ink: "rgb(var(--ink-rgb) / <alpha-value>)",
        aubergine: "rgb(var(--aubergine-rgb) / <alpha-value>)",
        blush: "rgb(var(--blush-rgb) / <alpha-value>)",
        coral: "rgb(var(--coral-rgb) / <alpha-value>)",
        amber: "rgb(var(--amber-rgb) / <alpha-value>)",
        "rose-gold": "rgb(var(--rose-gold-rgb) / <alpha-value>)",
        jade: "rgb(var(--jade-rgb) / <alpha-value>)",
        mist: "rgb(var(--mist-rgb) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        accent: ["var(--font-space-grotesk)", "monospace"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.75rem, 6vw + 1rem, 5.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em" },
        ],
        "display-lg": [
          "clamp(2rem, 4vw + 0.5rem, 3.75rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "display-md": [
          "clamp(1.5rem, 2.5vw + 0.5rem, 2.5rem)",
          { lineHeight: "1.15", letterSpacing: "-0.01em" },
        ],
      },
      animation: {
        "gradient-drift": "gradient-drift 20s ease-in-out infinite alternate",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
      keyframes: {
        "gradient-drift": {
          "0%": { transform: "translate(0%, 0%) rotate(0deg) scale(1)" },
          "33%": { transform: "translate(5%, -3%) rotate(2deg) scale(1.05)" },
          "66%": { transform: "translate(-3%, 5%) rotate(-1deg) scale(1.02)" },
          "100%": { transform: "translate(2%, 2%) rotate(1deg) scale(1.08)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
