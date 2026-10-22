import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Metadata } from "next";
import { FaqClient } from "@/components/ui/FaqClient";
import { fetchFaq } from "@/lib/fetcher";
import { PaginaAntet } from "@/components/ui/PaginaAntet";

export const metadata: Metadata = { title: "Întrebări frecvente", description: "Răspunsuri la cele mai comune întrebări despre LTT." };
export const revalidate = 60;

export default async function FAQPage() {
  const faq = await fetchFaq();

  return (
    <div className="pt-28">
      <Breadcrumbs items={[{ label: "FAQ" }]} />
      <PaginaAntet eticheta="Răspunsuri" titlu="Întrebări frecvente" subtitlu="Admitere, orar, burse, examene, practică — răspunsurile pe care le căutați cel mai des." />
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto"><FaqClient data={faq} /></div>
      </section>
    </div>
  );
}
