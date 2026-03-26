import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { primary: "#1f3b5b", "primary-light": "#2980b9", "primary-dark": "#0e2f44", accent: "#f26b00", "accent-light": "#f39c12", teal: "#2aa198" },
        dark: { bg: "#0d1117", card: "#161b22", border: "#21262d", text: "#e6edf3", muted: "#8b949e", subtle: "#6e7681" },
      },
      fontFamily: { heading: ["var(--font-heading)", "Georgia", "serif"], body: ["var(--font-body)", "Segoe UI", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
