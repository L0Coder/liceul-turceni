/* Desene „în cerneală” pentru homepage. Fiecare linie are pathLength=1, ca să se poată
   trasa singură (vezi .ltt-draw în globals.css). Culoarea vine din currentColor (cerneala),
   iar fiecare desen are un singur detaliu în portocaliul liceului — ca firul de aur din kintsugi. */

import type { SVGProps } from "react";

const ACCENT = "#e2621b";
const linie = { fill: "none", stroke: "currentColor", strokeWidth: 2.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

function P(props: SVGProps<SVGPathElement>) {
  return <path pathLength={1} {...props} />;
}
function C(props: SVGProps<SVGCircleElement>) {
  return <circle pathLength={1} {...props} />;
}

/** Roată dințată: n dinți, rază interioară r1, exterioară r2. */
function roata(cx: number, cy: number, r1: number, r2: number, n: number) {
  const pts: string[] = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const w = (Math.PI / n) * 0.55;
    const pt = (r: number, t: number) => `${(cx + r * Math.cos(t)).toFixed(1)} ${(cy + r * Math.sin(t)).toFixed(1)}`;
    pts.push(`${i === 0 ? "M" : "L"}${pt(r1, a - w * 1.4)}`, `L${pt(r2, a - w)}`, `L${pt(r2, a + w)}`, `L${pt(r1, a + w * 1.4)}`);
  }
  return pts.join(" ") + " Z";
}

type D = { className?: string };

/* ═══ HERO: clădirea liceului ═══ */
export function DesenScoala({ className = "" }: D) {
  return (
    <svg viewBox="0 0 520 420" className={`ltt-draw ${className}`} aria-hidden="true">
      <g {...linie}>
        <P d="M20 362 Q260 354 500 362" />
        {/* aripile și corpul central */}
        <P d="M70 360 L70 202 L200 202" />
        <P d="M450 360 L450 202 L320 202" />
        <P d="M62 202 L200 202 M320 202 L458 202" strokeWidth={3} />
        <P d="M200 360 L200 152 L320 152 L320 360" />
        <P d="M188 154 L260 110 L332 154 Z" />
        <C cx="260" cy="137" r="9" />
        {/* ferestre */}
        {[88, 124, 160, 340, 376, 412].map((x) =>
          [228, 290].map((y) => <P key={`${x}-${y}`} d={`M${x} ${y} h24 v34 h-24 Z M${x + 12} ${y} v34`} strokeWidth={1.6} />)
        )}
        {[214, 249, 284].map((x) => <P key={x} d={`M${x} 176 h22 v30 h-22 Z`} strokeWidth={1.6} />)}
        {/* intrarea */}
        <P d="M222 262 h76 v16 h-76 Z" strokeWidth={1.6} />
        <P d="M240 360 L240 304 Q260 288 280 304 L280 360" />
        <P d="M226 368 L294 368" />
        {/* copaci */}
        <P d="M36 360 L36 306 M36 326 L24 314" />
        <P d="M12 300 C2 280 16 254 38 258 C46 238 76 244 72 268 C88 278 78 306 56 302 C46 312 22 312 12 300 Z" />
        <P d="M486 360 L486 300 M486 322 L498 310" />
        <P d="M462 294 C452 270 470 248 490 254 C500 236 528 246 520 270 C532 284 518 306 498 300 C486 310 468 306 462 294 Z" />
        {/* catargul */}
        <P d="M260 110 L260 34" strokeWidth={1.8} />
      </g>
      {/* steagul — singura pată de culoare */}
      <g className="ltt-fill">
        <rect x="261" y="36" width="12" height="22" fill="#1c4fa0" />
        <rect x="273" y="36" width="12" height="22" fill="#f5c400" />
        <rect x="285" y="36" width="12" height="22" fill="#d0202e" />
      </g>
    </svg>
  );
}

/* ═══ DRUMUL: cele patru etape ═══ */
export function DesenCaiet({ className = "" }: D) {
  return (
    <svg viewBox="0 0 320 320" className={`ltt-draw ${className}`} aria-hidden="true">
      <g {...linie}>
        <P d="M40 92 Q100 78 158 94 L158 252 Q100 238 40 250 Z" />
        <P d="M162 94 Q220 78 280 92 L280 250 Q220 238 162 252 Z" />
        <P d="M160 94 L160 254" strokeWidth={1.4} />
        {[122, 144, 166, 188, 210].map((y) => <P key={y} d={`M178 ${y} Q222 ${y - 8} 264 ${y - 2}`} strokeWidth={1.2} />)}
        <P d="M58 126 C72 116 82 132 96 122 S124 116 138 124" strokeWidth={1.6} />
        <P d="M58 150 C78 142 98 156 120 146" strokeWidth={1.6} />
        <P d="M58 178 l14 0 M80 172 l0 14 M73 179 l14 0" strokeWidth={1.6} />
        <P d="M100 180 C108 168 122 170 122 180 C122 192 104 196 100 180" strokeWidth={1.6} />
        <P d="M206 262 L288 178 L302 192 L220 276 Z" />
        <P d="M206 262 L196 288 L220 276" />
        <P d="M276 190 L290 204" strokeWidth={1.4} />
      </g>
      <P d="M199 280 L196 288 L204 285" fill="none" stroke={ACCENT} strokeWidth={3} strokeLinecap="round" />
      <P d="M178 232 Q214 224 250 230" fill="none" stroke={ACCENT} strokeWidth={2.4} strokeLinecap="round" />
    </svg>
  );
}

export function DesenBalon({ className = "" }: D) {
  return (
    <svg viewBox="0 0 320 320" className={`ltt-draw ${className}`} aria-hidden="true">
      <path className="ltt-fill" d="M100 192 Q160 180 220 192 L248 242 Q254 264 232 264 L88 264 Q66 264 72 242 Z" fill={ACCENT} fillOpacity={0.14} />
      <g {...linie}>
        <P d="M130 62 L130 132 L72 242 Q66 264 88 264 L232 264 Q254 264 248 242 L190 132 L190 62" />
        <P d="M118 60 L202 60" strokeWidth={3} />
        <P d="M136 92 L150 92 M136 112 L150 112" strokeWidth={1.4} />
        <C cx="140" cy="226" r="6" strokeWidth={1.6} />
        <C cx="176" cy="212" r="4" strokeWidth={1.6} />
        <C cx="162" cy="242" r="5" strokeWidth={1.6} />
        <C cx="168" cy="40" r="5" strokeWidth={1.4} />
        <C cx="150" cy="24" r="3.5" strokeWidth={1.4} />
      </g>
      <P d="M100 192 Q160 180 220 192" fill="none" stroke={ACCENT} strokeWidth={2.6} strokeLinecap="round" />
    </svg>
  );
}

export function DesenAtelier({ className = "" }: D) {
  return (
    <svg viewBox="0 0 320 320" className={`ltt-draw ${className}`} aria-hidden="true">
      <g {...linie}>
        <P d={roata(132, 168, 64, 80, 11)} />
        <C cx="132" cy="168" r="26" />
        <C cx="132" cy="168" r="8" strokeWidth={1.6} />
        <g transform="translate(214 168) rotate(-58)">
          <P d="M-96 -9 L48 -9 C54 -28 84 -36 104 -20 L86 -8 L86 8 L104 20 C84 36 54 28 48 9 L-96 9 A9 9 0 0 1 -96 -9 Z" />
          <C cx="-84" cy="0" r="3.5" strokeWidth={1.4} />
        </g>
      </g>
      <g fill="none" stroke={ACCENT} strokeWidth={2.4} strokeLinecap="round">
        <P d="M58 270 L38 256" /><P d="M58 270 L42 290" /><P d="M58 270 L66 296" /><P d="M58 270 L30 276" />
      </g>
    </svg>
  );
}

export function DesenToca({ className = "" }: D) {
  return (
    <svg viewBox="0 0 320 320" className={`ltt-draw ${className}`} aria-hidden="true">
      <g {...linie}>
        <P d="M54 112 L160 72 L266 112 L160 152 Z" />
        <P d="M100 132 L100 180 Q160 206 220 180 L220 132" />
        <C cx="160" cy="112" r="4" />
        <P d="M80 236 L240 236 Q252 236 252 248 Q252 260 240 260 L80 260 Q68 260 68 248 Q68 236 80 236 Z" />
        <P d="M80 236 Q92 248 80 260 M240 236 Q228 248 240 260" strokeWidth={1.4} />
        <P d="M160 260 L150 284 M160 260 L172 284" strokeWidth={1.8} />
      </g>
      <g fill="none" stroke={ACCENT} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
        <P d="M160 112 L236 132 L240 178" />
        <P d="M233 178 L240 200 L247 178 Z" />
        <P d="M156 236 L156 260 M164 236 L164 260" />
      </g>
    </svg>
  );
}

/* ═══ PROFILURILE ═══ */
function Laptop({ className = "" }: D) {
  return (
    <svg viewBox="0 0 240 240" className={`ltt-draw ${className}`} aria-hidden="true">
      <g {...linie}>
        <P d="M52 62 L188 62 L188 152 L52 152 Z" />
        <P d="M30 152 L210 152 L222 174 L18 174 Z" />
        <P d="M100 164 L140 164" strokeWidth={1.4} />
        <P d="M92 92 L76 107 L92 122 M148 92 L164 107 L148 122" />
      </g>
      <P d="M130 86 L110 128" fill="none" stroke={ACCENT} strokeWidth={2.6} strokeLinecap="round" />
    </svg>
  );
}
function Microscop({ className = "" }: D) {
  return (
    <svg viewBox="0 0 240 240" className={`ltt-draw ${className}`} aria-hidden="true">
      <g {...linie}>
        <P d="M56 204 L184 204 L178 190 L62 190 Z" />
        <P d="M150 190 L150 176 Q182 140 156 96" />
        <P d="M94 50 L120 40 L152 116 L126 126 Z" />
        <P d="M88 44 L114 33" strokeWidth={3} />
        <P d="M132 126 L136 144" />
        <P d="M84 150 L170 150" strokeWidth={3} />
      </g>
      <g fill="none" stroke={ACCENT} strokeWidth={2.2} strokeLinecap="round">
        <C cx="122" cy="168" r="6" />
        <P d="M122 178 L122 186 M110 172 L104 178 M134 172 L140 178" />
      </g>
    </svg>
  );
}
function Carte({ className = "" }: D) {
  return (
    <svg viewBox="0 0 240 240" className={`ltt-draw ${className}`} aria-hidden="true">
      <g {...linie}>
        <P d="M24 68 Q72 52 118 70 L118 190 Q72 174 24 188 Z" />
        <P d="M122 70 Q168 52 216 68 L216 188 Q168 174 122 190 Z" />
        <P d="M20 76 L20 196 Q70 182 120 198 Q170 182 220 196 L220 76" strokeWidth={1.4} />
        {[96, 116, 136, 156].map((y) => <P key={y} d={`M40 ${y} Q70 ${y - 6} 102 ${y}`} strokeWidth={1.2} />)}
        {[96, 116, 136].map((y) => <P key={y} d={`M138 ${y} Q168 ${y - 6} 200 ${y}`} strokeWidth={1.2} />)}
      </g>
      <P d="M178 62 L178 120 L186 110 L194 120 L194 58" fill="none" stroke={ACCENT} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Cip({ className = "" }: D) {
  const pini = [96, 112, 128, 144];
  return (
    <svg viewBox="0 0 240 240" className={`ltt-draw ${className}`} aria-hidden="true">
      <g {...linie}>
        <P d="M80 80 L160 80 L160 160 L80 160 Z" />
        <P d="M96 96 L144 96 L144 144 L96 144 Z" strokeWidth={1.4} />
        {pini.map((v) => <P key={`t${v}`} d={`M${v} 80 L${v} 64 M${v} 160 L${v} 176 M80 ${v} L64 ${v} M160 ${v} L176 ${v}`} strokeWidth={1.8} />)}
        <P d="M96 64 L96 40 L60 40 M144 176 L144 204 L196 204 M64 144 L36 144 L36 188" strokeWidth={1.4} />
        <C cx="60" cy="40" r="4" strokeWidth={1.4} />
        <C cx="36" cy="188" r="4" strokeWidth={1.4} />
      </g>
      <g fill="none" stroke={ACCENT} strokeWidth={2.2} strokeLinecap="round">
        <P d="M176 112 L204 112 L204 60" />
        <C cx="204" cy="52" r="7" />
      </g>
    </svg>
  );
}
function Roti({ className = "" }: D) {
  return (
    <svg viewBox="0 0 240 240" className={`ltt-draw ${className}`} aria-hidden="true">
      <g {...linie}>
        <P d={roata(100, 136, 50, 62, 10)} />
        <C cx="100" cy="136" r="18" />
      </g>
      <g fill="none" stroke={ACCENT} strokeWidth={2.2} strokeLinejoin="round">
        <P d={roata(176, 72, 24, 32, 8)} />
        <C cx="176" cy="72" r="8" />
      </g>
    </svg>
  );
}
function Motor({ className = "" }: D) {
  return (
    <svg viewBox="0 0 240 240" className={`ltt-draw ${className}`} aria-hidden="true">
      <g {...linie}>
        <P d="M52 92 L158 92 Q170 92 170 104 L170 168 Q170 180 158 180 L52 180 Q40 180 40 168 L40 104 Q40 92 52 92 Z" />
        {[62, 78, 94, 110, 126, 142].map((x) => <P key={x} d={`M${x} 100 L${x} 172`} strokeWidth={1.3} />)}
        <P d="M170 136 L212 136" strokeWidth={4} />
        <P d="M58 180 L50 202 L84 202 M150 180 L158 202 L124 202" />
        <P d="M84 92 L84 72 L124 72 L124 92" />
      </g>
      <P d="M110 30 L96 54 L112 54 L100 80" fill="none" stroke={ACCENT} strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Casa({ className = "" }: D) {
  return (
    <svg viewBox="0 0 240 240" className={`ltt-draw ${className}`} aria-hidden="true">
      <g {...linie}>
        <P d="M24 196 L216 196" />
        <P d="M50 196 L50 112 L118 62 L186 112 L186 196" />
        <P d="M40 118 L118 58 L196 118" strokeWidth={3} />
        <P d="M84 196 L84 150 L112 150 L112 196" />
        <P d="M132 136 L162 136 L162 162 L132 162 Z M147 136 L147 162" strokeWidth={1.6} />
        <P d="M50 156 L186 156" strokeWidth={1.1} />
      </g>
      <g fill="none" stroke={ACCENT} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <P d="M210 40 L210 120" />
        <P d="M204 120 L216 120 L210 134 Z" />
      </g>
    </svg>
  );
}
function Sudura({ className = "" }: D) {
  return (
    <svg viewBox="0 0 240 240" className={`ltt-draw ${className}`} aria-hidden="true">
      <g {...linie}>
        <P d="M20 196 L220 196 M20 210 L220 210" />
        <P d="M196 40 L132 120 L146 132 L210 52 Z" />
        <P d="M132 120 L112 150 L122 158 L146 132" />
        <P d="M210 52 L224 36" strokeWidth={3} />
      </g>
      <g fill="none" stroke={ACCENT} strokeWidth={2.2} strokeLinecap="round">
        <P d="M106 162 Q94 176 100 192 Q112 180 106 162" />
        <P d="M100 192 L72 172 M100 192 L64 194 M100 192 L80 216 M100 192 L132 176" />
        <P d="M40 196 Q46 190 52 196 Q58 190 64 196 Q70 190 76 196 Q82 190 88 196" />
      </g>
    </svg>
  );
}

/** Desenul fiecărui profil, după slug. */
export const DESEN_PROFIL: Record<string, (p: D) => JSX.Element> = {
  "matematica-informatica": Laptop,
  "stiinte-ale-naturii": Microscop,
  "filologie-bilingv-engleza": Carte,
  "electronica-automatizari": Cip,
  mecanica: Roti,
  electromecanica: Motor,
  "constructii-instalatii": Casa,
  "scoala-profesionala": Sudura,
};
