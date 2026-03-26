import { Hero } from "@/components/sections/Hero";
import { QuickAccess } from "@/components/layout/QuickAccess";
import { OfertaPreview } from "@/components/sections/OfertaPreview";
import { StatsSection, ParteneriatePreview, NoutatiPreview, TestimonialeSection, AdmitereCTA } from "@/components/sections/HomeOtherSections";
import { Newsletter } from "@/components/ui/Widgets";

export default function HomePage() {
  return (<>
    <Hero />
    <QuickAccess />
    <OfertaPreview />
    <StatsSection />
    <ParteneriatePreview />
    <NoutatiPreview />
    <TestimonialeSection />
    <AdmitereCTA />
    <Newsletter />
  </>);
}
