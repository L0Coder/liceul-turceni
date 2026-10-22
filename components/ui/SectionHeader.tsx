"use client";
import { useRef, useState, useEffect } from "react";

export function SectionHeader({ label, title, subtitle, light = false }: { label?: string; title: string; subtitle?: string; light?: boolean; }) {
  return (
    <div className="mb-12">
      {label && (
        <div className={`ltt-kicker flex items-center gap-3 mb-4 ${light ? "text-white/60" : "text-ink-soft"}`}>
          <span aria-hidden="true" className="w-8 h-px bg-current opacity-60" />{label}
        </div>
      )}
      <h2 className={`font-heading text-3xl md:text-[2.6rem] leading-tight ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {subtitle && <p className={`font-body text-[16px] leading-relaxed max-w-xl mt-4 ${light ? "text-white/70" : "text-ink-soft"}`}>{subtitle}</p>}
    </div>
  );
}

export function AnimatedSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string; }) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.12 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return (
    <div ref={ref} className={`${className} ${v ? "is-in" : ""}`} style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(40px)", transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s` }}>
      {children}
    </div>
  );
}
