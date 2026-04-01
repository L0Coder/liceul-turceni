import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Metadata } from "next";
import Link from "next/link";
import { GlowCard } from "@/components/ui/GlowCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { SectionHeader, AnimatedSection } from "@/components/ui/SectionHeader";
import { ADMITERE, PROFILE } from "@/lib/data";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = { title: "Admitere 2026", description: "Documente, calendar și profiluri disponibile la Liceul Tehnologic Turceni." };

export default function AdmiterePage() {
  return (
    <div className="pt-28">
      <Breadcrumbs items={[{ label: "Admitere 2026" }]} />
      <section className="py-20 px-6 text-center" style={{ background: "linear-gradient(135deg, #1f3b5b 0%, #2980b9 50%, #1a6e5e 100%)" }}>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Admitere 2026</h1>
        <p className="font-body text-lg text-white/70 max-w-xl mx-auto mb-8">Depuneți dosarele la secretariat, {CONTACT.adresa}.</p>
        <div className="flex gap-5 justify-center flex-wrap">
          <GlowButton href="/contact" variant="primary">Contactează secretariatul</GlowButton>
          <GlowButton href="/oferta" variant="secondary">Vezi profilurile</GlowButton>
        </div>
      </section>
      <section className="py-20 px-6 bg-[#fafbfd] dark:bg-dark-bg">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection><GlowCard glowColor="#ff9100" className="h-full">
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-dark-text mb-6 pb-4 border-b-2 border-brand-accent/20">Documente necesare</h2>
            {ADMITERE.documente.map((d, i) => <div key={i} className="font-body text-sm text-gray-600 dark:text-dark-muted py-3 flex items-start gap-3 border-b border-gray-100 dark:border-dark-border last:border-0"><span className="text-brand-accent font-bold flex-shrink-0">{i+1}.</span>{d}</div>)}
          </GlowCard></AnimatedSection>
          <AnimatedSection delay={0.15}><GlowCard glowColor="#00e5ff" className="h-full">
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-dark-text mb-6 pb-4 border-b-2 border-brand-teal/20">Calendar admitere</h2>
            {ADMITERE.calendar.map((c, i) => <div key={i} className="font-body text-sm text-gray-600 dark:text-dark-muted py-3 flex justify-between border-b border-gray-100 dark:border-dark-border last:border-0"><span className="font-semibold text-gray-900 dark:text-dark-text">{c.data}</span><span>{c.eveniment}</span></div>)}
          </GlowCard></AnimatedSection>
        </div>
      </section>
      <section className="py-20 px-6 bg-[#fef9f3] dark:bg-dark-card">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection><SectionHeader label="Profiluri" title="Alege-ți viitorul" /></AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {PROFILE.map((p, i) => <AnimatedSection key={p.slug} delay={i*0.06}><Link href={`/oferta#${p.slug}`} className="block">
              <GlowCard glowColor={p.glowColor}><div className="text-center"><div className="text-3xl mb-2">{p.icon}</div><h3 className="font-body text-sm font-bold text-gray-900 dark:text-dark-text">{p.title}</h3></div></GlowCard>
            </Link></AnimatedSection>)}
          </div>
        </div>
      </section>
    </div>
  );
}