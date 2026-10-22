import { Kicker } from "./Buton";

/** Antetul paginilor interioare: etichetă mică, titlu mare serif, o tușă portocalie, subtitlu. */
export function PaginaAntet({ titlu, subtitlu, eticheta, children }: {
  titlu: React.ReactNode; subtitlu?: React.ReactNode; eticheta?: string; children?: React.ReactNode;
}) {
  return (
    <section className="px-6 pt-10 md:pt-16 pb-14 md:pb-20 border-b border-line">
      <div className="max-w-6xl mx-auto">
        {eticheta && <Kicker className="text-ink-soft">{eticheta}</Kicker>}
        <h1 className="font-heading text-ink text-[2.6rem] sm:text-6xl md:text-7xl leading-[1.04] mt-6 max-w-4xl">{titlu}</h1>
        <svg viewBox="0 0 220 14" className="w-44 mt-6 text-[#e2621b]" aria-hidden="true">
          <path d="M3 9 C50 3 120 6 217 5" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
        {subtitlu && <p className="font-body text-[17px] leading-[1.8] text-ink-soft max-w-2xl mt-6">{subtitlu}</p>}
        {children && <div className="flex flex-wrap items-center gap-8 mt-9">{children}</div>}
      </div>
    </section>
  );
}
