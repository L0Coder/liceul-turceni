import { ImageResponse } from "next/og";

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
          background: "linear-gradient(135deg, #1f3b5b 0%, #2980b9 50%, #1a6e5e 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo simplificat */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: 14, marginBottom: 40 }}>
          <svg width="90" height="90" viewBox="0 0 64 64">
            <path d="M14 14 v24 h12" fill="none" stroke="#00e5ff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="32" y="14" width="9" height="9" rx="2" fill="#f26b00" />
            <rect x="35.5" y="23" width="2.5" height="15" fill="#f26b00" />
            <rect x="47" y="14" width="9" height="9" rx="2" fill="#1de9b6" />
            <rect x="50.5" y="23" width="2.5" height="15" fill="#1de9b6" />
          </svg>
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, color: "#ffffff", textAlign: "center", lineHeight: 1.15 }}>
          Liceul Tehnologic
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, color: "#ffffff", textAlign: "center", lineHeight: 1.15 }}>
          Turceni
        </div>
        <div style={{ fontSize: 26, color: "rgba(255,255,255,0.75)", marginTop: 28 }}>
          8 profiluri educaționale · 1604 elevi · din 1982
        </div>
      </div>
    ),
    { ...size }
  );
}
