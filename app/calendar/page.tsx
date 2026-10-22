import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Metadata } from "next";
import { InteractiveCalendar } from "@/components/ui/Calendar";
import { AnimatedSection } from "@/components/ui/SectionHeader";
import { fetchEvenimente } from "@/lib/fetcher";
import { PaginaAntet } from "@/components/ui/PaginaAntet";

export const metadata: Metadata = { title: "Calendar", description: "Calendarul evenimentelor Liceului Tehnologic Turceni — examene, vacanțe, competiții." };
export const revalidate = 60;

export default async function CalendarPage() {
  const events = await fetchEvenimente();

  return (
    <div className="pt-28">
      <Breadcrumbs items={[{ label: "Calendar" }]} />
      <PaginaAntet eticheta="Anul școlar" titlu="Calendar școlar" subtitlu="Examene, vacanțe, competiții — totul într-un loc." />
      <section className="py-20 px-6 bg-paper">
        <div className="max-w-6xl mx-auto"><AnimatedSection><InteractiveCalendar events={events} /></AnimatedSection></div>
      </section>
    </div>
  );
}
