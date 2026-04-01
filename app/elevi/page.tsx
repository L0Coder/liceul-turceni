import type { Metadata } from "next";
import { PortalPage } from "@/components/layout/PortalPage";

export const metadata: Metadata = { title: "Pentru elevi", description: "Resurse pentru elevii LTT: calendar, examene, Club Robotică, Erasmus+." };

const sections = [
  { title: "Viața școlară", items: [
    { icon: "📢", label: "Noutăți & Anunțuri", href: "/noutati", desc: "Ultimele anunțuri, evenimente, rezultate." },
    { icon: "📅", label: "Calendar școlar", href: "/calendar", desc: "Examene, vacanțe, evenimente." },
    { icon: "📊", label: "Examene & Simulări", href: "/examene", desc: "Calendar BAC, EN, rezultate." },
    { icon: "📚", label: "Profilul tău", href: "/oferta", desc: "Ce înveți, ce competențe dobândești." },
  ]},
  { title: "Activități", items: [
    { icon: "🤖", label: "Club Robotică", href: "/galerie#club-robotica", desc: "Arduino, competiții, imprimantă 3D." },
    { icon: "🌍", label: "Erasmus+", href: "/blog", desc: "Mobilități internaționale." },
    { icon: "⚽", label: "Sport", href: "/galerie#sport", desc: "Echipe, competiții." },
    { icon: "✍️", label: "Blog LTT", href: "/blog", desc: "Povești de la colegi." },
  ]},
  { title: "Util", items: [
    { icon: "🔍", label: "Compară profilurile", href: "/compara", desc: "Side-by-side, toate detaliile." },
    { icon: "❓", label: "FAQ", href: "/faq", desc: "Răspunsuri rapide." },
    { icon: "📸", label: "Galerie", href: "/galerie", desc: "Viața la LTT în imagini." },
    { icon: "📞", label: "Contact", href: "/contact", desc: "Secretariat, telefon, email." },
  ]},
];

export default function EleviPage() {
  return <PortalPage emoji="🎓" title="Pentru elevi" subtitle="Tot ce ai nevoie într-un singur loc." sections={sections} glowColor="#00e5ff" />;
}
