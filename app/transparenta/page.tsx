import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Metadata } from "next";
import { SectionHeader, AnimatedSection } from "@/components/ui/SectionHeader";
import { fetchDocumente } from "@/lib/fetcher";
import { PaginaAntet } from "@/components/ui/PaginaAntet";

export const metadata: Metadata = { title: "Transparență instituțională", description: "Documente oficiale LTT." };
export const revalidate = 60;

export default async function TransparentaPage() {
  const documente = await fetchDocumente();

  return (
    <div className="pt-28">
      <Breadcrumbs items={[{ label: "Transparență" }]} />
      <PaginaAntet eticheta="Documente publice" titlu="Transparență instituțională" subtitlu="Regulamente, rapoarte, buget și hotărâri, publicate conform Legii 544/2001 și cerințelor ARACIP." />
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <SectionHeader label="Documente" title="Informații publice" subtitle="Conform Legii 544/2001." />
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 border-t border-line">
              {documente.map((doc: any) => {
                const inner = (
                  <>
                                        <span className="flex-1">{doc.title}</span>
                    {doc.fileUrl ? <span className="ltt-kicker ltt-accent !text-[10px]">PDF ↓</span> : <span className="ltt-kicker text-ink-soft !text-[10px]">În curând</span>}
                  </>
                );
                const cls = "font-body text-[15px] text-ink py-4 border-b border-line flex items-center gap-4 transition-colors";
                
                return doc.fileUrl ? (
                  <a key={doc._id} href={doc.fileUrl} target="_blank" rel="noopener noreferrer" className={`${cls} hover:text-accent-text`} download>
                    {inner}
                  </a>
                ) : (
                  <div key={doc._id} className={`${cls} cursor-default`}>
                    {inner}
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div id="solicitare" className="scroll-mt-28 mt-14 p-8 bg-paper-2 border border-line max-w-3xl">
              <h3 className="font-heading text-2xl text-ink mb-3">Solicitare informații publice</h3>
              <p className="font-body text-sm text-ink-soft leading-relaxed">
                Conform Legii 544/2001, puteți solicita informații la adresa: Str. Educației nr. 1, Turceni 217520 sau pe email la{" "}
                <a href="mailto:licturceni@yahoo.com" className="font-semibold ltt-accent hover:underline">licturceni@yahoo.com</a>. Termen: 10 zile lucrătoare.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
