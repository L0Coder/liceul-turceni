import type { Metadata } from "next";
import { SectionHeader, AnimatedSection } from "@/components/ui/SectionHeader";
import { fetchDocumente } from "@/lib/fetcher";

export const metadata: Metadata = { title: "Transparență instituțională", description: "Documente oficiale LTT." };
export const revalidate = 60;

export default async function TransparentaPage() {
  const documente = await fetchDocumente();

  return (
    <div className="pt-28">
      <section className="py-16 px-6 text-center" style={{ background: "linear-gradient(135deg, #1f3b5b 0%, #2980b9 50%, #1a6e5e 100%)" }}>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Transparență instituțională</h1>
      </section>
      <section className="py-20 px-6 bg-[#fafbfd] dark:bg-dark-bg">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <SectionHeader label="Documente" title="Informații publice" subtitle="Conform Legii 544/2001." />
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {documente.map((doc: any) => {
                const inner = (
                  <>
                    <span className="text-brand-teal">📄</span>
                    <span className="flex-1">{doc.title}</span>
                    {doc.fileUrl && <span className="text-brand-accent text-xs font-bold">PDF ↓</span>}
                  </>
                );
                const cls = "font-body text-sm text-gray-900 dark:text-dark-text px-5 py-4 bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border flex items-center gap-3 hover:border-brand-teal/50 hover:translate-x-1 transition-all";
                
                return doc.fileUrl ? (
                  <a key={doc._id} href={doc.fileUrl} target="_blank" rel="noopener noreferrer" className={cls} download>
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
            <div className="mt-12 p-6 bg-brand-teal/5 dark:bg-brand-teal/10 rounded-2xl border border-brand-teal/10">
              <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-dark-text mb-2">Solicitare informații publice</h3>
              <p className="font-body text-sm text-gray-600 dark:text-dark-muted leading-relaxed">
                Conform Legii 544/2001, puteți solicita informații la adresa: Str. Educației nr. 1, Turceni 217520 sau pe email la{" "}
                <span className="font-semibold text-brand-accent">licturceni@yahoo.com</span>. Termen: 10 zile lucrătoare.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
