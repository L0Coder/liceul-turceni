import Link from "next/link";

/* Butoanele site-ului: unul plin (cerneală) și unul ca link subliniat. Pe fundal închis, `light`. */

const plin = "group inline-flex items-center justify-center gap-3 px-7 py-4 ltt-kicker !text-[12px] transition-colors";

export function ButonCerneala({ href, children, light = false, onClick, type }: {
  href?: string; children: React.ReactNode; light?: boolean; onClick?: () => void; type?: "submit" | "button";
}) {
  const cls = `${plin} ${light ? "bg-chalk text-night hover:bg-accent-bright" : "bg-ink text-paper hover:bg-accent hover:text-white"}`;
  const inner = <>{children}<span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span></>;
  if (href) return <Link href={href} className={cls}>{inner}</Link>;
  return <button type={type ?? "button"} onClick={onClick} className={cls}>{inner}</button>;
}

export function LinkSubliniat({ href, children, light = false, extern = false }: {
  href: string; children: React.ReactNode; light?: boolean; extern?: boolean;
}) {
  const cls = `inline-block ltt-kicker !text-[12px] py-3 border-b transition-colors ${light ? "text-white border-white/40 hover:border-white" : "text-ink border-ink/40 hover:border-ink"}`;
  if (extern) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children} ↗</a>;
  return <Link href={href} className={cls}>{children}</Link>;
}

export function Kicker({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`ltt-kicker flex items-center gap-3 ${className}`}>
      <span aria-hidden="true" className="w-8 h-px bg-current opacity-60" />{children}
    </div>
  );
}
