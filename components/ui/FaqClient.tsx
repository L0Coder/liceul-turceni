"use client";
import { useState } from "react";
import { AnimatedSection } from "@/components/ui/SectionHeader";

const cats = [
  { k: "all", l: "Toate" }, { k: "admitere", l: "Admitere" },
  { k: "scoala", l: "Școală" }, { k: "examene", l: "Examene" }, { k: "general", l: "General" },
];

function Acc({ id, q, a }: { id: string; q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line">
      <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={`faq-${id}`}
        className="group w-full flex items-start justify-between gap-6 py-6 text-left">
        <span className="font-heading text-xl md:text-2xl text-ink group-hover:text-accent-text transition-colors">{q}</span>
        <span aria-hidden="true" className={`mt-1 w-7 h-7 rounded-full border border-line grid place-items-center text-ink-soft flex-shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div id={`faq-${id}`} className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="font-body text-[15px] text-ink-soft leading-[1.85] pb-6 max-w-2xl">{a}</p>
        </div>
      </div>
    </div>
  );
}

interface FaqItem { _id: string; question: string; answer: string; category: string; }

export function FaqClient({ data }: { data: FaqItem[] }) {
  const [f, setF] = useState("all");
  const filtered = f === "all" ? data : data.filter(x => x.category === f);

  return (
    <div className="max-w-4xl">
      <div aria-label="Categorii" className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
        {cats.map(c => (
          <button key={c.k} aria-pressed={f === c.k} onClick={() => setF(c.k)}
            className={`ltt-kicker !text-[11px] pb-2 border-b-2 transition-colors ${
              f === c.k ? "text-ink border-accent" : "text-ink-soft border-transparent hover:text-ink"
            }`}>
            {c.l}
          </button>
        ))}
      </div>
      <div className="border-t border-line">
        {filtered.map((faq, i) => (
          <AnimatedSection key={faq._id} delay={i * 0.05}>
            <Acc id={faq._id} q={faq.question} a={faq.answer} />
          </AnimatedSection>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="font-body text-ink-soft py-8">Nicio întrebare în această categorie.</p>
      )}
    </div>
  );
}
