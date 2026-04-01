# Liceul Tehnologic Turceni — Site Web

Site web complet pentru Liceul Tehnologic Turceni (înființat 1982), cu panou de administrare (CMS) pentru secretariat, conform cerințelor ARACIP și GDPR.

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
app/                            21 pagini publice + studio + 404
├── page.tsx                    Homepage
├── layout.tsx                  Layout global (Header, Footer, CookieBanner, FloatingContact)
├── globals.css                 Stiluri globale + dark mode + print
├── not-found.tsx               Pagina 404
│
├── studio/                     Panoul de administrare Sanity (fullscreen)
│
│   ── PAGINI CONȚINUT ──
├── despre/                     Despre noi — istoric, cifre, niveluri, conducere
├── admitere/                   Admitere — documente, calendar, profiluri
├── oferta/                     Oferta educațională — 8 profiluri detaliate
├── compara/                    Comparator interactiv de profiluri (2-3 side-by-side)
├── noutati/                    Noutăți — citește din Sanity CMS
├── blog/                       Jurnal LTT — citește din Sanity CMS
├── examene/                    Examene + linkuri rezultate oficiale + harta absolvenți
├── calendar/                   Calendar interactiv cu evenimente
├── faq/                        FAQ cu accordion și filtrare
├── galerie/                    Galerie foto pe categorii
├── contact/                    Contact + formular Formspree
├── transparenta/               Documente oficiale PDF — citește din Sanity CMS
├── profesori/                  Echipa didactică — citește din Sanity CMS
│
│   ── PORTALURI PE PUBLICURI ──
├── elevi/                      Portal pentru elevi actuali
├── parinti/                    Portal pentru părinți
├── viitori-elevi/              Portal pentru viitori elevi (cls. VIII)
├── pentru-profesori/           Portal pentru cadre didactice
│
│   ── PAGINI LEGALE / CONFORMITATE ──
├── gdpr/                       Politica de confidențialitate (GDPR)
├── cookies/                    Politica de cookies
└── accesibilitate/             Declarație de accesibilitate (HG 780/2022)

components/
├── ui/                         Logo, GlowButton, GlowCard, SectionHeader,
│                               PlaceholderImage, Calendar, FaqClient,
│                               Widgets, CookieBanner, ScrollToTop, Breadcrumbs
├── layout/                     Header, Footer, QuickAccess, PortalPage
└── sections/                   Hero, OfertaPreview, HomeOtherSections

lib/
├── constants.ts                Navigare, contact, meta
├── data.ts                     Date statice (profiluri, noutăți, transparență)
├── data-extra.ts               Date statice (FAQ, blog)
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

| Secțiune din panou | Pagina de pe site |
|---|---|
| Noutăți & Anunțuri | /noutati + homepage |
| Documente oficiale (PDF) | /transparenta |
| Evenimente calendar | /calendar |
| Blog — Jurnal LTT | /blog |
| Galerie foto | /galerie |
| Cadre didactice | /profesori |
| FAQ | /faq |
| Setări site (nr. elevi, an școlar) | Homepage statistici |

### Categorii documente ARACIP

Panoul de administrare include 19 categorii de documente, acoperind toate cerințele ARACIP:
ROF, RI, PDI, Plan managerial, RAEI, Evaluare ARACIP, Raport activitate, Execuție bugetară, Buget, Hotărâri CA, Declarații avere/interese, Informații publice (Legea 544), GDPR, Mobilitate personal, Organigramă, Cod de etică, Plan școlarizare, Proceduri operaționale.

### Cum funcționează fallback-ul

Dacă CMS-ul e gol sau neconfigurat → site-ul afișează date demonstrative din cod.
Dacă CMS-ul are conținut → afișează exclusiv ce e în CMS.
Site-ul funcționează mereu, indiferent de starea CMS-ului.

### Conținut care NU e în CMS (e în cod)

- Descrierile celor 8 profiluri educaționale (`lib/data.ts`)
- Testimonialele de pe homepage (`lib/data.ts`)
- Informațiile din portaluri (Elevi, Părinți, etc.)
- Datele de contact (telefon, adresă, email) (`lib/constants.ts`)
- Paginile legale (GDPR, Cookies, Accesibilitate)
- Structura paginilor, design, logo

Pentru a modifica acestea, trebuie editat codul și dat `git push`.

---

## Conformitate legală

### GDPR (Regulamentul UE 2016/679)
- Pagină dedicată `/gdpr` cu: operator de date, DPO, scopuri prelucrare, temei legal, drepturi persoane vizate, protecția minorilor, transfer date
- Banner de cookies la prima vizită cu Accept/Refuză
- Pagină `/cookies` cu detalii despre fiecare tip de cookie
- Honeypot anti-spam pe formularul de contact (fără CAPTCHA intruziv)

### Accesibilitate (HG 780/2022, Directiva UE 2016/2102)
- Declarație de accesibilitate la `/accesibilitate`
- Skip-to-content, navigare cu tastatura, focus vizibil
- Atribute aria, structură semantică HTML
- Suport `prefers-reduced-motion`
- Contrast verificat, text redimensionabil

### Transparență instituțională (Legea 544/2001, ARACIP)
- Pagina `/transparenta` cu 18 categorii de documente
- Upload PDF prin CMS cu categorii ARACIP
- Link descărcare directă

---

## Formular de contact (Formspree)

1. Cont pe [formspree.io](https://formspree.io) → formular nou → copiază Form ID
2. În `app/contact/page.tsx` înlocuiește `FORM_ID_AICI` cu codul tău
3. `git push` — mesajele ajung pe emailul configurat

---

## Imagini

**Prin CMS (recomandat pentru galerie):** Studio → Galerie foto → Upload → Publish. Ajung pe CDN Sanity automat.

**Prin cod (pentru profiluri, homepage):** Pune fișierele în `public/imagini/` cu structura din `lib/data.ts`. Apoi `git push`.

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

**21 pagini publice** cu navigare pe publicuri (Elevi, Părinți, Viitori elevi, Profesori) + 3 pagini legale (GDPR, Cookies, Accesibilitate)

**CMS:** Sanity Studio integrat — secretariatul gestionează conținut din browser

**Interactivitate:** Dark mode, efecte glow la hover, calendar interactiv, comparator de profiluri, FAQ cu accordion și filtrare, buton scroll-to-top, breadcrumbs cu schema.org SEO, Google Maps pe pagina de contact

**Comunicare:** Formular de contact (Formspree), buton floating Telefon + Email + FAQ, newsletter, linkuri instituționale (ISJ Gorj, MEN, ARACIP, BacPlus)

**Conformitate:** GDPR cu aviz de informare, banner cookies, declarație accesibilitate HG 780/2022, documente ARACIP cu 19 categorii, transparență Legea 544/2001

**Tehnic:** Responsive, print CSS, accesibilitate (skip-to-content, aria, focus-visible), SEO (metadata pe fiecare pagină), revalidare CMS 60 secunde, fallback la date statice

**Backup:** Cod pe GitHub, conținut pe Sanity (cloud, cu version history), deploy-uri pe Vercel (reversibile)

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
- **Modernizare 2025:** dotare PNRR — mobilier, laptopuri, table interactive, echipamente digitale (2.163.924 lei)

---

## Ghid pentru secretariat

Fișierul `GHID_UTILIZARE.md` conține instrucțiuni complete:
- Cum postezi anunțuri, urci PDF-uri, adaugi evenimente
- Cum gestionezi galeria, profesorii, FAQ
- Categoriile de documente ARACIP
- Cum actualizezi datele anuale
- Greșeli frecvente de evitat
- Întrebări tehnice frecvente
- Calendar de activități (zilnic/săptămânal/lunar/anual)
- Informații despre paginile legale (GDPR, Cookies, Accesibilitate)

Poate fi printat și lăsat la secretariat.
