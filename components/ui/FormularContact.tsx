"use client";
import { useState } from "react";
import { CONTACT } from "@/lib/constants";

/* Cu NEXT_PUBLIC_FORMSPREE_ID setat, mesajul pleacă prin Formspree și primești confirmare pe loc.
   Fără el, formularul deschide aplicația de email a vizitatorului cu mesajul deja completat —
   așa nu se pierde niciun mesaj cât timp Formspree nu e configurat. */
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

const camp = "w-full px-4 py-3 border border-line bg-paper font-body text-[15px] text-ink outline-none focus:border-ink transition-colors placeholder:text-ink-soft/60";
const eticheta = "block ltt-kicker !text-[10px] text-ink-soft mb-2";

export function FormularContact() {
  const [stare, setStare] = useState<"gol" | "trimit" | "trimis" | "eroare" | "email">("gol");

  async function trimite(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget; // după await, e.currentTarget devine null
    const date = new FormData(form);
    if (!FORMSPREE_ID) {
      const corp = `${date.get("message")}\n\n— ${date.get("name")} (${date.get("email")})`;
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(String(date.get("subject") || "Mesaj de pe site"))}&body=${encodeURIComponent(corp)}`;
      setStare("email");
      return;
    }
    setStare("trimit");
    try {
      const r = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, { method: "POST", body: date, headers: { Accept: "application/json" } });
      setStare(r.ok ? "trimis" : "eroare");
      if (r.ok) form.reset();
    } catch {
      setStare("eroare");
    }
  }

  if (stare === "trimis") {
    return (
      <div role="status" className="py-10">
        <p className="font-heading text-3xl text-ink">Mulțumim! Mesajul a ajuns.</p>
        <p className="font-body text-[15px] text-ink-soft mt-3">Secretariatul vă răspunde pe email în zilele lucrătoare.</p>
      </div>
    );
  }

  return (
    <form onSubmit={trimite} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div><label htmlFor="name" className={eticheta}>Nume complet</label><input id="name" name="name" required autoComplete="name" className={camp} /></div>
        <div><label htmlFor="email" className={eticheta}>Email</label><input id="email" name="email" type="email" required autoComplete="email" className={camp} /></div>
      </div>
      <div><label htmlFor="subject" className={eticheta}>Subiect</label><input id="subject" name="subject" className={camp} /></div>
      <div><label htmlFor="message" className={eticheta}>Mesaj</label><textarea id="message" name="message" required rows={6} className={`${camp} resize-y`} /></div>
      <div className="flex flex-wrap items-center gap-5 pt-2">
        <button type="submit" disabled={stare === "trimit"}
          className="group inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 ltt-kicker !text-[12px] hover:bg-[#c2410c] hover:text-white transition-colors disabled:opacity-60">
          {stare === "trimit" ? "Se trimite…" : "Trimite mesajul"}<span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
        </button>
        <p aria-live="polite" className="font-body text-[13px] text-ink-soft">
          {stare === "eroare" && <>Mesajul nu a putut fi trimis. Scrieți-ne direct la <a className="underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.</>}
          {stare === "email" && <>S-a deschis aplicația de email, cu mesajul completat. Dacă nu s-a deschis, scrieți la <a className="underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.</>}
        </p>
      </div>
    </form>
  );
}
