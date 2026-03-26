import Link from "next/link";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeader, AnimatedSection } from "@/components/ui/SectionHeader";

interface PortalItem { icon: string; label: string; href: string; desc: string; external?: boolean; }
interface PortalSection { title: string; items: PortalItem[]; }
interface Props { emoji: string; title: string; subtitle: string; sections: PortalSection[]; glowColor?: string; }

export function PortalPage({ emoji, title, subtitle, sections, glowColor = "#00e5ff" }: Props) {
  return (
    <div className="pt-28">
      <section className="py-16 px-6 text-center" style={{ background: "linear-gradient(135deg, #1f3b5b 0%, #2980b9 50%, #1a6e5e 100%)" }}>
        <div className="text-5xl mb-4">{emoji}</div>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        <p className="font-body text-lg text-white/70 max-w-xl mx-auto">{subtitle}</p>
      </section>
      {sections.map((section, si) => (
        <section key={section.title} className={`py-16 px-6 ${si % 2 === 0 ? "bg-[#fafbfd] dark:bg-dark-bg" : "bg-[#fef9f3] dark:bg-dark-card"}`}>
          <div className="max-w-5xl mx-auto">
            <AnimatedSection><SectionHeader title={section.title} /></AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {section.items.map((item, i) => (
                <AnimatedSection key={item.label} delay={i * 0.08}>
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                      <GlowCard glowColor={glowColor} className="h-full">
                        <div className="flex gap-4">
                          <div className="text-3xl flex-shrink-0">{item.icon}</div>
                          <div>
                            <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-dark-text mb-1">{item.label} <span className="text-sm text-gray-400">↗</span></h3>
                            <p className="font-body text-sm text-gray-500 dark:text-dark-muted leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      </GlowCard>
                    </a>
                  ) : (
                    <Link href={item.href} className="block h-full">
                      <GlowCard glowColor={glowColor} className="h-full">
                        <div className="flex gap-4">
                          <div className="text-3xl flex-shrink-0">{item.icon}</div>
                          <div>
                            <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-dark-text mb-1">{item.label}</h3>
                            <p className="font-body text-sm text-gray-500 dark:text-dark-muted leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      </GlowCard>
                    </Link>
                  )}
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
