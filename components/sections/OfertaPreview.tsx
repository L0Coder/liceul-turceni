"use client";
import Link from "next/link";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeader, AnimatedSection } from "@/components/ui/SectionHeader";
import { PROFILE } from "@/lib/data";

export function OfertaPreview() {
  return (
    <section className="py-24 px-6 bg-[#fafbfd] dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection><SectionHeader label="Oferta educațională" title="8 profile pentru viitorul tău" subtitle="De la informatică la construcții — găsește drumul care ți se potrivește." /></AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROFILE.map((p, i) => (
            <AnimatedSection key={p.slug} delay={i * 0.07}>
              <Link href={`/oferta#${p.slug}`} className="block h-full">
                <GlowCard glowColor={p.glowColor} className="h-full">
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={{ background: p.color, opacity: 0.7 }} />
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5" style={{ background: p.color + "15" }}>{p.icon}</div>
                  <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-dark-text mb-2.5 leading-snug">{p.title}</h3>
                  <p className="font-body text-sm text-gray-500 dark:text-dark-muted leading-relaxed">{p.shortDesc}</p>
                  <div className="mt-5 font-body text-[13px] font-semibold flex items-center gap-1.5" style={{ color: p.color }}>Află mai multe →</div>
                </GlowCard>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
