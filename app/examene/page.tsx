import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Metadata } from "next";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeader, AnimatedSection } from "@/components/ui/SectionHeader";
import { AbsolventiMap } from "@/components/ui/Widgets";
import { EXAMENE } from "@/lib/data";

export const metadata: Metadata = { title: "Examene", description: "Calendar BAC, Evaluare Nationala si rezultate LTT." };

const secs = [
  { d: EXAMENE.bac, c: "#f26b00", g: "#ff9100" },
  { d: EXAMENE.evaluare, c: "#2aa198", g: "#1de9b6" },
  { d: EXAMENE.rezultate, c: "#1f3b5b", g: "#00e5ff" },
];

const resurse = [
  { label: "Rezultate BAC — BacPlus.ro", href: "https://www.bacplus.ro/i/liceul-tehnologic-turceni", desc: "Statistici complete pe ani, specializari, clase." },
  { label: "Rezultate EN — BacPlus.ro", href: "https://www.bacplus.ro/i/liceul-tehnologic-turceni/gimnaziu", desc: "Medii Evaluare Nationala pe ani." },
  { label: "Bacalaureat.edu.ro", href: "https://bacalaureat.edu.ro/", desc: "Rezultate oficiale Ministerul Educatiei." },
  { label: "Evaluare.edu.ro", href: "https://evaluare.edu.ro/", desc: "Rezultate oficiale Evaluare Nationala." },
];

export default function ExamenePage() {
  return (
    <div className="pt-28">
      <Breadcrumbs items={[{ label: "Examene" }]} />
      <section className="py-16 px-6 text-center" style={{ background: "linear-gradient(135deg, #1f3b5b 0%, #2980b9 50%, #1a6e5e 100%)" }}>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Examene</h1>
        <p className="font-body text-lg text-white/70 max-w-xl mx-auto">Calendare, rezultate, resurse.</p>
      </section>

      {/* Calendare BAC, EN, Rezultate */}
      <section className="py-20 px-6 bg-[#fafbfd] dark:bg-dark-bg">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {secs.map((s, i) => (
            <AnimatedSection key={s.d.title} delay={i*0.12}><GlowCard glowColor={s.g} className="h-full">
              <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text mb-5 pb-4" style={{ borderBottom: `2px solid ${s.c}22` }}>{s.d.title}</h2>
              {s.d.items.map((it, j) => <div key={j} className="font-body text-sm text-gray-600 dark:text-dark-muted py-2.5 flex items-center gap-3 border-b border-gray-100 dark:border-dark-border last:border-0"><div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.c }} />{it}</div>)}
            </GlowCard></AnimatedSection>
          ))}
        </div>
      </section>

      {/* Rezultate oficiale — linkuri externe */}
      <section className="py-20 px-6 bg-[#fef9f3] dark:bg-dark-card">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <SectionHeader label="Rezultate" title="Rezultate oficiale" subtitle="Consultati sursele oficiale pentru rezultatele complete la BAC si Evaluare Nationala." />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resurse.map((r, i) => (
                <a key={i} href={r.href} target="_blank" rel="noopener noreferrer"
                  className="block p-5 bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border hover:border-brand-teal/50 hover:translate-x-1 transition-all">
                  <div className="font-body text-sm font-semibold text-brand-primary dark:text-brand-teal mb-1">{r.label} <span className="text-gray-400">&#8599;</span></div>
                  <div className="font-body text-xs text-gray-500 dark:text-dark-muted">{r.desc}</div>
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Harta absolventilor */}
      <section id="absolventi" className="py-20 px-6 bg-[#fafbfd] dark:bg-dark-bg scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection><SectionHeader label="Absolventi" title="Unde ajung elevii nostri" /></AnimatedSection>
          <AnimatedSection delay={0.1}><AbsolventiMap /></AnimatedSection>
        </div>
      </section>
    </div>
  );
}
