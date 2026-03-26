import type { Metadata } from "next";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeader, AnimatedSection } from "@/components/ui/SectionHeader";
import { fetchProfesori } from "@/lib/fetcher";

export const metadata: Metadata = { title: "Profesori", description: "Echipa didactică LTT." };
export const revalidate = 60;

// Fallback static dacă CMS-ul e gol
const staticConducere = [
  { _id: "d1", name: "Prof. Cornescu Doru-Ion", role: "director", catedra: null, imageUrl: null },
  { _id: "d2", name: "Director adjunct", role: "director-adjunct", catedra: null, imageUrl: null },
];

const staticCatedre = [
  { name: "Matematică și Informatică", count: 3 },
  { name: "Științe ale Naturii", count: 2 },
  { name: "Limbi moderne", count: 3 },
  { name: "Discipline tehnice", count: 4 },
  { name: "Limba română", count: 2 },
  { name: "Istorie și Geografie", count: 2 },
  { name: "Educație fizică", count: 1 },
  { name: "Maiștri instructori", count: 3 },
];

const roleLabels: Record<string, string> = {
  "director": "Director", "director-adjunct": "Director adjunct",
  "profesor": "Profesor", "maistru": "Maistru instructor",
};

const catedraLabels: Record<string, string> = {
  "mate-info": "Matematică și Informatică", "stiinte": "Științe ale Naturii",
  "limbi": "Limbi moderne", "tehnic": "Discipline tehnice",
  "romana": "Limba română", "isto-geo": "Istorie și Geografie",
  "sport": "Educație fizică", "maistri": "Maiștri instructori",
};

export default async function ProfesoriPage() {
  const profesori = await fetchProfesori();
  const hasCmsData = profesori.length > 0 && profesori[0]._id !== "d1";

  // Separate conducere from teachers
  const conducere = hasCmsData
    ? profesori.filter((p: any) => p.role === "director" || p.role === "director-adjunct")
    : staticConducere;

  const cadrePerCatedra = hasCmsData
    ? Object.entries(
        profesori
          .filter((p: any) => p.role !== "director" && p.role !== "director-adjunct")
          .reduce((acc: Record<string, any[]>, p: any) => {
            const cat = catedraLabels[p.catedra] || p.catedra || "Necategorizat";
            if (!acc[cat]) acc[cat] = [];
            acc[cat].push(p);
            return acc;
          }, {})
      )
    : null;

  return (
    <div className="pt-28">
      <section className="py-16 px-6 text-center" style={{ background: "linear-gradient(135deg, #1f3b5b 0%, #2980b9 50%, #1a6e5e 100%)" }}>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Profesori &amp; Conducere</h1>
        <p className="font-body text-lg text-white/70">155 cadre didactice dedicate excelenței.</p>
      </section>

      {/* Conducere */}
      <section className="py-20 px-6 bg-[#fafbfd] dark:bg-dark-bg">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection><SectionHeader label="Conducere" title="Echipa de conducere" /></AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {conducere.map((p: any, i: number) => (
              <AnimatedSection key={p._id} delay={i * 0.15}>
                <GlowCard glowColor="#00e5ff">
                  <div className="flex gap-5">
                    {p.imageUrl ? (
                      <div className="w-24 h-28 rounded-xl overflow-hidden bg-gray-100 dark:bg-dark-border flex-shrink-0">
                        <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="w-24 h-28 rounded-xl bg-brand-primary/10 dark:bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="font-heading text-2xl font-bold text-brand-primary dark:text-brand-teal">{p.name?.charAt(0)}</span>
                      </div>
                    )}
                    <div>
                      <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-dark-text mb-1">{p.name}</h3>
                      <div className="font-body text-xs font-bold text-brand-accent tracking-wider uppercase">{roleLabels[p.role] || p.role}</div>
                      {p.description && <p className="font-body text-sm text-gray-500 dark:text-dark-muted mt-2">{p.description}</p>}
                    </div>
                  </div>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Cadre didactice */}
      <section className="py-20 px-6 bg-[#fef9f3] dark:bg-dark-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection><SectionHeader label="Colectiv" title="Cadre didactice pe catedre" /></AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cadrePerCatedra ? (
              // CMS data — real professors grouped by catedra
              (cadrePerCatedra as [string, any[]][]).map(([catName, profs], i) => (
                <AnimatedSection key={catName} delay={i * 0.08}>
                  <GlowCard glowColor="#1de9b6">
                    <h3 className="font-heading text-base font-bold text-gray-900 dark:text-dark-text mb-3 pb-3 border-b border-gray-100 dark:border-dark-border">{catName}</h3>
                    {profs.map((p: any) => (
                      <div key={p._id} className="font-body text-sm text-gray-600 dark:text-dark-muted py-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-teal/40" />{p.name}
                      </div>
                    ))}
                  </GlowCard>
                </AnimatedSection>
              ))
            ) : (
              // Static fallback — placeholder names
              staticCatedre.map((c, i) => (
                <AnimatedSection key={c.name} delay={i * 0.08}>
                  <GlowCard glowColor="#1de9b6">
                    <h3 className="font-heading text-base font-bold text-gray-900 dark:text-dark-text mb-3 pb-3 border-b border-gray-100 dark:border-dark-border">{c.name}</h3>
                    {Array.from({ length: c.count }).map((_, j) => (
                      <div key={j} className="font-body text-sm text-gray-600 dark:text-dark-muted py-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-teal/40" />Profesor placeholder {j + 1}
                      </div>
                    ))}
                  </GlowCard>
                </AnimatedSection>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
