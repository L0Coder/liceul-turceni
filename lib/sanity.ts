import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { sanityConfig } from "@/sanity/env";

// ═══ CLIENT ═══
export const client = createClient({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  apiVersion: sanityConfig.apiVersion,
  useCdn: sanityConfig.useCdn,
});

// ═══ IMAGE URL BUILDER ═══
const builder = imageUrlBuilder(client);
export function urlFor(source: any) {
  return builder.image(source);
}

// ═══ QUERIES ═══

// Noutăți — cele mai recente, nearhivate
export async function getNoutati(limit = 20) {
  return client.fetch(
    `*[_type == "noutate" && archived != true] | order(date desc) [0...$limit] {
      _id, title, "slug": slug.current, category, date, excerpt, content,
      "imageUrl": image.asset->url
    }`,
    { limit }
  );
}

// Documente oficiale
export async function getDocumente() {
  return client.fetch(
    `*[_type == "documentOficial"] | order(date desc) {
      _id, title, category, date, description,
      "fileUrl": fisier.asset->url
    }`
  );
}

// Evenimente calendar
export async function getEvenimente() {
  return client.fetch(
    `*[_type == "eveniment"] | order(date asc) {
      _id, title, date, type, description
    }`
  );
}

// Articole blog
export async function getArticole() {
  return client.fetch(
    `*[_type == "articol"] | order(date desc) {
      _id, title, "slug": slug.current, author, authorRole, date,
      category, excerpt, content, "imageUrl": image.asset->url
    }`
  );
}

// Galerie foto pe categorii
export async function getGalerie() {
  return client.fetch(
    `*[_type == "galerieItem"] | order(category asc, _createdAt desc) {
      _id, title, category, "imageUrl": image.asset->url, date
    }`
  );
}

// Profesori
export async function getProfesori() {
  return client.fetch(
    `*[_type == "profesor"] | order(role asc, name asc) {
      _id, name, role, catedra, description, "imageUrl": image.asset->url
    }`
  );
}

// FAQ
export async function getFaq() {
  return client.fetch(
    `*[_type == "faqItem"] | order(order asc) {
      _id, question, answer, category
    }`
  );
}

// Setări site (singleton)
export async function getSettings() {
  return client.fetch(
    `*[_type == "siteSettings"][0] {
      eleviCount, cadreCount, profileCount, aniExcelenta, anScolar, perioadaAdmitere
    }`
  );
}

// ═══ HELPER: verifică dacă Sanity e configurat ═══
export function isSanityConfigured() {
  return sanityConfig.projectId !== "PROIECT_ID_AICI" && sanityConfig.projectId.length > 0;
}
