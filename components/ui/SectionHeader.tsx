"use client";
import { useRef, useState, useEffect } from "react";

export function SectionHeader({ label, title, subtitle, light = false }: { label?: string; title: string; subtitle?: string; light?: boolean; }) {
  return (
    <div className="text-center mb-14">
      {label && <div className={`font-body text-xs font-semibold tracking-[3px] uppercase mb-3 ${light ? "text-white/60" : "text-brand-accent"}`}>{label}</div>}
      <h2 className={`font-heading text-3xl md:text-4xl font-bold leading-tight mb-4 ${light ? "text-white" : "text-gray-900 dark:text-dark-text"}`}>{title}</h2>
      {subtitle && <p className={`font-body text-[17px] leading-relaxed max-w-xl mx-auto ${light ? "text-white/70" : "text-gray-500 dark:text-dark-muted"}`}>{subtitle}</p>}
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
    <div ref={ref} className={className} style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(40px)", transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s` }}>
      {children}
    </div>
  );
}
