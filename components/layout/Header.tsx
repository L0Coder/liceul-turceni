"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { DarkModeToggle } from "@/components/ui/Widgets";
import { NAV_ITEMS } from "@/lib/constants";

export function Header({ admitere }: { admitere: number }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [menuOpen]);

  const activ = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || menuOpen ? "bg-paper/90 backdrop-blur-md border-b border-line py-2" : "py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 text-ink">
          <Logo white={false} className="w-[86px] sm:w-[104px] dark:hidden" />
          <Logo white className="w-[86px] sm:w-[104px] hidden dark:block" />
          <span className="hidden sm:flex items-center gap-3">
            <span className="font-heading text-[16px] tracking-[0.12em] uppercase text-ink whitespace-nowrap">Liceul Tehnologic Turceni</span>
            <span className="hidden 2xl:inline w-px h-4 bg-line" />
            <span className="hidden 2xl:inline ltt-kicker !text-[10px] text-ink-soft">Gorj · 1982</span>
          </span>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-1">
          {NAV_ITEMS.filter(i => i.href !== "/").map(item => (
            <Link key={item.href} href={item.href}
              className={`relative ltt-kicker !text-[11px] !tracking-[0.16em] whitespace-nowrap px-2.5 py-2 transition-colors ${activ(item.href) ? "text-ink" : "text-ink-soft hover:text-ink"}`}>
              {item.label}
              {activ(item.href) && <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-1 h-1 rounded-full bg-accent-2" />}
            </Link>
          ))}
        </nav>
        <div className="hidden xl:flex items-center gap-3">
          <DarkModeToggle />
          <Link href="/admitere" className="ltt-kicker !text-[11px] whitespace-nowrap text-white bg-accent px-5 py-3 hover:bg-accent-hover transition-colors">Admitere {admitere}</Link>
        </div>
        {/* Mobile */}
        <div className="xl:hidden flex items-center gap-2">
          <DarkModeToggle />
          <button className="flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Meniu" aria-expanded={menuOpen}>
            <span className={`w-6 h-px bg-ink transition-all ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-6 h-px bg-ink transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-px bg-ink transition-all ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`xl:hidden absolute top-full left-0 right-0 bg-paper transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-[520px] border-b border-line" : "max-h-0"}`}>
        <nav className="flex flex-col px-6 py-4">
          {NAV_ITEMS.map(item => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
              className={`font-heading text-2xl py-3 border-b border-line ${activ(item.href) ? "text-ink" : "text-ink-soft"}`}>
              {item.label}
            </Link>
          ))}
          <Link href="/admitere" onClick={() => setMenuOpen(false)} className="ltt-kicker !text-[12px] text-paper bg-ink text-center px-6 py-4 mt-5">Admitere {admitere}</Link>
        </nav>
      </div>
    </header>
  );
}
