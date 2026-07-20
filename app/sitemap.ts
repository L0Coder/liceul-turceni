import type { MetadataRoute } from "next";

const BASE = "https://liceul-turceni.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1.0, freq: "weekly" as const },
    { path: "/despre", priority: 0.8, freq: "monthly" as const },
    { path: "/oferta", priority: 0.9, freq: "monthly" as const },
    { path: "/compara", priority: 0.7, freq: "monthly" as const },
    { path: "/admitere", priority: 0.9, freq: "weekly" as const },
    { path: "/viitori-elevi", priority: 0.9, freq: "monthly" as const },
    { path: "/elevi", priority: 0.7, freq: "monthly" as const },
    { path: "/parinti", priority: 0.7, freq: "monthly" as const },
    { path: "/pentru-profesori", priority: 0.5, freq: "monthly" as const },
    { path: "/noutati", priority: 0.8, freq: "daily" as const },
    { path: "/blog", priority: 0.6, freq: "weekly" as const },
    { path: "/examene", priority: 0.8, freq: "weekly" as const },
    { path: "/calendar", priority: 0.7, freq: "weekly" as const },
    { path: "/galerie", priority: 0.5, freq: "weekly" as const },
    { path: "/faq", priority: 0.7, freq: "monthly" as const },
    { path: "/profesori", priority: 0.6, freq: "monthly" as const },
    { path: "/transparenta", priority: 0.7, freq: "weekly" as const },
    { path: "/contact", priority: 0.8, freq: "yearly" as const },
    { path: "/gdpr", priority: 0.3, freq: "yearly" as const },
    { path: "/cookies", priority: 0.3, freq: "yearly" as const },
    { path: "/accesibilitate", priority: 0.3, freq: "yearly" as const },
  ];

  return pages.map((p) => ({
    url: `${BASE}${p.path}`,
    lastModified: new Date(),
    changeFrequency: p.freq,
    priority: p.priority,
  }));
}
