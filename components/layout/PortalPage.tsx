import Link from "next/link";
import { SectionHeader, AnimatedSection } from "@/components/ui/SectionHeader";
import { PaginaAntet } from "@/components/ui/PaginaAntet";

interface PortalItem { icon?: string; label: string; href: string; desc: string; external?: boolean; }
interface PortalSection { title: string; items: PortalItem[]; }
interface Props { title: string; subtitle: string; sections: PortalSection[]; children?: React.ReactNode; }

/** Pagină-portal (elevi, părinți, profesori): secțiuni de linkuri, ca un cuprins. */
export function PortalPage({ title, subtitle, sections, children }: Props) {
  return (
    <div className="pt-28">
      <PaginaAntet eticheta="Portal" titlu={title} subtitlu={subtitle} />
      {sections.map((section, si) => (
        <section key={section.title} className={`py-16 md:py-20 px-6 ${si % 2 === 0 ? "" : "ltt-nuanta"}`}>
          <div className="max-w-6xl mx-auto">
            <AnimatedSection><SectionHeader label={String(si + 1).padStart(2, "0")} title={section.title} /></AnimatedSection>
            <AnimatedSection>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 border-t border-line">
                {section.items.map((item) => {
                  const inner = (
                    <>
                      <span>
                        <span className="block font-heading text-2xl text-ink group-hover:text-accent-text transition-colors">{item.label}</span>
                        <span className="block font-body text-[14px] text-ink-soft mt-1">{item.desc}</span>
                      </span>
                      <span aria-hidden="true" className="font-body text-ink-soft transition-transform group-hover:translate-x-1">{item.external ? "↗" : "→"}</span>
                    </>
                  );
                  const cls = "group flex justify-between items-center gap-6 py-6";
                  return (
                    <li key={item.label} className="border-b border-line">
                      {item.external
                        ? <a href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
                        : <Link href={item.href} className={cls}>{inner}</Link>}
                    </li>
                  );
                })}
              </ul>
            </AnimatedSection>
          </div>
        </section>
      ))}
      {children}
    </div>
  );
}
