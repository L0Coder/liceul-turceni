import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/SectionHeader";
import { fetchNoutati } from "@/lib/fetcher";
import { PaginaAntet } from "@/components/ui/PaginaAntet";

export const metadata: Metadata = { title: "Noutăți", description: "Ultimele noutăți de la Liceul Tehnologic Turceni." };

// Revalidate every 60 seconds — picks up new CMS content
export const revalidate = 60;

export default async function NoutatiPage() {
  const noutati = await fetchNoutati();

  return (
    <div className="pt-28">
      <Breadcrumbs items={[{ label: "Noutăți" }]} />
      <PaginaAntet eticheta="Avizier" titlu="Noutăți și anunțuri" subtitlu="Anunțurile oficiale ale liceului: an școlar, examene, vacanțe și evenimente." />
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto border-t border-line">
          {noutati.map((n: any, i: number) => (
            <AnimatedSection key={n._id || n.slug} delay={Math.min(i, 4) * 0.06}>
              <article id={n.slug} className="scroll-mt-28 grid md:grid-cols-[12rem_1fr] gap-3 md:gap-10 py-10 border-b border-line">
                <div className="font-body text-[13px] text-ink-soft md:pt-2">
                  <div>{n.date}</div>
                  <div className="ltt-kicker ltt-accent !text-[10px] mt-2">{n.category}</div>
                </div>
                <div className="max-w-3xl">
                  <h2 className="font-heading text-3xl text-ink leading-snug">{n.title}</h2>
                  <p className="font-body text-[16px] text-ink-soft leading-[1.85] mt-4">{n.content}</p>
                  {n.imageUrl && (
                    <div className="mt-6 aspect-[16/9] overflow-hidden border border-line bg-paper-2">
                      <img src={n.imageUrl} alt={n.title} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  )}
                </div>
              </article>
            </AnimatedSection>
          ))}
          {noutati.length === 0 && (
            <p className="font-body text-ink-soft py-12">Nu sunt noutăți momentan.</p>
          )}
        </div>
      </section>
    </div>
  );
}
