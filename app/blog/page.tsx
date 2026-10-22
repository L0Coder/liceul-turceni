import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/SectionHeader";
import { fetchArticole } from "@/lib/fetcher";
import { PaginaAntet } from "@/components/ui/PaginaAntet";

export const metadata: Metadata = { title: "Blog — Jurnal LTT", description: "Povești și experiențe ale elevilor LTT." };
export const revalidate = 60;

export default async function BlogPage() {
  const articole = await fetchArticole();

  return (
    <div className="pt-28">
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <PaginaAntet eticheta="Scris de elevi și profesori" titlu="Jurnal LTT" subtitlu="Povești scrise de elevii și profesorii noștri." />
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto border-t border-line">
          {articole.map((post: any, i: number) => (
            <AnimatedSection key={post._id || post.slug} delay={Math.min(i, 4) * 0.06}>
              <article id={post.slug} className="scroll-mt-28 grid md:grid-cols-[12rem_1fr] gap-3 md:gap-10 py-12 border-b border-line">
                <div className="font-body text-[13px] text-ink-soft md:pt-2">
                  <div>{post.date}</div>
                  <div className="ltt-kicker ltt-accent !text-[10px] mt-2">{post.category}</div>
                </div>
                <div className="max-w-3xl">
                  {post.imageUrl && (
                    <div className="aspect-[16/9] overflow-hidden border border-line bg-paper-2 mb-8">
                      <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  )}
                  <h2 className="font-heading text-3xl md:text-4xl text-ink leading-snug">{post.title}</h2>
                  <p className="font-body text-[14px] text-ink-soft mt-3">
                    de <span className="text-ink">{post.author}</span>{post.authorRole && <>, {post.authorRole}</>}
                  </p>
                  <div className="mt-6 space-y-4">
                    {post.content?.split("\n\n").map((p: string, j: number) => (
                      <p key={j} className={`font-body text-[16px] text-ink-soft leading-[1.85] ${j === 0 ? "first-letter:font-heading first-letter:text-5xl first-letter:float-left first-letter:mr-2 first-letter:leading-[0.85] first-letter:text-ink" : ""}`}>{p}</p>
                    ))}
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.1}>
          <div className="max-w-6xl mx-auto mt-14 grid md:grid-cols-[12rem_1fr] gap-3 md:gap-10">
            <div className="ltt-kicker text-ink-soft !text-[10px] md:pt-3">Pentru elevi și profesori</div>
            <div>
              <h3 className="font-heading text-3xl text-ink">Vrei să scrii și tu?</h3>
              <p className="font-body text-[15px] text-ink-soft mt-3">
                Trimite textul tău la <a href="mailto:licturceni@yahoo.com?subject=Jurnal%20LTT" className="text-ink underline underline-offset-4">licturceni@yahoo.com</a>, cu subiectul „Jurnal LTT”.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
