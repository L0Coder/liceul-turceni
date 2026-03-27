# Liceul Tehnologic Turceni — Site Web

Site web complet pentru Liceul Tehnologic Turceni (înființat 1982), cu panou de administrare (CMS) pentru secretariat.

**Site live:** https://liceul-turceni.vercel.app
**Panou administrare:** https://liceul-turceni.vercel.app/studio
**Cod sursă:** https://github.com/L0Coder/liceul-turceni

---

## Cum rulezi local

```bash
npm install
npm run dev
```

- Site: http://localhost:3000
- Panou administrare: http://localhost:3000/studio

Necesită Node.js 18+ și fișierul `.env.local` configurat (vezi secțiunea Sanity CMS).

---

## Structura proiectului

```
app/                            Paginile site-ului (Next.js 14 App Router)
├── page.tsx                    Homepage
├── layout.tsx                  Layout global (Header + Footer + FloatingContact)
├── globals.css                 Stiluri globale + dark mode + print
├── not-found.tsx               Pagina 404
├── studio/                     Panoul de administrare Sanity (fullscreen)
├── admitere/                   Admitere 2026 — documente, calendar, profile
├── oferta/                     Oferta educațională — 8 profile detaliate
├── compara/                    Comparator interactiv de profile (2-3 side-by-side)
├── noutati/                    Noutăți — citește din Sanity CMS
├── blog/                       Jurnal LTT — citește din Sanity CMS
├── examene/                    Examene + linkuri rezultate oficiale + harta absolvenți
├── calendar/                   Calendar interactiv cu evenimente
├── faq/                        FAQ cu accordion și filtrare
├── galerie/                    Galerie foto pe categorii
├── contact/                    Contact + formular Formspree
├── transparenta/               Documente oficiale PDF — citește din Sanity CMS
├── profesori/                  Echipa didactică — citește din Sanity CMS
├── elevi/                      Portal pentru elevi
├── parinti/                    Portal pentru părinți
├── viitori-elevi/              Portal pentru viitori elevi (cls. VIII)
└── pentru-profesori/           Portal pentru cadre didactice

components/
├── ui/                         Logo, GlowButton, GlowCard, SectionHeader,
│                               PlaceholderImage, Calendar, FaqClient, Widgets
├── layout/                     Header, Footer, QuickAccess, PortalPage
└── sections/                   Hero, OfertaPreview, HomeOtherSections

lib/
├── constants.ts                Navigare, contact, meta
├── data.ts                     Date statice (profile, noutăți placeholder)
├── data-extra.ts               Date statice (FAQ, blog placeholder)
├── fetcher.ts                  Sanity cu fallback la date statice
└── sanity.ts                   Sanity client + GROQ queries

sanity/
├── env.ts                      Project ID, dataset
└── schemas/                    7 scheme: noutate, documentOficial, eveniment,
                                articol, galerieItem, profesor+faq, siteSettings

sanity.config.ts                Configurare Sanity Studio
GHID_UTILIZARE.md               Instrucțiuni complete pentru secretariat
```

---

## Sanity CMS — Panoul de administrare

Secretariatul gestionează conținutul din browser la `/studio`, fără cunoștințe tehnice.

### Configurare inițială (o singură dată)

1. Cont pe [sanity.io](https://sanity.io) → proiect nou → copiază **Project ID**
2. Creează `.env.local` în rădăcina proiectului:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=codul_tau
NEXT_PUBLIC_SANITY_DATASET=production
```
3. Pe sanity.io/manage → API → CORS origins → adaugă:
   - `http://localhost:3000` + "Allow credentials"
   - `https://liceul-turceni.vercel.app` + "Allow credentials"
4. Pe Vercel → Settings → Environment Variables → adaugă aceleași două variabile

### Ce gestionează CMS-ul

| Secțiune | Pagina de pe site |
|---|---|
| Noutăți & Anunțuri | /noutati + homepage |
| Documente oficiale (PDF) | /transparenta |
| Evenimente calendar | /calendar |
| Blog — Jurnal LTT | /blog |
| Galerie foto | /galerie |
| Cadre didactice | /profesori |
| FAQ | /faq |
| Setări site (nr. elevi, an școlar) | Homepage statistici |

### Cum funcționează fallback-ul

Dacă CMS-ul e gol sau neconfigurat → site-ul afișează date demonstrative din cod.
Dacă CMS-ul are conținut → afișează exclusiv ce e în CMS.
Site-ul funcționează mereu, indiferent de starea CMS-ului.

### Conținut care NU e în CMS (e în cod)

- Descrierile celor 8 profile educaționale (`lib/data.ts`)
- Testimonialele de pe homepage (`lib/data.ts`)
- Informațiile din portaluri (Elevi, Părinți, etc.)
- Datele de contact (telefon, adresă, email) (`lib/constants.ts`)
- Structura paginilor, design, logo

Pentru a modifica acestea, trebuie editat codul și dat `git push`.

---

## Formular de contact (Formspree)

1. Cont pe [formspree.io](https://formspree.io) → formular nou → copiază Form ID
2. În `app/contact/page.tsx` înlocuiește `FORM_ID_AICI` cu codul tău
3. `git push` — mesajele ajung pe emailul configurat

---

## Imagini

**Prin CMS (recomandat pentru galerie):** Studio → Galerie foto → Upload → Publish. Ajung pe CDN Sanity automat.

**Prin cod (pentru profiluri, homepage):** Pune fișierele în `public/imagini/` cu structura:
```
public/imagini/02_laboratoare/Lab_fizica_1.jpg
public/imagini/04_club_robotica/Club_robotica_1.jpg
```
Apoi `git push`. Numele trebuie să coincidă cu cele din `lib/data.ts`.

---

## Deploy și actualizare

**Conținut (noutăți, PDF-uri, poze, FAQ):** Secretariatul publică din `/studio` → apare pe site în 60 secunde. Fără git, fără redeploy.

**Cod (structură, design, componente):**
```bash
git add .
git commit -m "descriere"
git push
```
Vercel redeploy automat în 1-2 minute.

---

## Funcționalități

**Pagini:** 17 pagini cu navigare pe publicuri (Elevi, Părinți, Viitori elevi, Profesori)

**CMS:** Sanity Studio integrat — secretariatul gestionează conținut din browser

**Interactivitate:**
- Dark mode cu toggle în header
- Efecte glow pe butoane și carduri (doar la hover)
- Calendar interactiv cu evenimente colorate pe tipuri
- Comparator de profile (2-3 side-by-side)
- FAQ cu accordion și filtrare pe categorii

**Comunicare:**
- Formular de contact (Formspree)
- Buton floating Telefon + Email + FAQ
- Newsletter (formular abonare)

**Tehnic:**
- Responsive (hamburger menu pe mobil, grid-uri adaptive)
- Print CSS (header/footer ascunse la print)
- Accesibilitate (skip-to-content, aria, focus-visible)
- SEO (metadata pe fiecare pagină)
- Revalidare automată conținut CMS (60 secunde)
- Fallback la date statice dacă CMS-ul e indisponibil

---

## Tehnologii

- **Next.js 14** + TypeScript
- **Tailwind CSS** — stilizare
- **Sanity v3** — CMS headless
- **Formspree** — formular contact
- **Vercel** — hosting gratuit
- **Playfair Display + DM Sans** — fonturi

---

## Date reale verificate

- **Înființat:** 1 septembrie 1982
- **Elevi:** 1604 | **Cadre didactice:** 155
- **Director:** Prof. Cornescu Doru-Ion
- **Adresa:** Str. Educației nr. 1, Turceni 217520, Gorj
- **Telefon:** 0253-335012 | **Email:** licturceni@yahoo.com
- **Evaluare Națională 2025:** media 7.20
- **Rezultate BAC:** consultați [bacplus.ro](https://www.bacplus.ro/i/liceul-tehnologic-turceni)
- **Modernizare 2025:** dotare cu mobilier și echipamente digitale prin PNRR

---

## Ghid pentru secretariat

Fișierul `GHID_UTILIZARE.md` conține instrucțiuni complete pas cu pas:
- Cum postezi anunțuri, urci PDF-uri, adaugi evenimente
- Cum gestionezi galeria foto, profesorii, FAQ
- Cum actualizezi datele anuale
- Greșeli frecvente de evitat
- Întrebări tehnice frecvente
- Calendar de activități (zilnic/săptămânal/lunar/anual)

Poate fi printat și lăsat la secretariat.
