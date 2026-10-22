import type { Metadata } from "next";
import { anAdmitere } from "@/lib/constants";
import { PortalPage } from "@/components/layout/PortalPage";
import { ProgramOre } from "@/components/ui/ProgramOre";

export const metadata: Metadata = { title: "Pentru părinți", description: "Informații pentru părinți: rezultate, examene, transparență, contact." };

const sections = [
  { title: "Rezultate & Examene", items: [
    { icon: "📊", label: "Examene", href: "/examene", desc: "Calendarul BAC și EN, rezultatele oficiale." },
    { icon: "📅", label: "Calendar", href: "/calendar", desc: "Simulări, examene, vacanțe." },
    { icon: "📸", label: "Galerie", href: "/galerie", desc: "Laboratoare, ateliere, viața la liceu." },
  ]},
  { title: "Informații practice", items: [
    { icon: "📋", label: `Admitere ${anAdmitere()}`, href: "/admitere", desc: "Documente, calendar, locuri." },
    { icon: "📚", label: "Profiluri", href: "/oferta", desc: "Ce se învață la fiecare profil." },
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
  return <PortalPage title="Pentru părinți" subtitle="Rezultate, transparență, comunicare." sections={sections}><ProgramOre /></PortalPage>;
}
