import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeader, AnimatedSection } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Despre noi",
  description: "Istoria și prezentarea Liceului Tehnologic Turceni — înființat în 1982, 1604 elevi, 8 profile educaționale.",
};

const repere = [
  { an: "1982", text: "Înființarea liceului la 1 septembrie, ca necesitate de instruire a salariaților termocentralei Turceni și de asigurare a forței de muncă viitoare." },
  { an: "1990", text: "Reorganizare post-revoluție. Diversificarea ofertei educaționale cu profile teoretice alături de cele tehnice." },
  { an: "2000+", text: "Dezvoltarea parteneriatelor cu Complexul Energetic Oltenia. Introducerea proiectelor Erasmus+ și a mobilităților internaționale." },
  { an: "2012", text: "Redenumirea oficială în Liceul Tehnologic Turceni, conform noii legislații a învățământului." },
  { an: "2020+", text: "Înființarea Clubului de Robotică, echipat cu Arduino, Raspberry Pi și imprimantă 3D. Participări la competiții naționale." },
  { an: "2025", text: "Finalizarea proiectului PNRR de dotare cu mobilier modern, materiale didactice și echipamente digitale de ultimă generație." },
];

const cifre = [
  { nr: "1604", label: "Elevi", icon: "🎓" },
  { nr: "155", label: "Cadre didactice", icon: "👩‍🏫" },
  { nr: "8", label: "Profile educaționale", icon: "📚" },
  { nr: "36", label: "Săli de clasă", icon: "🏫" },
  { nr: "7", label: "Laboratoare și cabinete", icon: "🔬" },
  { nr: "4", label: "Cabinete de informatică", icon: "💻" },
  { nr: "6", label: "Ateliere practică", icon: "⚙️" },
  { nr: "44", label: "Ani de activitate", icon: "🏆" },
];

const niveluri = [
  "Învățământ preșcolar (grădinițe cu program normal și prelungit)",
  "Învățământ primar (clasele pregătitoare – IV)",
  "Învățământ gimnazial (clasele V – VIII)",
  "Liceu teoretic (Matematică-Informatică, Științe ale Naturii, Filologie Bilingv Engleză)",
  "Liceu tehnologic (Electronică Automatizări, Mecanică, Electromecanică, Construcții Instalații)",
  "Școală profesională (Sudor, Electromecanic Centrale Electrice)",
];

export default function DesprePage() {
  return (
    <div className="pt-28">
      <Breadcrumbs items={[{ label: "Despre noi" }]} />

      <section className="py-16 px-6 text-center" style={{ background: "linear-gradient(135deg, #1f3b5b 0%, #2980b9 50%, #1a6e5e 100%)" }}>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Despre noi</h1>
        <p className="font-body text-lg text-white/70 max-w-xl mx-auto">De peste 4 decenii formăm generații de profesioniști.</p>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 bg-[#fafbfd] dark:bg-dark-bg">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <GlowCard glowColor="#00e5ff">
              <p className="font-body text-[15px] text-gray-600 dark:text-dark-muted leading-relaxed mb-4">
                Liceul Tehnologic Turceni a fost înființat la <strong className="text-gray-900 dark:text-dark-text">1 septembrie 1982</strong>, ca o necesitate de instruire a elevilor și a salariaților termocentralei Turceni, cu scopul de a asigura forța de muncă calificată pentru industria energetică a zonei.
              </p>
              <p className="font-body text-[15px] text-gray-600 dark:text-dark-muted leading-relaxed mb-4">
                De-a lungul a peste 4 decenii, liceul a evoluat de la o instituție industrială la un centru educațional complet, cu profile atât teoretice cât și tehnice, școlarizând elevi din Turceni și din localitățile învecinate ale județului Gorj.
              </p>
              <p className="font-body text-[15px] text-gray-600 dark:text-dark-muted leading-relaxed">
                Astăzi, Liceul Tehnologic Turceni este situat în zona centrală a orașului și oferă educație la toate nivelurile — de la grădiniță la liceu și școală profesională — cu <strong className="text-gray-900 dark:text-dark-text">1604 elevi</strong> și <strong className="text-gray-900 dark:text-dark-text">155 cadre didactice</strong>.
              </p>
            </GlowCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Cifre */}
      <section className="py-20 px-6 bg-[#fef9f3] dark:bg-dark-card">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection><SectionHeader label="Cifre" title="Liceul în numere" /></AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cifre.map((c, i) => (
              <AnimatedSection key={c.label} delay={i * 0.06}>
                <div className="text-center p-5 bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border">
                  <div className="text-2xl mb-2">{c.icon}</div>
                  <div className="font-heading text-2xl font-bold text-brand-primary dark:text-brand-teal">{c.nr}</div>
                  <div className="font-body text-xs text-gray-500 dark:text-dark-muted mt-1">{c.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Niveluri de scolarizare */}
      <section className="py-20 px-6 bg-[#fafbfd] dark:bg-dark-bg">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection><SectionHeader label="Structură" title="Niveluri de școlarizare" /></AnimatedSection>
          <AnimatedSection delay={0.1}>
            <GlowCard glowColor="#1de9b6">
              <div className="space-y-3">
                {niveluri.map((n, i) => (
                  <div key={i} className="font-body text-sm text-gray-600 dark:text-dark-muted flex items-center gap-3 py-2 border-b border-gray-100 dark:border-dark-border last:border-0">
                    <div className="w-2 h-2 rounded-full bg-brand-teal flex-shrink-0" />
                    {n}
                  </div>
                ))}
              </div>
            </GlowCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Repere istorice */}
      <section className="py-20 px-6 bg-[#fef9f3] dark:bg-dark-card">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection><SectionHeader label="Istorie" title="Repere istorice" /></AnimatedSection>
          <div className="space-y-4">
            {repere.map((r, i) => (
              <AnimatedSection key={r.an} delay={i * 0.08}>
                <div className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-brand-primary/10 dark:bg-brand-primary/20 flex items-center justify-center">
                    <span className="font-heading text-lg font-bold text-brand-primary dark:text-brand-teal">{r.an}</span>
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="font-body text-sm text-gray-600 dark:text-dark-muted leading-relaxed">{r.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Conducere */}
      <section className="py-20 px-6 bg-[#fafbfd] dark:bg-dark-bg">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection><SectionHeader label="Conducere" title="Echipa de conducere" /></AnimatedSection>
          <AnimatedSection delay={0.1}>
            <GlowCard glowColor="#00e5ff">
              <div className="flex gap-5 items-center">
                <div className="w-20 h-20 rounded-xl bg-brand-primary/10 dark:bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-3xl font-bold text-brand-primary dark:text-brand-teal">C</span>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-dark-text">Prof. Cornescu Doru-Ion</h3>
                  <div className="font-body text-xs font-bold text-brand-accent tracking-wider uppercase">Director</div>
                </div>
              </div>
            </GlowCard>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="mt-6 text-center">
              <a href="/profesori" className="font-body text-sm text-brand-teal hover:underline">
                Vezi echipa completă de cadre didactice →
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 bg-[#fef9f3] dark:bg-dark-card">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-dark-text mb-4">Contactează-ne</h2>
            <p className="font-body text-sm text-gray-600 dark:text-dark-muted mb-2">
              Str. Educației nr. 1, Turceni 217520, Județul Gorj
            </p>
            <p className="font-body text-sm text-gray-600 dark:text-dark-muted mb-6">
              Tel: 0253-335012 | Email: licturceni@yahoo.com
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 font-body text-sm font-semibold text-white px-6 py-3 rounded-xl bg-brand-primary hover:bg-brand-primary-light transition-colors">
              Pagina de contact →
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
