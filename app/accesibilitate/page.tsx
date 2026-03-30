import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Declarație de accesibilitate",
  description: "Declarație de accesibilitate conform HG 780/2022 — Liceul Tehnologic Turceni.",
};

export default function AccesibilitatePage() {
  return (
    <div className="pt-28">
      <Breadcrumbs items={[{ label: "Accesibilitate" }]} />
      <section className="py-16 px-6 text-center" style={{ background: "linear-gradient(135deg, #1f3b5b 0%, #2980b9 50%, #1a6e5e 100%)" }}>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Declarație de accesibilitate</h1>
        <p className="font-body text-lg text-white/70 max-w-xl mx-auto">Conform HG 780/2022</p>
      </section>

      <section className="py-20 px-6 bg-[#fafbfd] dark:bg-dark-bg">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="space-y-6">

              <div className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border p-6">
                <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text mb-4">Angajament</h2>
                <p className="font-body text-sm text-gray-600 dark:text-dark-muted leading-relaxed">
                  Liceul Tehnologic Turceni se angajează să asigure accesibilitatea site-ului web pentru toate persoanele, inclusiv cele cu dizabilități, conform Hotărârii Guvernului nr. 780/2022 privind condițiile de accesibilitate pentru produse și servicii și a Directivei (UE) 2016/2102.
                </p>
              </div>

              <div className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border p-6">
                <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text mb-4">Starea de conformitate</h2>
                <p className="font-body text-sm text-gray-600 dark:text-dark-muted leading-relaxed mb-3">
                  Acest site web este <strong>parțial conform</strong> cu standardul WCAG 2.1 nivel AA. Măsurile de accesibilitate implementate includ:
                </p>
                <div className="space-y-2">
                  {[
                    "Navigare cu tastatura — toate elementele interactive sunt accesibile prin Tab",
                    "Link 'Salt la conținut' (skip-to-content) — permite navigarea rapidă la conținutul principal",
                    "Contrast de culoare — text lizibil pe toate fundalurile, în ambele moduri (light/dark)",
                    "Atribute aria — butoane, meniuri și elemente interactive au etichete descriptive",
                    "Focus vizibil — indicatori vizuali clari pentru elementul activ",
                    "Text redimensionabil — conținutul se adaptează la mărirea textului în browser",
                    "Structură semantică HTML — headings ierarhice (h1-h3), landmarks, liste",
                    "Mod dark — reduce oboseala vizuală, util pentru persoanele sensibile la lumină",
                    "Respectarea preferinței 'prefers-reduced-motion' — animațiile se dezactivează automat",
                    "Print CSS — paginile pot fi tipărite fără elemente de navigare",
                  ].map((item, i) => (
                    <div key={i} className="font-body text-sm text-gray-600 dark:text-dark-muted flex gap-2">
                      <span className="text-green-500 flex-shrink-0">✓</span>{item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border p-6">
                <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text mb-4">Limitări cunoscute</h2>
                <div className="space-y-2">
                  {[
                    "Documentele PDF încărcate de utilizatori pot să nu fie accesibile (depinde de modul în care au fost create)",
                    "Imaginile încărcate prin CMS pot să nu aibă întotdeauna text alternativ complet",
                    "Calendarul interactiv poate fi dificil de navigat cu screen reader",
                  ].map((item, i) => (
                    <div key={i} className="font-body text-sm text-gray-600 dark:text-dark-muted flex gap-2">
                      <span className="text-amber-500 flex-shrink-0">⚠</span>{item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border p-6">
                <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text mb-4">Feedback și contact</h2>
                <p className="font-body text-sm text-gray-600 dark:text-dark-muted leading-relaxed">
                  Dacă întâmpinați dificultăți de accesare a oricărei pagini de pe acest site, vă rugăm să ne contactați:<br /><br />
                  <span className="font-semibold text-gray-900 dark:text-dark-text">Liceul Tehnologic Turceni</span><br />
                  Telefon: 0253-335012<br />
                  Email: licturceni@yahoo.com<br /><br />
                  Vom încerca să vă oferim informațiile solicitate într-un format accesibil, în termen de 15 zile lucrătoare.
                </p>
              </div>

              <div className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border p-6">
                <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text mb-4">Procedura de aplicare</h2>
                <p className="font-body text-sm text-gray-600 dark:text-dark-muted leading-relaxed">
                  Dacă nu primiți un răspuns satisfăcător la solicitarea dvs. de accesibilitate, puteți depune o plângere la Autoritatea Națională pentru Administrare și Reglementare în Comunicații (ANCOM) — <a href="https://www.ancom.ro" target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:underline">ancom.ro</a>.
                </p>
              </div>

              <p className="font-body text-xs text-gray-400 dark:text-dark-subtle text-center">
                Această declarație a fost întocmită la data de martie 2026.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
