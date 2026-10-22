import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Metadata } from "next";
import { SectionHeader, AnimatedSection } from "@/components/ui/SectionHeader";
import { fetchProfesori, fetchSettings } from "@/lib/fetcher";
import { CONDUCERE } from "@/lib/constants";
import { PaginaAntet } from "@/components/ui/PaginaAntet";

export const metadata: Metadata = { title: "Profesori", description: "Echipa de conducere și cadrele didactice ale Liceului Tehnologic Turceni, pe catedre." };
export const revalidate = 60;

// Fallback static dacă CMS-ul e gol
const staticConducere = CONDUCERE.map((p, i) => ({
  _id: `cond-${i}`,
  name: `${p.titlu} ${p.nume}`,
  role: p.functie === "Director" ? "director" : "director-adjunct",
  catedra: null,
  imageUrl: null,
  description: null,
}));

// Fără CMS afișăm doar catedrele: nume inventate n-au ce căuta pe site.
const staticCatedre = [
  "Matematică și Informatică", "Științe ale Naturii", "Limbi moderne", "Discipline tehnice",
  "Limba română", "Istorie și Geografie", "Educație fizică", "Maiștri instructori",
];

const roleLabels: Record<string, string> = {
  "director": "Director", "director-adjunct": "Director adjunct",
  "profesor": "Profesor", "maistru": "Maistru instructor",
};

const catedraLabels: Record<string, string> = {
  "mate-info": "Matematică și Informatică", "stiinte": "Științe ale Naturii",
  "limbi": "Limbi moderne", "tehnic": "Discipline tehnice",
  "romana": "Limba română", "isto-geo": "Istorie și Geografie",
  "sport": "Educație fizică", "maistri": "Maiștri instructori",
};

/** Inițiala numelui, fără titluri: „Prof. înv. primar Bivolaru Elena” → „B”. */
function initiala(nume?: string) {
  return (nume ?? "").replace(/^((prof|înv|inv|ing|dr|ec)\.?\s*|primar\s+)+/i, "").trim().charAt(0).toUpperCase();
}

export default async function ProfesoriPage() {
  const [profesori, settings] = await Promise.all([fetchProfesori(), fetchSettings()]);
  // fetchProfesori întoarce [] când CMS-ul e gol, deci lungimea decide singură.
  const hasCmsData = profesori.length > 0;

  const conducere = hasCmsData
    ? profesori.filter((p: any) => p.role === "director" || p.role === "director-adjunct")
    : staticConducere;

  const cadrePerCatedra = hasCmsData
    ? Object.entries(
        profesori
          .filter((p: any) => p.role !== "director" && p.role !== "director-adjunct")
          .reduce((acc: Record<string, any[]>, p: any) => {
            const cat = catedraLabels[p.catedra] || p.catedra || "Necategorizat";
            if (!acc[cat]) acc[cat] = [];
            acc[cat].push(p);
            return acc;
          }, {})
      )
    : null;

  return (
    <div className="pt-28">
      <Breadcrumbs items={[{ label: "Profesori" }]} />
      <PaginaAntet eticheta="Oamenii liceului" titlu="Profesori și conducere"
        subtitlu={`${settings.cadreCount} de cadre didactice, de la grădiniță până la clasa a XII-a și școala profesională.`} />

      {/* Conducere */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection><SectionHeader label="Conducere" title="Echipa de conducere" /></AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-line">
            {conducere.map((p: any, i: number) => (
              <AnimatedSection key={p._id} delay={i * 0.1} className="border-r border-b border-line p-7">
                {p.imageUrl ? (
                  <div className="aspect-[4/5] overflow-hidden bg-paper-2 border border-line">
                    <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div aria-hidden="true" className="aspect-[4/5] bg-paper-2 border border-line grid place-items-center">
                    <span className="font-heading text-7xl text-ink/30">{initiala(p.name)}</span>
                  </div>
                )}
                <div className="ltt-kicker ltt-accent !text-[10px] mt-6">{roleLabels[p.role] || p.role}</div>
                <h3 className="font-heading text-2xl text-ink mt-2">{p.name}</h3>
                {p.description && <p className="font-body text-[14px] text-ink-soft mt-2">{p.description}</p>}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Cadre didactice */}
      <section className="py-20 md:py-24 px-6 ltt-nuanta">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <SectionHeader label="Colectiv" title="Cadre didactice pe catedre"
              subtitle={cadrePerCatedra ? undefined : "Lista nominală a profesorilor se publică din panoul de administrare. Până atunci, catedrele liceului:"} />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 border-t border-line">
            {cadrePerCatedra ? (
              (cadrePerCatedra as [string, any[]][]).map(([catName, profs], i) => (
                <AnimatedSection key={catName} delay={i * 0.05} className="py-6 border-b border-line">
                  <h3 className="font-heading text-xl text-ink">{catName}</h3>
                  <ul className="mt-3">
                    {profs.map((p: any) => <li key={p._id} className="font-body text-[14px] text-ink-soft py-1">{p.name}</li>)}
                  </ul>
                </AnimatedSection>
              ))
            ) : (
              staticCatedre.map((c, i) => (
                <AnimatedSection key={c} delay={i * 0.05} className="py-6 border-b border-line">
                  <span className="font-heading text-sm ltt-accent">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-heading text-xl text-ink mt-2">{c}</h3>
                </AnimatedSection>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
