import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { anAdmitere } from "@/lib/constants";
import type { Metadata } from "next";
import { SectionHeader, AnimatedSection } from "@/components/ui/SectionHeader";
import { ADMITERE, calendarAdmitere } from "@/lib/data";
import { CONTACT } from "@/lib/constants";
import { PaginaAntet } from "@/components/ui/PaginaAntet";
import { GrilaProfiluri } from "@/components/ui/GrilaProfiluri";
import { ButonCerneala, LinkSubliniat } from "@/components/ui/Buton";

export const metadata: Metadata = { title: `Admitere ${anAdmitere()}`, description: "Documente, calendar și profiluri disponibile la Liceul Tehnologic Turceni." };

export default function AdmiterePage() {
  return (
    <div className="pt-28">
      <Breadcrumbs items={[{ label: `Admitere ${anAdmitere()}` }]} />
      <PaginaAntet eticheta="Clasa a IX-a" titlu={<>Admitere {anAdmitere()}</>} subtitlu={<>Depuneți dosarele la secretariat, {CONTACT.adresa}.</>}>
        <ButonCerneala href="/contact">Contactează secretariatul</ButonCerneala>
        <LinkSubliniat href="/oferta">Vezi profilurile</LinkSubliniat>
      </PaginaAntet>
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
          <AnimatedSection>
            <SectionHeader label="Dosarul" title="Documente necesare" />
            <ol className="border-t border-line">
              {ADMITERE.documente.map((d, i) => (
                <li key={i} className="grid grid-cols-[2.5rem_1fr] gap-3 py-4 border-b border-line font-body text-[15px] text-ink">
                  <span className="font-heading ltt-accent">{String(i + 1).padStart(2, "0")}</span>{d}
                </li>
              ))}
            </ol>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <SectionHeader label="Termene" title="Calendar admitere" />
            <ol className="border-t border-line">
              {calendarAdmitere().map((c, i) => (
                <li key={i} className="grid grid-cols-[9rem_1fr] gap-4 py-4 border-b border-line">
                  <span className="ltt-kicker !text-[10px] ltt-accent pt-1.5">{c.data}</span>
                  <span className="font-heading text-xl text-ink">{c.eveniment}</span>
                </li>
              ))}
            </ol>
            <p className="font-body text-[13px] text-ink-soft mt-4">Calendar orientativ. Datele exacte se stabilesc prin ordin al ministrului educației și se publică în secțiunea Noutăți.</p>
          </AnimatedSection>
        </div>
      </section>
      <section className="py-20 md:py-24 px-6 bg-paper-2">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection><SectionHeader label="Profiluri" title="Alege-ți viitorul" /></AnimatedSection>
          <GrilaProfiluri />
        </div>
      </section>
    </div>
  );
}