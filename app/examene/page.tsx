import type { Metadata } from "next";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeader, AnimatedSection } from "@/components/ui/SectionHeader";
import { BacChart, AbsolventiMap } from "@/components/ui/Widgets";
import { EXAMENE } from "@/lib/data";

export const metadata: Metadata = { title: "Examene", description: "Calendar BAC, Evaluare Națională și rezultate LTT." };

const secs = [
  { d: EXAMENE.bac, c: "#f26b00", g: "#ff9100" },
  { d: EXAMENE.evaluare, c: "#2aa198", g: "#1de9b6" },
  { d: EXAMENE.rezultate, c: "#1f3b5b", g: "#00e5ff" },
];

export default function ExamenePage() {
  return (
    <div className="pt-28">
      <section className="py-16 px-6 text-center" style={{ background: "linear-gradient(135deg, #1f3b5b 0%, #2980b9 50%, #1a6e5e 100%)" }}>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Examene</h1>
        <p className="font-body text-lg text-white/70 max-w-xl mx-auto">Calendare, rezultate, resurse.</p>
      </section>
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
      <section className="py-20 px-6 bg-[#fef9f3] dark:bg-dark-card">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection><SectionHeader label="Statistici" title="Evoluția rezultatelor" /></AnimatedSection>
          <AnimatedSection delay={0.1}><BacChart /></AnimatedSection>
        </div>
      </section>
      <section id="absolventi" className="py-20 px-6 bg-[#fafbfd] dark:bg-dark-bg scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection><SectionHeader label="Absolvenți" title="Unde ajung elevii noștri" /></AnimatedSection>
          <AnimatedSection delay={0.1}><AbsolventiMap /></AnimatedSection>
        </div>
      </section>
    </div>
  );
}