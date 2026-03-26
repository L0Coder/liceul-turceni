import type { Metadata } from "next";
import { PortalPage } from "@/components/layout/PortalPage";

export const metadata: Metadata = { title: "Pentru profesori", description: "Resurse pentru cadrele didactice: documente, calendar, legislație." };

const sections = [
  { title: "Resurse didactice", items: [
    { icon: "📅", label: "Calendar", href: "/calendar", desc: "Examene, simulări, vacanțe, ședințe." },
    { icon: "📚", label: "Profile", href: "/oferta", desc: "Descrierile celor 8 profile." },
    { icon: "📊", label: "Rezultate", href: "/examene", desc: "Istoric BAC, EN, statistici." },
    { icon: "📸", label: "Galerie", href: "/galerie", desc: "Imagini pentru prezentări." },
  ]},
  { title: "Documente", items: [
    { icon: "📄", label: "Transparență", href: "/transparenta", desc: "Regulament, hotărâri, organigramă." },
    { icon: "👥", label: "Echipa", href: "/profesori", desc: "Cadrele didactice pe catedre." },
    { icon: "📰", label: "Noutăți", href: "/noutati", desc: "Comunicări oficiale." },
    { icon: "✍️", label: "Blog", href: "/blog", desc: "Publică articole, proiecte." },
  ]},
  { title: "Linkuri externe", items: [
    { icon: "🏛️", label: "ISJ Gorj", href: "https://www.isjgorj.ro/", desc: "Circulare, concursuri.", external: true },
    { icon: "🎓", label: "Ministerul Educației", href: "https://www.edu.ro/", desc: "Ordine, metodologii.", external: true },
    { icon: "💻", label: "SIIIR", href: "https://siiir.edu.ro/", desc: "Sistemul informatic integrat.", external: true },
    { icon: "📞", label: "Contact", href: "/contact", desc: "Secretariat, formular." },
  ]},
];

export default function PentruProfesoriPage() {
  return <PortalPage emoji="👩‍🏫" title="Pentru profesori" subtitle="Resurse, documente, calendare." sections={sections} glowColor="#ff9100" />;
}
