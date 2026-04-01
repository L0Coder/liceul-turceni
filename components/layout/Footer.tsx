import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { CONTACT, EXTERNAL_LINKS } from "@/lib/constants";

const cols = [
  { title: "Navigare", links: [
    { label: "Despre noi", href: "/despre" }, { label: "Oferta educațională", href: "/oferta" },
    { label: "Compară profiluri", href: "/compara" }, { label: "Admitere 2026", href: "/admitere" },
    { label: "Calendar", href: "/calendar" }, { label: "Examene", href: "/examene" },
    { label: "Noutăți", href: "/noutati" },
  ]},
  { title: "Transparență", links: [
    { label: "Documente oficiale", href: "/transparenta" }, { label: "Hotărâri C.A.", href: "/transparenta" },
    { label: "RAEI", href: "/transparenta" }, { label: "Execuție bugetară", href: "/transparenta" },
    { label: "GDPR — Protecția datelor", href: "/gdpr" }, { label: "Politica de cookies", href: "/cookies" },
  ]},
  { title: "Descoperă", links: [
    { label: "Galerie", href: "/galerie" }, { label: "Profesori", href: "/profesori" },
    { label: "Blog — Jurnal LTT", href: "/blog" }, { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ]},
];

export function Footer() {
  return (
    <footer className="bg-brand-primary-dark dark:bg-[#010409] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-4"><Logo white /></div>
            <h3 className="font-heading text-[15px] font-bold text-white mb-1">Liceul Tehnologic Turceni</h3>
            <p className="font-body text-sm text-white/50 leading-relaxed">{CONTACT.adresa}<br />Tel: {CONTACT.telefon}<br />{CONTACT.email}</p>
          </div>
          {cols.map(c => (
            <div key={c.title}>
              <h4 className="font-body text-[13px] font-bold text-white/40 tracking-wider uppercase mb-5">{c.title}</h4>
              {c.links.map(l => <Link key={l.label} href={l.href} className="block font-body text-sm text-white/60 py-1.5 hover:text-white transition-colors">{l.label}</Link>)}
            </div>
          ))}
        </div>
        {/* External institutional links */}
        <div className="flex flex-wrap justify-center gap-4 mb-4 pt-6 border-t border-white/10">
          {[
            { label: "ISJ Gorj", href: "https://www.isjgorj.ro" },
            { label: "Ministerul Educației", href: "https://www.edu.ro" },
            { label: "ARACIP", href: "https://aracip.eu" },
            { label: "BacPlus.ro", href: "https://www.bacplus.ro/i/liceul-tehnologic-turceni" },
          ].map(l => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="font-body text-xs text-white/30 hover:text-white/60 transition-colors">{l.label} ↗</a>
          ))}
        </div>
        {/* Legal links */}
        <div className="flex flex-wrap justify-center gap-4 mb-6 pt-6 border-t border-white/10">
          {[
            { label: "GDPR — Protecția datelor", href: "/gdpr" },
            { label: "Politica de cookies", href: "/cookies" },
            { label: "Declarație de accesibilitate", href: "/accesibilitate" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="font-body text-xs text-white/40 hover:text-white/70 transition-colors">{l.label}</Link>
          ))}
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="font-body text-[13px] text-white/35">© 2026 Liceul Tehnologic Turceni. Toate drepturile rezervate.</div>
          <div className="font-body text-xs text-white/25">Construit cu dedicare pentru comunitatea din Turceni</div>
        </div>
      </div>
    </footer>
  );
}
