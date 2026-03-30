import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Metadata } from "next";
import { FaqClient } from "@/components/ui/FaqClient";
import { fetchFaq } from "@/lib/fetcher";

export const metadata: Metadata = { title: "Întrebări frecvente", description: "Răspunsuri la cele mai comune întrebări despre LTT." };
export const revalidate = 60;

export default async function FAQPage() {
  const faq = await fetchFaq();

  return (
    <div className="pt-28">
      <Breadcrumbs items={[{ label: "FAQ" }]} />
      <section className="py-16 px-6 text-center" style={{ background: "linear-gradient(135deg, #1f3b5b 0%, #2980b9 50%, #1a6e5e 100%)" }}>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Întrebări frecvente</h1>
        <p className="font-body text-lg text-white/70 max-w-xl mx-auto">Răspunsuri rapide la cele mai comune întrebări.</p>
      </section>
      <section className="py-20 px-6 bg-[#fafbfd] dark:bg-dark-bg">
        <FaqClient data={faq} />
      </section>
    </div>
  );
}
