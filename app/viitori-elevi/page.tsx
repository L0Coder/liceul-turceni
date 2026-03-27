import type { Metadata } from "next";
import Link from "next/link";
import { GlowCard } from "@/components/ui/GlowCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { SectionHeader, AnimatedSection } from "@/components/ui/SectionHeader";
import { PROFILE } from "@/lib/data";

export const metadata: Metadata = { title: "Pentru viitori elevi", description: "Ești în clasa a VIII-a? Descoperă ce oferă LTT: 8 profile, practică reală, Club Robotică." };

export default function ViitoriEleviPage() {
  const motives = [
    { icon: "⚡", title: "8 profile diverse", desc: "De la IT la Mecanică, sigur găsești ceva.", glow: "#00e5ff" },
    { icon: "🔧", title: "Practică reală", desc: "Ateliere echipate, practică la firme.", glow: "#ff9100" },
    { icon: "🤖", title: "Club Robotică", desc: "Construiești roboți, mergi la competiții.", glow: "#76ff03" },
    { icon: "🌍", title: "Erasmus+", desc: "Mobilități în Italia, Spania, Portugalia.", glow: "#d500f9" },
    { icon: "💼", title: "Angajare directă", desc: "Școala Profesională: rată ridicată de angajare la CEO.", glow: "#1de9b6" },
    { icon: "📈", title: "Modernizare recentă", desc: "Mobilier nou, echipamente digitale prin PNRR (2025).", glow: "#00b0ff" },
  ];
  const steps = [
    { n: "1", t: "Informează-te", d: "Explorează profilele, compară-le.", c: "#3498db" },
    { n: "2", t: "Vizitează-ne", d: "Ziua Porților Deschise — mai 2026.", c: "#2aa198" },
    { n: "3", t: "Susține EN", d: "Pregătește-te! Vezi pagina Examene.", c: "#f26b00" },
    { n: "4", t: "Depune dosarul", d: "După repartizare, vino la secretariat.", c: "#27ae60" },
    { n: "5", t: "Bun venit!", d: "Primul clopoțel: septembrie.", c: "#8e44ad" },
  ];
  return (
    <div className="pt-28">
      <section className="py-20 px-6 text-center" style={{ background: "linear-gradient(135deg, #1f3b5b 0%, #2980b9 50%, #1a6e5e 100%)" }}>
        <div className="text-5xl mb-4">🚀</div>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Viitorul tău începe aici</h1>
        <p className="font-body text-lg text-white/70 max-w-xl mx-auto mb-8">Ești în clasa a VIII-a? Descoperă de ce 1600+ elevi au ales LTT.</p>
        <div className="flex gap-5 justify-center flex-wrap">
          <GlowButton href="/compara" variant="primary">Compară profilele</GlowButton>
          <GlowButton href="/admitere" variant="secondary">Info admitere</GlowButton>
        </div>
      </section>
      <section className="py-20 px-6 bg-[#fafbfd] dark:bg-dark-bg">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection><SectionHeader label="De ce noi?" title="Ce te așteaptă la LTT" /></AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {motives.map((m, i) => (
              <AnimatedSection key={m.title} delay={i * 0.08}>
                <GlowCard glowColor={m.glow} className="h-full">
                  <div className="text-3xl mb-3">{m.icon}</div>
                  <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-dark-text mb-2">{m.title}</h3>
                  <p className="font-body text-sm text-gray-500 dark:text-dark-muted">{m.desc}</p>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-[#fef9f3] dark:bg-dark-card">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection><SectionHeader label="Profile" title="Alege-ți drumul" /></AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {PROFILE.map((p, i) => (
              <AnimatedSection key={p.slug} delay={i * 0.06}><Link href={`/oferta#${p.slug}`} className="block">
                <GlowCard glowColor={p.glowColor}><div className="text-center"><div className="text-3xl mb-2">{p.icon}</div><h3 className="font-body text-sm font-bold text-gray-900 dark:text-dark-text">{p.title}</h3></div></GlowCard>
              </Link></AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-[#fafbfd] dark:bg-dark-bg">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection><SectionHeader label="Pași" title="Cum te înscrii" /></AnimatedSection>
          <div className="space-y-6">
            {steps.map((s, i) => (
              <AnimatedSection key={s.n} delay={i * 0.1}>
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-heading text-xl font-bold text-white flex-shrink-0" style={{ background: s.c }}>{s.n}</div>
                  <div><h3 className="font-heading text-lg font-bold text-gray-900 dark:text-dark-text mb-1">{s.t}</h3><p className="font-body text-sm text-gray-500 dark:text-dark-muted">{s.d}</p></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
