export const NAV_ITEMS = [
  { label: "Acasă", href: "/" },
  { label: "Elevi", href: "/elevi" },
  { label: "Părinți", href: "/parinti" },
  { label: "Viitori elevi", href: "/viitori-elevi" },
  { label: "Profesori", href: "/pentru-profesori" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const QUICK_ACCESS = [
  { icon: "📅", label: "Calendar", href: "/calendar" },
  { icon: "📊", label: "Examene", href: "/examene" },
  { icon: "💻", label: "Oferta", href: "/oferta" },
  { icon: "🤖", label: "Club Robotică", href: "/galerie#club-robotica" },
  { icon: "❓", label: "FAQ", href: "/faq" },
  { icon: "📞", label: "Contact", href: "/contact" },
] as const;

/* ═══ VALORI CARE DEPIND DE DATĂ ═══
   Se recalculează singure. NU le transformați în text fix — altfel devin
   greșite tăcut la 1 septembrie, când începe noul an școlar. */
export const ANUL_INFIINTARII = 1982; // 1 septembrie 1982

/** Anul în care a început anul școlar aflat în curs. Pragul e 1 septembrie. */
function anulScolarStart(d: Date): number {
  return d.getMonth() >= 8 ? d.getFullYear() : d.getFullYear() - 1;
}

/** Anul școlar în curs, ex. "2026-2027". */
export function anScolarCurent(d: Date = new Date()): string {
  const s = anulScolarStart(d);
  return `${s}-${s + 1}`;
}

/** Campania de admitere spre care are sens să trimitem vizitatorii. */
export function anAdmitere(d: Date = new Date()): number {
  return anulScolarStart(d) + 1;
}

/** Al câtelea an școlar de la înființare (1982-1983 = primul). */
export function aniDeActivitate(d: Date = new Date()): number {
  return anulScolarStart(d) - ANUL_INFIINTARII + 1;
}

/* ═══ CONDUCEREA UNITĂȚII ═══
   SURSĂ UNICĂ. La schimbarea conducerii se modifică DOAR aici — se propagă
   automat în paginile Despre, Profesori și Contact.
   `titlu` = gradul didactic, `nume` = numele propriu-zis (dă și inițiala din avatar). */
export const CONDUCERE = [
  { titlu: "Prof.", nume: "Manolache Mihai", functie: "Director" },
  { titlu: "Prof.", nume: "Bîcleșeanu Marin", functie: "Director adjunct" },
  { titlu: "Prof. înv. primar", nume: "Bivolaru Elena-Cristina", functie: "Director adjunct" },
] as const;

export const CONTACT = {
  adresa: "Str. Educației nr. 1, Turceni 217520, Județul Gorj",
  telefon: "0253-335012", fax: "0253-335011",
  email: "licturceni@yahoo.com",
  program: "Luni — Vineri: 8:00 — 16:00",
  director: `${CONDUCERE[0].titlu} ${CONDUCERE[0].nume}`,
  facebook: "https://www.facebook.com/Turceni/",
} as const;

export const EXTERNAL_LINKS = [
  { label: "ISJ Gorj", href: "https://www.isjgorj.ro/" },
  { label: "Ministerul Educației", href: "https://www.edu.ro/" },
  { label: "Primăria Turceni", href: "https://www.primariaturceni.ro/" },
  { label: "Complexul Energetic Oltenia", href: "https://ceoltenia.ro/" },
] as const;

/* ═══ ADRESA SITE-ULUI ═══
   SURSĂ UNICĂ. Folosită de sitemap, robots.txt, breadcrumbs, OpenGraph și
   Schema.org — toate trebuie să indice ACELAȘI domeniu, altfel Google și
   rețelele sociale primesc semnale contradictorii.

   La mutarea pe liceulturceni.ro: NU se modifică fișiere. Se adaugă pe Vercel
   variabila  NEXT_PUBLIC_SITE_URL = https://www.liceulturceni.ro
   și se face Redeploy. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://liceul-turceni.vercel.app"
).replace(/\/+$/, "");

export const SITE_META = {
  title: "Liceul Tehnologic Turceni",
  description: "Liceul Tehnologic Turceni — 8 profiluri educaționale, 1604 elevi, 155 cadre didactice. Formăm profesioniștii de mâine în județul Gorj.",
  url: SITE_URL,
} as const;
