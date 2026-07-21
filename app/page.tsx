import { Hero } from "@/components/sections/Hero";
import { QuickAccess } from "@/components/layout/QuickAccess";
import { OfertaPreview } from "@/components/sections/OfertaPreview";
import { StatsSection, ParteneriatePreview, NoutatiPreview, TestimonialeSection, AdmitereCTA } from "@/components/sections/HomeOtherSections";
import { Newsletter } from "@/components/ui/Widgets";
import { fetchNoutati, fetchSettings } from "@/lib/fetcher";

// Homepage-ul citește din CMS — anunțurile noi și statisticile actualizate
// apar aici în maxim 60 de secunde, ca pe restul paginilor.
export const revalidate = 60;

export default async function HomePage() {
  const [noutati, settings] = await Promise.all([fetchNoutati(), fetchSettings()]);

  return (<>
    <Hero />
    <QuickAccess />
    <OfertaPreview />
    <StatsSection settings={settings} />
    <ParteneriatePreview />
    <NoutatiPreview noutati={noutati} />
    <TestimonialeSection />
    <AdmitereCTA />
    <Newsletter />
  </>);
}
