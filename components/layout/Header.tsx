"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { DarkModeToggle } from "@/components/ui/Widgets";
import { NAV_ITEMS } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const solid = scrolled || !isHome;
  const whiteText = !solid || isDark;

  let bgClass = "";
  let bgStyle: React.CSSProperties = {};
  if (!solid && !isDark) {
    bgStyle = { background: "linear-gradient(to bottom, rgba(0,0,0,0.35), transparent)" };
  } else if (isDark) {
    bgClass = "backdrop-blur-xl border-b border-dark-border";
    bgStyle = { backgroundColor: "rgba(13,17,23,0.97)" };
  } else {
    bgClass = "bg-white/97 backdrop-blur-xl border-b border-gray-200";
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[400ms] ${bgClass} ${solid ? "py-2" : "py-3.5"}`} style={bgStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <Logo white={whiteText} className="w-[120px] sm:w-[170px]" />
          <div className="hidden sm:block">
            <div className={`font-heading text-sm font-bold leading-tight transition-colors ${whiteText ? "text-white" : "text-brand-primary"}`}>Liceul Tehnologic</div>
            <div className={`font-body text-[10px] font-semibold tracking-[3px] uppercase ${isDark ? "text-brand-accent" : whiteText ? "text-white/70" : "text-brand-accent"}`}>Turceni</div>
          </div>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-0.5">
          {NAV_ITEMS.map(item => (
            <Link key={item.href} href={item.href}
              className={`font-body text-[13px] font-medium px-2.5 py-2 rounded-lg transition-all ${isDark ? "text-gray-300 hover:text-white hover:bg-white/10" : whiteText ? "text-white hover:bg-white/10" : "text-gray-800 hover:bg-brand-primary/5"}`}>
              {item.label}
            </Link>
          ))}
          <Link href="/admitere" className="font-body text-[13px] font-semibold text-white px-4 py-2 rounded-[10px] bg-brand-accent shadow-lg shadow-brand-accent/30 hover:-translate-y-0.5 transition-all ml-1.5">Admitere 2026</Link>
          <DarkModeToggle />
        </nav>
        {/* Mobile */}
        <div className="xl:hidden flex items-center gap-2">
          <DarkModeToggle />
          <button className="flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Meniu" aria-expanded={menuOpen}>
            <span className={`w-6 h-0.5 transition-all ${whiteText ? "bg-white" : "bg-brand-primary"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 transition-all ${whiteText ? "bg-white" : "bg-brand-primary"} ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 transition-all ${whiteText ? "bg-white" : "bg-brand-primary"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`xl:hidden absolute top-full left-0 right-0 shadow-xl transition-all duration-300 overflow-hidden ${isDark ? "bg-dark-card border-dark-border" : "bg-white border-gray-200"} ${menuOpen ? "max-h-[500px] border-b" : "max-h-0"}`}>
        <nav className="flex flex-col p-4 gap-0.5">
          {NAV_ITEMS.map(item => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
              className={`font-body text-[15px] font-medium px-4 py-3 rounded-lg ${isDark ? "text-gray-300 hover:bg-white/5" : "text-gray-800 hover:bg-brand-primary/5"}`}>
              {item.label}
            </Link>
          ))}
          <Link href="/admitere" onClick={() => setMenuOpen(false)} className="font-body text-[15px] font-semibold text-white text-center px-6 py-3 rounded-[10px] bg-brand-accent mt-2">Admitere 2026</Link>
        </nav>
      </div>
    </header>
  );
}
