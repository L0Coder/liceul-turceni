# De verificat pe site

Afirmații publicate pe site care nu au putut fi verificate pe sursa oficială când au fost scrise
(octombrie 2026: edu.ro, Monitorul Oficial, eur-lex, isjgorj.ro și site-urile furnizorilor nu erau
accesibile din mediul de lucru). Fiecare rând spune **unde se verifică** și **unde se modifică**.
După verificare se bifează și se trec data și persoana; dacă ceva e greșit, se corectează în fișierul indicat.

## 1. Politica de confidențialitate (`app/gdpr/page.tsx`) — pentru responsabilul cu protecția datelor (DPO)

Textul Regulamentului se citește pe eur-lex.europa.eu, forma consolidată a Regulamentului (UE) 2016/679.

- [ ] **Temeiul pentru mesajele din formularul de contact:** art. 6 alin. (1) lit. e) (sarcină de interes public).
      Că interesul legitim (lit. f) nu e disponibil autorităților publice în îndeplinirea atribuțiilor e confirmat în
      skillul jurist-ro (art. 6 alin. (1) ultimul paragraf, 27.10.2026). Rămâne de stabilit **norma** pe care se
      sprijină sarcina (de exemplu, regimul petițiilor).
- [ ] **Temeiul pentru documentele de pe pagina Transparență:** art. 6 alin. (1) lit. c) (obligație legală).
      De confirmat **care act impune publicarea** fiecărui tip de document (ROFUIP, Legea 198/2023, Legea 544/2001).
- [ ] **Calitatea de operator** a liceului (art. 4 pct. 7) și lista drepturilor (art. 15–22), cu limita ștergerii (art. 17 alin. (3)).
- [ ] **Termenul de răspuns:** „în cel mult o lună”, prelungire „cu două luni atunci când este necesar”, anunțată în prima lună,
      iar refuzul comunicat tot într-o lună, cu căile de atac (art. 12 alin. (3)–(4)). Formularea urmează textul citat
      în skillul jurist-ro (verificat 27.10.2026); de reconfirmat pe eur-lex.
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
- [ ] **Admiterea 2027** (`CALENDAR_ADMITERE`): proba de limba engleză pentru clasa bilingvă 24–28.05 (înscriere
      19–21.05), opțiuni 12–16 și 19.07, repartizare 22.07, etapa a II-a 9–12.08. OMEC nr. 5.831/19.10.2026
      (MO 893/26.10.2026) conține calendarul; ordinul nu a fost deschis. De confirmat pe edu.ro și la ISJ Gorj,
      inclusiv data depunerii dosarelor după repartizare, care nu e trecută pe site.
- [ ] **Probe suplimentare de admitere la liceele tehnologice:** dacă liceul le organizează în 2027, procedura cu
      partenerii se elaborează până la 6.11.2026 și se publică pe site până la 13.11.2026 (după proiectul calendarului;
      de confirmat pe ordin).
- [ ] **Vacanța din februarie, Gorj: 22–26.02.2027:** Hotărârea CA a ISJ Gorj nr. 17/06.04.2026.
- [ ] **Simulările județene:** Bacalaureat 18–20.01.2027, Evaluare Națională 18–19.01.2027 (document ISJ Gorj).
- [ ] **Școala altfel (14–18.12.2026) și Săptămâna verde (19–23.04.2027):** decizia unității.
- [ ] **Rezultatele recente** (pagina Examene): dacă se dorește media liceului la EN 2026, de luat de la ISJ Gorj sau bacplus.ro.

## 4. Platforma

- [ ] **Panoul `/studio` după trecerea la Sanity 6:** autentificare, deschiderea unui anunț, editare, publicare.
- [ ] **Conținutul din CMS** (anunțuri, evenimente, documente): la zi și fără date personale inutile.
- [ ] **Conducerea, din ianuarie 2027:** rezultatele concursului de director au efect de la 1.01.2027; lista e în
      `lib/constants.ts` (`CONDUCERE`).
