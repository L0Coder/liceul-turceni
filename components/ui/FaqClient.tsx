"use client";
import { useState } from "react";
import { AnimatedSection } from "@/components/ui/SectionHeader";

const cats = [
  { k: "all", l: "Toate" }, { k: "admitere", l: "Admitere" },
  { k: "scoala", l: "Școală" }, { k: "examene", l: "Examene" }, { k: "general", l: "General" },
];

function Acc({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 dark:border-dark-border rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-5 text-left bg-white dark:bg-dark-card hover:bg-gray-50 dark:hover:bg-dark-border/50 transition-colors" aria-expanded={open}>
        <span className="font-body text-[15px] font-semibold text-gray-900 dark:text-dark-text pr-4">{q}</span>
        <span className={`text-brand-accent text-xl flex-shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-[400ms] ${open ? "max-h-96" : "max-h-0"}`}>
        <div className="px-6 pb-5 font-body text-sm text-gray-600 dark:text-dark-muted leading-relaxed border-t border-gray-100 dark:border-dark-border pt-4">{a}</div>
      </div>
    </div>
  );
}

interface FaqItem { _id: string; question: string; answer: string; category: string; }

export function FaqClient({ data }: { data: FaqItem[] }) {
  const [f, setF] = useState("all");
  const filtered = f === "all" ? data : data.filter(x => x.category === f);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {cats.map(c => (
          <button key={c.k} onClick={() => setF(c.k)}
            className={`font-body text-sm font-medium px-5 py-2.5 rounded-full transition-all ${
              f === c.k ? "bg-brand-primary text-white" : "bg-white dark:bg-dark-card text-gray-600 dark:text-dark-muted border border-gray-200 dark:border-dark-border"
            }`}>
            {c.l}
          </button>
        ))}
      </div>
      <div className="space-y-3">
        {filtered.map((faq, i) => (
          <AnimatedSection key={faq._id} delay={i * 0.05}>
            <Acc q={faq.question} a={faq.answer} />
          </AnimatedSection>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center font-body text-gray-400 dark:text-dark-subtle py-8">Nicio întrebare în această categorie.</p>
      )}
    </div>
  );
}
