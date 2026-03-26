"use client";
import Link from "next/link";
import { GlowCard } from "@/components/ui/GlowCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { SectionHeader, AnimatedSection } from "@/components/ui/SectionHeader";
import { STATS, PARTENERIATE, NOUTATI, TESTIMONIALE } from "@/lib/data";

export function StatsSection() {
  return (
    <section className="py-20 px-6 relative" style={{ background: "linear-gradient(135deg, #1f3b5b 0%, #2980b9 50%, #1a6e5e 100%)" }}>
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection><SectionHeader label="Rezultate" title="Cifrele care ne definesc" light /></AnimatedSection>
        <AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {STATS.map(s => (
              <GlowCard key={s.label} glowColor={s.glowColor} dark className="text-center">
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="font-heading text-3xl sm:text-4xl font-bold text-white leading-none mb-2">{s.number}</div>
                <div className="font-body text-xs sm:text-sm text-white/60">{s.label}</div>
              </GlowCard>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export function ParteneriatePreview() {
  return (
    <section className="py-24 px-6 bg-[#fef9f3] dark:bg-dark-card">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection><SectionHeader label="Parteneriate" title="Conectați la industrie" /></AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PARTENERIATE.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <GlowCard glowColor={p.glowColor} className="h-full">
                <span className="inline-block font-body text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-md" style={{ color: p.color, background: p.color + "12" }}>{p.tag}</span>
                <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text mt-5 mb-3">{p.title}</h3>
                <p className="font-body text-sm text-gray-500 dark:text-dark-muted leading-relaxed">{p.desc}</p>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NoutatiPreview() {
  return (
    <section className="py-24 px-6 bg-[#fafbfd] dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection><SectionHeader label="Noutăți" title="Ce se întâmplă la noi" /></AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NOUTATI.slice(0, 3).map((n, i) => (
            <AnimatedSection key={n.slug} delay={i * 0.1}>
              <Link href={`/noutati#${n.slug}`} className="block h-full">
                <GlowCard glowColor={n.glowColor} className="h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-body text-[11px] font-bold text-brand-accent bg-brand-accent/10 px-2.5 py-1 rounded-md uppercase">{n.category}</span>
                    <span className="font-body text-xs text-gray-400 dark:text-dark-subtle">{n.date}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-dark-text mb-2.5 leading-snug">{n.title}</h3>
                  <p className="font-body text-sm text-gray-500 dark:text-dark-muted">{n.excerpt}</p>
                </GlowCard>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.3}>
          <div className="text-center mt-12">
            <Link href="/noutati" className="inline-block font-body text-[15px] font-semibold text-brand-primary dark:text-brand-teal px-9 py-3.5 rounded-xl border-2 border-brand-primary/10 dark:border-brand-teal/20 hover:bg-brand-primary dark:hover:bg-brand-teal hover:text-white transition-all">Vezi toate →</Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export function TestimonialeSection() {
  return (
    <section className="py-24 px-6 bg-[#fef9f3] dark:bg-dark-card">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection><SectionHeader label="Testimoniale" title="Ce spun cei care ne cunosc" /></AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALE.map((q, i) => (
            <AnimatedSection key={q.author} delay={i * 0.1}>
              <GlowCard glowColor="#00e5ff" className="h-full">
                <div className="flex flex-col h-full">
                  <div className="font-heading text-5xl text-brand-accent/20 leading-none mb-2">"</div>
                  <p className="font-body text-sm text-gray-900 dark:text-dark-text leading-relaxed italic flex-1 mb-6">{q.text}</p>
                  <div>
                    <div className="font-body text-sm font-bold text-gray-900 dark:text-dark-text">{q.author}</div>
                    <div className="font-body text-[13px] text-gray-500 dark:text-dark-muted mt-0.5">{q.role}</div>
                  </div>
                </div>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AdmitereCTA() {
  return (
    <section className="py-24 px-6 bg-[#fafbfd] dark:bg-dark-bg">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1f3b5b 0%, #2980b9 50%, #1a6e5e 100%)" }}>
            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Admitere 2026</h2>
              <p className="font-body text-[17px] text-white/70 leading-relaxed max-w-lg mx-auto mb-9">Înscrierile sunt deschise. Descoperă profilele disponibile și calendarul complet.</p>
              <div className="flex gap-5 justify-center flex-wrap">
                <GlowButton href="/admitere" variant="primary">Înscrie-te acum</GlowButton>
                <GlowButton href="/oferta" variant="secondary">Vezi profilele</GlowButton>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
