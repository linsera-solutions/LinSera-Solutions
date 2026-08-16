import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FFFFFF",
        ink: "#0F172A",
        muted: "#475569",
        accent: "#2563EB",
        accentLight: "#3B82F6",
        softBlue: "#EAF2FF",
        coolGray: "#F4F7FB",
        soft: "#F4F7FB",
        border: "#E2E8F0",
        dark: "#07111F",
        navy: "#07111F",
        midnight: "#0B1630",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
