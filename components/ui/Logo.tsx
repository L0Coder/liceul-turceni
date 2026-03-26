export function Logo({ white = false, className = "" }: { white?: boolean; className?: string }) {
  const s = white ? "#fff" : "#1f3b5b";
  const o = white ? 0.9 : 1;
  return (
    <svg className={className} width="170" height="42" viewBox="60 20 280 130" xmlns="http://www.w3.org/2000/svg" aria-label="Logo LTT">
      <path d="M80 30 L80 120 L100 140 L162 140" stroke={s} fill="none" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" opacity={o} />
      <circle cx="80" cy="30" r="5.5" fill={s} opacity={o} /><circle cx="80" cy="120" r="3.5" fill={s} opacity={o} />
      <circle cx="100" cy="140" r="2.8" fill={s} opacity={o} /><circle cx="162" cy="140" r="5.5" fill={s} opacity={o} />
      <rect x="190" y="28" width="28" height="110" rx="2" fill="#f26b00" />
      <rect x="162" y="28" width="84" height="28" rx="2" fill="#f26b00" />
      <rect x="274" y="28" width="28" height="110" rx="2" fill="#2aa198" />
      <rect x="246" y="28" width="84" height="28" rx="2" fill="#2aa198" />
    </svg>
  );
}
