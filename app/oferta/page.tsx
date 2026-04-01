import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Metadata } from "next";
import { GlowCard } from "@/components/ui/GlowCard";
import { AnimatedSection } from "@/components/ui/SectionHeader";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { PROFILE } from "@/lib/data";

export const metadata: Metadata = { title: "Oferta educațională", description: "Cele 8 profiluri educaționale ale Liceului Tehnologic Turceni." };

export default function OfertaPage() {
  return (
    <div className="pt-28">
      <Breadcrumbs items={[{ label: "Oferta educațională" }]} />
      <section className="py-16 px-6 text-center" style={{ background: "linear-gradient(135deg, #1f3b5b 0%, #2980b9 50%, #1a6e5e 100%)" }}>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Oferta educațională</h1>
        <p className="font-body text-lg text-white/70 max-w-xl mx-auto">8 profiluri pentru viitorul tău.</p>
      </section>
      <section className="py-20 px-6 bg-[#fafbfd] dark:bg-dark-bg">
        <div className="max-w-5xl mx-auto space-y-12">
          {PROFILE.map(p => (
            <AnimatedSection key={p.slug}><div id={p.slug} className="scroll-mt-24">
              <GlowCard glowColor={p.glowColor}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="relative h-48 md:h-auto rounded-xl overflow-hidden bg-gray-100 dark:bg-dark-border">
                    <PlaceholderImage src={p.imagini[0]} alt={p.title} fill />
                  </div>
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4"><span className="text-3xl">{p.icon}</span><h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-dark-text">{p.title}</h2></div>
                    <p className="font-body text-[15px] text-gray-600 dark:text-dark-muted leading-relaxed mb-6">{p.fullDesc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {[{t:"Discipline",d:p.discipline,c:p.color},{t:"Competențe",d:p.competente,c:"#2aa198"},{t:"Perspective",d:p.perspective,c:"#1f3b5b"}].map(s=>(
                        <div key={s.t}><h3 className="font-body text-xs font-bold tracking-wider uppercase mb-3" style={{color:s.c}}>{s.t}</h3>
                          {s.d.map(x=><div key={x} className="font-body text-sm text-gray-600 dark:text-dark-muted py-1 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background:s.c}}/>{x}</div>)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div></AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}