import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Metadata } from "next";
import { GlowCard } from "@/components/ui/GlowCard";
import { AnimatedSection } from "@/components/ui/SectionHeader";
import { fetchArticole } from "@/lib/fetcher";

export const metadata: Metadata = { title: "Blog — Jurnal LTT", description: "Povești și experiențe ale elevilor LTT." };
export const revalidate = 60;

export default async function BlogPage() {
  const articole = await fetchArticole();

  return (
    <div className="pt-28">
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <section className="py-16 px-6 text-center" style={{ background: "linear-gradient(135deg, #1f3b5b 0%, #2980b9 50%, #1a6e5e 100%)" }}>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Jurnal LTT</h1>
        <p className="font-body text-lg text-white/70 max-w-xl mx-auto">Povești scrise de elevii și profesorii noștri.</p>
      </section>
      <section className="py-20 px-6 bg-[#fafbfd] dark:bg-dark-bg">
        <div className="max-w-4xl mx-auto space-y-8">
          {articole.map((post: any, i: number) => (
            <AnimatedSection key={post._id || post.slug} delay={i * 0.1}>
              <div id={post.slug} className="scroll-mt-24">
                <GlowCard glowColor="#00e5ff">
                  {post.imageUrl && (
                    <div className="relative h-48 md:h-64 rounded-xl overflow-hidden bg-gray-100 dark:bg-dark-border -mx-7 -mt-7 mb-6">
                      <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-body text-[11px] font-bold text-brand-teal bg-brand-teal/10 px-2.5 py-1 rounded-md uppercase">{post.category}</span>
                    <span className="font-body text-xs text-gray-400 dark:text-dark-subtle">{post.date}</span>
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-dark-text mb-3">{post.title}</h2>
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-8 h-8 rounded-full bg-brand-primary/10 dark:bg-brand-primary/20 flex items-center justify-center font-body text-xs font-bold text-brand-primary dark:text-brand-teal">
                      {post.author?.charAt(0) || "?"}
                    </div>
                    <div>
                      <div className="font-body text-sm font-semibold text-gray-900 dark:text-dark-text">{post.author}</div>
                      <div className="font-body text-xs text-gray-400 dark:text-dark-subtle">{post.authorRole}</div>
                    </div>
                  </div>
                  {post.content?.split("\n\n").map((p: string, j: number) => (
                    <p key={j} className="font-body text-[15px] text-gray-600 dark:text-dark-muted leading-relaxed mb-4">{p}</p>
                  ))}
                </GlowCard>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.3}>
          <div className="max-w-3xl mx-auto mt-12 text-center p-8 bg-brand-accent/5 dark:bg-brand-accent/10 rounded-2xl border border-brand-accent/10">
            <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text mb-2">Vrei să scrii și tu?</h3>
            <p className="font-body text-sm text-gray-500 dark:text-dark-muted">
              Trimite textul tău la <span className="font-semibold text-brand-accent">licturceni@yahoo.com</span> cu subiectul &quot;Jurnal LTT&quot;.
            </p>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
