/* ═══ PALETA SITE-ULUI ═══
   Singurul loc unde se schimbă culorile. tailwind.config.ts le transformă în variabile CSS
   (--paper, --accent...) și în clase (bg-paper, text-accent, hover:bg-accent-hover...).
   Imaginea de previzualizare (opengraph) și culoarea barei browserului le citesc direct de aici.
   Valorile sunt hex obișnuit; opacitatea se pune din clase (bg-accent/10, text-chalk/75).
   Paleta pornește de la siglă: bleumarin pentru cerneală, portocaliu și turcoaz pentru accente. */

/** Culorile siglei LTT. */
export const sigla = {
  navy: "#1f3b5b",
  orange: "#f26b00",
  teal: "#2aa198",
};

/** Culori care se schimbă între modul luminos și cel întunecat. */
export const tema = {
  luminos: {
    paper: "#fbf8f2",      // hârtia: fundalul paginii, alb cald
    "paper-2": "#f3eee4",  // hârtie puțin mai închisă: carduri, casete
    ink: "#16263b",        // cerneala: textul principal, bleumarin foarte închis
    "ink-soft": "#4a5a6e", // text secundar
    line: "#e2dccf",       // linii și borduri
    "accent-text": "#bb4500", // accentul ca text mic, închis destul pentru AA pe ambele hârtii
    "accent-display": "#e25300", // accentul în titlurile mari (AA pentru text mare)
    "accent-2": "#1f8f87", // turcoazul siglei, pentru buline, borduri și sublinieri (nu pentru text mic)
    footer: "#172e48",     // subsolul: bleumarinul siglei, puțin mai adânc ca text-white/50 să treacă AA
  },
  intunecat: {
    paper: "#0f1826",
    "paper-2": "#162133",
    ink: "#ece8e0",
    "ink-soft": "#a3adbb",
    line: "#2a3648",
    "accent-text": "#ff8f4d",
    "accent-display": "#ff8f4d",
    "accent-2": "#34d1c4",
    footer: "#0a1220",
  },
};

/** Culori la fel în ambele moduri. */
export const comune = {
  accent: "#cc4700",          // portocaliul liceului pe suprafețe cu text alb: butoane, buline, bara de progres
  "accent-hover": "#a83a00",  // butonul plin portocaliu, la hover
  "accent-bright": "#ff7a1a", // accentul pe fundal de noapte: butoane, strălucire, scântei
  "accent-light": "#ff8f4d",  // accentul ca text pe fundal de noapte
  "accent-pale": "#ffb15c",   // scânteile mai deschise
  sketch: "#f26b00",          // detaliul colorat din desenele în cerneală, portocaliul siglei
  night: "#10223a",           // secțiunile întunecate (admitere, „Patru ani”), bleumarin adânc
  chalk: "#f3efe6",           // textul pe secțiunile întunecate
};
