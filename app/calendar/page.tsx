import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Metadata } from "next";
import { InteractiveCalendar } from "@/components/ui/Calendar";
import { AnimatedSection } from "@/components/ui/SectionHeader";
import { fetchEvenimente } from "@/lib/fetcher";

export const metadata: Metadata = { title: "Calendar", description: "Calendarul evenimentelor Liceului Tehnologic Turceni — examene, vacanțe, competiții." };
export const revalidate = 60;

export default async function CalendarPage() {
  const events = await fetchEvenimente();

  return (
    <div className="pt-28">
      <Breadcrumbs items={[{ label: "Calendar" }]} />
      <section className="py-16 px-6 text-center" style={{ background: "linear-gradient(135deg, #1f3b5b 0%, #2980b9 50%, #1a6e5e 100%)" }}>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Calendar școlar</h1>
        <p className="font-body text-lg text-white/70 max-w-xl mx-auto">Examene, vacanțe, competiții — totul într-un loc.</p>
      </section>
      <section className="py-20 px-6 bg-[#fafbfd] dark:bg-dark-bg">
        <div className="max-w-6xl mx-auto"><AnimatedSection><InteractiveCalendar events={events} /></AnimatedSection></div>
      </section>
    </div>
  );
}
