/* ═══ PALETA SITE-ULUI ═══
   Singurul loc unde se schimbă culorile. tailwind.config.ts le transformă în variabile CSS
   (--paper, --accent...) și în clase (bg-paper, text-accent, hover:bg-accent-hover...).
   Imaginea de previzualizare (opengraph) și culoarea barei browserului le citesc direct de aici.
   Valorile sunt hex obișnuit; opacitatea se pune din clase (bg-accent/10, text-chalk/75). */

/** Culorile siglei LTT. */
export const sigla = {
  navy: "#1f3b5b",
  orange: "#f26b00",
  teal: "#2aa198",
};

/** Culori care se schimbă între modul luminos și cel întunecat. */
export const tema = {
  luminos: {
    paper: "#f4f0e8",      // hârtia: fundalul paginii
    "paper-2": "#ece7dc",  // hârtie puțin mai închisă: carduri, casete
    ink: "#1f1d1a",        // cerneala: textul principal
    "ink-soft": "#58544d", // text secundar
    line: "#d8d0c2",       // linii și borduri
    "accent-text": "#b03c0b", // accentul ca text mic, închis destul pentru AA pe ambele hârtii
    footer: "#1f1d1a",     // subsolul
  },
  intunecat: {
    paper: "#131519",
    "paper-2": "#1a1d22",
    ink: "#ece8e0",
    "ink-soft": "#a6a096",
    line: "#34383f",
    "accent-text": "#ff8f4d",
    footer: "#0c0d10",
  },
};

/** Culori la fel în ambele moduri. */
export const comune = {
  accent: "#c2410c",          // portocaliul liceului pe suprafețe: butoane, buline, bara de progres
  "accent-hover": "#a8380a",  // butonul plin portocaliu, la hover
  "accent-bright": "#ff7a1a", // accentul pe fundal de noapte: butoane, strălucire, scântei
  "accent-light": "#ff8f4d",  // accentul ca text pe fundal de noapte
  "accent-pale": "#ffb15c",   // scânteile mai deschise
  sketch: "#e2621b",          // detaliul colorat din desenele în cerneală
  night: "#15120f",           // secțiunile întunecate (admitere, „Patru ani”)
  chalk: "#f1ece2",           // textul pe secțiunile întunecate
};
