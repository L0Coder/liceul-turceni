# De verificat pe site

Afirmații publicate pe site care nu au putut fi verificate pe sursa oficială când au fost scrise
(octombrie 2026: edu.ro, Monitorul Oficial, eur-lex, isjgorj.ro și site-urile furnizorilor nu erau
accesibile din mediul de lucru). Fiecare rând spune **unde se verifică** și **unde se modifică**.
După verificare se bifează și se trec data și persoana; dacă ceva e greșit, se corectează în fișierul indicat.

## 1. Politica de confidențialitate (`app/gdpr/page.tsx`) — pentru responsabilul cu protecția datelor (DPO)

Textul Regulamentului se citește pe eur-lex.europa.eu, forma consolidată a Regulamentului (UE) 2016/679.

- [ ] **Temeiul pentru mesajele din formularul de contact:** art. 6 alin. (1) lit. e) (sarcină de interes public).
      De confirmat pe art. 6 alin. (1), inclusiv fraza de după lit. f), despre autoritățile publice.
- [ ] **Temeiul pentru documentele de pe pagina Transparență:** art. 6 alin. (1) lit. c) (obligație legală).
      De confirmat **care act impune publicarea** fiecărui tip de document (ROFUIP, Legea 198/2023, Legea 544/2001).
- [ ] **Calitatea de operator** a liceului (art. 4 pct. 7) și lista drepturilor (art. 15–22), cu limita ștergerii (art. 17 alin. (3)).
- [ ] **Termenul de răspuns de 30 de zile calendaristice** (angajament al liceului): de comparat cu art. 12 alin. (3).
- [ ] **Incidentele de securitate:** formularea trimite la art. 33 și 34, fără cifre; de confirmat procedura internă.
- [ ] **Transferurile în afara SEE:** dacă Vercel și Formspree au mecanisme valabile (clauze contractuale standard,
      Cadrul UE-SUA), pe vercel.com/legal și formspree.io/legal.
- [ ] **Formspree e folosit efectiv?** Doar dacă pe Vercel e setată variabila `NEXT_PUBLIC_FORMSPREE_ID`.
      Dacă nu, formularul deschide aplicația de email, iar Formspree se poate scoate din pagină.
- [ ] **Sanity:** unde stochează datele (sanity.io/legal).
- [ ] **Datele de contact ANSPDCP** (adresă, telefon, fax, email), pe dataprotection.ro.
- [ ] **DPO:** decizia de desemnare există? Dacă liceul are o adresă de email dedicată DPO, se trece în `lib/constants.ts` (`DPO`).
- [ ] **Practica fotografiilor:** formularul de acord e distribuit anual? Eliminarea în 5 zile lucrătoare e respectată?

## 2. Politica de cookies (`app/cookies/page.tsx`)

- [ ] **„Strict necesare, nu necesită consimțământ”** pentru cele două preferințe din browser: de confirmat pe
      Legea nr. 506/2004 (legislatie.just.ro), prevederea despre stocarea informațiilor în echipamentul utilizatorului.

## 3. Calendare și examene (`lib/data.ts`)

- [ ] **Evaluarea Națională 2027:** date (simulare 16–18.03; probe 22, 24, 25.06; rezultate inițiale 30.06)
      și ordinul de aprobare, pe edu.ro și în Monitorul Oficial. Pe site nu e trecut numărul ordinului.
- [ ] **Admiterea 2027:** opțiuni 12–16 și 19.07, repartizare 22.07, dosare 23–27.07 (`CALENDAR_ADMITERE`),
      pe edu.ro (ordinul calendarului admiterii) și la ISJ Gorj.
- [ ] **Vacanța din februarie, Gorj: 22–26.02.2027:** Hotărârea CA a ISJ Gorj nr. 17/06.04.2026.
- [ ] **Simulările județene:** Bacalaureat 18–20.01.2027, Evaluare Națională 18–19.01.2027 (document ISJ Gorj).
- [ ] **Școala altfel (14–18.12.2026) și Săptămâna verde (19–23.04.2027):** decizia unității.
- [ ] **Rezultatele recente** (pagina Examene): dacă se dorește media liceului la EN 2026, de luat de la ISJ Gorj sau bacplus.ro.

## 4. Platforma

- [ ] **Panoul `/studio` după trecerea la Sanity 6:** autentificare, deschiderea unui anunț, editare, publicare.
- [ ] **Conținutul din CMS** (anunțuri, evenimente, documente): la zi și fără date personale inutile.
- [ ] **Conducerea, din ianuarie 2027:** rezultatele concursului de director au efect de la 1.01.2027; lista e în
      `lib/constants.ts` (`CONDUCERE`).
