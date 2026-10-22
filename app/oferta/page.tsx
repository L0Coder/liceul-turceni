import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/SectionHeader";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { PROFILE, FILIERA } from "@/lib/data";
import { anAdmitere } from "@/lib/constants";
import { PaginaAntet } from "@/components/ui/PaginaAntet";
import { ButonCerneala, LinkSubliniat } from "@/components/ui/Buton";
import { DESEN_PROFIL } from "@/components/home/Desene";

export const metadata: Metadata = { title: "Oferta educațională", description: "Cele 8 profiluri educaționale ale Liceului Tehnologic Turceni." };

export default function OfertaPage() {
  return (
    <div className="pt-28">
      <Breadcrumbs items={[{ label: "Oferta educațională" }]} />
      <PaginaAntet eticheta="8 profiluri · 3 filiere" titlu="Oferta educațională" subtitlu="Liceu teoretic, filieră tehnologică și școală profesională. Fiecare profil, cu disciplinele, competențele și drumurile de după.">
        <ButonCerneala href="/compara">Compară profilurile</ButonCerneala>
        <LinkSubliniat href="/admitere">Admitere {anAdmitere()}</LinkSubliniat>
      </PaginaAntet>

      {/* cuprins */}
      <nav aria-label="Profiluri" className="px-6 py-8 border-b border-line">
        <ol className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-3">
          {PROFILE.map((p, i) => (
            <li key={p.slug}>
              <a href={`#${p.slug}`} className="group flex gap-3 font-body text-[14px] text-ink-soft hover:text-ink">
                <span className="ltt-accent font-heading">{String(i + 1).padStart(2, "0")}</span>
                <span className="group-hover:underline underline-offset-4">{p.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="px-6">
        {PROFILE.map((p, i) => {
          const Desen = DESEN_PROFIL[p.slug];
          return (
            <AnimatedSection key={p.slug}>
              <article id={p.slug} className="scroll-mt-28 max-w-6xl mx-auto py-16 md:py-20 border-b border-line grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] gap-10 md:gap-16">
                <div>
                  <div className="flex items-end justify-between gap-6">
                    <span className="font-heading text-7xl text-ink/15 leading-none">{String(i + 1).padStart(2, "0")}</span>
                    {Desen && <Desen className="w-28 text-ink" />}
                  </div>
                  <div className="relative aspect-[16/10] mt-6 border border-line bg-paper-2 overflow-hidden">
                    <PlaceholderImage src={p.imagini[0]} alt={p.title} fill />
                  </div>
                </div>
                <div>
                  <div className="ltt-kicker ltt-accent">{FILIERA[p.slug]}</div>
                  <h2 className="font-heading text-4xl md:text-5xl text-ink mt-3 leading-tight">{p.title}</h2>
                  <p className="font-heading italic text-xl text-ink-soft mt-3">{p.shortDesc}</p>
                  <p className="font-body text-[15px] text-ink-soft leading-[1.85] mt-6">{p.fullDesc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
                    {[{ t: "Discipline", d: p.discipline }, { t: "Competențe", d: p.competente }, { t: "Perspective", d: p.perspective }].map(s => (
                      <div key={s.t}>
                        <h3 className="ltt-kicker text-ink pb-3 border-b border-ink/30">{s.t}</h3>
                        <ul>{s.d.map(x => <li key={x} className="font-body text-[14px] text-ink-soft py-2 border-b border-line">{x}</li>)}</ul>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  );
}
