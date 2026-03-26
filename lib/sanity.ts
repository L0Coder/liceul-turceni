import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { sanityConfig } from "@/sanity/env";

export function isSanityConfigured() {
  return sanityConfig.projectId !== "not-configured" && sanityConfig.projectId.length > 3;
}

function getClient() {
  if (!isSanityConfigured()) return null;
  return createClient({
    projectId: sanityConfig.projectId,
    dataset: sanityConfig.dataset,
    apiVersion: sanityConfig.apiVersion,
    useCdn: sanityConfig.useCdn,
  });
}

export function urlFor(source: any) {
  const c = getClient();
  if (!c) return null;
  return imageUrlBuilder(c).image(source);
}

function query(groq: string, params?: Record<string, any>) {
  const c = getClient();
  if (!c) throw new Error("Sanity not configured");
  return c.fetch(groq, params);
}

export async function getNoutati(limit = 20) {
  return query(`*[_type == "noutate" && archived != true] | order(date desc) [0...$limit] { _id, title, "slug": slug.current, category, date, excerpt, content, "imageUrl": image.asset->url }`, { limit });
}
export async function getDocumente() {
  return query(`*[_type == "documentOficial"] | order(date desc) { _id, title, category, date, description, "fileUrl": fisier.asset->url }`);
}
export async function getEvenimente() {
  return query(`*[_type == "eveniment"] | order(date asc) { _id, title, date, type, description }`);
}
export async function getArticole() {
  return query(`*[_type == "articol"] | order(date desc) { _id, title, "slug": slug.current, author, authorRole, date, category, excerpt, content, "imageUrl": image.asset->url }`);
}
export async function getGalerie() {
  return query(`*[_type == "galerieItem"] | order(category asc, _createdAt desc) { _id, title, category, "imageUrl": image.asset->url, date }`);
}
export async function getProfesori() {
  return query(`*[_type == "profesor"] | order(role asc, name asc) { _id, name, role, catedra, description, "imageUrl": image.asset->url }`);
}
export async function getFaq() {
  return query(`*[_type == "faqItem"] | order(order asc) { _id, question, answer, category }`);
}
export async function getSettings() {
  return query(`*[_type == "siteSettings"][0] { eleviCount, cadreCount, profileCount, aniExcelenta, anScolar, perioadaAdmitere }`);
}