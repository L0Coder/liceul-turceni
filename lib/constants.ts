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

export const CONTACT = {
  adresa: "Str. Educației nr. 1, Turceni 217520, Județul Gorj",
  telefon: "0253-335012", fax: "0253-335011",
  email: "licturceni@yahoo.com",
  program: "Luni — Vineri: 8:00 — 16:00",
  director: "Prof. Cornescu Doru-Ion",
  facebook: "https://www.facebook.com/Turceni/",
} as const;

export const EXTERNAL_LINKS = [
  { label: "ISJ Gorj", href: "https://www.isjgorj.ro/" },
  { label: "Ministerul Educației", href: "https://www.edu.ro/" },
  { label: "Primăria Turceni", href: "https://www.primariaturceni.ro/" },
  { label: "Complexul Energetic Oltenia", href: "https://ceoltenia.ro/" },
] as const;

export const SITE_META = {
  title: "Liceul Tehnologic Turceni",
  description: "Liceul Tehnologic Turceni — 8 profiluri educaționale, 1604 elevi, 155 cadre didactice. Formăm profesioniștii de mâine în județul Gorj.",
  url: "https://www.liceulturceni.ro",
} as const;
