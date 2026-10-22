import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/SectionHeader";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { GALERIE_CATEGORII } from "@/lib/data";
import { PaginaAntet } from "@/components/ui/PaginaAntet";

export const metadata: Metadata = { title: "Galerie", description: "Galerie foto — laboratoare, ateliere, evenimente la LTT." };

export default function GaleriePage() {
  return (
    <div className="pt-28">
      <Breadcrumbs items={[{ label: "Galerie" }]} />
      <PaginaAntet eticheta="Viața la liceu" titlu="Galerie foto" subtitlu="Laboratoare, ateliere, clubul de robotică, sport, evenimente și mobilități Erasmus+." />
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {GALERIE_CATEGORII.map((cat, ci) => (
            <AnimatedSection key={cat.slug}><div id={cat.slug} className="scroll-mt-28">
              <div className="flex items-baseline gap-5 mb-6 pb-4 border-b border-line">
                <span className="font-heading text-sm ltt-accent">{String(ci + 1).padStart(2, "0")}</span>
                <h2 className="font-heading text-3xl text-ink">{cat.label}</h2>
                <p className="hidden sm:block font-body text-[14px] text-ink-soft ml-auto">{cat.desc}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.imagini.map(img => (
                  <figure key={img} className="relative aspect-[16/10] overflow-hidden border border-line bg-paper-2 group">
                    <PlaceholderImage src={img} alt={cat.label} fill className="transition-transform duration-700 group-hover:scale-[1.03]" />
                  </figure>
                ))}
              </div>
            </div></AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}