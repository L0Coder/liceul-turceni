"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/SectionHeader";
import { PROFILE, FILIERA } from "@/lib/data";
import { DESEN_PROFIL } from "@/components/home/Desene";
import { PaginaAntet } from "@/components/ui/PaginaAntet";

export default function ComparaPage() {
  const [sel, setSel] = useState<string[]>([]);
  const toggle = (s: string) => setSel(p => p.includes(s) ? p.filter(x => x !== s) : p.length < 3 ? [...p, s] : p);
  const selected = PROFILE.filter(p => sel.includes(p.slug));
  return (
    <div className="pt-28">
      <PaginaAntet eticheta="Unul lângă altul" titlu="Compară profilurile" subtitlu="Alege două sau trei profiluri și pune-le față în față." />
      <section className="py-5 px-6 bg-paper/95 backdrop-blur border-b border-line sticky top-16 z-40">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2">
          {PROFILE.map(p => {
            const activ = sel.includes(p.slug);
            return (
              <button key={p.slug} onClick={() => toggle(p.slug)} aria-pressed={activ}
                className={`font-body text-[13px] px-4 py-2 border transition-colors ${activ ? "bg-ink text-paper border-ink" : "text-ink-soft border-line hover:border-ink/40 hover:text-ink"}`}>
                {p.title}
              </button>
            );
          })}
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {selected.length < 2 ? (
            <div className="py-16 max-w-md">
              <p className="font-heading text-3xl text-ink">{selected.length === 0 ? "Alege două sau trei profiluri." : "Mai alege unul."}</p>
              <p className="font-body text-[15px] text-ink-soft mt-3">Le vei vedea unul lângă altul: discipline, competențe și ce poți face după.</p>
            </div>
          ) : (
            <AnimatedSection>
              <div className={`grid border-t border-l border-line ${selected.length === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-3"}`}>
                {selected.map(p => {
                  const Desen = DESEN_PROFIL[p.slug];
                  return (
                    <div key={p.slug} className="border-r border-b border-line p-8 is-in">
                      {Desen && <Desen className="w-20 text-ink" />}
                      <div className="ltt-kicker ltt-accent !text-[10px] mt-5">{FILIERA[p.slug]}</div>
                      <h2 className="font-heading text-3xl text-ink mt-2">{p.title}</h2>
                      <p className="font-heading italic text-ink-soft mt-2">{p.shortDesc}</p>
                      {[{ t: "Discipline", d: p.discipline }, { t: "Competențe", d: p.competente }, { t: "Perspective", d: p.perspective }].map(sec => (
                        <div key={sec.t} className="mt-8">
                          <h3 className="ltt-kicker text-ink pb-3 border-b border-ink/30">{sec.t}</h3>
                          <ul>{sec.d.map(item => <li key={item} className="font-body text-[14px] text-ink-soft py-2 border-b border-line">{item}</li>)}</ul>
                        </div>
                      ))}
                      <Link href={`/oferta#${p.slug}`} className="inline-block ltt-kicker !text-[11px] text-ink border-b border-ink/40 hover:border-ink py-2 mt-8">Detalii profil</Link>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </div>
  );
}
