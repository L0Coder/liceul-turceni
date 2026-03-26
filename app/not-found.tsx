import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: "linear-gradient(135deg, #1f3b5b 0%, #2980b9 50%, #1a6e5e 100%)" }}>
      <div className="text-center max-w-md">
        <Logo white className="mx-auto mb-8" />
        <div className="font-heading text-8xl font-bold text-white/20 mb-4">404</div>
        <h1 className="font-heading text-2xl font-bold text-white mb-3">Pagina nu a fost găsită</h1>
        <p className="font-body text-white/60 mb-8">Pagina pe care o cauți nu există sau a fost mutată.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
          {[
            { label: "Acasă", href: "/" },
            { label: "Oferta", href: "/oferta" },
            { label: "FAQ", href: "/faq" },
            { label: "Admitere", href: "/admitere" },
            { label: "Contact", href: "/contact" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="font-body text-sm font-semibold text-white border border-white/30 px-5 py-2.5 rounded-xl hover:bg-white/10 transition-all">{l.label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
