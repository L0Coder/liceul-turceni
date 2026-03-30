"use client";
import { useState, useEffect } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Înapoi sus"
      className="fixed bottom-24 right-6 z-[9990] w-11 h-11 rounded-full bg-brand-primary/90 hover:bg-brand-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center no-print group"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-0.5 transition-transform">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
