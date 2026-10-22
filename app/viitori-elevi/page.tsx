import type { Metadata } from "next";
import { SectionHeader, AnimatedSection } from "@/components/ui/SectionHeader";
import { GrilaProfiluri } from "@/components/ui/GrilaProfiluri";
import { PROFILE_ADMITERE } from "@/lib/data";
import { PaginaAntet } from "@/components/ui/PaginaAntet";
import { ButonCerneala, LinkSubliniat } from "@/components/ui/Buton";

export const metadata: Metadata = { title: "Pentru viitori elevi", description: `Ești în clasa a VIII-a? Descoperă ce oferă LTT: ${PROFILE_ADMITERE.length} profiluri de liceu, practică reală, Club Robotică.` };

export default function ViitoriEleviPage() {
  const motives = [
    { title: `${PROFILE_ADMITERE.length} profiluri de liceu`, desc: "De la informatică la electromecanică, teoretic sau tehnologic." },
    { title: "Practică reală", desc: "Ateliere echipate, practică la firme." },
    { title: "Club Robotică", desc: "Construiești roboți, mergi la competiții." },
    { title: "Erasmus+", desc: "Mobilitate în Grecia, septembrie–octombrie 2026." },
    { title: "Meserie cu certificat", desc: "Profilurile tehnice se încheie și cu certificat de calificare profesională." },
    { title: "Modernizare recentă", desc: "Mobilier nou, echipamente digitale prin PNRR (2025)." },
  ];
  const steps = [
    { n: "1", t: "Informează-te", d: "Explorează profilurile, compară-le." },
    { n: "2", t: "Vizitează-ne", d: "Ziua Porților Deschise — data se anunță în secțiunea Noutăți." },
    { n: "3", t: "Susține Evaluarea Națională", d: "Datele și resursele sunt pe pagina Examene." },
    { n: "4", t: "Depune dosarul", d: "După repartizare, vino la secretariat." },
    { n: "5", t: "Bun venit!", d: "Primul clopoțel: septembrie." },
  ];
  return (
    <div className="pt-28">
      <PaginaAntet eticheta="Pentru clasa a VIII-a" titlu="Viitorul tău începe aici" subtitlu="Ești în clasa a VIII-a? Află ce poți învăța aici, cum arată cei patru ani și cum te înscrii.">
        <ButonCerneala href="/compara">Compară profilurile</ButonCerneala>
        <LinkSubliniat href="/admitere">Info admitere</LinkSubliniat>
      </PaginaAntet>
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection><SectionHeader label="De ce noi" title="Ce te așteaptă la LTT" /></AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
            {motives.map((m, i) => (
              <AnimatedSection key={m.title} delay={i * 0.06} className="border-r border-b border-line p-8">
                <div className="font-heading text-sm ltt-accent">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-heading text-2xl text-ink mt-4 mb-2">{m.title}</h3>
                <p className="font-body text-[14px] leading-relaxed text-ink-soft">{m.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 md:py-24 px-6 ltt-nuanta">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection><SectionHeader label="Profiluri" title="Alege-ți drumul" /></AnimatedSection>
          <GrilaProfiluri />
        </div>
      </section>
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-12">
          <AnimatedSection><SectionHeader label="Pași" title="Cum te înscrii" subtitle="De la prima vizită până la primul clopoțel." /></AnimatedSection>
          <div className="border-t border-line">
            {steps.map((s, i) => (
              <AnimatedSection key={s.n} delay={i * 0.08}>
                <div className="grid grid-cols-[4rem_1fr] gap-4 py-6 border-b border-line">
                  <span className="font-heading text-4xl text-ink/25 leading-none">{s.n}</span>
                  <div><h3 className="font-heading text-2xl text-ink">{s.t}</h3><p className="font-body text-[14px] text-ink-soft mt-1">{s.d}</p></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
