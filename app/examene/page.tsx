import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Metadata } from "next";
import { SectionHeader, AnimatedSection } from "@/components/ui/SectionHeader";
import { AbsolventiMap } from "@/components/ui/Widgets";
import { CONTINUT_VERIFICAT } from "@/lib/data";
import { EXAMENE } from "@/lib/data";
import { PaginaAntet } from "@/components/ui/PaginaAntet";

export const metadata: Metadata = { title: "Examene", description: "Calendar BAC, Evaluare Națională și rezultate LTT." };

const secs = [
  { d: EXAMENE.bac },
  { d: EXAMENE.evaluare },
  { d: EXAMENE.rezultate },
];

const resurse = [
  { label: "Rezultate BAC — BacPlus.ro", href: "https://www.bacplus.ro/i/liceul-tehnologic-turceni", desc: "Statistici complete pe ani, specializări, clase." },
  { label: "Rezultate EN — BacPlus.ro", href: "https://www.bacplus.ro/i/liceul-tehnologic-turceni/gimnaziu", desc: "Medii Evaluare Națională pe ani." },
  { label: "Bacalaureat.edu.ro", href: "https://bacalaureat.edu.ro/", desc: "Rezultate oficiale, Ministerul Educației." },
  { label: "Evaluare.edu.ro", href: "https://evaluare.edu.ro/", desc: "Rezultate oficiale Evaluare Națională." },
];

export default function ExamenePage() {
  return (
    <div className="pt-28">
      <Breadcrumbs items={[{ label: "Examene" }]} />
      <PaginaAntet eticheta="Bacalaureat · Evaluare Națională" titlu="Examene" subtitlu="Calendarul bacalaureatului și al Evaluării Naționale, cu linkuri către rezultatele oficiale." />

      {/* Calendare BAC, EN, Rezultate */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {secs.map((s, i) => (
            <AnimatedSection key={s.d.title} delay={i * 0.1}>
              <span className="font-heading text-sm ltt-accent">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="font-heading text-3xl text-ink mt-2 pb-4 border-b border-ink/30">{s.d.title}</h2>
              <ul>{s.d.items.map((it, j) => <li key={j} className="font-body text-[14px] text-ink-soft py-3 border-b border-line">{it}</li>)}</ul>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Rezultate oficiale — linkuri externe */}
      <section className="py-20 px-6 ltt-nuanta">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <SectionHeader label="Rezultate" title="Rezultate oficiale" subtitle="Consultați sursele oficiale pentru rezultatele complete la BAC și Evaluare Națională." />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 border-t border-line">
              {resurse.map((r, i) => (
                <li key={i} className="border-b border-line">
                  <a href={r.href} target="_blank" rel="noopener noreferrer" className="group flex justify-between items-center gap-6 py-5">
                    <span>
                      <span className="block font-heading text-xl text-ink group-hover:text-accent-text transition-colors">{r.label}</span>
                      <span className="block font-body text-[13px] text-ink-soft mt-1">{r.desc}</span>
                    </span>
                    <span aria-hidden="true" className="text-ink-soft">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Harta absolvenților — doar după ce școala confirmă cifrele (lib/data.ts) */}
      {CONTINUT_VERIFICAT.absolventi && (
      <section id="absolventi" className="py-20 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection><SectionHeader label="Absolvenți" title="Unde ajung elevii noștri" /></AnimatedSection>
          <AnimatedSection delay={0.1}><AbsolventiMap /></AnimatedSection>
        </div>
      </section>
      )}
    </div>
  );
}
