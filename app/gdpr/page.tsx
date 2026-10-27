import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/SectionHeader";
import { PaginaAntet } from "@/components/ui/PaginaAntet";
import { CONTACT, DPO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politica de confidențialitate (GDPR)",
  description: "Cum prelucrează site-ul Liceului Tehnologic Turceni datele personale: formularul de contact, harta, fotografiile, documentele publicate și drepturile dumneavoastră.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-paper rounded-sm border border-line p-6">
      <h2 className="font-heading text-xl font-bold text-ink mb-4">{title}</h2>
      <div className="font-body text-sm text-ink-soft leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-2"><span className="ltt-accent flex-shrink-0">•</span><span>{children}</span></div>;
}

const L = "ltt-accent underline underline-offset-2 hover:decoration-2";
const tel = <a href={`tel:+4${CONTACT.telefon.replace(/\D/g, "")}`} className={L}>{CONTACT.telefon}</a>;
const email = <a href={`mailto:${CONTACT.email}`} className={L}>{CONTACT.email}</a>;
const extern = (href: string, text: string) => <a href={href} target="_blank" rel="noopener noreferrer" className={L}>{text}</a>;

export default function GDPRPage() {
  return (
    <div className="pt-28">
      <Breadcrumbs items={[{ label: "GDPR" }]} />
      <PaginaAntet eticheta="Date personale" titlu="Politica de confidențialitate" subtitlu="Protecția datelor cu caracter personal pe site-ul liceului" />

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="space-y-6">

              <Section title="1. Despre această politică">
                <p>
                  Această pagină explică ce date personale sunt prelucrate prin intermediul site-ului liceului: mesajele trimise prin formularul de contact, harta, preferințele de afișare, documentele și fotografiile publicate.
                </p>
                <p>
                  Datele elevilor, ale părinților și ale angajaților prelucrate în activitatea curentă a școlii (înscriere, evidența situației școlare, examene, personal) nu sunt colectate prin site. Informații despre aceste prelucrări se pot solicita de la secretariat sau de la responsabilul cu protecția datelor (secțiunea 3).
                </p>
                <p>Cadrul legal:</p>
                <Bullet>Regulamentul (UE) 2016/679 privind protecția persoanelor fizice în ceea ce privește prelucrarea datelor cu caracter personal (GDPR)</Bullet>
                <Bullet>Legea nr. 190/2018 privind măsuri de punere în aplicare a GDPR în România</Bullet>
                <Bullet>Legea nr. 506/2004 privind prelucrarea datelor cu caracter personal și protecția vieții private în sectorul comunicațiilor electronice</Bullet>
                <Bullet>Legea nr. 272/2004 privind protecția și promovarea drepturilor copilului</Bullet>
                <Bullet>Legea nr. 544/2001 privind liberul acces la informațiile de interes public</Bullet>
              </Section>

              <Section title="2. Operatorul de date">
                <p>
                  <strong className="text-ink">Liceul Tehnologic Turceni</strong><br />
                  {CONTACT.adresa}<br />
                  Telefon: {tel} | Fax: {CONTACT.fax}<br />
                  Email: {email}<br />
                  CUI: 4666290
                </p>
                <p>
                  În calitate de unitate de învățământ preuniversitar de stat, Liceul Tehnologic Turceni este operator de date cu caracter personal, conform art. 4 pct. 7 din GDPR.
                </p>
              </Section>

              <Section title="3. Responsabilul cu protecția datelor (DPO)">
                <p>
                  Pentru orice întrebare sau cerere privind datele dumneavoastră, vă puteți adresa responsabilului cu protecția datelor al liceului:
                </p>
                <div className="p-4 bg-paper-2 rounded-sm">
                  <p>
                    Email: <a href={`mailto:${DPO.email}?subject=${encodeURIComponent(DPO.mentiune)}`} className={L}>{DPO.email}</a>, cu mențiunea „{DPO.mentiune}”<br />
                    În scris, la sediul liceului: {CONTACT.adresa}
                  </p>
                </div>
              </Section>

              <Section title="4. Ce date prelucrăm prin site și de ce">
                <div className="p-4 bg-paper-2 rounded-sm">
                  <h3 className="font-semibold text-ink mb-2">a) Mesajele trimise prin formularul de contact</h3>
                  <Bullet>Date: nume, adresă de email, subiect, conținutul mesajului</Bullet>
                  <Bullet>Scop: răspunsul la solicitările adresate de părinți, elevi sau alte persoane</Bullet>
                  <Bullet>Temei: îndeplinirea atribuțiilor liceului ca instituție publică, inclusiv soluționarea petițiilor (art. 6 alin. (1) lit. e) din GDPR)</Bullet>
                  <Bullet>Păstrare: cât este necesar soluționării solicitării, apoi potrivit termenelor de arhivare aplicabile corespondenței liceului</Bullet>
                  <Bullet>Mesajul ajunge la liceu prin serviciul Formspree (secțiunea 6) sau, dacă formularul deschide aplicația dvs. de email, direct pe adresa liceului</Bullet>
                </div>

                <div className="p-4 bg-paper-2 rounded-sm">
                  <h3 className="font-semibold text-ink mb-2">b) Preferințele de afișare</h3>
                  <Bullet>Răspunsul dat bannerului de cookies și alegerea modului luminos sau întunecat se rețin numai în browserul dvs. (stocare locală) și nu sunt transmise liceului</Bullet>
                  <Bullet>Detalii: <a href="/cookies" className={L}>Politica de cookies</a></Bullet>
                </div>

                <div className="p-4 bg-paper-2 rounded-sm">
                  <h3 className="font-semibold text-ink mb-2">c) Harta de pe pagina Contact</h3>
                  <Bullet>Harta Google se încarcă numai dacă apăsați „Afișează harta”. Până atunci nu se transmite nimic către Google.</Bullet>
                  <Bullet>După afișare, Google primește adresa IP a dispozitivului și poate folosi cookies proprii, potrivit {extern("https://policies.google.com/privacy", "politicii Google")}</Bullet>
                </div>

                <div className="p-4 bg-paper-2 rounded-sm">
                  <h3 className="font-semibold text-ink mb-2">d) Date tehnice de acces</h3>
                  <Bullet>La fiecare vizită, furnizorul de găzduire (secțiunea 6) prelucrează adresa IP și datele tehnice ale cererii, necesare livrării paginilor și securității site-ului</Bullet>
                  <Bullet>Site-ul nu folosește servicii de analiză, publicitate sau profilare</Bullet>
                </div>

                <div className="p-4 bg-paper-2 rounded-sm">
                  <h3 className="font-semibold text-ink mb-2">e) Documente publicate pe site</h3>
                  <Bullet>Documentele de pe pagina Transparență (hotărâri, regulamente, rapoarte) pot conține numele și funcția unor angajați</Bullet>
                  <Bullet>Temei: obligațiile legale de transparență ale instituției (art. 6 alin. (1) lit. c) din GDPR)</Bullet>
                  <Bullet>Se publică numai datele necesare scopului: fără CNP, semnături, adrese sau telefoane personale</Bullet>
                </div>
              </Section>

              <Section title="5. Elevii minori și fotografiile">
                <div className="p-5 bg-paper-2 border-l-2 border-accent">
                  <p className="ltt-kicker !text-[11px] ltt-accent mb-2">⚠ Secțiune cu atenție specială</p>
                  <p className="text-ink">
                    Conform Legii nr. 272/2004 și principiului interesului superior al copilului, liceul acordă protecție sporită datelor elevilor minori.
                  </p>
                </div>
                <Bullet><strong className="text-ink">Nu publicăm liste nominale cu elevi</strong> (nume, note, CNP sau alte date de identificare).</Bullet>
                <Bullet><strong className="text-ink">Rezultatele examenelor</strong> (Bacalaureat, Evaluare Națională) nu se publică nominal pe site; trimitem la sursele oficiale (bacalaureat.edu.ro, evaluare.edu.ro).</Bullet>
                <Bullet><strong className="text-ink">Fotografiile în care pot fi recunoscuți elevi minori</strong> se publică numai cu acordul scris al părintelui sau al tutorelui legal, inclusiv cele de la evenimentele deschise publicului. Formularul de acord este distribuit anual, este disponibil la secretariat și poate fi retras oricând.</Bullet>
                <Bullet><strong className="text-ink">La evenimentele deschise publicului</strong> (Ziua Porților Deschise, festivități), participanții sunt informați că se fac fotografii și pot cere ulterior eliminarea imaginilor în care apar.</Bullet>
                <Bullet><strong className="text-ink">Fotografiile cadrelor didactice</strong> se publică cu acordul persoanei, în prezentarea echipei.</Bullet>
                <Bullet><strong className="text-ink">Fotografiile făcute de părinți</strong> la evenimentele școlare, pentru uzul familiei, nu sunt prelucrate de liceu. Vă rugăm să nu publicați imagini în care apar alți copii fără acordul părinților lor.</Bullet>
                <p>
                  Cererile de eliminare a unei fotografii se adresează secretariatului (telefon: {tel}, email: {email}). Fotografia se elimină de pe site în cel mult 5 zile lucrătoare.
                </p>
              </Section>

              <Section title="6. Furnizorii site-ului și transferul datelor">
                <p>Site-ul folosește următorii furnizori de servicii, care pot prelucra date în numele liceului:</p>
                <div className="p-4 bg-paper-2 rounded-sm">
                  <Bullet><strong className="text-ink">Vercel Inc.</strong> (SUA) — găzduirea site-ului. Date: adresa IP și datele tehnice ale vizitelor. {extern("https://vercel.com/legal/privacy-policy", "Politica Vercel")}</Bullet>
                  <Bullet><strong className="text-ink">Formspree Inc.</strong> (SUA) — transmiterea mesajelor din formularul de contact. Date: nume, email, mesaj. {extern("https://formspree.io/legal/privacy-policy", "Politica Formspree")}</Bullet>
                  <Bullet><strong className="text-ink">Sanity AS</strong> (Norvegia) — sistemul de administrare a conținutului. Date: conținutul publicat și conturile administratorilor site-ului. {extern("https://www.sanity.io/legal/privacy", "Politica Sanity")}</Bullet>
                </div>
                <p>
                  Harta Google (secțiunea 4 c) se încarcă numai la cererea dvs.; Google prelucrează datele respective potrivit propriei politici.
                </p>
                <p>
                  Pentru furnizorii din afara Spațiului Economic European, transferul se face pe baza garanțiilor prevăzute de capitolul V din GDPR, precizate de fiecare furnizor (clauzele contractuale standard ale Comisiei Europene sau Cadrul UE-SUA privind protecția datelor).
                </p>
                <p>
                  <strong className="text-ink">Nu vindem și nu transmitem date personale în scopuri comerciale sau de marketing.</strong>
                </p>
              </Section>

              <Section title="7. Securitatea datelor">
                <Bullet>Comunicare criptată (HTTPS) pe întreg site-ul</Bullet>
                <Bullet>Panoul de administrare a conținutului este accesibil numai cu autentificare</Bullet>
                <Bullet>Site-ul nu are conturi de utilizator și nu stochează parole sau date financiare ale vizitatorilor</Bullet>
                <Bullet>Antete de securitate HTTP (X-Content-Type-Options, X-Frame-Options, Referrer-Policy)</Bullet>
              </Section>

              <Section title="8. Drepturile dumneavoastră">
                <p>Conform GDPR, aveți următoarele drepturi privind datele dumneavoastră și, ca părinte sau tutore, privind datele copilului:</p>
                <Bullet><strong className="text-ink">Dreptul de acces</strong> (art. 15) — să aflați ce date deținem</Bullet>
                <Bullet><strong className="text-ink">Dreptul la rectificare</strong> (art. 16) — să corectați datele inexacte</Bullet>
                <Bullet><strong className="text-ink">Dreptul la ștergere</strong> (art. 17) — în condițiile legii; nu se aplică datelor pe care liceul are obligația legală să le păstreze</Bullet>
                <Bullet><strong className="text-ink">Dreptul la restricționarea prelucrării</strong> (art. 18)</Bullet>
                <Bullet><strong className="text-ink">Dreptul la portabilitatea datelor</strong> (art. 20) — pentru datele furnizate pe bază de consimțământ sau contract și prelucrate automat</Bullet>
                <Bullet><strong className="text-ink">Dreptul la opoziție</strong> (art. 21) — în situațiile prevăzute de lege</Bullet>
                <Bullet><strong className="text-ink">Dreptul de a nu face obiectul unei decizii automate</strong> (art. 22) — site-ul nu folosește profilare sau decizii automate</Bullet>
                <Bullet><strong className="text-ink">Dreptul de a retrage consimțământul</strong> (de exemplu, acordul pentru fotografii) — oricând, fără a afecta legalitatea prelucrării anterioare</Bullet>
                <p>
                  Cererea se depune în scris la secretariat (personal, prin poștă sau pe email la {email}) ori se trimite responsabilului cu protecția datelor (secțiunea 3). Răspundem în cel mult 30 de zile calendaristice.
                </p>
              </Section>

              <Section title="9. Incidente de securitate">
                <p>
                  Un incident de securitate care afectează date personale se documentează intern, se iau imediat măsuri de limitare, iar autoritatea de supraveghere și, după caz, persoanele afectate sunt notificate în condițiile și termenele prevăzute de art. 33 și 34 din GDPR.
                </p>
              </Section>

              <Section title="10. Plângeri">
                <p>
                  Dacă considerați că prelucrarea datelor dumneavoastră încalcă legea, puteți depune o plângere la:
                </p>
                <div className="p-4 bg-paper-2 rounded-sm">
                  <p className="font-semibold text-ink">
                    Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)
                  </p>
                  <p>
                    B-dul G-ral. Gheorghe Magheru nr. 28-30, Sector 1, București<br />
                    Telefon: +40.318.059.211 | Fax: +40.318.059.602<br />
                    Email: anspdcp@dataprotection.ro<br />
                    Website: {extern("https://www.dataprotection.ro", "www.dataprotection.ro")}
                  </p>
                </div>
                <p>
                  Vă încurajăm ca, înainte, să ne contactați direct, pentru a încerca să rezolvăm împreună problema.
                </p>
              </Section>

              <Section title="11. Modificarea politicii">
                <p>
                  Politica se actualizează la schimbările legislative sau la schimbarea modului în care site-ul prelucrează date. Data ultimei actualizări este afișată mai jos.
                </p>
              </Section>

              <Section title="12. Contact">
                <div className="p-4 bg-paper-2 rounded-sm">
                  <p>
                    <strong className="text-ink">Liceul Tehnologic Turceni</strong><br />
                    {CONTACT.adresa}<br />
                    Telefon: {tel} | Fax: {CONTACT.fax}<br />
                    Email: {email}<br />
                    Program: {CONTACT.program}
                  </p>
                </div>
              </Section>

              <p className="font-body text-xs text-ink-soft text-center">
                Ultima actualizare: octombrie 2026
              </p>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
