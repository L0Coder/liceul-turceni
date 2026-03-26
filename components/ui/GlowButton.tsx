"use client";
import { useState } from "react";
import Link from "next/link";

interface Props { children: React.ReactNode; href?: string; onClick?: () => void; variant?: "primary" | "secondary"; }

export function GlowButton({ children, href, onClick, variant = "primary" }: Props) {
  const [h, setH] = useState(false);
  const isP = variant === "primary";
  const cls = `glow-btn relative inline-flex items-center justify-center px-9 py-4 rounded-[14px] font-body text-[15px] font-semibold no-underline overflow-hidden cursor-pointer min-w-[160px] transition-transform duration-[400ms] ${h ? "-translate-y-[3px]" : ""} ${isP ? "text-brand-primary dark:text-dark-text" : "text-white"}`;

  const inner = (<>
    <div className={`glow-spin absolute top-1/2 left-1/2 w-[300%] pb-[300%] pointer-events-none transition-opacity duration-[400ms] ${h ? "opacity-100" : "opacity-0"}`}
      style={{ background: "conic-gradient(from 0deg, transparent 0%, #00e5ff 6%, #00b0ff 10%, #fff 13%, transparent 20%, transparent 46%, #00e5ff 52%, #76ff03 56%, #fff 58%, transparent 66%, transparent 100%)" }} />
    <div className={`glow-spin absolute top-1/2 left-1/2 w-[300%] pb-[300%] pointer-events-none blur-[14px] transition-opacity duration-[400ms] ${h ? "opacity-80" : "opacity-0"}`}
      style={{ background: "conic-gradient(from 0deg, transparent 0%, #00e5ff88 6%, transparent 20%, transparent 46%, #00e5ff66 52%, transparent 66%)" }} />
    <div className={`absolute inset-[2px] rounded-xl pointer-events-none ${isP ? "bg-white dark:bg-dark-card" : "bg-brand-primary-dark/90 dark:bg-dark-bg/90"}`} />
    <span className="relative z-10 pointer-events-none">{children}</span>
  </>);

  const handlers = { onMouseEnter: () => setH(true), onMouseLeave: () => setH(false) };

  if (href) return <Link href={href} className={cls} {...handlers}>{inner}</Link>;
  return <button className={cls} onClick={onClick} {...handlers}>{inner}</button>;
}
