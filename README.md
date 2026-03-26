# Liceul Tehnologic Turceni — Site Web

Site web complet pentru Liceul Tehnologic Turceni, cu panou de administrare (CMS) pentru secretariat.

## Cum rulezi local

1. Instalează [Node.js](https://nodejs.org/) (versiunea 18+)
2. Instalează [Git](https://git-scm.com/)
3. Clonează sau dezarhivează proiectul
4. Creează fișierul `.env.local` (vezi secțiunea Sanity CMS)
5. Rulează:

```bash
cd C:\LTT
npm install
npm run dev
```

6. Site: `http://localhost:3000`
7. Panou administrare: `http://localhost:3000/studio`

## Structura proiectului

```
C:\LTT/
├── app/                            # Paginile site-ului (Next.js App Router)
│   ├── layout.tsx                  # Layout global (Header + Footer + FloatingContact)
│   ├── page.tsx                    # Homepage
│   ├── globals.css                 # Stiluri globale + dark mode + print
│   ├── not-found.tsx               # Pagina 404
│   ├── studio/                     # Panoul de administrare Sanity
│   │   ├── layout.tsx              # Layout fullscreen pt Studio
│   │   └── [[...tool]]/page.tsx    # Sanity Studio
│   ├── admitere/page.tsx           # Admitere 2026
│   ├── oferta/page.tsx             # Oferta educațională (8 profile)
│   ├── compara/                    # Comparator interactiv de profile
│   ├── noutati/page.tsx            # Noutăți — citește din Sanity CMS
│   ├── blog/page.tsx               # Jurnal LTT — citește din Sanity CMS
│   ├── examene/page.tsx            # Examene + Grafic BAC + Harta absolvenți
│   ├── calendar/page.tsx           # Calendar interactiv cu evenimente
│   ├── faq/page.tsx                # FAQ cu accordion + filtre
│   ├── galerie/page.tsx            # Galerie foto pe categorii
│   ├── contact/page.tsx            # Contact + formular Formspree
│   ├── transparenta/page.tsx       # Documente oficiale — citește din Sanity CMS
│   ├── profesori/page.tsx          # Echipa didactică — citește din Sanity CMS
│   ├── elevi/page.tsx              # Portal pentru elevi
│   ├── parinti/page.tsx            # Portal pentru părinți
│   ├── viitori-elevi/page.tsx      # Portal pentru viitori elevi (cls. VIII)
│   └── pentru-profesori/page.tsx   # Portal pentru cadre didactice
│
├── components/                     # Componente reutilizabile
│   ├── ui/                         # Componente mici
│   │   ├── Logo.tsx                # Logo LTT (SVG vectorial)
│   │   ├── GlowButton.tsx          # Buton cu efect glow la hover
│   │   ├── GlowCard.tsx            # Card cu efect glow la hover
│   │   ├── SectionHeader.tsx       # Header secțiune + AnimatedSection
│   │   ├── PlaceholderImage.tsx     # Imagine cu next/image optimizat
│   │   ├── Calendar.tsx            # Calendar interactiv cu evenimente
│   │   ├── FaqClient.tsx           # FAQ accordion (client component)
│   │   └── Widgets.tsx             # FloatingContact, Newsletter, DarkMode,
│   │                               # BacChart, AbsolventiMap
│   ├── layout/                     # Layout
│   │   ├── Header.tsx              # Header responsive + dark mode + hamburger
│   │   ├── Footer.tsx              # Footer 3 coloane cu toate linkurile
│   │   ├── QuickAccess.tsx         # Bară acces rapid (scrollabilă pe mobil)
│   │   └── PortalPage.tsx          # Component reutilizabil pt portaluri
│   └── sections/                   # Secțiuni homepage
│       ├── Hero.tsx
│       ├── OfertaPreview.tsx
│       └── HomeOtherSections.tsx
│
├── lib/                            # Date și configurare
│   ├── constants.ts                # Culori, navigare, contact, meta
│   ├── data.ts                     # Date statice (profile, noutăți, etc.)
│   ├── data-extra.ts               # Date statice (FAQ, blog)
│   ├── fetcher.ts                  # Sanity cu fallback la date statice
│   └── sanity.ts                   # Sanity client + GROQ queries
│
├── sanity/                         # Configurare CMS
│   ├── env.ts                      # Project ID, dataset
│   └── schemas/                    # Scheme de conținut
│       ├── index.ts                # Exportă toate schemele
│       ├── noutate.ts              # Noutăți/Anunțuri
│       ├── documentOficial.ts      # PDF-uri transparență
│       ├── eveniment.ts            # Evenimente calendar
│       ├── articol.ts              # Blog/Jurnal LTT
│       ├── galerieItem.ts          # Fotografii galerie
│       ├── profesorFaq.ts          # Profesori + FAQ
│       └── siteSettings.ts         # Statistici site (nr. elevi, cadre)
│
├── sanity.config.ts                # Configurare Sanity Studio
├── public/imagini/                 # Poze — copiază placeholder-urile aici
├── GHID_UTILIZARE.md               # Instrucțiuni pt secretariat
├── .env.local.example              # Template variabile de mediu
└── [config files]                  # package.json, tailwind, tsconfig, etc.
```

## Sanity CMS — Panoul de administrare

Secretariatul gestionează tot conținutul din browser la adresa `/studio`.

### Configurare inițială (o singură dată)

1. Creează cont pe [sanity.io](https://sanity.io)
2. Creează proiect nou → copiază **Project ID**
3. Creează fișierul `.env.local` în rădăcina proiectului:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=codul_tau_aici
NEXT_PUBLIC_SANITY_DATASET=production
```

4. Pe sanity.io/manage → API → CORS origins → adaugă:
   - `http://localhost:3000` (dezvoltare)
   - `https://liceul-turceni.vercel.app` (producție)
   - Bifează "Allow credentials" la ambele

### Ce gestionează CMS-ul

| Secțiune | Ce face secretariatul |
|---|---|
| Noutăți & Anunțuri | Postează anunțuri cu titlu, text, poză, categorie |
| Documente oficiale | Urcă PDF-uri (hotărâri CA, regulamente, RAEI) |
| Evenimente calendar | Adaugă evenimente care apar în calendar |
| Blog — Jurnal LTT | Publică articole de la elevi/profesori |
| Galerie foto | Urcă fotografii pe categorii |
| Cadre didactice | Adaugă/editează profesori și conducerea |
| FAQ | Adaugă/editează întrebări frecvente |
| Setări site | Actualizează numărul de elevi, cadre, etc. |

### Cum funcționează fallback-ul

Fiecare pagină verifică mai întâi Sanity CMS. Dacă găsește conținut → îl afișează. Dacă CMS-ul e gol sau neconfigurat → afișează datele statice din cod. Site-ul funcționează mereu, cu sau fără CMS.

## Formular de contact (Formspree)

1. Creează cont pe [formspree.io](https://formspree.io)
2. Creează un formular nou → copiază Form ID
3. Deschide `app/contact/page.tsx`
4. Înlocuiește `FORM_ID_AICI` cu codul tău
5. Mesajele ajung pe emailul configurat în Formspree

## Cum adaugi imagini

1. Dezarhivează `LTT_imagini_placeholder.zip` în `public/imagini/`
2. Structura: `public/imagini/02_laboratoare/Lab_fizica_1.jpg`
3. Când ai fotografii reale, înlocuiește cu același nume de fișier
4. Sau urcă poze prin panoul Sanity (Galerie foto) — ajung pe CDN automat

## Deploy pe Vercel

1. Cont pe [vercel.com](https://vercel.com) → conectează GitHub
2. Importă repo-ul `liceul-turceni`
3. Adaugă Environment Variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = codul tău
   - `NEXT_PUBLIC_SANITY_DATASET` = production
4. Deploy — site-ul e live în 1-2 minute
5. La fiecare `git push`, Vercel redeploy automat

## Actualizare site

```bash
cd C:\LTT
git add .
git commit -m "descriere ce am schimbat"
git push
```

Vercel actualizează automat. Conținutul din Sanity (noutăți, PDF-uri, poze) nu necesită git — se publică direct din `/studio`.

## Funcționalități

- 17 pagini cu navigare pe publicuri (Elevi, Părinți, Viitori elevi, Profesori)
- Sanity CMS — panou de administrare pentru secretariat
- Dark mode cu toggle în header
- Efecte glow pe butoane și carduri (doar la hover)
- Calendar interactiv cu evenimente colorate
- Grafic BAC interactiv (2020-2025)
- Harta absolvenților (unde lucrează)
- Comparator de profile (2-3 side-by-side)
- FAQ cu accordion și filtrare pe categorii
- Blog cu articole de elevi
- Formular de contact funcțional (Formspree)
- Buton floating Telefon + Email + FAQ
- Newsletter (formular abonare)
- Responsive (hamburger menu pe mobil)
- Print CSS (header/footer ascunse la print)
- Accesibilitate (skip-to-content, aria, focus-visible)
- 404 custom cu linkuri utile

## Tehnologii

- **Next.js 14** — framework React
- **TypeScript** — tipizare strictă
- **Tailwind CSS** — stilizare
- **Sanity v3** — CMS headless
- **Formspree** — formular de contact
- **Vercel** — hosting (gratuit)
- **Playfair Display + DM Sans** — fonturi

## Ghid pentru secretariat

Fișierul `GHID_UTILIZARE.md` conține instrucțiuni pas cu pas cu capturi de ecran conceptuale. Poate fi printat și lăsat la secretariat.
