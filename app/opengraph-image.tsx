import { ImageResponse } from "next/og";
import { PROFILE_ADMITERE } from "@/lib/data";
import { sigla, tema, comune } from "@/lib/paleta";

export const runtime = "edge";
export const alt = "Liceul Tehnologic Turceni";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `radial-gradient(circle at 80% 15%, ${sigla.orange}4d, transparent 50%), linear-gradient(180deg, ${tema.luminos.footer} 0%, #2a2621 100%)`,
          fontFamily: "serif",
        }}
      >
        {/* Logo-ul liceului, ca în antetul site-ului */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: 14, marginBottom: 40 }}>
          <svg width="200" height="93" viewBox="60 20 280 130">
            <path d="M80 30 L80 120 L100 140 L162 140" stroke={comune.chalk} fill="none" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="190" y="28" width="28" height="110" rx="2" fill={sigla.orange} />
            <rect x="162" y="28" width="84" height="28" rx="2" fill={sigla.orange} />
            <rect x="274" y="28" width="28" height="110" rx="2" fill={sigla.teal} />
            <rect x="246" y="28" width="84" height="28" rx="2" fill={sigla.teal} />
          </svg>
        </div>
        <div style={{ fontSize: 64, fontWeight: 400, color: comune.chalk, textAlign: "center", lineHeight: 1.15 }}>
          Liceul Tehnologic
        </div>
        <div style={{ fontSize: 64, fontWeight: 400, color: comune.chalk, textAlign: "center", lineHeight: 1.15 }}>
          Turceni
        </div>
        <div style={{ fontSize: 26, color: "rgba(255,255,255,0.75)", marginTop: 28 }}>
          {`${PROFILE_ADMITERE.length} profiluri de liceu · județul Gorj · din 1982`}
        </div>
      </div>
    ),
    { ...size }
  );
}
