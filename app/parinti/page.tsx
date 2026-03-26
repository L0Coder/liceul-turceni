import type { Metadata } from "next";
import { PortalPage } from "@/components/layout/PortalPage";

export const metadata: Metadata = { title: "Pentru părinți", description: "Informații pentru părinți: rezultate, examene, transparență, contact." };

const sections = [
  { title: "Rezultate & Examene", items: [
    { icon: "📊", label: "Rezultate BAC", href: "/examene", desc: "Grafice interactive, evoluție 5 ani." },
    { icon: "📅", label: "Calendar", href: "/calendar", desc: "Simulări, examene, vacanțe." },
    { icon: "🗺️", label: "Absolvenți", href: "/examene", desc: "Unde lucrează foștii elevi." },
    { icon: "🏆", label: "Olimpiade", href: "/noutati", desc: "Rezultate deosebite." },
  ]},
  { title: "Informații practice", items: [
    { icon: "📋", label: "Admitere 2026", href: "/admitere", desc: "Documente, calendar, locuri." },
    { icon: "📚", label: "Profile", href: "/oferta", desc: "Ce se învață la fiecare profil." },
    { icon: "🔍", label: "Compară", href: "/compara", desc: "Ajută-ți copilul să aleagă." },
    { icon: "❓", label: "FAQ", href: "/faq", desc: "Orar, burse, practică." },
  ]},
  { title: "Comunicare", items: [
    { icon: "📞", label: "Contact", href: "/contact", desc: "Telefon, email, formular." },
    { icon: "📄", label: "Transparență", href: "/transparenta", desc: "Regulament, buget, GDPR." },
    { icon: "📰", label: "Noutăți", href: "/noutati", desc: "Anunțuri oficiale." },
    { icon: "👩‍🏫", label: "Profesori", href: "/profesori", desc: "Echipa didactică." },
  ]},
];

export default function ParintiPage() {
  return <PortalPage emoji="👨‍👩‍👧‍👦" title="Pentru părinți" subtitle="Rezultate, transparență, comunicare." sections={sections} glowColor="#76ff03" />;
}
