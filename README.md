# Liceul Tehnologic Turceni — Site Web

## Cum rulezi local

1. Instalează [Node.js](https://nodejs.org/) (versiunea 18+)
2. Clonează sau dezarhivează proiectul
3. Deschide un terminal în folderul proiectului
4. Rulează comenzile:

```bash
npm install
npm run dev
```

5. Deschide browser-ul la `http://localhost:3000`

## Structura proiectului

```
liceul-turceni/
├── app/                        # Paginile site-ului (Next.js App Router)
│   ├── layout.tsx              # Layout global (Header + Footer + ChatBot + WhatsApp)
│   ├── page.tsx                # Homepage (+ Newsletter)
│   ├── globals.css             # Stiluri globale + dark mode + print + reduced motion
│   ├── not-found.tsx           # Pagina 404
│   ├── admitere/page.tsx       # Admitere 2026 — documente, calendar, profile
│   ├── oferta/page.tsx         # Oferta educațională — 8 profile detaliate
│   ├── compara/page.tsx        # ★ Comparator interactiv de profile (2-3 side-by-side)
│   ├── noutati/page.tsx        # Noutăți și anunțuri
│   ├── blog/page.tsx           # ★ Jurnal LTT — articole scrise de elevi
│   ├── examene/page.tsx        # Examene + ★ Grafic BAC + ★ Harta absolvenților
│   ├── calendar/page.tsx       # ★ Calendar interactiv cu evenimente
│   ├── faq/page.tsx            # ★ Întrebări frecvente cu accordion + filtre
│   ├── galerie/page.tsx        # Galerie foto pe categorii
│   ├── contact/page.tsx        # Contact + formular
│   ├── transparenta/page.tsx   # Documente oficiale
│   └── profesori/page.tsx      # Echipa didactică
│
├── components/                 # Componente reutilizabile
│   ├── ui/                     # Componente mici
│   │   ├── Logo.tsx            # Logo LTT (Version C)
│   │   ├── GlowButton.tsx      # Buton cu efect glow animat
│   │   ├── GlowCard.tsx        # Card cu efect glow la hover
│   │   ├── SectionHeader.tsx   # Header de secțiune + AnimatedSection
│   │   ├── PlaceholderImage.tsx # Imagine cu path auto din /public/imagini/
│   │   ├── Calendar.tsx        # ★ Calendar interactiv cu evenimente colorate
│   │   └── Widgets.tsx         # ★ BacChart, AbsolventiMap, ChatBot, WhatsApp,
│   │                           #   Newsletter, DarkModeToggle
│   ├── layout/                 # Componente de layout
│   │   ├── Header.tsx          # Header responsive + hamburger + ★ dark mode toggle
│   │   ├── Footer.tsx          # Footer 4 coloane cu toate linkurile
│   │   └── QuickAccess.tsx     # Bară de acces rapid
│   └── sections/               # Secțiuni homepage
│       ├── Hero.tsx
│       ├── OfertaPreview.tsx
│       └── HomeOtherSections.tsx # Stats, Parteneriate, Noutăți, Testimoniale, CTA
│
├── lib/                        # Date și configurare
│   ├── constants.ts            # Culori, navigare, contact, meta
│   ├── data.ts                 # Conținut principal: profile, noutăți, testimoniale
│   └── data-extra.ts           # ★ FAQ, blog, calendar, BAC stats, absolvenți
│
├── public/                     # Fișiere statice
│   └── imagini/                # ← PUNEȚI IMAGINILE AICI
│
└── [config files]              # package.json, tailwind, tsconfig, etc.
```

★ = funcționalitate nouă

## Cum adaugi imagini

1. Dezarhivează `LTT_imagini_placeholder.zip` în `public/imagini/`
2. Structura trebuie să fie: `public/imagini/01_cladire/Cladire_principala_1.jpg`
3. Când ai fotografii reale, înlocuiește placeholder-ul cu același nume de fișier
4. Specificații: minim 1920×1080px, JPG, bine iluminate

## Cum modifici conținutul

Tot conținutul este în **`lib/data.ts`**. Deschide fișierul și modifică:

- **PROFILE** — descrierile celor 8 profile educaționale
- **NOUTATI** — anunțurile și evenimentele
- **PARTENERIATE** — informații despre parteneri
- **TESTIMONIALE** — citatele de la absolvenți/părinți
- **EXAMENE** — calendarele de examene
- **ADMITERE** — documentele și calendarul de admitere
- **TRANSPARENTA** — lista documentelor oficiale

Constantele (adresă, telefon, email) sunt în **`lib/constants.ts`**.

## Cum faci deploy pe Vercel

1. Creează un cont pe [vercel.com](https://vercel.com)
2. Conectează-ți contul GitHub
3. Importă repo-ul proiectului
4. Vercel detectează automat Next.js și configurează build-ul
5. La fiecare push pe `main`, site-ul se actualizează automat

## Ce rămâne de făcut

- [ ] Înlocuire imagini placeholder cu fotografii reale
- [ ] Verificare și actualizare texte cu date reale de la liceu
- [ ] Conectare formular contact la Formspree/Resend
- [ ] Conectare Newsletter la Mailchimp/Buttondown
- [ ] Adăugare Google Maps embed pe pagina Contact
- [ ] Adăugare PDF-uri reale în /public/documente/
- [ ] Configurare număr WhatsApp real pentru butonul floating
- [ ] Setup CMS (Sanity) pentru noutăți dinamice
- [ ] Setup email profesional (contact@liceulturceni.ro)
- [ ] Configurare Analytics (Plausible)
- [ ] Testare dark mode pe toate paginile
- [ ] Testare cross-browser și cross-device
- [ ] Audit Lighthouse → target 90+

## Funcționalități incluse

- 🏠 **16 pagini** — homepage, admitere, ofertă, comparator, noutăți, blog, examene, calendar, FAQ, galerie, contact, transparență, profesori, 404
- ✨ **Efecte glow** — butoane și carduri cu border animat luminos
- 💬 **ChatBot** — asistent virtual cu arbore de decizii
- 📱 **WhatsApp** — buton floating de contact rapid
- 📧 **Newsletter** — formular de abonare pe homepage
- 🌙 **Dark mode** — toggle light/dark în header
- 📅 **Calendar interactiv** — vizualizare lunară cu evenimente colorate
- 📊 **Grafic BAC** — evoluția rezultatelor pe 6 ani cu tooltip
- 🗺️ **Harta absolvenților** — unde lucrează foștii elevi
- 🔍 **Comparator** — compară 2-3 profile side-by-side
- ❓ **FAQ** — 14 întrebări cu accordion și filtrare
- ✍️ **Blog** — articole de elevi cu format editorial
- 📱 **Responsive** — hamburger menu pe mobil
- 🖨️ **Print CSS** — pagini printabile
- ♿ **Accesibilitate** — focus visible, reduced motion, semantic HTML

## Tehnologii utilizate

- **Next.js 14** — framework React cu routing și SSR
- **TypeScript** — tipizare strictă
- **Tailwind CSS** — stilizare utilitar
- **Playfair Display + DM Sans** — fonturi
- **Vercel** — hosting recomandat (gratuit)

## Contact dezvoltator

Pentru întrebări tehnice sau probleme cu site-ul, contactați dezvoltatorul.
