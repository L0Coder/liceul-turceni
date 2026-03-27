"use client";
import { useState, useEffect } from "react";

/* ═══ FIX #5: PHONE + EMAIL BUTTONS instead of WhatsApp ═══ */
export function FloatingContact() {
  const [open, setOpen] = useState(false);
  return (
    <div className="floating-widget fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-2 mb-2">
          <a href="tel:0253335012" className="flex items-center gap-2 bg-brand-primary dark:bg-dark-card text-white px-4 py-3 rounded-xl shadow-xl hover:-translate-y-0.5 transition-all text-sm font-body font-semibold">
            📞 Sună: 0253-335012
          </a>
          <a href="mailto:licturceni@yahoo.com" className="flex items-center gap-2 bg-brand-teal dark:bg-brand-teal text-white px-4 py-3 rounded-xl shadow-xl hover:-translate-y-0.5 transition-all text-sm font-body font-semibold">
            ✉️ Email secretariat
          </a>
          <a href="/faq" className="flex items-center gap-2 bg-brand-accent text-white px-4 py-3 rounded-xl shadow-xl hover:-translate-y-0.5 transition-all text-sm font-body font-semibold">
            ❓ Întrebări frecvente
          </a>
        </div>
      )}
      <button onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-brand-primary dark:bg-brand-accent text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center text-2xl"
        aria-label={open ? "Închide" : "Ai nevoie de ajutor?"}>
        {open ? "✕" : "💬"}
      </button>
    </div>
  );
}

/* ═══ NEWSLETTER ═══ */
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  return (
    <section className="py-16 px-6 bg-brand-primary dark:bg-dark-bg">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-heading text-2xl font-bold text-white mb-3">Abonează-te la noutăți</h2>
        <p className="font-body text-sm text-white/60 mb-8">Primește anunțurile importante direct pe email.</p>
        {submitted ? (
          <div className="font-body text-sm text-brand-teal font-semibold bg-white/10 px-6 py-4 rounded-xl inline-block">✓ Mulțumim! Vei primi noutățile pe email.</div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto flex-wrap sm:flex-nowrap">
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="adresa@email.ro" required
              className="flex-1 min-w-0 px-5 py-3.5 rounded-xl font-body text-sm outline-none border-2 border-transparent focus:border-brand-teal dark:bg-dark-card dark:text-dark-text" />
            <button type="submit" className="px-6 py-3.5 rounded-xl bg-brand-accent text-white font-body text-sm font-semibold hover:bg-brand-accent-light transition-colors flex-shrink-0">Abonează-te</button>
          </form>
        )}
      </div>
    </section>
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
    <button onClick={toggle} className={`w-9 h-9 rounded-full flex items-center justify-center transition-all text-sm ${dark ? "bg-white/10 hover:bg-white/20" : "bg-gray-900/10 hover:bg-gray-900/20"}`}
      aria-label={dark ? "Mod luminos" : "Mod întunecat"} title={dark ? "Mod luminos" : "Mod întunecat"}>
      {dark ? "☀️" : "🌙"}
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
    <div className="bg-white dark:bg-dark-card rounded-2xl border border-gray-200 dark:border-dark-border p-6">
      <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text mb-6">Unde lucrează absolvenții noștri</h3>
      <div className="space-y-3">
        {data.map((d, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span className="font-body text-sm font-semibold text-gray-900 dark:text-dark-text">{d.loc}</span>
              <span className="font-body text-xs text-brand-accent font-bold">{d.count}</span>
            </div>
            <div className="h-5 bg-gray-100 dark:bg-dark-border rounded-full overflow-hidden">
              <div className="h-full rounded-full flex items-center px-2" style={{ width: `${(d.count / max) * 100}%`, background: "linear-gradient(to right, #1f3b5b, #2aa198)" }}>
                <span className="font-body text-[10px] text-white truncate">{d.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
