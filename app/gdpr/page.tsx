import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Politica de confidențialitate (GDPR)",
  description: "Politica de confidențialitate și protecția datelor personale — Liceul Tehnologic Turceni.",
};

export default function GDPRPage() {
  return (
    <div className="pt-28">
      <section className="py-16 px-6 text-center" style={{ background: "linear-gradient(135deg, #1f3b5b 0%, #2980b9 50%, #1a6e5e 100%)" }}>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Politica de confidențialitate</h1>
        <p className="font-body text-lg text-white/70 max-w-xl mx-auto">Protecția datelor cu caracter personal conform GDPR</p>
      </section>

      <section className="py-20 px-6 bg-[#fafbfd] dark:bg-dark-bg">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="prose-custom space-y-8">

              <div className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border p-6">
                <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text mb-4">1. Operatorul de date</h2>
                <p className="font-body text-sm text-gray-600 dark:text-dark-muted leading-relaxed">
                  Liceul Tehnologic Turceni, cu sediul în Str. Educației nr. 1, Turceni 217520, Județul Gorj, este operator de date cu caracter personal în sensul Regulamentului (UE) 2016/679 (GDPR).
                </p>
                <div className="mt-4 p-4 bg-brand-teal/5 dark:bg-brand-teal/10 rounded-lg">
                  <p className="font-body text-sm font-semibold text-gray-900 dark:text-dark-text">Responsabil cu Protecția Datelor (DPO):</p>
                  <p className="font-body text-sm text-gray-600 dark:text-dark-muted">
                    {/* NOTĂ: Înlocuiți cu datele reale ale DPO-ului desemnat */}
                    Numele și datele de contact ale DPO se comunică la secretariatul liceului.<br />
                    Telefon: 0253-335012<br />
                    Email: licturceni@yahoo.com
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border p-6">
                <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text mb-4">2. Ce date personale colectăm</h2>
                <p className="font-body text-sm text-gray-600 dark:text-dark-muted leading-relaxed mb-3">
                  Prin intermediul acestui site, putem colecta următoarele categorii de date:
                </p>
                <div className="space-y-2">
                  {[
                    "Formularul de contact: nume, adresă de email, subiect, mesajul transmis — pentru a răspunde solicitărilor dvs.",
                    "Newsletter: adresa de email — pentru transmiterea anunțurilor importante, cu consimțământul dvs. explicit.",
                    "Cookies tehnice: date de navigare anonime — pentru funcționarea corectă a site-ului.",
                  ].map((item, i) => (
                    <div key={i} className="font-body text-sm text-gray-600 dark:text-dark-muted flex gap-2">
                      <span className="text-brand-teal flex-shrink-0">•</span>{item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border p-6">
                <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text mb-4">3. Scopul și temeiul legal al prelucrării</h2>
                <div className="space-y-3">
                  {[
                    { scop: "Răspunsul la solicitări", temei: "Interesul legitim al instituției (Art. 6 alin. 1 lit. f GDPR)" },
                    { scop: "Transmiterea de anunțuri (newsletter)", temei: "Consimțământul dvs. (Art. 6 alin. 1 lit. a GDPR)" },
                    { scop: "Transparență instituțională", temei: "Obligație legală (Legea 544/2001, Art. 6 alin. 1 lit. c GDPR)" },
                    { scop: "Publicarea fotografiilor de la evenimente", temei: "Consimțământul persoanelor vizate / al părinților pentru minori" },
                  ].map((item, i) => (
                    <div key={i} className="font-body text-sm py-2 border-b border-gray-100 dark:border-dark-border last:border-0">
                      <span className="font-semibold text-gray-900 dark:text-dark-text">{item.scop}</span>
                      <br /><span className="text-gray-500 dark:text-dark-muted text-xs">Temei: {item.temei}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border p-6">
                <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text mb-4">4. Durata stocării datelor</h2>
                <p className="font-body text-sm text-gray-600 dark:text-dark-muted leading-relaxed">
                  Datele colectate prin formularul de contact sunt stocate pe durata necesară soluționării solicitării, dar nu mai mult de 1 an.
                  Adresele de email pentru newsletter sunt stocate până la retragerea consimțământului (dezabonare).
                  Datele de navigare (cookies) sunt stocate conform duratelor specificate în Politica de cookies.
                </p>
              </div>

              <div className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border p-6">
                <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text mb-4">5. Drepturile dvs.</h2>
                <p className="font-body text-sm text-gray-600 dark:text-dark-muted leading-relaxed mb-3">
                  Conform GDPR, aveți următoarele drepturi:
                </p>
                <div className="space-y-2">
                  {[
                    "Dreptul de acces — să aflați ce date deținem despre dvs.",
                    "Dreptul la rectificare — să corectați datele inexacte.",
                    "Dreptul la ștergere ('dreptul de a fi uitat') — să solicitați ștergerea datelor.",
                    "Dreptul la restricționarea prelucrării.",
                    "Dreptul la portabilitatea datelor.",
                    "Dreptul de opoziție — să vă opuneți prelucrării în anumite situații.",
                    "Dreptul de a depune plângere la ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) — anspdcp.ro.",
                  ].map((item, i) => (
                    <div key={i} className="font-body text-sm text-gray-600 dark:text-dark-muted flex gap-2">
                      <span className="text-brand-teal flex-shrink-0">•</span>{item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border p-6">
                <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text mb-4">6. Protecția datelor minorilor</h2>
                <p className="font-body text-sm text-gray-600 dark:text-dark-muted leading-relaxed">
                  Liceul Tehnologic Turceni acordă o atenție deosebită protecției datelor elevilor minori.
                  Nu publicăm pe site liste nominale cu elevi.
                  Fotografiile de la evenimente care includ elevi minori sunt publicate doar cu acordul scris al părinților/tutorilor legali.
                  Părinții pot solicita oricând eliminarea fotografiilor care îi includ pe copiii lor, contactând secretariatul la 0253-335012 sau licturceni@yahoo.com.
                </p>
              </div>

              <div className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border p-6">
                <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text mb-4">7. Transferul datelor</h2>
                <p className="font-body text-sm text-gray-600 dark:text-dark-muted leading-relaxed">
                  Datele colectate prin formularul de contact sunt procesate prin serviciul Formspree Inc. (SUA), care respectă clauzele contractuale standard ale UE.
                  Conținutul site-ului este găzduit pe Vercel Inc. (SUA) și Sanity AS (Norvegia), ambele conforme cu GDPR.
                  Nu vindem și nu transmitem date personale către terți în scopuri comerciale.
                </p>
              </div>

              <div className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border p-6">
                <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text mb-4">8. Contact</h2>
                <p className="font-body text-sm text-gray-600 dark:text-dark-muted leading-relaxed">
                  Pentru orice întrebări legate de protecția datelor personale, contactați:<br /><br />
                  <span className="font-semibold text-gray-900 dark:text-dark-text">Liceul Tehnologic Turceni</span><br />
                  Str. Educației nr. 1, Turceni 217520, Gorj<br />
                  Telefon: 0253-335012<br />
                  Email: licturceni@yahoo.com
                </p>
              </div>

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
