import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Hârtie și cerneală: valori în globals.css, inversate automat în dark mode
        paper: { DEFAULT: "rgb(var(--paper) / <alpha-value>)", 2: "rgb(var(--paper-2) / <alpha-value>)" },
        ink: { DEFAULT: "rgb(var(--ink) / <alpha-value>)", soft: "rgb(var(--ink-soft) / <alpha-value>)" },
        line: "rgb(var(--line) / <alpha-value>)",
      },
      fontFamily: { heading: ["var(--font-heading)", "Georgia", "serif"], body: ["var(--font-body)", "Segoe UI", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
