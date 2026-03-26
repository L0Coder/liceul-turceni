import { defineField, defineType } from "sanity";

export const profesor = defineType({
  name: "profesor",
  title: "Cadre didactice",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nume complet", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "role", title: "Funcție", type: "string",
      options: { list: [
        { title: "Director", value: "director" },
        { title: "Director adjunct", value: "director-adjunct" },
        { title: "Profesor", value: "profesor" },
        { title: "Maistru instructor", value: "maistru" },
      ]},
    }),
    defineField({ name: "catedra", title: "Catedra", type: "string",
      options: { list: [
        { title: "Matematică și Informatică", value: "mate-info" },
        { title: "Științe ale Naturii", value: "stiinte" },
        { title: "Limbi moderne", value: "limbi" },
        { title: "Discipline tehnice", value: "tehnic" },
        { title: "Limba română", value: "romana" },
        { title: "Istorie și Geografie", value: "isto-geo" },
        { title: "Educație fizică", value: "sport" },
        { title: "Maiștri instructori", value: "maistri" },
      ]},
    }),
    defineField({ name: "image", title: "Fotografie (opțional)", type: "image", options: { hotspot: true } }),
    defineField({ name: "description", title: "Descriere scurtă (opțional)", type: "text", rows: 2 }),
  ],
  preview: {
    select: { title: "name", subtitle: "catedra", media: "image" },
  },
});

export const faqItem = defineType({
  name: "faqItem",
  title: "Întrebări frecvente (FAQ)",
  type: "document",
  fields: [
    defineField({ name: "question", title: "Întrebare", type: "string", validation: (r) => r.required() }),
    defineField({ name: "answer", title: "Răspuns", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({
      name: "category", title: "Categorie", type: "string",
      options: { list: [
        { title: "Admitere", value: "admitere" },
        { title: "Despre școală", value: "scoala" },
        { title: "Examene", value: "examene" },
        { title: "General", value: "general" },
      ]},
      validation: (r) => r.required(),
    }),
    defineField({ name: "order", title: "Ordine afișare", type: "number", initialValue: 0 }),
  ],
  preview: {
    select: { title: "question", subtitle: "category" },
  },
});
