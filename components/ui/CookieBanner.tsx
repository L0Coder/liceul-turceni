"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem("ltt-cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("ltt-cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("ltt-cookie-consent", "declined");
    setVisible(false);
  };

  if (!mounted || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998] p-3 sm:p-4 no-print">
      <div className="max-w-3xl mx-auto bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-2xl shadow-2xl px-4 py-3 sm:p-5 flex items-center gap-3 sm:gap-5">
        <p className="flex-1 font-body text-xs sm:text-sm text-gray-600 dark:text-dark-muted leading-snug">
          Folosim doar cookies necesare funcționării site-ului, fără urmărire.{" "}
          <Link href="/cookies" className="text-brand-teal hover:underline whitespace-nowrap">Detalii</Link>
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <button onClick={decline}
            className="font-body text-xs font-medium text-gray-500 dark:text-dark-muted px-3 py-2 rounded-lg border border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-border transition-colors">
            Refuz
          </button>
          <button onClick={accept}
            className="font-body text-xs font-semibold text-white px-4 py-2 rounded-lg bg-brand-primary hover:bg-brand-primary-light transition-colors">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
