import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { sigla, tema, comune } from "./lib/paleta";

// Paleta din lib/paleta.ts devine variabile CSS ca canale RGB ("194 65 12"),
// ca tailwind să poată pune opacitate (bg-paper/80, text-ink/60)
const rgb = (hex: string) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16)).join(" ");
const variabile = (culori: Record<string, string>, prefix = "") =>
  Object.fromEntries(Object.entries(culori).map(([k, v]) => [`--${prefix}${k}`, rgb(v)]));
const clase = (nume: string[], prefix = "") =>
  Object.fromEntries(nume.map((k) => [prefix + k, `rgb(var(--${prefix}${k}) / <alpha-value>)`]));

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...clase(Object.keys(tema.luminos)),
        ...clase(Object.keys(comune)),
        ...clase(Object.keys(sigla), "brand-"),
      },
      fontFamily: { heading: ["var(--font-heading)", "Georgia", "serif"], body: ["var(--font-body)", "Segoe UI", "sans-serif"] },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        ":root": { ...variabile(tema.luminos), ...variabile(comune), ...variabile(sigla, "brand-") },
        "html.dark": variabile(tema.intunecat),
      });
    }),
  ],
};
export default config;
