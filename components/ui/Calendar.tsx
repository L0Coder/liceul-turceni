"use client";
import { useState } from "react";

const MONTHS = ["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"];
const DAYS = ["Lu","Ma","Mi","Jo","Vi","Sâ","Du"];

export interface CalEvent { _id?: string; date: string; title: string; type: string; description?: string | null; }

const typeColor: Record<string, string> = { examen: "bg-red-500", eveniment: "bg-blue-500", vacanta: "bg-green-500", competitie: "bg-purple-500", administrativ: "bg-amber-500" };

export function InteractiveCalendar({ events }: { events: CalEvent[] }) {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [sel, setSel] = useState<string | null>(null);

  // Navigare peste granițele anului
  const prev = () => { if (month === 0) { setMonth(11); setYear(y => y - 1); } else setMonth(m => m - 1); setSel(null); };
  const next = () => { if (month === 11) { setMonth(0); setYear(y => y + 1); } else setMonth(m => m + 1); setSel(null); };

  const days = new Date(year, month + 1, 0).getDate();
  const first = (new Date(year, month, 1).getDay() + 6) % 7;
  const pad = (n: number) => String(n).padStart(2, "0");
  const dateStr = (d: number) => `${year}-${pad(month + 1)}-${pad(d)}`;
  const eventsFor = (d: number) => events.filter(e => e.date === dateStr(d));
  const monthEvents = events.filter(e => e.date.startsWith(`${year}-${pad(month + 1)}`));
  const todayStr = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3 bg-white dark:bg-dark-card rounded-2xl border border-gray-200 dark:border-dark-border p-6">
        <div className="flex items-center justify-between mb-6">
          <button onClick={prev} className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-border hover:bg-gray-200 dark:hover:bg-dark-subtle/30 flex items-center justify-center font-body" aria-label="Luna anterioară">←</button>
          <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text">{MONTHS[month]} {year}</h3>
          <button onClick={next} className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-border hover:bg-gray-200 dark:hover:bg-dark-subtle/30 flex items-center justify-center font-body" aria-label="Luna următoare">→</button>
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {DAYS.map(d => <div key={d} className="text-center font-body text-xs font-semibold text-gray-400 dark:text-dark-subtle py-2">{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1" role="grid" aria-label="Calendar">
          {Array.from({ length: first }).map((_, i) => <div key={`e${i}`} className="h-12" />)}
          {Array.from({ length: days }).map((_, i) => {
            const d = i + 1; const ds = dateStr(d); const ev = eventsFor(d);
            const isSel = sel === ds; const has = ev.length > 0; const isToday = ds === todayStr;
            return (
              <button key={d} onClick={() => setSel(isSel ? null : ds)} role="gridcell" aria-selected={isSel}
                className={`h-12 rounded-lg font-body text-sm relative transition-all focus-visible:ring-2 focus-visible:ring-brand-teal ${
                  isSel ? "bg-brand-primary text-white font-bold shadow-md" : has ? "bg-brand-teal/10 dark:bg-brand-teal/20 text-brand-primary dark:text-brand-teal font-semibold" : "text-gray-700 dark:text-dark-muted hover:bg-gray-50 dark:hover:bg-dark-border"
                } ${isToday && !isSel ? "ring-2 ring-brand-accent/60" : ""}`}>
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
          {sel ? `${parseInt(sel.split("-")[2])} ${MONTHS[month]}` : `${MONTHS[month]} — evenimente`}
        </h3>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {(sel ? events.filter(e => e.date === sel) : monthEvents).map((e, i) => (
            <div key={e._id || i} className="p-3 rounded-xl bg-gray-50 dark:bg-dark-border/50 flex gap-3 items-start cursor-pointer" onClick={() => setSel(e.date)}>
              <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${typeColor[e.type] || "bg-gray-400"}`} />
              <div>
                <div className="font-body text-xs text-gray-400 dark:text-dark-subtle">{parseInt(e.date.split("-")[2])} {MONTHS[parseInt(e.date.split("-")[1]) - 1]}</div>
                <div className="font-body text-sm font-semibold text-gray-900 dark:text-dark-text">{e.title}</div>
                {e.description && <div className="font-body text-xs text-gray-500 dark:text-dark-muted mt-1">{e.description}</div>}
              </div>
            </div>
          ))}
          {(sel ? events.filter(e => e.date === sel) : monthEvents).length === 0 && (
            <p className="font-body text-sm text-gray-400 dark:text-dark-subtle py-4 text-center">Niciun eveniment în {sel ? "această zi" : "această lună"}.</p>
          )}
        </div>
        <div className="mt-5 pt-4 border-t border-gray-100 dark:border-dark-border flex flex-wrap gap-3">
          {Object.entries({ examen: "Examene", eveniment: "Evenimente", vacanta: "Vacanțe", competitie: "Competiții", administrativ: "Administrativ" }).map(([k, v]) => (
            <div key={k} className="flex items-center gap-1.5 font-body text-[11px] text-gray-500 dark:text-dark-muted">
              <div className={`w-2 h-2 rounded-full ${typeColor[k]}`} />{v}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
