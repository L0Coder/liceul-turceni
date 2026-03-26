"use client";
import { useState } from "react";
import Link from "next/link";
import { GlowCard } from "@/components/ui/GlowCard";
import { AnimatedSection } from "@/components/ui/SectionHeader";
import { PROFILE } from "@/lib/data";

export default function ComparaPage() {
  const [sel, setSel] = useState<string[]>([]);
  const toggle = (s: string) => setSel(p => p.includes(s) ? p.filter(x => x !== s) : p.length < 3 ? [...p, s] : p);
  const selected = PROFILE.filter(p => sel.includes(p.slug));
  return (
    <div className="pt-28">
      <section className="py-16 px-6 text-center" style={{ background: "linear-gradient(135deg, #1f3b5b 0%, #2980b9 50%, #1a6e5e 100%)" }}>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Compară profilele</h1>
        <p className="font-body text-lg text-white/70">Selectează 2-3 profile pentru comparație.</p>
      </section>
      <section className="py-6 px-4 bg-white dark:bg-dark-card border-b border-gray-100 dark:border-dark-border sticky top-16 z-40">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center">
          {PROFILE.map(p => (
            <button key={p.slug} onClick={() => toggle(p.slug)}
              className={`font-body text-sm px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${sel.includes(p.slug) ? "text-white font-bold" : "bg-white dark:bg-dark-bg text-gray-600 dark:text-dark-muted border border-gray-200 dark:border-dark-border"}`}
              style={sel.includes(p.slug) ? { background: p.color } : {}}>
              <span>{p.icon}</span> {p.title}
            </button>
          ))}
        </div>
      </section>
      <section className="py-16 px-6 bg-[#fafbfd] dark:bg-dark-bg">
        <div className="max-w-6xl mx-auto">
          {selected.length < 2 ? (
            <div className="text-center py-20"><div className="text-6xl mb-4">{selected.length === 0 ? "☝️" : "✌️"}</div>
              <p className="font-body text-lg text-gray-400 dark:text-dark-muted">{selected.length === 0 ? "Selectează cel puțin 2 profile." : "Mai selectează unul."}</p></div>
          ) : (
            <AnimatedSection>
              <div className={`grid gap-6 ${selected.length === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-3"}`}>
                {selected.map(p => (
                  <GlowCard key={p.slug} glowColor={p.glowColor} className="h-full">
                    <div className="text-center mb-6 pb-4 border-b-2" style={{ borderColor: p.color + "33" }}>
                      <div className="text-4xl mb-2">{p.icon}</div>
                      <h2 className="font-heading text-lg font-bold text-gray-900 dark:text-dark-text">{p.title}</h2>
                    </div>
                    {[{ t: "Discipline", d: p.discipline, c: p.color }, { t: "Competențe", d: p.competente, c: "#2aa198" }, { t: "Perspective", d: p.perspective, c: "#1f3b5b" }].map(sec => (
                      <div key={sec.t} className="mb-5">
                        <h3 className="font-body text-xs font-bold tracking-wider uppercase mb-2" style={{ color: sec.c }}>{sec.t}</h3>
                        {sec.d.map(item => <div key={item} className="font-body text-sm text-gray-600 dark:text-dark-muted py-1 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: sec.c }} />{item}</div>)}
                      </div>
                    ))}
                    <Link href={`/oferta#${p.slug}`} className="block text-center font-body text-sm font-semibold py-2.5 rounded-xl mt-2" style={{ color: p.color, background: p.color + "10" }}>Detalii →</Link>
                  </GlowCard>
                ))}
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </div>
  );
}
