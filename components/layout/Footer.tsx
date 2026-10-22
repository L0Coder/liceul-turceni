import Link from "next/link";
import { anAdmitere, CONTACT } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

// Fiecare link duce undeva anume; nicio pagină nu apare de două ori.
const cols = [
  { title: "Liceul", links: [
    { label: "Despre noi", href: "/despre" }, { label: "Oferta educațională", href: "/oferta" },
    { label: "Compară profilurile", href: "/compara" }, { label: `Admitere ${anAdmitere()}`, href: "/admitere" },
    { label: "Cadre didactice", href: "/profesori" }, { label: "Galerie", href: "/galerie" },
  ]},
  { title: "Pentru", links: [
    { label: "Elevi", href: "/elevi" }, { label: "Părinți", href: "/parinti" },
    { label: "Viitori elevi", href: "/viitori-elevi" }, { label: "Profesori", href: "/pentru-profesori" },
    { label: "Noutăți", href: "/noutati" }, { label: "Calendar", href: "/calendar" },
    { label: "Examene", href: "/examene" }, { label: "Jurnal LTT", href: "/blog" },
  ]},
  { title: "Transparență", links: [
    { label: "Documente oficiale", href: "/transparenta" },
    { label: "Informații de interes public", href: "/transparenta#solicitare" },
    { label: "Protecția datelor (GDPR)", href: "/gdpr" }, { label: "Politica de cookies", href: "/cookies" },
    { label: "Declarație de accesibilitate", href: "/accesibilitate" },
  ]},
];

const institutii = [
  { label: "ISJ Gorj", href: "https://www.isjgorj.ro/" },
  { label: "Ministerul Educației", href: "https://www.edu.ro/" },
  { label: "ARACIP", href: "https://aracip.eu/" },
  { label: "Primăria Turceni", href: "https://www.primariaturceni.ro/" },
];

const link = "font-body text-[14px] text-white/65 hover:text-white transition-colors";

export function Footer() {
  return (
    <footer className="bg-[#1f1d1a] dark:bg-[#0c0d10] text-white pt-20 pb-28 md:pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-x-8 gap-y-12">
          <div className="col-span-2 lg:col-span-1">
            <Logo white className="w-[110px]" />
            <p className="font-heading text-2xl mt-5">Liceul Tehnologic Turceni</p>
            <address className="not-italic font-body text-[14px] text-white/65 leading-[1.9] mt-3">
              {CONTACT.adresa}<br />
              <a href="tel:+40253335012" className="hover:text-white">{CONTACT.telefon}</a>
              {" · "}
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a>
            </address>
            <p className="font-body text-[13px] text-white/65 mt-4">
              <span className="ltt-kicker !text-[10px] text-white/50 mr-2">Secretariat</span>{CONTACT.program}
            </p>
          </div>
          {cols.map(c => (
            <nav key={c.title} aria-label={c.title}>
              <h2 className="ltt-kicker text-white/50 mb-5">{c.title}</h2>
              <ul className="space-y-2.5">
                {c.links.map(l => <li key={l.href}><Link href={l.href} className={link}>{l.label}</Link></li>)}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <ul className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Instituții">
            {institutii.map(l => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="font-body text-[13px] text-white/65 hover:text-white transition-colors">
                  {l.label} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="font-body text-[13px] text-white/50">© {new Date().getFullYear()} Liceul Tehnologic Turceni</p>
        </div>
      </div>
    </footer>
  );
}
