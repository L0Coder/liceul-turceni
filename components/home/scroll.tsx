"use client";
import { useEffect, useRef, useState } from "react";

/** Cât din secțiunea înaltă `ref` a fost derulat: 0 când începe să fie fixată, 1 când se termină. */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      setP(total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, []);
  return [ref, p] as const;
}

/** Adaugă .is-in când elementul intră în ecran (o singură dată): desenele se trasează, textul urcă. */
export function InView({ children, className = "", as: Tag = "div", threshold = 0.2, id }: {
  children: React.ReactNode; className?: string; as?: "div" | "section"; threshold?: number; id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold });
    o.observe(el);
    return () => o.disconnect();
  }, [threshold]);
  const Comp = Tag as "div";
  return <Comp ref={ref} id={id} className={`${className} ${v ? "is-in" : ""}`}>{children}</Comp>;
}

/** true pe ecrane de cel puțin `px` lățime și fără prefers-reduced-motion: atunci fixăm secțiunile la scroll. */
export function usePinned(px = 768) {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${px}px) and (prefers-reduced-motion: no-preference)`);
    const f = () => setOk(mq.matches);
    f();
    mq.addEventListener("change", f);
    return () => mq.removeEventListener("change", f);
  }, [px]);
  return ok;
}
