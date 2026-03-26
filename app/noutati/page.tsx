import type { Metadata } from "next";
import { GlowCard } from "@/components/ui/GlowCard";
import { AnimatedSection } from "@/components/ui/SectionHeader";
import { fetchNoutati } from "@/lib/fetcher";

export const metadata: Metadata = { title: "Noutăți", description: "Ultimele noutăți de la Liceul Tehnologic Turceni." };

// Revalidate every 60 seconds — picks up new CMS content
export const revalidate = 60;

export default async function NoutatiPage() {
  const noutati = await fetchNoutati();

  return (
    <div className="pt-28">
      <section className="py-16 px-6 text-center" style={{ background: "linear-gradient(135deg, #1f3b5b 0%, #2980b9 50%, #1a6e5e 100%)" }}>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Noutăți &amp; Anunțuri</h1>
      </section>
      <section className="py-20 px-6 bg-[#fafbfd] dark:bg-dark-bg">
        <div className="max-w-4xl mx-auto space-y-6">
          {noutati.map((n: any, i: number) => (
            <AnimatedSection key={n._id || n.slug} delay={i * 0.08}>
              <div id={n.slug} className="scroll-mt-24">
                <GlowCard glowColor="#00e5ff">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-body text-[11px] font-bold text-brand-accent bg-brand-accent/10 px-2.5 py-1 rounded-md uppercase">{n.category}</span>
                    <span className="font-body text-xs text-gray-400 dark:text-dark-subtle">{n.date}</span>
                  </div>
                  <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text mb-3">{n.title}</h2>
                  <p className="font-body text-[15px] text-gray-600 dark:text-dark-muted leading-relaxed">{n.content}</p>
                  {n.imageUrl && (
                    <div className="mt-6 relative h-48 md:h-64 rounded-xl overflow-hidden bg-gray-100 dark:bg-dark-border">
                      <img src={n.imageUrl} alt={n.title} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  )}
                </GlowCard>
              </div>
            </AnimatedSection>
          ))}
          {noutati.length === 0 && (
            <p className="text-center font-body text-gray-400 dark:text-dark-subtle py-12">Nu sunt noutăți momentan.</p>
          )}
        </div>
      </section>
    </div>
  );
}
