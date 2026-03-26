// Configurare centrală Sanity — folosită de studio și client
// Valorile reale se pun în .env.local

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "PROIECT_ID_AICI",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  // useCdn: true pentru performanță, false pentru date în timp real
  useCdn: process.env.NODE_ENV === "production",
};
