import Link from "next/link";
import { Kicker } from "@/components/ui/Buton";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center px-6 pt-28 pb-20">
      <div className="max-w-6xl mx-auto w-full">
        <Kicker className="text-ink-soft">Eroare 404</Kicker>
        <h1 className="font-heading text-ink text-5xl md:text-7xl leading-[1.04] mt-6 max-w-3xl">
          Pagina asta a rămas <span className="italic text-[#c2410c] dark:text-[#ff8f4d]">nescrisă.</span>
        </h1>
        <p className="font-body text-[17px] leading-[1.8] text-ink-soft max-w-xl mt-6">
          Pagina pe care o cauți nu există sau a fost mutată. Poate te ajută una dintre acestea:
        </p>
        <ul className="mt-10 border-t border-line max-w-xl">
          {[
            { label: "Acasă", href: "/" },
            { label: "Oferta educațională", href: "/oferta" },
            { label: "Admitere", href: "/admitere" },
            { label: "Întrebări frecvente", href: "/faq" },
            { label: "Contact", href: "/contact" },
          ].map(l => (
            <li key={l.href} className="border-b border-line">
              <Link href={l.href} className="group flex justify-between items-center py-4 font-heading text-xl text-ink">
                {l.label}<span aria-hidden="true" className="font-body text-ink-soft transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
