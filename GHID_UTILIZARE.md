# Ghid de utilizare — Panoul de administrare al site-ului LTT

Acest ghid este destinat secretariatului și personalului care gestionează conținutul site-ului Liceului Tehnologic Turceni.

---

## 1. Cum accesez panoul de administrare?

Deschide în browser una din adresele:
- **De pe orice calculator:** https://liceul-turceni.vercel.app/studio
- **De pe calculatorul unde rulează site-ul local:** http://localhost:3000/studio

Ambele duc în același loc — datele sunt stocate în cloud (Sanity.io). Nu contează de unde accesezi panoul — modificările apar pe site-ul live.

Te loghezi cu contul Google sau GitHub. Dacă nu ai acces, cere administratorului să te invite (vezi secțiunea 10).

---

## 2. Ce conținut pot gestiona?

Din panoul din stânga ai acces la:

| Secțiune din panou | Ce apare pe site | Pagina de pe site |
|---|---|---|
| **Noutăți & Anunțuri** | Anunțuri, comunicări, evenimente | /noutati + homepage (ultimele 3) |
| **Documente oficiale** | PDF-uri descărcabile | /transparenta |
| **Evenimente calendar** | Evenimente în calendarul interactiv | /calendar |
| **Blog — Jurnal LTT** | Articole de la elevi/profesori | /blog |
| **Galerie foto** | Fotografii pe categorii | /galerie |
| **Cadre didactice** | Lista profesorilor și conducerii | /profesori |
| **FAQ** | Întrebări și răspunsuri | /faq |
| **Setări site** | Număr elevi, cadre, an școlar | Homepage (secțiunea statistici) |

---

## 3. Cum postez un anunț / o noutate?

1. În panoul din stânga, click pe **"Noutăți & Anunțuri"**
2. Click pe **"+"** (sau "Create new") din partea de sus
3. Completează câmpurile:
   - **Titlu** (obligatoriu): ex. "Înscrierile pentru 2026-2027 sunt deschise"
   - **Slug**: click pe **"Generate"** — se creează automat din titlu. Nu modifica manual.
   - **Categorie** (obligatoriu): alege din listă (Admitere, Eveniment, Examen, Proiect, etc.)
   - **Data publicării** (obligatoriu): selectează data
   - **Rezumat scurt**: 1-2 propoziții — apare pe pagina principală
   - **Conținut complet**: textul integral al anunțului
   - **Imagine**: opțional — click "Upload" și alege o poză de pe calculator
4. Click **"Publish"** (butonul verde din dreapta sus)

**Anunțul apare pe site în maxim 60 de secunde.**

**Important:** Dacă nu dai "Publish", anunțul rămâne ca draft (ciornă) și NU apare pe site. Poți reveni oricând să-l editezi și să-l publici mai târziu.

---

## 4. Cum urc un document oficial (PDF)?

1. Click pe **"Documente oficiale"** → **"+"**
2. Completează:
   - **Titlu**: ex. "Hotărâre CA nr. 15 din 20.03.2026"
   - **Categorie**: alege (Regulament, Hotărâri CA, GDPR, Buget, etc.)
   - **Fișier PDF**: click "Upload" → selectează PDF-ul de pe calculator
   - **Data documentului**: opțional dar recomandat
   - **Descriere scurtă**: opțional
3. Click **"Publish"**

**PDF-ul apare pe pagina de Transparență cu link de descărcare.**

**Sfaturi:**
- PDF-urile nu trebuie să depășească 10 MB
- Verifică că PDF-ul se deschide corect înainte de a-l urca
- Folosește titluri clare: "Hotărâre CA nr. 15/2026" nu "hotarare_ca_15.pdf"

---

## 5. Cum adaug un eveniment în calendar?

1. Click pe **"Evenimente calendar"** → **"+"**
2. Completează:
   - **Titlu**: ex. "Ședința cu părinții — modulul III"
   - **Data** (obligatoriu): selectează
   - **Tip** (obligatoriu): alege (Examen, Eveniment, Vacanță, Administrativ, Competiție)
   - **Descriere**: opțional — detalii suplimentare
3. Click **"Publish"**

**Evenimentul apare în calendarul interactiv de pe site, colorat după tip.**

---

## 6. Cum public un articol pe blog?

1. Click pe **"Blog — Jurnal LTT"** → **"+"**
2. Completează:
   - **Titlu**: ex. "Experiența mea la Erasmus+ în Italia"
   - **Slug**: click "Generate"
   - **Autor**: numele elevului/profesorului
   - **Rol autor**: ex. "Elevă clasa a XII-a, Filologie"
   - **Data publicării**: selectează
   - **Categorie**: alege (Erasmus+, Club Robotică, Viața la LTT, etc.)
   - **Rezumat scurt**: 1-2 propoziții
   - **Conținut**: textul complet. Lasă o linie goală între paragrafe.
   - **Imagine**: urcă o fotografie relevantă
3. Click **"Publish"**

**Dacă un elev/profesor trimite un text pe email:**
Copiezi textul în câmpul "Conținut", pui numele lor la "Autor", alegi categoria, și publici tu din panou.

---

## 7. Cum adaug fotografii în galerie?

1. Click pe **"Galerie foto"** → **"+"**
2. Completează:
   - **Titlu**: ex. "Laborator chimie — experiment pH"
   - **Categorie** (obligatoriu): alege (Laboratoare, Ateliere, Club Robotică, etc.)
   - **Fotografie** (obligatoriu): click "Upload" → selectează poza
   - **Data**: opțional
3. Click **"Publish"**

**Sfaturi pentru fotografii:**
- Dimensiune minimă recomandată: 1200 px lățime
- Format: JPG sau PNG
- Fotografii bine iluminate, fără blur
- Nu urcați fotografii cu elevi fără acordul părinților (GDPR!)

---

## 8. Cum adaug sau editez un profesor?

1. Click pe **"Cadre didactice"** → **"+"** (sau click pe un profesor existent pentru editare)
2. Completează:
   - **Nume complet** (obligatoriu): ex. "Prof. Popescu Ion"
   - **Funcție**: alege (Director, Director adjunct, Profesor, Maistru instructor)
   - **Catedra**: alege (Matematică și Informatică, Discipline tehnice, etc.)
   - **Fotografie**: opțional — urcă o poză
   - **Descriere**: opțional — câteva cuvinte despre specializare
3. Click **"Publish"**

**Profesorii cu funcția "Director" sau "Director adjunct" apar în secțiunea de conducere. Restul apar grupați pe catedre.**

---

## 9. Cum actualizez datele anuale?

La începutul fiecărui an școlar, intră pe:
1. **"Setări site"** (ultimul element din panoul din stânga)
2. Actualizează:
   - **Număr elevi**: noul total (ex. 1604 → 1580)
   - **Număr cadre didactice**: noul total
   - **An școlar curent**: ex. "2026-2027"
   - **Perioada admitere**: ex. "Înscrierile se deschid în iulie 2027"
3. Click **"Publish"**

**Aceste numere apar pe homepage în secțiunea cu statistici.**

---

## 10. Cum invit alte persoane să aibă acces?

1. Mergi pe **sanity.io/manage** (te loghezi cu contul tău)
2. Selectează proiectul "Liceul Turceni"
3. Click pe **"Members"** din meniu
4. Click **"Invite member"**
5. Introdu adresa de email a persoanei
6. Alege rolul:
   - **Administrator**: acces total (director, admin IT)
   - **Editor**: poate posta și edita conținut (secretariat)
   - **Viewer**: doar citește (opțional)

---

## 11. Cum arhivez un anunț vechi?

Anunțurile vechi nu trebuie șterse — se arhivează:
1. Deschide anunțul din **"Noutăți & Anunțuri"**
2. Bifează câmpul **"Arhivat"**
3. Click **"Publish"**

Anunțul nu mai apare pe site dar rămâne în baza de date. Poți oricând debifa "Arhivat" ca să-l readuci.

**Recomandare:** La începutul fiecărui an școlar, arhivează anunțurile din anul precedent.

---

## 12. Cum recuperez ceva șters din greșeală?

**Nu intrați în panică!** Sanity păstrează istoricul tuturor modificărilor.
1. Deschide documentul
2. Click pe iconița de ceas (**History**) din dreapta sus
3. Navighează la versiunea anterioară
4. Click **"Restore"**

---

## 13. Ce se întâmplă cu conținutul existent pe site?

Site-ul are conținut demonstrativ (texte exemplu, testimoniale fictive, noutăți de test). Acest conținut apare automat atât timp cât panoul Sanity e gol pentru acel tip de conținut.

**Odată ce adaugi primul anunț real în panou, conținutul demonstrativ dispare** și site-ul afișează doar ce e în Sanity. Același lucru pentru FAQ, Blog, Profesori, Documente.

**Ordinea recomandată de migrare:**
1. Adaugă noutățile/anunțurile reale
2. Urcă documentele oficiale (PDF-uri)
3. Adaugă cadrele didactice
4. Adaugă întrebări FAQ reale
5. Urcă fotografii în galerie
6. Actualizează setările site (număr elevi, an școlar)

---

## 14. Greșeli frecvente de evitat

**NU face:**
- Nu șterge documentul "Setări site" — e unic, dacă îl ștergi trebuie recreat
- Nu modifica câmpul "Slug" după publicare — linkurile vechi nu vor mai funcționa
- Nu urca fotografii cu elevi minori fără acordul scris al părinților
- Nu urca PDF-uri mai mari de 10 MB — folosește un compresor de PDF online
- Nu lăsa câmpurile obligatorii goale — documentul nu se va putea publica

**FA:**
- Verifică textul înainte de Publish — ce publici apare imediat pe site
- Pune date la toate anunțurile — ajută la sortare
- Folosește categorii consistente — nu inventa categorii noi la fiecare anunț
- Arhivează anunțurile vechi în loc să le ștergi
- Urcă imagini de calitate bună (min. 1200px lățime, bine iluminate)

---

## 15. Întrebări tehnice frecvente

**Î: Am publicat un anunț dar nu apare pe site.**
R: Așteaptă 60 de secunde și reîncarcă pagina (Ctrl+F5). Dacă tot nu apare, verifică că ai dat "Publish" (nu doar "Save").

**Î: Am urcat un PDF dar nu se descarcă.**
R: Verifică că fișierul nu e corupt — deschide-l local pe calculator. Dacă e ok, șterge-l din panou și urcă-l din nou.

**Î: Nu mă pot loga în panou.**
R: Verifică că folosești același cont Google/GitHub cu care ai fost invitat. Dacă nu merge, cere administratorului să te reinvite.

**Î: Vreau să schimb o poză de pe site dar nu o găsesc în panou.**
R: Pozele din paginile de profil (Oferta educațională) și din homepage sunt în codul site-ului, nu în panou. Pentru a le schimba, contactează administratorul tehnic.

**Î: Site-ul arată diferit pe telefonul meu față de calculator.**
R: E normal — site-ul se adaptează la dimensiunea ecranului. Pe telefon, meniul e accesibil prin iconița ☰ din dreapta sus.

**Î: Cine contactez dacă ceva nu funcționează?**
R: Contactează administratorul tehnic al site-ului.

---

## 16. Rezumat rapid — ce fac zilnic/săptămânal/anual?

**Zilnic/la nevoie:**
- Postez anunțuri noi
- Urc documente oficiale

**Săptămânal:**
- Verific că toate anunțurile recente sunt publicate
- Adaug evenimente noi în calendar dacă e cazul

**Lunar:**
- Adaug fotografii noi în galerie (de la evenimente, activități)
- Verific dacă sunt articole de blog de publicat

**La început de an școlar:**
- Actualizez Setări site (număr elevi, cadre, an școlar)
- Arhivez anunțurile din anul precedent
- Verific și actualizez lista de cadre didactice
- Actualizez calendarul cu evenimentele noului an

**La început de modul:**
- Adaug datele simulărilor și examenelor în calendar
- Public anunțuri despre ședințele cu părinții
