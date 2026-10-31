import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Official Brand Book Primary Palette
          primary: "#080878",
          "primary-dark": "#05055C",
          "primary-light": "#24249B",
          gold: "#D8B43B",
          "gold-dark": "#BFA044",
          white: "#FFFFFF",
          black: "#111111",
          // Official Brand Book Supporting Palette
          ivory: "#F7F7FB",
          "light-blue": "#E8E8F4",
          slate: "#55556B",
          // Mapped aliases for consistent global coverage
          navy: "#080878",
          "navy-dark": "#05055C",
          "navy-light": "#24249B",
          amber: "#D8B43B",
          "amber-dark": "#BFA044",
          blue: "#080878",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2.5rem, 2rem + 2.5vw, 4.5rem)", { lineHeight: "1.08" }],
        h1: ["clamp(2rem, 1.5rem + 2vw, 3.5rem)", { lineHeight: "1.12" }],
        h2: ["clamp(1.5rem, 1.25rem + 1vw, 2.25rem)", { lineHeight: "1.2" }],
        h3: ["clamp(1.25rem, 1.1rem + 0.5vw, 1.75rem)", { lineHeight: "1.3" }],
        body: ["clamp(0.95rem, 0.9rem + 0.2vw, 1.125rem)", { lineHeight: "1.6" }],
        sm: ["clamp(0.8125rem, 0.8rem + 0.1vw, 0.875rem)", { lineHeight: "1.5" }],
      },
    },
  },
  plugins: [],
};

export default config;
