"use client";
import { useState } from "react";

const MONTHS = ["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"];
const DAYS = ["Lu","Ma","Mi","Jo","Vi","Sâ","Du"];

interface CalEvent { date: string; title: string; type: string; }
const EVENTS: CalEvent[] = [
  { date: "2026-03-18", title: "Simulare BAC — Limba română", type: "examen" },
  { date: "2026-03-19", title: "Simulare BAC — Matematică", type: "examen" },
  { date: "2026-03-25", title: "Simulare EN — Limba română", type: "examen" },
  { date: "2026-04-04", title: "Vacanță de Paște", type: "vacanta" },
  { date: "2026-04-25", title: "Robotică — concurs național", type: "competitie" },
  { date: "2026-05-15", title: "Ziua Porților Deschise", type: "eveniment" },
  { date: "2026-06-05", title: "Festivitate absolvire XII", type: "eveniment" },
  { date: "2026-06-16", title: "BAC — Limba română", type: "examen" },
  { date: "2026-06-23", title: "EN — Limba română", type: "examen" },
  { date: "2026-07-10", title: "Repartizare Etapa I", type: "administrativ" },
  { date: "2026-09-09", title: "Primul clopoțel", type: "eveniment" },
];

const typeColor: Record<string, string> = { examen: "bg-red-500", eveniment: "bg-blue-500", vacanta: "bg-green-500", competitie: "bg-purple-500", administrativ: "bg-amber-500" };

export function InteractiveCalendar() {
  const [month, setMonth] = useState(2);
  const [sel, setSel] = useState<string | null>(null);
  const year = 2026;
  const days = new Date(year, month + 1, 0).getDate();
  const first = (new Date(year, month, 1).getDay() + 6) % 7;
  const pad = (n: number) => String(n).padStart(2, "0");
  const dateStr = (d: number) => `${year}-${pad(month + 1)}-${pad(d)}`;
  const eventsFor = (d: number) => EVENTS.filter(e => e.date === dateStr(d));
  const monthEvents = EVENTS.filter(e => e.date.startsWith(`${year}-${pad(month + 1)}`));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3 bg-white dark:bg-dark-card rounded-2xl border border-gray-200 dark:border-dark-border p-6">
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => setMonth(m => Math.max(0, m-1))} className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-border hover:bg-gray-200 dark:hover:bg-dark-subtle/30 flex items-center justify-center font-body" aria-label="Luna anterioară">←</button>
          <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text">{MONTHS[month]} {year}</h3>
          <button onClick={() => setMonth(m => Math.min(11, m+1))} className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-border hover:bg-gray-200 dark:hover:bg-dark-subtle/30 flex items-center justify-center font-body" aria-label="Luna următoare">→</button>
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {DAYS.map(d => <div key={d} className="text-center font-body text-xs font-semibold text-gray-400 dark:text-dark-subtle py-2">{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1" role="grid" aria-label="Calendar">
          {Array.from({ length: first }).map((_, i) => <div key={`e${i}`} className="h-12" />)}
          {Array.from({ length: days }).map((_, i) => {
            const d = i + 1; const ds = dateStr(d); const ev = eventsFor(d);
            const isSel = sel === ds; const has = ev.length > 0;
            return (
              <button key={d} onClick={() => setSel(isSel ? null : ds)} role="gridcell" aria-selected={isSel}
                className={`h-12 rounded-lg font-body text-sm relative transition-all focus-visible:ring-2 focus-visible:ring-brand-teal ${
                  isSel ? "bg-brand-primary text-white font-bold shadow-md" : has ? "bg-brand-teal/10 dark:bg-brand-teal/20 text-brand-primary dark:text-brand-teal font-semibold" : "text-gray-700 dark:text-dark-muted hover:bg-gray-50 dark:hover:bg-dark-border"
                }`}>
                {d}
                {has && !isSel && <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
                  {ev.slice(0, 2).map((e, j) => <div key={j} className={`w-1 h-1 rounded-full ${typeColor[e.type] || "bg-gray-400"}`} />)}
                </div>}
              </button>
            );
          })}
        </div>
      </div>
      <div className="lg:col-span-2 bg-white dark:bg-dark-card rounded-2xl border border-gray-200 dark:border-dark-border p-6">
        <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-dark-text mb-4">
          {sel ? `${new Date(sel).getDate()} ${MONTHS[month]}` : `${MONTHS[month]} — evenimente`}
        </h3>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {(sel ? EVENTS.filter(e => e.date === sel) : monthEvents).map((e, i) => (
            <div key={i} className="p-3 rounded-xl bg-gray-50 dark:bg-dark-border/50 flex gap-3 items-start" onClick={() => setSel(e.date)}>
              <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${typeColor[e.type] || "bg-gray-400"}`} />
              <div>
                <div className="font-body text-xs text-gray-400 dark:text-dark-subtle">{e.date.split("-")[2]} {MONTHS[month]}</div>
                <div className="font-body text-sm font-semibold text-gray-900 dark:text-dark-text">{e.title}</div>
              </div>
            </div>
          ))}
          {(sel ? EVENTS.filter(e => e.date === sel) : monthEvents).length === 0 && (
            <p className="font-body text-sm text-gray-400 dark:text-dark-subtle italic">Niciun eveniment.</p>
          )}
        </div>
      </div>
    </div>
  );
}
