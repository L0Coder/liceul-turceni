"use client";
import { useState } from "react";
import { ButonCerneala, LinkSubliniat } from "@/components/ui/Buton";

/* Harta Google se încarcă doar la cererea vizitatorului: până atunci nu pleacă nicio cerere
   către Google (adresa IP, eventuale cookies). Vezi Politica de confidențialitate și Politica de cookies. */

const COORD = "44.681853677773404,23.37467370552185";

export function HartaGoogle() {
  const [afisata, setAfisata] = useState(false);

  if (afisata) {
    return (
      <div className="overflow-hidden border border-line">
        <iframe
          src={`https://maps.google.com/maps?q=${COORD}&t=&z=17&ie=UTF8&iwloc=&output=embed`}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Locația Liceului Tehnologic Turceni pe Google Maps"
          className="w-full"
        />
      </div>
    );
  }

  return (
    <div className="border border-line bg-paper-2 h-[400px] flex flex-col items-center justify-center gap-5 px-6 text-center">
      <p className="font-body text-[14px] text-ink-soft max-w-md leading-relaxed">
        Harta este oferită de Google. La afișare, Google primește adresa IP a dispozitivului dvs. și poate
        folosi cookies proprii.
      </p>
      <ButonCerneala onClick={() => setAfisata(true)}>Afișează harta</ButonCerneala>
      <LinkSubliniat href={`https://www.google.com/maps?q=${COORD}`} extern>Deschide în Google Maps</LinkSubliniat>
    </div>
  );
}
