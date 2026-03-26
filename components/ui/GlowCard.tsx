"use client";
import { useState } from "react";

interface Props { children: React.ReactNode; glowColor?: string; dark?: boolean; className?: string; }

export function GlowCard({ children, glowColor = "#00e5ff", dark = false, className = "" }: Props) {
  const [h, setH] = useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      className={`relative rounded-[18px] overflow-hidden cursor-pointer transition-transform duration-[400ms] ${h ? "-translate-y-1.5" : ""} ${className}`}>
      {/* Glow border - only visible on hover */}
      <div className={`glow-spin-slow absolute top-1/2 left-1/2 w-[250%] pb-[250%] pointer-events-none transition-opacity duration-500 ${h ? "opacity-90" : "opacity-0"}`}
        style={{ background: `conic-gradient(from 0deg, transparent 0%, ${glowColor} 6%, ${glowColor}cc 10%, transparent 18%, transparent 48%, ${glowColor}99 54%, ${glowColor}66 58%, transparent 66%, transparent 100%)` }} />
      <div className={`glow-spin-slow absolute top-1/2 left-1/2 w-[250%] pb-[250%] pointer-events-none blur-[16px] transition-opacity duration-500 ${h ? "opacity-70" : "opacity-0"}`}
        style={{ background: `conic-gradient(from 0deg, transparent 0%, ${glowColor}55 6%, transparent 18%, transparent 48%, ${glowColor}44 54%, transparent 66%)` }} />
      {/* Inner card */}
      <div className={`relative z-10 m-[2px] rounded-2xl p-7 transition-shadow duration-[400ms] ${dark ? "bg-brand-primary-dark/85 dark:bg-dark-card" : "bg-white dark:bg-dark-card"} ${h ? "shadow-xl" : "shadow-sm"}`}>
        {children}
      </div>
      {/* Static border */}
      {!h && <div className={`absolute inset-0 rounded-[18px] pointer-events-none z-20 ${dark ? "border border-white/10" : "border border-gray-200 dark:border-dark-border"}`} />}
    </div>
  );
}
