"use client";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { InView, useScrollProgress, usePinned } from "./scroll";
import { DesenScoala, DesenCaiet, DesenBalon, DesenAtelier, DesenToca, DESEN_PROFIL } from "./Desene";
import { PROFILE_ADMITERE, TESTIMONIALE, FILIERA, calendarAdmitere, numarInLitere } from "@/lib/data";
import { QUICK_ACCESS } from "@/lib/constants";
import { ButonCerneala, LinkSubliniat, Kicker } from "@/components/ui/Buton";
import { comune } from "@/lib/paleta";

/* ═══ PIESE COMUNE ═══ */

/** Eticheta verticală din stânga fiecărei secțiuni: 01 │ LICEUL */
function Sina({ n, eticheta, light = false }: { n: string; eticheta: string; light?: boolean }) {
  return (
    <div className={`hidden lg:flex absolute left-6 xl:left-10 top-28 flex-col items-center gap-3 ${light ? "text-white/60" : "text-ink-soft"}`} aria-hidden="true">
      <span className="ltt-accent font-body text-[11px] tracking-[0.2em]">{n}</span>
      <span className="ltt-kicker [writing-mode:vertical-rl] text-[10px]">{eticheta}</span>
      <span className={`w-px h-20 ${light ? "bg-white/25" : "bg-line"}`} />
    </div>
  );
}

/** Tușa de pensulă: o linie groasă, cu marginile „mâncate” de hârtie. */
function Tusa({ d, viewBox, className = "", width = 16 }: { d: string; viewBox: string; className?: string; width?: number }) {
  const id = `ltt-brush-${useId().replace(/:/g, "")}`;
  return (
    <svg viewBox={viewBox} className={`ltt-draw ltt-brush ${className}`} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <filter id={id} x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="3" seed="4" />
          <feDisplacementMap in="SourceGraphic" scale="10" />
        </filter>
      </defs>
      <path pathLength={1} d={d} fill="none" stroke="currentColor" strokeWidth={width} strokeLinecap="round" filter={`url(#${id})`} />
    </svg>
  );
}

/* ═══ HERO ═══ */

export function HeroAcasa({ admitere, elevi, ani, profileCount }: { admitere: number; elevi: number; ani: string; profileCount: number }) {
  return (
    <InView as="section" threshold={0.05} className="relative min-h-screen flex items-center pt-28 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-10 items-center">
        <div className="relative order-2 lg:order-1 text-ink max-w-[560px] mx-auto w-full">
          <Tusa viewBox="0 0 520 420" width={11} className="absolute -inset-[8%] w-[116%] h-[116%] opacity-90 [&_path]:![transition-duration:2.6s]"
            d="M170 404 C50 370 6 236 70 140 C140 36 340 8 448 80 C500 116 516 168 500 214" />
          <DesenScoala className="relative w-full" />
        </div>

        <div className="order-1 lg:order-2">
          <Kicker className="ltt-rise text-ink-soft">Liceu teoretic și tehnologic · Turceni, Gorj</Kicker>
          <h1 className="ltt-rise font-heading text-ink text-[3.1rem] sm:text-6xl lg:text-[5.2rem] leading-[1.02] mt-7" style={{ transitionDelay: "0.1s" }}>
            Învață temeinic.<br />Alege-ți <span className="italic text-accent-display">drumul.</span>
          </h1>
          <p className="ltt-rise font-body text-[17px] leading-[1.85] text-ink-soft max-w-lg mt-7" style={{ transitionDelay: "0.2s" }}>
            Din 1982, elevii din Turceni și din satele din jur învață aici pentru facultate, pentru o meserie sau pentru amândouă.
            Liceu teoretic și filieră tehnologică — {profileCount} profiluri, sub același acoperiș.
          </p>
          <div className="ltt-rise flex flex-wrap items-center gap-8 mt-10" style={{ transitionDelay: "0.3s" }}>
            <ButonCerneala href="/oferta">Vezi cele {profileCount} profiluri</ButonCerneala>
            <LinkSubliniat href="/admitere">Admitere {admitere}</LinkSubliniat>
          </div>
          <dl className="ltt-rise grid grid-cols-3 border-t border-line mt-12 pt-6 max-w-lg" style={{ transitionDelay: "0.4s" }}>
            {[[String(profileCount), "profiluri"], [String(elevi), "elevi"], [ani, "ani școlari"]].map(([n, t], i) => (
              <div key={t} className={`px-4 first:pl-0 ${i ? "border-l border-line" : ""}`}>
                <dt className="sr-only">{t}</dt>
                <dd><span className="font-heading text-2xl text-ink">{n}</span> <span className="font-body text-[13px] text-ink-soft">{t}</span></dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <p className="hidden lg:block absolute bottom-8 left-12 ltt-kicker !text-[10px] text-ink-soft">
        Derulează încet — patru ani încap într-o singură pagină.
      </p>
      <div className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-5 text-ink-soft" aria-hidden="true">
        <span className="ltt-kicker [writing-mode:vertical-rl] !text-[10px]">Carte · Meserie · Drum</span>
        <span className="w-7 h-7 grid place-items-center bg-accent text-white font-heading text-[10px] tracking-wider">LTT</span>
      </div>
    </InView>
  );
}

/* ═══ 01 · LICEUL ═══ */

export function Liceul({ elevi, cadre, profileCount, anScolar }: { elevi: number; cadre: number; profileCount: number; anScolar: string }) {
  const cifre = [
    ["1982", "Prima zi de școală: 1 septembrie."],
    [String(elevi), `Elevi în anul școlar ${anScolar}.`],
    [String(cadre), "Cadre didactice."],
    [String(profileCount), "Profiluri de liceu: teoretic și tehnologic."],
  ];
  return (
    <section id="liceul" className="relative py-28 md:py-40">
      <Sina n="01" eticheta="Liceul" />
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <InView className="grid md:grid-cols-[0.9fr_1.1fr] gap-14 md:gap-20 items-center">
          {/* tabla */}
          <div className="ltt-rise relative max-w-sm mx-auto w-full">
            <div className="relative bg-[#26332d] border-[10px] border-[#7a5a3c] shadow-[0_30px_60px_-20px_rgba(31,29,26,0.45)] aspect-[4/5] p-8 flex flex-col justify-center">
              <p className="font-heading italic text-[#f1efe6] text-5xl sm:text-6xl leading-[1.05] -rotate-2">Carte<br /><span className="pl-10">și</span><br />meserie.</p>
              <svg viewBox="0 0 200 20" className="w-40 mt-4 -rotate-2" aria-hidden="true"><path d="M4 12 Q60 2 120 10 T196 8" fill="none" stroke={comune["accent-light"]} strokeWidth="3" strokeLinecap="round" opacity="0.85" /></svg>
              <span className="absolute bottom-5 right-5 w-8 h-8 grid place-items-center bg-accent text-white font-heading text-[10px] tracking-wider">LTT</span>
            </div>
            <div className="h-3 mx-3 bg-[#5f452d]" />
          </div>
          <div>
            <h2 className="ltt-rise font-heading text-ink text-4xl md:text-5xl leading-[1.12]">Un liceu care te pregătește și pentru facultate, și pentru meserie.</h2>
            <p className="ltt-rise font-body text-[15px] leading-[1.9] text-ink-soft mt-8" style={{ transitionDelay: "0.1s" }}>
              Liceul Tehnologic Turceni a fost înființat la 1 septembrie 1982. În peste patru decenii a devenit un liceu complet:
              profiluri teoretice și tehnologice, pentru elevi din Turceni și din localitățile din jur ale județului Gorj.
            </p>
            <p className="ltt-rise font-body text-[15px] leading-[1.9] text-ink-soft mt-5" style={{ transitionDelay: "0.15s" }}>
              Aici poți pregăti un bacalaureat bun pentru facultate, poți învăța o meserie cu certificat de calificare — sau le poți face pe amândouă.
            </p>
            <div className="ltt-rise mt-8" style={{ transitionDelay: "0.2s" }}><LinkSubliniat href="/despre">Istoria liceului</LinkSubliniat></div>
          </div>
        </InView>

        <InView className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mt-24 md:mt-32">
          {cifre.map(([n, t], i) => (
            <div key={t} className="ltt-rise" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="font-heading text-5xl md:text-6xl text-ink leading-none">{n}</div>
              <p className="font-body text-[13px] leading-relaxed text-ink-soft mt-3 max-w-[14rem]">{t}</p>
            </div>
          ))}
        </InView>

        <InView className="mt-20 md:mt-28 text-ink">
          <Tusa viewBox="0 0 1000 60" width={18} className="w-full max-w-3xl h-10 md:h-14 opacity-90"
            d="M20 34 C200 22 420 30 600 28 S880 26 980 30" />
        </InView>
      </div>
    </section>
  );
}

/* ═══ 02 · DRUMUL ═══ */

const ETAPE = [
  { cls: "IX", nr: "I", nume: "Începutul", Desen: DesenCaiet,
    titlu: "Bazele, pentru toată lumea.",
    text: "Toate profilurile pornesc de la aceleași fundamente: limba română, matematică, științe, limbi străine. E anul în care te obișnuiești cu liceul — și în care afli ce îți place cu adevărat." },
  { cls: "X", nr: "II", nume: "Laboratorul", Desen: DesenBalon,
    titlu: "Teoria se verifică pe masa de lucru.",
    text: "În laboratoarele de fizică, chimie, informatică și electronică, formulele de la tablă devin experimente, circuite și programe care chiar rulează." },
  { cls: "XI", nr: "III", nume: "Atelierul", Desen: DesenAtelier,
    titlu: "Aici meseria se învață cu mâinile.",
    text: "La profilurile tehnice, o parte mare din program se face în ateliere: strunguri, freze și CNC, instalații electrice, montaj. Apoi, stagii de practică la agenți economici." },
  { cls: "XII", nr: "IV", nume: "Absolvirea", Desen: DesenToca,
    titlu: "Bacalaureat, certificat — și un drum ales.",
    text: "Liceul se încheie cu bacalaureatul și, la profilurile tehnice, cu examenul de certificare a calificării profesionale. Pleci cu o diplomă pentru facultate și cu o meserie." },
];

function TextEtapa({ e, light }: { e: (typeof ETAPE)[number]; light: boolean }) {
  return (
    <div className="flex gap-6 md:gap-8 items-start">
      <div className={`hidden sm:block font-heading text-6xl md:text-8xl leading-none w-24 md:w-36 shrink-0 ${light ? "text-chalk" : "text-ink"}`}>{e.cls}</div>
      <div className="max-w-md pt-1">
        <div className={`ltt-kicker ${light ? "text-accent-light" : "ltt-accent"}`}><span className="sm:hidden">Clasa a {e.cls}-a · </span>{e.nume}</div>
        <h3 className={`font-heading text-xl sm:text-2xl md:text-3xl mt-2 sm:mt-3 leading-snug ${light ? "text-chalk" : "text-ink"}`}>{e.titlu}</h3>
        <p className={`font-body text-[13px] sm:text-[14px] leading-[1.75] sm:leading-[1.85] mt-2 sm:mt-4 ${light ? "text-chalk/75" : "text-ink-soft"}`}>{e.text}</p>
      </div>
    </div>
  );
}

function Scantei() {
  const s = [[-60, -80], [-90, -30], [-40, -110], [70, -90], [100, -40], [30, -120], [-110, 10], [120, 0]];
  return (
    <svg viewBox="-150 -150 300 300" className="absolute left-[6%] bottom-[8%] w-56 h-56 pointer-events-none" aria-hidden="true">
      {s.map(([x, y], i) => (
        <circle key={i} className="ltt-spark" r={i % 3 ? 1.6 : 2.4} fill={i % 2 ? comune["accent-pale"] : comune["accent-bright"]}
          style={{ ["--sx" as string]: `${x}px`, ["--sy" as string]: `${y}px`, animationDelay: `${(i * 0.13) % 0.9}s` } as React.CSSProperties} />
      ))}
    </svg>
  );
}

export function Drumul() {
  const pinned = usePinned(0);
  const [ref, p] = useScrollProgress<HTMLElement>();
  const i = Math.min(ETAPE.length - 1, Math.floor(p * ETAPE.length));
  const intuneric = i === 2;

  const mergiLa = (k: number) => {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + ((k + 0.5) / ETAPE.length) * (el.offsetHeight - window.innerHeight), behavior: "smooth" });
  };

  const titlu = (light: boolean) => (
    <div>
      <Kicker className={light ? "text-white/60" : "text-ink-soft"}>De la admitere la absolvire</Kicker>
      <h2 className={`font-heading text-[1.7rem] sm:text-4xl md:text-5xl leading-[1.1] mt-3 sm:mt-5 transition-colors duration-700 ${light ? "text-chalk" : "text-ink"}`}>Patru ani,{" "}<br className="hidden sm:inline" />patru etape.</h2>
    </div>
  );

  if (!pinned) {
    return (
      <section id="drumul" className="relative py-24 px-6">
        {titlu(false)}
        <div className="mt-14 space-y-20">
          {ETAPE.map((e) => (
            <InView key={e.cls} className="space-y-6">
              <e.Desen className="w-56 mx-auto text-ink" />
              <div className="ltt-rise"><TextEtapa e={e} light={false} /></div>
            </InView>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="drumul" ref={ref} className="relative" style={{ height: `${ETAPE.length * 100 + 60}vh` }}>
      <div className={`ltt-sticky sticky top-0 overflow-hidden transition-colors duration-700 ${intuneric ? "bg-night" : "bg-transparent"}`}>
        <div className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${intuneric ? "opacity-100" : "opacity-0"}`}
          style={{ background: "radial-gradient(circle at 64% 46%, rgb(var(--accent-bright) / 0.38), rgb(var(--accent-bright) / 0.08) 30%, transparent 55%)" }} />
        <Sina n="02" eticheta="Drumul" light={intuneric} />

        <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 pt-20 sm:pt-24 pb-14 sm:pb-16 grid grid-rows-[auto_1fr_auto] gap-2">
          {titlu(intuneric)}

          <div className="relative">
            {ETAPE.map((e, k) => (
              <div key={e.cls} className={`absolute inset-0 flex items-center justify-center md:justify-end md:pr-[18%] transition-all duration-700 ${k === i ? "opacity-100 scale-100 is-in" : "opacity-0 scale-95"}`}>
                <e.Desen className={`h-[min(30svh,240px)] sm:h-[min(46vh,420px)] w-auto transition-colors duration-700 ${intuneric ? "text-chalk" : "text-ink"}`} />
              </div>
            ))}
            {intuneric && <Scantei />}
          </div>

          <div key={i} className="is-in pr-14 sm:pr-0" aria-hidden="true"><div className="ltt-rise"><TextEtapa e={ETAPE[i]} light={intuneric} /></div></div>
          <ol className="sr-only">
            {ETAPE.map((e) => <li key={e.cls}>Clasa a {e.cls}-a, {e.nume}: {e.titlu} {e.text}</li>)}
          </ol>
        </div>

        {/* navigarea pe etape */}
        <nav aria-label="Etapele" className="absolute right-4 sm:right-6 xl:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-3 sm:gap-4">
          {ETAPE.map((e, k) => (
            <button key={e.cls} onClick={() => mergiLa(k)} className="group flex items-center gap-3" aria-current={k === i ? "step" : undefined}>
              <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full grid place-items-center font-heading text-[11px] sm:text-[12px] border transition-all ${
                k <= i ? (intuneric ? "bg-accent-bright border-accent-bright text-night" : "bg-ink border-ink text-paper") : (intuneric ? "border-white/25 text-white/50" : "border-line text-ink-soft")}`}>{e.cls}</span>
              <span className={`hidden md:inline ltt-kicker !text-[10px] transition-opacity ${k === i ? "opacity-100" : "opacity-50 group-hover:opacity-100"} ${intuneric ? "text-white/80" : "text-ink-soft"}`}>{e.nume}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-8 left-6 sm:left-12 lg:left-24 right-6 sm:right-12 lg:right-24 h-px">
          <div className={`absolute inset-0 ${intuneric ? "bg-white/20" : "bg-line"}`} />
          <div className="absolute left-0 -top-px h-[2px] bg-accent" style={{ width: `${p * 100}%` }} />
        </div>
      </div>
    </section>
  );
}

/* ═══ 03 · PROFILURI ═══ */


function FisaProfil({ pr, n }: { pr: (typeof PROFILE_ADMITERE)[number]; n: number }) {
  const Desen = DESEN_PROFIL[pr.slug];
  return (
    <InView threshold={0.35} className="h-full grid sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:grid-cols-[4rem_minmax(0,0.85fr)_minmax(0,1.15fr)] items-center gap-6 lg:gap-14">
      <div className="hidden lg:block font-heading text-[4.5rem] leading-[0.95] text-ink/15 [writing-mode:vertical-rl] [text-orientation:upright]">{String(n).padStart(2, "0")}</div>
      <div className="text-ink">{Desen && <Desen className="w-28 sm:w-48 md:w-full max-w-[300px] sm:mx-auto" />}</div>
      <div className="ltt-rise min-w-0">
        <div className="ltt-kicker ltt-accent">{FILIERA[pr.slug]}</div>
        <h3 className="font-heading text-[1.7rem] sm:text-3xl md:text-4xl text-ink mt-3 leading-tight">{pr.title}</h3>
        {pr.specializari && <p className="font-body text-[13px] text-ink mt-2 leading-snug">{pr.specializari.join(" / ")}</p>}
        <p className="font-heading italic text-lg text-ink-soft mt-2">{pr.shortDesc}</p>
        <p className="hidden sm:block font-body text-[14px] leading-[1.85] text-ink-soft mt-5">{pr.fullDesc}</p>
        <p className="font-body text-[12px] text-ink-soft border-y border-line py-3 mt-4 sm:mt-6">{pr.discipline.slice(0, 4).join(" · ")}</p>
        <div className="mt-5 sm:mt-6"><ButonCerneala href={`/oferta#${pr.slug}`}>Detalii profil</ButonCerneala></div>
      </div>
    </InView>
  );
}

export function Profiluri() {
  const pinned = usePinned(0);
  const [ref, p] = useScrollProgress<HTMLElement>();
  const pista = useRef<HTMLDivElement>(null);
  const fixat = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);

  useEffect(() => {
    if (!pinned) return;
    const m = () => setDist(Math.max(0, (pista.current?.scrollWidth ?? 0) - window.innerWidth));
    m();
    window.addEventListener("resize", m);
    return () => window.removeEventListener("resize", m);
  }, [pinned]);

  // Cu Tab, un link dintr-o fișă încă nevăzută aduce fișa în ecran: derularea verticală
  // e chiar deplasarea orizontală, deci derulăm până la poziția fișei pe pistă.
  const aduInEcran = (e: React.FocusEvent<HTMLDivElement>) => {
    const sec = ref.current;
    if (!sec) return;
    // la focus, browserul ar derula și containerul pe orizontală, peste deplasarea noastră
    if (fixat.current) fixat.current.scrollLeft = 0;
    const margine = pista.current ? parseFloat(getComputedStyle(pista.current).paddingLeft) : 0;
    const tinta = Math.min(dist, Math.max(0, e.currentTarget.offsetLeft - margine));
    if (Math.abs(tinta - p * dist) < 8) return;
    window.scrollTo({ top: sec.getBoundingClientRect().top + window.scrollY + tinta, behavior: "instant" });
  };

  const intro = (
    <InView className="shrink-0 w-[84vw] md:w-[38vw] pr-8 md:pr-10 self-center">
      <Kicker className="ltt-rise text-ink-soft">Oferta educațională</Kicker>
      <h2 className="ltt-rise font-heading text-[2rem] sm:text-4xl md:text-5xl text-ink leading-[1.1] mt-5">{numarInLitere(PROFILE_ADMITERE.length)} profiluri.<br />Fiecare cu drumul lui.</h2>
      <p className="ltt-rise font-body text-[15px] leading-[1.85] text-ink-soft mt-6 max-w-sm">
        Liceu teoretic și filieră tehnologică. Le poți pune față în față în comparator.
      </p>
      <div className="ltt-rise mt-7"><LinkSubliniat href="/compara">Compară profilurile</LinkSubliniat></div>
    </InView>
  );

  if (!pinned) {
    return (
      <section id="profiluri" className="relative py-24 ltt-nuanta">
        <div className="px-6">{intro}</div>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 pb-6 mt-10">
          {PROFILE_ADMITERE.map((pr, k) => (
            <div key={pr.slug} className="snap-center shrink-0 w-[85vw] max-w-[760px] bg-paper-2 border border-line p-6 sm:p-8"><FisaProfil pr={pr} n={k + 1} /></div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="profiluri" ref={ref} className="relative ltt-nuanta" style={{ height: `calc(100vh + ${dist}px)` }}>
      <div ref={fixat} className="ltt-sticky sticky top-0 overflow-hidden [overflow:clip]">
        <Sina n="03" eticheta="Profiluri" />
        <div ref={pista} className="flex h-full items-center pl-6 md:pl-12 lg:pl-28 will-change-transform" style={{ transform: `translateX(${-p * dist}px)` }}>
          {intro}
          {PROFILE_ADMITERE.map((pr, k) => (
            <div key={pr.slug} onFocus={aduInEcran} className="shrink-0 w-[84vw] lg:w-[68vw] max-w-[1100px] h-[70svh] pr-8 sm:pr-16 lg:pr-28"><FisaProfil pr={pr} n={k + 1} /></div>
          ))}
        </div>
        <div className="absolute bottom-8 sm:bottom-10 left-6 md:left-12 lg:left-28 right-6 md:right-12 lg:right-28 flex items-center gap-6">
          <div className="relative flex-1 h-px bg-line"><div className="absolute left-0 -top-px h-[2px] bg-ink" style={{ width: `${p * 100}%` }} /></div>
          <span className="hidden sm:inline ltt-kicker !text-[10px] text-ink-soft whitespace-nowrap">Derulează — profilurile trec ca filele unui caiet →</span>
        </div>
      </div>
    </section>
  );
}

/* ═══ 04 · NOUTĂȚI ═══ */

interface NoutateItem { _id?: string; slug: string; title: string; category: string; date: string; excerpt: string; }

export function Noutati({ noutati }: { noutati: NoutateItem[] }) {
  return (
    <section id="noutati" className="relative py-28 md:py-36 ltt-nuanta-calda">
      <Sina n="04" eticheta="Noutăți" />
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-[1.6fr_1fr] gap-16">
        <InView>
          <Kicker className="ltt-rise text-ink-soft">Avizier</Kicker>
          <h2 className="ltt-rise font-heading text-4xl md:text-5xl text-ink mt-5">Ce se întâmplă la noi.</h2>
          <ul className="mt-12 border-t border-line">
            {noutati.slice(0, 3).map((n, i) => (
              <li key={n._id || n.slug} className="ltt-rise border-b border-line" style={{ transitionDelay: `${0.1 + i * 0.08}s` }}>
                <Link href={`/noutati#${n.slug}`} className="group grid sm:grid-cols-[9rem_1fr] gap-2 sm:gap-8 py-7">
                  <div className="font-body text-[12px] text-ink-soft pt-1.5">
                    <div>{n.date}</div><div className="ltt-kicker ltt-accent !text-[10px] mt-1.5">{n.category}</div>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-ink leading-snug group-hover:text-accent-text transition-colors">{n.title}</h3>
                    <p className="font-body text-[14px] leading-relaxed text-ink-soft mt-2">{n.excerpt}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="ltt-rise mt-10"><LinkSubliniat href="/noutati">Toate noutățile</LinkSubliniat></div>
        </InView>

        <InView className="lg:pt-24">
          <div className="ltt-rise ltt-kicker text-ink-soft">Scurtături</div>
          <ul className="ltt-rise mt-6 border-t border-line">
            {QUICK_ACCESS.map((q) => (
              <li key={q.label} className="border-b border-line">
                <Link href={q.href} className="group flex justify-between items-center py-4 font-heading text-xl text-ink">
                  {q.label}<span className="font-body text-ink-soft transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </InView>
      </div>
    </section>
  );
}

/* ═══ 05 · VOCI ═══ */

export function Voci() {
  return (
    <section id="voci" className="relative py-28 md:py-36">
      <Sina n="05" eticheta="Voci" />
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <InView>
          <Kicker className="ltt-rise text-ink-soft">Elevi, absolvenți, părinți</Kicker>
          <h2 className="ltt-rise font-heading text-4xl md:text-5xl text-ink mt-5">Ce spun cei care ne cunosc.</h2>
        </InView>
        <div className="grid md:grid-cols-2 gap-x-16 mt-14">
          {TESTIMONIALE.map((q, i) => (
            <InView key={q.author} className="border-t border-line py-10">
              <blockquote className="ltt-rise" style={{ transitionDelay: `${(i % 2) * 0.1}s` }}>
                <p className="font-heading italic text-2xl leading-[1.45] text-ink">„{q.text}”</p>
                <footer className="font-body text-[13px] text-ink-soft mt-5">— {q.author}, {q.role}</footer>
              </blockquote>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ 06 · ADMITERE ═══ */

export function Admitere({ admitere }: { admitere: number }) {
  return (
    <section id="admitere" className="relative py-28 md:py-36 bg-night text-chalk overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 80% 20%, rgb(var(--accent-bright) / 0.22), transparent 45%)" }} />
      <Sina n="06" eticheta="Admitere" light />
      <InView className="relative max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-[1.1fr_1fr] gap-16 items-end">
        <div>
          <Kicker className="ltt-rise text-white/60">Admitere {admitere}</Kicker>
          <h2 className="ltt-rise font-heading text-5xl md:text-7xl leading-[1.02] mt-6">Clasa a IX-a începe în <span className="italic text-accent-light">septembrie.</span></h2>
          <p className="ltt-rise font-body text-[15px] leading-[1.85] text-white/70 mt-8 max-w-md">
            Documentele, calendarul și profilurile — toate într-un singur loc. Dacă ai întrebări, scrie-ne sau sună la secretariat.
          </p>
          <div className="ltt-rise flex flex-wrap items-center gap-8 mt-10">
            <Link href="/admitere" className="group inline-flex items-center gap-3 bg-chalk text-night px-7 py-4 ltt-kicker !text-[12px] hover:bg-accent-bright transition-colors">
              Cum te înscrii<span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <LinkSubliniat href="/contact" light>Contact secretariat</LinkSubliniat>
          </div>
        </div>
        <ol className="ltt-rise border-t border-white/15" style={{ transitionDelay: "0.15s" }}>
          {calendarAdmitere(admitere).map((c) => (
            <li key={c.eveniment} className="grid grid-cols-[10rem_1fr] gap-6 border-b border-white/15 py-5">
              <span className="ltt-kicker !text-[10px] text-accent-light pt-1">{c.data}</span>
              <span className="font-heading text-xl">{c.eveniment}</span>
            </li>
          ))}
        </ol>
      </InView>
    </section>
  );
}
