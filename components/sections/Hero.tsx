import { GlowButton } from "@/components/ui/GlowButton";

/* Peisaj de dimineață: dealurile Gorjului, Jiul, orașul și liceul (cu steag) în centru.
   Culorile vin din variabilele CSS .ltt-hero (globals.css): ziua în light mode,
   seara cu ferestre aprinse și stele în dark mode.
   Singura animație de pe homepage: norii care plutesc (oprită la prefers-reduced-motion). */

// Case și blocuri mici: [x, lățime, înălțime-vârf (y)]
const CASE: [number, number, number][] = [
  [150, 54, 286], [214, 78, 268], [302, 46, 290], [356, 70, 276],
  [1010, 64, 280], [1084, 86, 266], [1180, 52, 288], [1242, 72, 274],
];

// Copaci: [cx, baza (y), rază coroană]
const COPACI: [number, number, number][] = [
  [92, 326, 20], [128, 330, 15], [448, 328, 22], [492, 332, 16], [528, 330, 19],
  [920, 330, 20], [956, 332, 15], [990, 328, 18], [1340, 328, 21], [1384, 332, 16],
];

function Casa({ x, w, top }: { x: number; w: number; top: number }) {
  const cols = Math.floor((w - 10) / 14);
  const rows = Math.floor((330 - top - 12) / 15);
  const ferestre = [];
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++)
      ferestre.push(<rect key={`${r}-${c}`} className={(r * 3 + c + x) % 4 === 0 ? "ltt-lit" : "ltt-win"} x={x + 8 + c * 14} y={top + 9 + r * 15} width="6" height="8" rx="1" />);
  return (
    <g>
      <rect x={x} y={top} width={w} height={330 - top} style={{ fill: "var(--h-wall2)" }} />
      <rect x={x - 3} y={top - 5} width={w + 6} height="6" rx="2" style={{ fill: "var(--h-roof)" }} />
      {ferestre}
    </g>
  );
}

function Copac({ cx, y, r }: { cx: number; y: number; r: number }) {
  return (
    <g>
      <rect x={cx - 2} y={y - r * 0.9} width="4" height={r * 0.9} style={{ fill: "var(--h-trunk)" }} />
      <circle cx={cx} cy={y - r * 1.25} r={r} style={{ fill: "var(--h-tree)" }} />
      <circle cx={cx - r * 0.3} cy={y - r * 1.5} r={r * 0.55} style={{ fill: "var(--h-tree2)" }} />
    </g>
  );
}

function Nor({ x, y, s, delay }: { x: number; y: number; s: number; delay: number }) {
  return (
    <g className="ltt-cloud" style={{ animationDelay: `${delay}s` }}>
      <g transform={`translate(${x} ${y}) scale(${s})`} style={{ fill: "var(--h-cloud)" }}>
        <ellipse cx="0" cy="0" rx="46" ry="14" />
        <circle cx="-16" cy="-8" r="16" />
        <circle cx="10" cy="-14" r="20" />
        <circle cx="32" cy="-4" r="12" />
      </g>
    </g>
  );
}

export function Hero({ profileCount, admitere }: { profileCount: number; admitere: number }) {
  return (
    <section className="ltt-hero relative min-h-[92vh] md:min-h-screen flex flex-col overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 md:pt-36 pb-6">
        <h1 className="font-heading text-white leading-[0.95] tracking-tight text-[3.1rem] sm:text-7xl lg:text-[6rem]">
          Liceul Tehnologic<br />Turceni
        </h1>
        <p className="font-body text-lg md:text-xl text-white/85 leading-relaxed max-w-xl mt-6">
          Din 1982, elevii din Turceni și din satele din jur învață aici pentru facultate, pentru o meserie sau pentru amândouă.
          {" "}{profileCount} profiluri: liceu teoretic, tehnologic și școală profesională.
        </p>
        <div className="flex gap-4 flex-wrap mt-9">
          <GlowButton href="/oferta" variant="primary">Vezi profilurile</GlowButton>
          <GlowButton href="/admitere" variant="secondary">{`Admitere ${admitere}`}</GlowButton>
        </div>
      </div>

      <svg className="relative mt-auto w-full h-[220px] sm:h-[260px] md:h-[300px] overflow-visible" viewBox="0 0 1440 360"
        preserveAspectRatio="xMidYMax slice" aria-hidden="true">
        <defs>
          <linearGradient id="ltt-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" style={{ stopColor: "var(--h-sky)", stopOpacity: 0 }} />
            <stop offset="0.55" style={{ stopColor: "var(--h-hz1)" }} />
            <stop offset="1" style={{ stopColor: "var(--h-hz2)" }} />
          </linearGradient>
          <radialGradient id="ltt-sun">
            <stop offset="0" style={{ stopColor: "var(--h-sun)", stopOpacity: 0.55 }} />
            <stop offset="1" style={{ stopColor: "var(--h-sun)", stopOpacity: 0 }} />
          </radialGradient>
        </defs>

        <rect x="0" y="-40" width="1440" height="330" fill="url(#ltt-sky)" />

        {/* stele: doar seara (dark mode) */}
        <g className="ltt-stars" style={{ fill: "#fff" }}>
          {[[160, 40], [330, 90], [470, 20], [610, 70], [820, 30], [1120, 60], [1260, 20], [1380, 90], [60, 110], [960, 100]].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="1.6" />
          ))}
        </g>

        {/* soarele (luna seara) */}
        <circle cx="990" cy="140" r="120" fill="url(#ltt-sun)" />
        <circle cx="990" cy="140" r="38" style={{ fill: "var(--h-sun)" }} />

        <Nor x={240} y={110} s={1} delay={0} />
        <Nor x={760} y={70} s={0.8} delay={-20} />
        <Nor x={1280} y={130} s={1.1} delay={-40} />

        {/* păsări */}
        <g fill="none" strokeWidth="2" strokeLinecap="round" style={{ stroke: "var(--h-bird)" }}>
          <path d="M880 120 q6 -6 12 0 q6 -6 12 0" />
          <path d="M916 104 q5 -5 10 0 q5 -5 10 0" />
          <path d="M852 96 q4 -4 8 0 q4 -4 8 0" />
        </g>

        {/* dealuri */}
        <path d="M0 262 C160 226 300 250 440 238 S720 204 900 230 S1240 214 1440 240 L1440 360 L0 360 Z" style={{ fill: "var(--h-hill1)" }} />
        <path d="M0 292 C220 266 420 290 640 278 S1020 260 1200 280 S1380 274 1440 282 L1440 360 L0 360 Z" style={{ fill: "var(--h-hill2)" }} />

        {/* orașul */}
        {CASE.map(([x, w, top]) => <Casa key={x} x={x} w={w} top={top} />)}

        {/* liceul: două aripi, corpul central mai înalt, intrare, steag */}
        <g>
          <rect x="560" y="262" width="320" height="68" style={{ fill: "var(--h-wall)" }} />
          <rect x="556" y="256" width="328" height="8" rx="2" style={{ fill: "var(--h-roof)" }} />
          <rect x="672" y="222" width="96" height="108" style={{ fill: "var(--h-wall)" }} />
          <polygon points="664,224 720,196 776,224" style={{ fill: "var(--h-roof)" }} />
          <rect x="706" y="292" width="28" height="38" rx="3" style={{ fill: "var(--h-door)" }} />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <g key={i}>
              <rect className={i % 3 === 1 ? "ltt-win" : "ltt-lit"} x={574 + i * 16} y="274" width="9" height="12" rx="1" />
              <rect className={i % 3 === 0 ? "ltt-win" : "ltt-lit"} x={574 + i * 16} y="298" width="9" height="12" rx="1" />
              <rect className={i % 3 === 2 ? "ltt-win" : "ltt-lit"} x={786 + i * 16} y="274" width="9" height="12" rx="1" />
              <rect className={i % 3 === 0 ? "ltt-lit" : "ltt-win"} x={786 + i * 16} y="298" width="9" height="12" rx="1" />
            </g>
          ))}
          {[0, 1, 2].map((i) => (
            <rect key={i} className="ltt-lit" x={686 + i * 26} y="238" width="12" height="16" rx="1" />
          ))}
          <rect x="719" y="148" width="2.5" height="50" style={{ fill: "var(--h-pole)" }} />
          <rect x="721.5" y="150" width="8" height="14" fill="#1c4fa0" />
          <rect x="729.5" y="150" width="8" height="14" fill="#f5c400" />
          <rect x="737.5" y="150" width="8" height="14" fill="#d0202e" />
        </g>

        {COPACI.map(([cx, y, r]) => <Copac key={cx} cx={cx} y={y} r={r} />)}

        {/* Jiul și malul din față */}
        <path d="M0 330 L1440 330 L1440 360 L0 360 Z" style={{ fill: "var(--h-ground)" }} />
        <path d="M0 342 C300 334 520 350 760 342 S1180 334 1440 344 L1440 352 C1180 344 980 356 760 350 S300 342 0 350 Z" style={{ fill: "var(--h-river)" }} />
      </svg>
    </section>
  );
}
