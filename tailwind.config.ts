import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { primary: "#1f3b5b", "primary-light": "#2980b9", "primary-dark": "#0e2f44", accent: "#c2410c", "accent-light": "#f39c12", teal: "#167a71" },
        // Hârtie și cerneală: valori în globals.css, inversate automat în dark mode
        paper: { DEFAULT: "rgb(var(--paper) / <alpha-value>)", 2: "rgb(var(--paper-2) / <alpha-value>)" },
        ink: { DEFAULT: "rgb(var(--ink) / <alpha-value>)", soft: "rgb(var(--ink-soft) / <alpha-value>)" },
        line: "rgb(var(--line) / <alpha-value>)",
        dark: { bg: "#0d1117", card: "#161b22", border: "#21262d", text: "#e6edf3", muted: "#8b949e", subtle: "#8b949e" },
      },
      fontFamily: { heading: ["var(--font-heading)", "Georgia", "serif"], body: ["var(--font-body)", "Segoe UI", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
