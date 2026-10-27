"use client";
import { useState, useEffect } from "react";

const icon = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

/* ═══ CONTACT RAPID: telefon, email, întrebări frecvente ═══ */
export function FloatingContact() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);
  const rand = "flex items-center justify-between gap-6 px-5 py-4 border-b border-line last:border-0 hover:bg-paper-2 transition-colors";
  return (
    <div className="floating-widget fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div id="contact-rapid" className="w-72 bg-paper border border-line shadow-2xl mb-1">
          <div className="ltt-kicker !text-[10px] text-ink-soft px-5 pt-4 pb-2">Secretariat</div>
          <a href="tel:+40253335012" className={rand}><span className="font-heading text-lg text-ink">0253-335012</span><span className="ltt-kicker !text-[10px] ltt-accent">Sună</span></a>
          <a href="mailto:licturceni@yahoo.com" className={rand}><span className="font-heading text-lg text-ink">licturceni@yahoo.com</span><span className="ltt-kicker !text-[10px] ltt-accent">Email</span></a>
          <a href="/faq" className={rand}><span className="font-heading text-lg text-ink">Întrebări frecvente</span><span aria-hidden="true" className="text-ink-soft">→</span></a>
        </div>
      )}
      <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="contact-rapid"
        className="w-14 h-14 rounded-full bg-accent text-white hover:bg-accent-hover shadow-xl ring-1 ring-black/10 transition-colors grid place-items-center"
        aria-label={open ? "Închide contactul rapid" : "Contact rapid: telefon și email"}>
        {open
          ? <svg {...icon}><path d="M6 6l12 12M18 6L6 18" /></svg>
          : <svg {...icon} width={22} height={22}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>}
      </button>
    </div>
  );
}

/* ═══ DARK MODE TOGGLE ═══ */
export function DarkModeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("ltt-dark-mode");
    if (saved === "true" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDark(true); document.documentElement.classList.add("dark");
    }
  }, []);
  const toggle = () => {
    const next = !dark; setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("ltt-dark-mode", String(next));
  };
  if (!mounted) return <div className="w-9 h-9" />;
  return (
    <button onClick={toggle} className="w-9 h-9 rounded-full grid place-items-center text-ink-soft border border-line hover:text-ink hover:border-ink/40 transition-colors"
      aria-label={dark ? "Mod luminos" : "Mod întunecat"} title={dark ? "Mod luminos" : "Mod întunecat"}>
      {dark
        ? <svg {...icon} width={16} height={16}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
        : <svg {...icon} width={16} height={16}><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" /></svg>}
    </button>
  );
}

/* ═══ ABSOLVENTI MAP ═══ */
export function AbsolventiMap() {
  const data = [
    { loc: "CEO Turceni", count: 45, type: "Ingineri, tehnicieni" },
    { loc: "CEO Rovinari", count: 12, type: "Electricieni, mecanici" },
    { loc: "Universitatea din Craiova", count: 15, type: "Studenți" },
    { loc: "Politehnică București", count: 8, type: "Studenți inginerie" },
    { loc: "Firme construcții Gorj", count: 10, type: "Instalatori" },
    { loc: "Industria auto Craiova", count: 8, type: "Tehnicieni" },
    { loc: "Firme IT București", count: 6, type: "Programatori" },
    { loc: "Germania — industrie", count: 5, type: "Sudori certificați" },
  ];
  const max = Math.max(...data.map(d => d.count));
  return (
    <div>
      <h3 className="ltt-kicker text-ink-soft mb-6">Unde lucrează și studiază absolvenții</h3>
      <ul className="border-t border-line">
        {data.map((d, i) => (
          <li key={i} className="grid grid-cols-[1fr_auto] sm:grid-cols-[16rem_1fr_3rem] items-center gap-x-6 gap-y-2 py-4 border-b border-line">
            <div>
              <div className="font-heading text-lg text-ink">{d.loc}</div>
              <div className="font-body text-[12px] text-ink-soft">{d.type}</div>
            </div>
            <div className="order-3 sm:order-none col-span-2 sm:col-span-1 h-[3px] bg-line">
              <div className="h-full bg-ink" style={{ width: `${(d.count / max) * 100}%` }} />
            </div>
            <span className="font-heading text-2xl text-ink text-right">{d.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
