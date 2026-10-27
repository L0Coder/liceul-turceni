import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/SectionHeader";
import { PaginaAntet } from "@/components/ui/PaginaAntet";

export const metadata: Metadata = {
  title: "Declarație de accesibilitate",
  description: "Declarație de accesibilitate conform HG 780/2022 — Liceul Tehnologic Turceni.",
};

export default function AccesibilitatePage() {
  return (
    <div className="pt-28">
      <Breadcrumbs items={[{ label: "Accesibilitate" }]} />
      <PaginaAntet eticheta="Pentru toți vizitatorii" titlu="Declarație de accesibilitate" subtitlu="Conform HG 780/2022" />

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="space-y-6">

              <div className="bg-paper rounded-sm border border-line p-6">
                <h2 className="font-heading text-xl font-bold text-ink mb-4">Angajament</h2>
                <p className="font-body text-sm text-ink-soft leading-relaxed">
                  Liceul Tehnologic Turceni se angajează să asigure accesibilitatea site-ului web pentru toate persoanele, inclusiv cele cu dizabilități, conform Hotărârii Guvernului nr. 780/2022 privind condițiile de accesibilitate pentru produse și servicii și a Directivei (UE) 2016/2102.
                </p>
              </div>

              <div className="bg-paper rounded-sm border border-line p-6">
                <h2 className="font-heading text-xl font-bold text-ink mb-4">Starea de conformitate</h2>
                <p className="font-body text-sm text-ink-soft leading-relaxed mb-3">
                  Acest site web este <strong>parțial conform</strong> cu standardul WCAG 2.1 nivel AA. Măsurile de accesibilitate implementate includ:
                </p>
                <div className="space-y-2">
                  {[
                    "Navigare cu tastatura — toate elementele interactive sunt accesibile prin Tab",
                    "Link 'Salt la conținut' (skip-to-content) — permite navigarea rapidă la conținutul principal",
                    "Contrast de culoare — verificat automat cu axe-core pe paginile principale, în ambele moduri (light/dark): textul respectă raportul minim WCAG 2.1 AA de 4,5:1",
                    "Atribute aria — butoane, meniuri și elemente interactive au etichete descriptive",
                    "Focus vizibil — indicatori vizuali clari pentru elementul activ",
                    "Text redimensionabil — conținutul se adaptează la mărirea textului în browser",
                    "Structură semantică HTML — headings ierarhice (h1-h3), landmarks, liste",
                    "Mod dark — reduce oboseala vizuală, util pentru persoanele sensibile la lumină",
                    "Respectarea preferinței 'prefers-reduced-motion' — animațiile se dezactivează automat",
                    "Print CSS — paginile pot fi tipărite fără elemente de navigare",
                  ].map((item, i) => (
                    <div key={i} className="font-body text-sm text-ink-soft flex gap-2">
                      <span className="text-green-500 flex-shrink-0">✓</span>{item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-paper rounded-sm border border-line p-6">
                <h2 className="font-heading text-xl font-bold text-ink mb-4">Limitări cunoscute</h2>
                <div className="space-y-2">
                  {[
                    "Documentele PDF încărcate de utilizatori pot să nu fie accesibile (depinde de modul în care au fost create)",
                    "Imaginile încărcate prin CMS pot să nu aibă întotdeauna text alternativ complet",
                    "Calendarul interactiv poate fi dificil de navigat cu screen reader",
                  ].map((item, i) => (
                    <div key={i} className="font-body text-sm text-ink-soft flex gap-2">
                      <span className="text-amber-500 flex-shrink-0">⚠</span>{item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-paper rounded-sm border border-line p-6">
                <h2 className="font-heading text-xl font-bold text-ink mb-4">Feedback și contact</h2>
                <p className="font-body text-sm text-ink-soft leading-relaxed">
                  Dacă întâmpinați dificultăți de accesare a oricărei pagini de pe acest site, vă rugăm să ne contactați:<br /><br />
                  <span className="font-semibold text-ink">Liceul Tehnologic Turceni</span><br />
                  Telefon: <a href="tel:+40253335012" className="ltt-accent underline underline-offset-2 hover:decoration-2">0253-335012</a><br />
                  Email: <a href="mailto:licturceni@yahoo.com" className="ltt-accent underline underline-offset-2 hover:decoration-2">licturceni@yahoo.com</a><br /><br />
                  Vom încerca să vă oferim informațiile solicitate într-un format accesibil, în termen de 15 zile lucrătoare.
                </p>
              </div>

              <div className="bg-paper rounded-sm border border-line p-6">
                <h2 className="font-heading text-xl font-bold text-ink mb-4">Procedura de aplicare</h2>
                <p className="font-body text-sm text-ink-soft leading-relaxed">
                  Dacă nu primiți un răspuns satisfăcător la solicitarea dvs. de accesibilitate, puteți depune o plângere la Autoritatea Națională pentru Administrare și Reglementare în Comunicații (ANCOM) — <a href="https://www.ancom.ro" target="_blank" rel="noopener noreferrer" className="ltt-accent underline underline-offset-2 hover:decoration-2">ancom.ro</a>.
                </p>
              </div>

              <p className="font-body text-xs text-ink-soft text-center">
                Această declarație a fost întocmită în martie 2026 și revizuită în septembrie 2026.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
