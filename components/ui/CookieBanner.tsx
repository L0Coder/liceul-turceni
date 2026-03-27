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
    <div className="fixed bottom-0 left-0 right-0 z-[9998] p-4 no-print">
      <div className="max-w-3xl mx-auto bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-2xl shadow-2xl p-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex-1">
            <p className="font-body text-sm text-gray-900 dark:text-dark-text font-semibold mb-1">
              🍪 Acest site folosește cookies
            </p>
            <p className="font-body text-xs text-gray-500 dark:text-dark-muted leading-relaxed">
              Folosim cookies strict necesare pentru funcționarea site-ului și pentru salvarea preferințelor dvs. (dark mode). Nu folosim cookies de marketing sau tracking.{" "}
              <Link href="/cookies" className="text-brand-teal hover:underline">Detalii</Link> |{" "}
              <Link href="/gdpr" className="text-brand-teal hover:underline">Politica GDPR</Link>
            </p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <button onClick={decline}
              className="font-body text-xs font-medium text-gray-500 dark:text-dark-muted px-4 py-2.5 rounded-lg border border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-border transition-colors">
              Refuz
            </button>
            <button onClick={accept}
              className="font-body text-xs font-semibold text-white px-5 py-2.5 rounded-lg bg-brand-primary hover:bg-brand-primary-light transition-colors">
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
