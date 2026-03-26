"use client";
import { Logo } from "@/components/ui/Logo";
import { GlowButton } from "@/components/ui/GlowButton";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1f3b5b 0%, #2980b9 50%, #1a6e5e 100%)" }}>
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/[0.03]" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/[0.04]" />
      <div className="text-center max-w-3xl px-6 relative z-10">
        <div className="mb-5 flex justify-center" style={{ animation: "fadeInUp 0.8s ease both" }}><Logo white /></div>
        <div className="font-body text-[13px] text-white/50 tracking-[3px] uppercase mb-4" style={{ animation: "fadeInUp 0.8s ease 0.1s both" }}>Județul Gorj · Orașul Turceni</div>
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight mb-5" style={{ animation: "fadeInUp 0.8s ease 0.2s both" }}>Liceul Tehnologic<br />Turceni</h1>
        <p className="font-body text-lg md:text-xl text-white/70 leading-relaxed max-w-lg mx-auto mb-10" style={{ animation: "fadeInUp 0.8s ease 0.4s both" }}>Formăm specialiștii de mâine. 8 profile educaționale, 1604 elevi, 155 cadre didactice dedicate excelenței.</p>
        <div className="flex gap-5 justify-center flex-wrap" style={{ animation: "fadeInUp 0.8s ease 0.6s both" }}>
          <GlowButton href="/oferta" variant="primary">Descoperă oferta educațională</GlowButton>
          <GlowButton href="/contact" variant="secondary">Contactează-ne</GlowButton>
        </div>
      </div>
    </section>
  );
}
