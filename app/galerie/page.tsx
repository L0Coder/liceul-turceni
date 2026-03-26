import type { Metadata } from "next";
import { GlowCard } from "@/components/ui/GlowCard";
import { AnimatedSection } from "@/components/ui/SectionHeader";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { GALERIE_CATEGORII } from "@/lib/data";

export const metadata: Metadata = { title: "Galerie", description: "Galerie foto — laboratoare, ateliere, evenimente la LTT." };

export default function GaleriePage() {
  return (
    <div className="pt-28">
      <section className="py-16 px-6 text-center" style={{ background: "linear-gradient(135deg, #1f3b5b 0%, #2980b9 50%, #1a6e5e 100%)" }}>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Galerie foto</h1>
      </section>
      <section className="py-20 px-6 bg-[#fafbfd] dark:bg-dark-bg">
        <div className="max-w-6xl mx-auto space-y-16">
          {GALERIE_CATEGORII.map(cat => (
            <AnimatedSection key={cat.slug}><div id={cat.slug} className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6"><span className="text-3xl">{cat.emoji}</span><div>
                <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-dark-text">{cat.label}</h2>
                <p className="font-body text-sm text-gray-500 dark:text-dark-muted">{cat.desc}</p>
              </div></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.imagini.map(img => (
                  <GlowCard key={img} glowColor="#00e5ff">
                    <div className="relative h-48 rounded-lg overflow-hidden bg-gray-100 dark:bg-dark-border -m-7 mb-0">
                      <PlaceholderImage src={img} alt={`${cat.label}`} fill />
                    </div>
                  </GlowCard>
                ))}
              </div>
            </div></AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}