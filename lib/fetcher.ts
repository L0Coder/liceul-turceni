/**
 * Fetcher cu fallback — încearcă Sanity, dacă nu e configurat sau e gol, folosește datele statice.
 * Astfel site-ul funcționează mereu, cu sau fără CMS.
 */
import {
  getNoutati, getDocumente, getEvenimente, getArticole,
  getGalerie, getProfesori, getFaq, getSettings, isSanityConfigured,
} from "./sanity";
import { NOUTATI, PARTENERIATE, TESTIMONIALE, STATS, EXAMENE, ADMITERE, TRANSPARENTA, GALERIE_CATEGORII, PROFILE } from "./data";
import { FAQ_DATA, BLOG_POSTS } from "./data-extra";

// Wrapper sigur — nu crapă dacă Sanity nu e configurat
async function safeFetch<T>(fetcher: () => Promise<T>, fallback: T): Promise<T> {
  if (!isSanityConfigured()) return fallback;
  try {
    const result = await fetcher();
    if (!result || (Array.isArray(result) && result.length === 0)) return fallback;
    return result;
  } catch (err) {
    console.warn("[CMS] Fallback la date statice:", err);
    return fallback;
  }
}

// ═══ FORMATARE DATE ═══
// Sanity livrează date ISO (2026-03-15). Datele statice sunt deja în română.
// Convertim ISO → "15 Martie 2026" pentru afișare consistentă.
const LUNI_RO = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie",
  "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];

export function formatDateRO(date: string | null | undefined): string {
  if (!date) return "";
  const isoMatch = /^(\d{4})-(\d{2})-(\d{2})/.exec(date);
  if (!isoMatch) return date; // deja în format românesc (date statice)
  const [, y, m, d] = isoMatch;
  return `${parseInt(d)} ${LUNI_RO[parseInt(m) - 1]} ${y}`;
}

// Aplică formatarea pe câmpul `date` al fiecărui element dintr-o listă
function withRoDates<T extends { date?: string | null }>(items: T[]): T[] {
  return items.map(item => ({ ...item, date: formatDateRO(item.date) }));
}

// ═══ FUNCȚII PUBLICE — importate de pagini ═══

export async function fetchNoutati() {
  const staticData = NOUTATI.map(n => ({
    _id: n.slug, title: n.title, slug: n.slug, category: n.category,
    date: n.date, excerpt: n.excerpt, content: n.content,
    imageUrl: n.image ? `/imagini/${n.image}` : null,
  }));
  const result = await safeFetch(getNoutati, staticData);
  return withRoDates(result);
}

export async function fetchDocumente() {
  const staticData = TRANSPARENTA.map((t, i) => ({
    _id: `doc-${i}`, title: t, category: "altele", date: null, description: null, fileUrl: null,
  }));
  const result = await safeFetch(getDocumente, staticData);
  return withRoDates(result);
}

export async function fetchEvenimente() {
  return safeFetch(getEvenimente, []);
}

export async function fetchArticole() {
  const staticData = BLOG_POSTS.map(p => ({
    _id: p.slug, title: p.title, slug: p.slug, author: p.author,
    authorRole: p.authorRole, date: p.date, category: p.category,
    excerpt: p.excerpt, content: p.content,
    imageUrl: p.image ? `/imagini/${p.image}` : null,
  }));
  const result = await safeFetch(getArticole, staticData);
  return withRoDates(result);
}

export async function fetchGalerie() {
  return safeFetch(getGalerie, []);
}

export async function fetchProfesori() {
  return safeFetch(getProfesori, []);
}

export async function fetchFaq() {
  const staticData = FAQ_DATA.map((f, i) => ({
    _id: `faq-${i}`, question: f.question, answer: f.answer, category: f.category,
  }));
  return safeFetch(getFaq, staticData);
}

export async function fetchSettings() {
  return safeFetch(getSettings, {
    eleviCount: 1604, cadreCount: 155, profileCount: 8,
    aniExcelenta: "44", anScolar: "2025-2026",
    perioadaAdmitere: "Înscrierile sunt deschise!",
  });
}

// Re-export date statice care nu sunt în CMS (încă)
export { PROFILE, PARTENERIATE, TESTIMONIALE, STATS, EXAMENE, ADMITERE, GALERIE_CATEGORII };
