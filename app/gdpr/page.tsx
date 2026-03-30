import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Politica de confidențialitate (GDPR)",
  description: "Politica de protecție a datelor personale — Liceul Tehnologic Turceni. Conform GDPR, Legea 190/2018, Legea 272/2004.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border p-6">
      <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text mb-4">{title}</h2>
      <div className="font-body text-sm text-gray-600 dark:text-dark-muted leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-2"><span className="text-brand-teal flex-shrink-0">•</span><span>{children}</span></div>;
}

export default function GDPRPage() {
  return (
    <div className="pt-28">
      <Breadcrumbs items={[{ label: "GDPR" }]} />
      <section className="py-16 px-6 text-center" style={{ background: "linear-gradient(135deg, #1f3b5b 0%, #2980b9 50%, #1a6e5e 100%)" }}>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Politica de confidențialitate</h1>
        <p className="font-body text-lg text-white/70 max-w-xl mx-auto">Protecția datelor cu caracter personal</p>
      </section>

      <section className="py-20 px-6 bg-[#fafbfd] dark:bg-dark-bg">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="space-y-6">

              {/* Cadrul legal */}
              <Section title="1. Cadrul legal">
                <p>Prezenta politică de confidențialitate este elaborată în conformitate cu:</p>
                <Bullet>Regulamentul (UE) 2016/679 privind protecția persoanelor fizice în ceea ce privește prelucrarea datelor cu caracter personal (GDPR)</Bullet>
                <Bullet>Legea nr. 190/2018 privind măsuri de punere în aplicare a GDPR în România</Bullet>
                <Bullet>Legea nr. 272/2004 privind protecția și promovarea drepturilor copilului</Bullet>
                <Bullet>Legea nr. 544/2001 privind liberul acces la informațiile de interes public</Bullet>
                <Bullet>Legea nr. 506/2004 privind prelucrarea datelor cu caracter personal și protecția vieții private în sectorul comunicațiilor electronice</Bullet>
              </Section>

              {/* Operatorul de date */}
              <Section title="2. Operatorul de date">
                <p>
                  <strong className="text-gray-900 dark:text-dark-text">Liceul Tehnologic Turceni</strong><br />
                  Str. Educației nr. 1, Turceni 217520, Județul Gorj<br />
                  Telefon: 0253-335012 | Fax: 0253-335011<br />
                  Email: licturceni@yahoo.com<br />
                  CUI: 4666290
                </p>
                <p>
                  În calitate de unitate de învățământ preuniversitar de stat, Liceul Tehnologic Turceni este operator de date cu caracter personal, conform Art. 4 pct. 7 din GDPR.
                </p>
              </Section>

              {/* DPO */}
              <Section title="3. Responsabilul cu Protecția Datelor (DPO)">
                <p>
                  Conform Art. 37 din GDPR, instituțiile publice au obligația de a desemna un Responsabil cu Protecția Datelor (DPO — Data Protection Officer).
                </p>
                <div className="p-4 bg-brand-teal/5 dark:bg-brand-teal/10 rounded-lg mt-2">
                  <p className="font-semibold text-gray-900 dark:text-dark-text mb-1">Responsabil cu Protecția Datelor:</p>
                  <p>
                    {/* NOTĂ: Completați cu datele reale ale DPO-ului desemnat prin decizie a directorului */}
                    Datele de contact ale DPO-ului desemnat sunt disponibile la secretariatul liceului.<br />
                    Telefon: 0253-335012<br />
                    Email: licturceni@yahoo.com
                  </p>
                </div>
                <p className="text-xs text-gray-400 dark:text-dark-subtle mt-2">
                  Notă: DPO-ul este desemnat prin decizia directorului unității de învățământ. Datele sale de contact vor fi actualizate pe această pagină la fiecare schimbare.
                </p>
              </Section>

              {/* Ce date colectam prin site */}
              <Section title="4. Datele personale colectate prin intermediul site-ului">
                <p>Prin intermediul acestui site web, colectăm și prelucrăm următoarele categorii de date:</p>

                <div className="mt-3 p-4 bg-gray-50 dark:bg-dark-border/30 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-dark-text mb-2">a) Formularul de contact</h3>
                  <Bullet>Date colectate: nume, adresă de email, subiect, conținutul mesajului</Bullet>
                  <Bullet>Scop: răspunsul la solicitările adresate de părinți, elevi sau terți</Bullet>
                  <Bullet>Temei legal: interesul legitim al instituției (Art. 6 alin. 1 lit. f din GDPR)</Bullet>
                  <Bullet>Durata stocării: maximum 1 an de la soluționarea solicitării</Bullet>
                </div>

                <div className="mt-3 p-4 bg-gray-50 dark:bg-dark-border/30 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-dark-text mb-2">b) Newsletter</h3>
                  <Bullet>Date colectate: adresa de email</Bullet>
                  <Bullet>Scop: transmiterea de anunțuri privind activitatea unității de învățământ</Bullet>
                  <Bullet>Temei legal: consimțământul explicit al persoanei vizate (Art. 6 alin. 1 lit. a din GDPR)</Bullet>
                  <Bullet>Durata stocării: până la retragerea consimțământului (dezabonare)</Bullet>
                </div>

                <div className="mt-3 p-4 bg-gray-50 dark:bg-dark-border/30 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-dark-text mb-2">c) Cookies</h3>
                  <Bullet>Date colectate: preferința de consimțământ cookies, preferința de mod afișare (dark/light)</Bullet>
                  <Bullet>Scop: funcționarea corectă a site-ului</Bullet>
                  <Bullet>Temei legal: interes legitim pentru cookies strict necesare (Art. 6 alin. 1 lit. f)</Bullet>
                  <Bullet>Detalii complete: pagina <a href="/cookies" className="text-brand-teal hover:underline">Politica de cookies</a></Bullet>
                </div>

                <div className="mt-3 p-4 bg-gray-50 dark:bg-dark-border/30 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-dark-text mb-2">d) Documente publicate pe site</h3>
                  <Bullet>Hotărârile CA, regulamentele, rapoartele publicate pe pagina de Transparență pot conține date personale ale angajaților (nume, funcție)</Bullet>
                  <Bullet>Temei legal: obligație legală — Legea 544/2001 privind accesul la informațiile de interes public (Art. 6 alin. 1 lit. c din GDPR)</Bullet>
                </div>
              </Section>

              {/* Protecția datelor minorilor */}
              <Section title="5. Protecția datelor elevilor minori">
                <div className="p-4 bg-amber-50 dark:bg-amber-900/10 rounded-lg border border-amber-200 dark:border-amber-800/30">
                  <p className="font-semibold text-amber-800 dark:text-amber-400 mb-2">⚠ Secțiune cu atenție specială</p>
                  <p className="text-amber-700 dark:text-amber-300">
                    Conform Legii nr. 272/2004 și a principiului interesului superior al copilului, Liceul Tehnologic Turceni acordă protecție sporită datelor cu caracter personal ale elevilor minori.
                  </p>
                </div>

                <p className="mt-3">Măsuri implementate:</p>

                <Bullet><strong className="text-gray-900 dark:text-dark-text">Nu publicăm liste nominale cu elevi</strong> pe site (cu nume, note, CNP sau alte date identificabile)</Bullet>
                <Bullet><strong className="text-gray-900 dark:text-dark-text">Fotografiile cu elevi minori</strong> sunt publicate pe site doar cu acordul scris al părintelui/tutorelui legal. Formularul de consimțământ este disponibil la secretariatul liceului.</Bullet>
                <Bullet><strong className="text-gray-900 dark:text-dark-text">Rezultatele examenelor</strong> (BAC, Evaluare Națională) nu sunt publicate nominal pe site. Site-ul trimite la sursele oficiale (bacalaureat.edu.ro, evaluare.edu.ro).</Bullet>
                <Bullet><strong className="text-gray-900 dark:text-dark-text">Părinții/tutorii legali pot solicita oricând:</strong> eliminarea fotografiilor care îi includ pe copiii lor, accesul la datele personale ale copilului, rectificarea sau ștergerea datelor.</Bullet>
                <Bullet><strong className="text-gray-900 dark:text-dark-text">Consimțământul</strong> pentru prelucrarea datelor elevilor sub 16 ani este dat de părintele/tutorele legal, conform Art. 8 din GDPR coroborat cu Art. 2 din Legea 190/2018.</Bullet>

                <p className="mt-2 text-xs text-gray-400 dark:text-dark-subtle">
                  Notă: Fotografiile realizate de părinți la evenimentele școlare, pentru uzul personal al familiei, nu intră sub incidența GDPR (excepția de uz casnic/personal).
                </p>
              </Section>

              {/* Drepturile persoanelor vizate */}
              <Section title="6. Drepturile dumneavoastră">
                <p>Conform GDPR, aveți următoarele drepturi privind datele dumneavoastră personale:</p>

                <Bullet><strong className="text-gray-900 dark:text-dark-text">Dreptul de acces</strong> (Art. 15) — să aflați ce date deținem despre dumneavoastră sau despre copilul dumneavoastră</Bullet>
                <Bullet><strong className="text-gray-900 dark:text-dark-text">Dreptul la rectificare</strong> (Art. 16) — să corectați datele inexacte</Bullet>
                <Bullet><strong className="text-gray-900 dark:text-dark-text">Dreptul la ștergere</strong> (Art. 17) — &quot;dreptul de a fi uitat&quot; — să solicitați ștergerea datelor, în condițiile legii</Bullet>
                <Bullet><strong className="text-gray-900 dark:text-dark-text">Dreptul la restricționarea prelucrării</strong> (Art. 18)</Bullet>
                <Bullet><strong className="text-gray-900 dark:text-dark-text">Dreptul la portabilitatea datelor</strong> (Art. 20) — aplicabil doar pentru datele furnizate pe bază de consimțământ sau contract, prelucrate automat</Bullet>
                <Bullet><strong className="text-gray-900 dark:text-dark-text">Dreptul la opoziție</strong> (Art. 21) — să vă opuneți prelucrării în anumite situații</Bullet>
                <Bullet><strong className="text-gray-900 dark:text-dark-text">Dreptul de a nu fi supus unei decizii automate</strong> (Art. 22) — site-ul nu utilizează profilare sau luare automată a deciziilor</Bullet>
                <Bullet><strong className="text-gray-900 dark:text-dark-text">Dreptul de a retrage consimțământul</strong> — în orice moment, fără a afecta legalitatea prelucrării anterioare</Bullet>

                <p className="mt-3">
                  Pentru exercitarea acestor drepturi, adresați o cerere scrisă la secretariatul liceului (personal, prin poștă sau pe email la licturceni@yahoo.com). Răspunsul va fi transmis în maximum 30 de zile calendaristice.
                </p>
              </Section>

              {/* Transferul datelor */}
              <Section title="7. Transferul datelor către terți">
                <p>
                  Prin funcționarea site-ului, anumite date pot fi transferate către următorii furnizori de servicii:
                </p>

                <div className="mt-3 p-4 bg-gray-50 dark:bg-dark-border/30 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-dark-text mb-2">Furnizori de servicii</h3>
                  <Bullet><strong className="text-gray-900 dark:text-dark-text">Vercel Inc.</strong> (SUA) — găzduirea site-ului web. Date prelucrate: adrese IP ale vizitatorilor, în cadrul furnizării serviciului de hosting. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:underline">Politica Vercel</a></Bullet>
                  <Bullet><strong className="text-gray-900 dark:text-dark-text">Sanity AS</strong> (Norvegia, SEE) — sistem de administrare a conținutului (CMS). Date prelucrate: conținutul publicat de administratorii site-ului. <a href="https://www.sanity.io/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:underline">Politica Sanity</a></Bullet>
                  <Bullet><strong className="text-gray-900 dark:text-dark-text">Formspree Inc.</strong> (SUA) — procesarea mesajelor din formularul de contact. Date prelucrate: nume, email, mesajul transmis. <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:underline">Politica Formspree</a></Bullet>
                </div>

                <p className="mt-3">
                  Transferul datelor către SUA (Vercel, Formspree) se realizează în baza clauzelor contractuale standard ale Comisiei Europene și/sau a Cadrului de protecție a datelor UE-SUA (EU-US Data Privacy Framework), conform Art. 46 din GDPR.
                </p>

                <p>
                  <strong className="text-gray-900 dark:text-dark-text">Nu vindem, nu cedăm și nu transmitem date personale către terți în scopuri comerciale sau de marketing.</strong>
                </p>
              </Section>

              {/* Securitate */}
              <Section title="8. Securitatea datelor">
                <p>Măsuri tehnice și organizatorice implementate pentru protecția datelor:</p>
                <Bullet>Comunicare criptată HTTPS/TLS pe întreg site-ul</Bullet>
                <Bullet>Acces la panoul de administrare (CMS) restricționat prin autentificare (Google/GitHub OAuth)</Bullet>
                <Bullet>Roluri de acces diferențiate în CMS (Administrator, Editor, Viewer)</Bullet>
                <Bullet>Nu se stochează parole sau date financiare ale utilizatorilor</Bullet>
                <Bullet>Backup automat al conținutului (Sanity cloud + GitHub + Vercel)</Bullet>
                <Bullet>Headere de securitate HTTP implementate (X-Content-Type-Options, X-Frame-Options, Referrer-Policy)</Bullet>
              </Section>

              {/* Fotografii */}
              <Section title="9. Publicarea fotografiilor pe site">
                <p>
                  Publicarea fotografiilor pe site-ul liceului se face cu respectarea strictă a GDPR și a Legii 272/2004:
                </p>
                <Bullet><strong className="text-gray-900 dark:text-dark-text">Fotografii cu elevi minori:</strong> se publică DOAR cu acordul scris al părintelui/tutorelui legal. Formularul de consimțământ este distribuit anual și poate fi retras oricând.</Bullet>
                <Bullet><strong className="text-gray-900 dark:text-dark-text">Fotografii la evenimente publice:</strong> la evenimentele deschise publicului (Ziua Porților Deschise, festivități), participanții sunt informați că se realizează fotografii. Aceștia pot solicita ulterior eliminarea imaginilor.</Bullet>
                <Bullet><strong className="text-gray-900 dark:text-dark-text">Fotografii cu cadre didactice:</strong> se publică cu acordul persoanei respective, în cadrul prezentării echipei didactice.</Bullet>
                <Bullet><strong className="text-gray-900 dark:text-dark-text">Fotografii realizate de părinți</strong> la evenimentele școlare, pentru uzul personal al familiei, nu intră sub incidența GDPR.</Bullet>
                <p className="mt-2">
                  Solicitările de eliminare a fotografiilor se adresează la secretariatul liceului (telefon: 0253-335012, email: licturceni@yahoo.com). Fotografiile vor fi eliminate în maximum 5 zile lucrătoare.
                </p>
              </Section>

              {/* Incidenta de securitate */}
              <Section title="10. Incidente de securitate (breșe de date)">
                <p>
                  Conform Art. 33 și Art. 34 din GDPR, în cazul unei breșe de securitate a datelor cu caracter personal:
                </p>
                <Bullet>Operatorul notifică ANSPDCP în maximum 72 de ore de la constatare</Bullet>
                <Bullet>Dacă breșa prezintă risc ridicat pentru persoanele vizate, acestea sunt informate fără întârziere</Bullet>
                <Bullet>Incidentul este documentat intern, inclusiv măsurile corective adoptate</Bullet>
              </Section>

              {/* Plangeri */}
              <Section title="11. Plângeri">
                <p>
                  Dacă considerați că prelucrarea datelor dumneavoastră personale încalcă prevederile GDPR, aveți dreptul de a depune o plângere la:
                </p>
                <div className="p-4 bg-gray-50 dark:bg-dark-border/30 rounded-lg mt-2">
                  <p className="font-semibold text-gray-900 dark:text-dark-text">
                    Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)
                  </p>
                  <p>
                    B-dul G-ral. Gheorghe Magheru nr. 28-30, Sector 1, București<br />
                    Telefon: +40.318.059.211 | Fax: +40.318.059.602<br />
                    Email: anspdcp@dataprotection.ro<br />
                    Website: <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:underline">www.dataprotection.ro</a>
                  </p>
                </div>
                <p className="mt-2">
                  Înainte de a depune o plângere la ANSPDCP, vă încurajăm să ne contactați direct pentru a încerca soluționarea problemei.
                </p>
              </Section>

              {/* Modificari */}
              <Section title="12. Modificarea politicii de confidențialitate">
                <p>
                  Această politică poate fi actualizată periodic, în funcție de modificările legislative sau de schimbările în modul de prelucrare a datelor. Data ultimei actualizări este afișată mai jos. Vă recomandăm să consultați periodic această pagină.
                </p>
              </Section>

              {/* Contact */}
              <Section title="13. Contact">
                <p>
                  Pentru orice întrebări sau solicitări privind protecția datelor personale:
                </p>
                <div className="p-4 bg-brand-teal/5 dark:bg-brand-teal/10 rounded-lg mt-2">
                  <p>
                    <strong className="text-gray-900 dark:text-dark-text">Liceul Tehnologic Turceni</strong><br />
                    Str. Educației nr. 1, Turceni 217520, Județul Gorj<br />
                    Telefon: 0253-335012 | Fax: 0253-335011<br />
                    Email: licturceni@yahoo.com<br />
                    Program: Luni — Vineri, 8:00 — 16:00
                  </p>
                </div>
              </Section>

              <p className="font-body text-xs text-gray-400 dark:text-dark-subtle text-center">
                Ultima actualizare: martie 2026
              </p>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
