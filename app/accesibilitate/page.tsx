import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/SectionHeader";
import { PaginaAntet } from "@/components/ui/PaginaAntet";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Declarație de accesibilitate",
  description: "Declarația de accesibilitate a site-ului Liceului Tehnologic Turceni: starea de conformitate, limitările cunoscute și cum ne semnalați o problemă.",
};

const L = "ltt-accent underline underline-offset-2 hover:decoration-2";

const MASURI = [
  "Navigare cu tastatura — toate elementele interactive sunt accesibile cu tasta Tab",
  "Link „Salt la conținut” — duce direct la conținutul principal al paginii",
  "Contrast de culoare — textul respectă raportul minim de 4,5:1 (WCAG nivel AA), verificat pe toate paginile, în ambele moduri de afișare",
  "Etichete pentru cititoarele de ecran — butoanele, meniurile și zilele din calendar au denumiri descriptive",
  "Focus vizibil — elementul activ este marcat clar, inclusiv pe secțiunile cu fundal închis",
  "Text redimensionabil — conținutul se adaptează la mărirea textului în browser",
  "Structură semantică — titluri ierarhice, regiuni ale paginii și liste corect marcate",
  "Linkurile din text sunt subliniate, nu doar colorate",
  "Mod întunecat — util pentru persoanele sensibile la lumină",
  "Mișcare redusă — dacă dispozitivul cere reducerea mișcării, animațiile și efectele de derulare se opresc",
  "Tipărire — paginile se pot tipări fără elementele de navigare",
];

const LIMITARI = [
  "Documentele PDF publicate pot să nu fie accesibile, în funcție de modul în care au fost create",
  "Imaginile încărcate prin sistemul de administrare a conținutului pot să nu aibă întotdeauna un text alternativ complet",
  "Harta Google de pe pagina Contact este un serviciu extern și poate să nu fie complet accesibilă; adresa liceului este disponibilă și ca text, iar harta se poate deschide direct în Google Maps",
];

export default function AccesibilitatePage() {
  return (
    <div className="pt-28">
      <Breadcrumbs items={[{ label: "Accesibilitate" }]} />
      <PaginaAntet eticheta="Pentru toți vizitatorii" titlu="Declarație de accesibilitate" subtitlu="Cât de accesibil este site-ul și cum ne semnalați o problemă" />

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="space-y-6">

              <div className="bg-paper rounded-sm border border-line p-6">
                <h2 className="font-heading text-xl font-bold text-ink mb-4">Angajament</h2>
                <p className="font-body text-sm text-ink-soft leading-relaxed">
                  Liceul Tehnologic Turceni se angajează să asigure accesibilitatea site-ului pentru toate persoanele, inclusiv pentru persoanele cu dizabilități, conform legislației privind accesibilitatea site-urilor web ale organismelor din sectorul public, care transpune Directiva (UE) 2016/2102.
                </p>
              </div>

              <div className="bg-paper rounded-sm border border-line p-6">
                <h2 className="font-heading text-xl font-bold text-ink mb-4">Starea de conformitate</h2>
                <p className="font-body text-sm text-ink-soft leading-relaxed mb-3">
                  Acest site este <strong>parțial conform</strong> cu standardul WCAG 2.1, nivel AA.
                </p>
                <p className="font-body text-sm text-ink-soft leading-relaxed mb-3">
                  În octombrie 2026, toate paginile publice au fost verificate automat cu axe-core (regulile WCAG 2.2, nivel AA), pe calculator și pe telefon, în modul luminos și în cel întunecat, fără probleme găsite. Verificarea automată nu acoperă toate cerințele standardului, de aceea declarăm conformitatea ca parțială.
                </p>
                <p className="font-body text-sm text-ink-soft leading-relaxed mb-3">Măsurile de accesibilitate implementate:</p>
                <ul className="space-y-2">
                  {MASURI.map((m) => (
                    <li key={m} className="font-body text-sm text-ink-soft flex gap-2">
                      <span aria-hidden="true" className="text-accent-2 flex-shrink-0">✓</span>{m}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-paper rounded-sm border border-line p-6">
                <h2 className="font-heading text-xl font-bold text-ink mb-4">Limitări cunoscute</h2>
                <ul className="space-y-2">
                  {LIMITARI.map((m) => (
                    <li key={m} className="font-body text-sm text-ink-soft flex gap-2">
                      <span aria-hidden="true" className="ltt-accent flex-shrink-0">⚠</span>{m}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-paper rounded-sm border border-line p-6">
                <h2 className="font-heading text-xl font-bold text-ink mb-4">Feedback și contact</h2>
                <p className="font-body text-sm text-ink-soft leading-relaxed">
                  Dacă întâmpinați dificultăți de accesare a oricărei pagini de pe acest site, vă rugăm să ne contactați:<br /><br />
                  <span className="font-semibold text-ink">Liceul Tehnologic Turceni</span><br />
                  Telefon: <a href={`tel:+4${CONTACT.telefon.replace(/\D/g, "")}`} className={L}>{CONTACT.telefon}</a><br />
                  Email: <a href={`mailto:${CONTACT.email}`} className={L}>{CONTACT.email}</a><br /><br />
                  Vom încerca să vă oferim informațiile solicitate într-un format accesibil, în termen de 15 zile lucrătoare.
                </p>
              </div>

              <div className="bg-paper rounded-sm border border-line p-6">
                <h2 className="font-heading text-xl font-bold text-ink mb-4">Procedura de aplicare</h2>
                <p className="font-body text-sm text-ink-soft leading-relaxed">
                  Dacă nu primiți un răspuns satisfăcător la solicitarea dvs., vă puteți adresa autorității care monitorizează accesibilitatea site-urilor web ale instituțiilor publice.
                </p>
              </div>

              <p className="font-body text-xs text-ink-soft text-center">
                Această declarație a fost întocmită în martie 2026 și actualizată în noiembrie 2026.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
