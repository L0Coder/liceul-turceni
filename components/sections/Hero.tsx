import { GlowButton } from "@/components/ui/GlowButton";

/* Silueta orașului la răsărit: blocuri, liceul (cu steag), termocentrala.
   Liceul a fost înființat în 1982 pentru termocentrala Turceni — de aceea ea e în imagine.
   Singura animație de pe homepage: aburul din turnuri (oprit la prefers-reduced-motion). */

const COAL = "#0a1622";
const LIT = "#ffc56b";

// Blocuri de locuințe: [x, lățime, înălțime-vârf (y)]
const BLOCURI: [number, number, number][] = [
  [0, 70, 262], [78, 96, 236], [182, 64, 270], [254, 110, 228], [372, 58, 258],
  [1296, 70, 250], [1374, 66, 238],
];

function Ferestre({ x, w, top }: { x: number; w: number; top: number }) {
  const cols = Math.floor((w - 12) / 14);
  const rows = Math.floor((322 - top - 14) / 16);
  const out = [];
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++)
      if ((r * 7 + c * 3 + x) % 5 === 0)
        out.push(<rect key={`${r}-${c}`} x={x + 9 + c * 14} y={top + 12 + r * 16} width="6" height="8" fill={LIT} opacity="0.85" />);
  return <>{out}</>;
}

// Turn de răcire (hiperboloid): lat la bază, îngust spre vârf, ușor evazat sus
function Turn({ cx, h, b, w, t }: { cx: number; h: number; b: number; w: number; t: number }) {
  const y = 330;
  const d = `M${cx - b},${y} C${cx - b * 0.8},${y - h * 0.45} ${cx - w},${y - h * 0.6} ${cx - w},${y - h * 0.78}
    C${cx - w},${y - h * 0.9} ${cx - t},${y - h * 0.97} ${cx - t},${y - h} L${cx + t},${y - h}
    C${cx + t},${y - h * 0.97} ${cx + w},${y - h * 0.9} ${cx + w},${y - h * 0.78}
    C${cx + w},${y - h * 0.6} ${cx + b * 0.8},${y - h * 0.45} ${cx + b},${y} Z`;
  return <path d={d} fill={COAL} />;
}

function Abur({ cx, top, delay }: { cx: number; top: number; delay: number }) {
  return (
    <g filter="url(#soft)" fill="#e8eef3">
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} className="ltt-steam" cx={cx + ((i % 2) * 2 - 1) * 10} cy={top - 4} r={24 + i * 5}
          style={{ animationDelay: `${delay + i * 1.75}s` }} />
      ))}
    </g>
  );
}

export function Hero({ profileCount, admitere }: { profileCount: number; admitere: number }) {
  return (
    <section
      className="relative min-h-[92vh] md:min-h-screen flex flex-col overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0b1b2c 0%, #12304b 42%, #2b3c58 64%, #7d4636 84%, #c9571f 100%)" }}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 md:pt-36 pb-6">
        <h1 className="font-heading font-extrabold text-white leading-[0.92] tracking-tight text-[3.6rem] sm:text-7xl md:text-[6.5rem]">
          Liceul Tehnologic<br />Turceni
        </h1>
        <p className="font-body text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mt-6">
          Din 1982, lângă termocentrala Turceni, pregătim elevi pentru universitate, industrie și energie.
          {" "}{profileCount} profiluri: liceu teoretic, tehnologic și școală profesională.
        </p>
        <div className="flex gap-4 flex-wrap mt-9">
          <GlowButton href="/oferta" variant="primary">Vezi profilurile</GlowButton>
          <GlowButton href="/admitere" variant="secondary">{`Admitere ${admitere}`}</GlowButton>
        </div>
      </div>

      <svg className="relative mt-auto w-full h-[200px] sm:h-[240px] md:h-[280px] overflow-visible" viewBox="0 0 1440 360"
        preserveAspectRatio="xMidYMax slice" aria-hidden="true">
        <defs>
          <radialGradient id="ltt-glow" cx="0.62" cy="1" r="0.6">
            <stop offset="0" stopColor="#ff8a2a" stopOpacity="0.55" />
            <stop offset="1" stopColor="#ff8a2a" stopOpacity="0" />
          </radialGradient>
          <filter id="soft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="10" /></filter>
        </defs>

        <rect x="0" y="120" width="1440" height="240" fill="url(#ltt-glow)" />
        {/* dealuri în depărtare */}
        <path d="M0 296 C200 270 380 292 560 282 S900 264 1100 286 S1350 272 1440 290 L1440 360 L0 360 Z" fill="#14283d" />

        {/* aburul din turnuri */}
        <Abur cx={780} top={180} delay={0} />
        <Abur cx={900} top={165} delay={1.1} />
        <Abur cx={1020} top={180} delay={2.2} />

        {/* blocuri */}
        {BLOCURI.map(([x, w, top]) => (
          <g key={x}><rect x={x} y={top} width={w} height={330 - top} fill={COAL} /><Ferestre x={x} w={w} top={top} /></g>
        ))}

        {/* liceul: corp lung, corp central mai înalt, steag */}
        <rect x="440" y="276" width="190" height="54" fill={COAL} />
        <rect x="505" y="252" width="60" height="30" fill={COAL} />
        <rect x="533" y="206" width="2.5" height="48" fill={COAL} />
        <rect x="535.5" y="208" width="7" height="12" fill="#1c4fa0" />
        <rect x="542.5" y="208" width="7" height="12" fill="#f5c400" />
        <rect x="549.5" y="208" width="7" height="12" fill="#d0202e" />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <rect key={i} x={452 + i * 17} y="292" width="8" height="10" fill={LIT} opacity={i % 3 === 1 ? 0.25 : 0.9} />
        ))}

        {/* termocentrala: turnuri de răcire, clădirea, coșuri */}
        <Turn cx={780} h={150} b={62} w={37} t={41} />
        <Turn cx={900} h={165} b={66} w={40} t={44} />
        <Turn cx={1020} h={150} b={62} w={37} t={41} />
        <rect x="1080" y="262" width="190" height="68" fill={COAL} />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <rect key={i} x={1092 + i * 20} y="280" width="10" height="6" fill={LIT} opacity="0.6" />
        ))}
        <polygon points="1134,330 1152,330 1147,78 1139,78" fill={COAL} />
        <polygon points="1186,330 1202,330 1198,108 1190,108" fill={COAL} />
        <circle cx="1143" cy="74" r="3" fill="#ff4d4d" />
        <circle cx="1194" cy="104" r="3" fill="#ff4d4d" />

        <rect x="0" y="328" width="1440" height="32" fill={COAL} />
      </svg>
    </section>
  );
}
