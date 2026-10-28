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
          navy: "#1a365d",
          amber: "#f59e0b",
          blue: "#1e40af",
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
