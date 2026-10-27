"use client";
import { useState, useSyncExternalStore } from "react";
import Link from "next/link";

// Răspunsul salvat există doar în browser: pe server (și la hidratare) bannerul nu apare
const faraAbonare = () => () => {};
const raspunsSalvat = () => localStorage.getItem("ltt-cookie-consent");
const peServer = () => "server";

export function CookieBanner() {
  const salvat = useSyncExternalStore(faraAbonare, raspunsSalvat, peServer);
  const [raspunsAcum, setRaspunsAcum] = useState(false);

  const accept = () => {
    localStorage.setItem("ltt-cookie-consent", "accepted");
    setRaspunsAcum(true);
  };

  const decline = () => {
    localStorage.setItem("ltt-cookie-consent", "declined");
    setRaspunsAcum(true);
  };

  if (salvat !== null || raspunsAcum) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998] p-3 sm:p-4 no-print">
      <div className="max-w-3xl mx-auto bg-paper border border-line rounded-sm shadow-2xl px-4 py-3 sm:p-5 flex items-center gap-3 sm:gap-5">
        <p className="flex-1 font-body text-xs sm:text-sm text-ink-soft leading-snug">
          Site-ul nu folosește cookies de urmărire; preferințele dvs. se păstrează doar în browser.{" "}
          <Link href="/cookies" className="ltt-accent underline underline-offset-2 hover:decoration-2 whitespace-nowrap">Detalii</Link>
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <button onClick={decline}
            className="font-body text-xs font-medium text-ink-soft px-3 py-2 rounded-sm border border-line hover:bg-paper-2 transition-colors">
            Refuz
          </button>
          <button onClick={accept}
            className="font-body text-xs font-semibold px-4 py-2 rounded-sm bg-ink text-paper hover:bg-accent transition-colors">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
