import { defineField, defineType } from "sanity";

export default defineType({
  name: "noutate",
  title: "Noutăți & Anunțuri",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titlu", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug (URL)", type: "slug", options: { source: "title", maxLength: 96 }, validation: (r) => r.required() }),
    defineField({
      name: "category", title: "Categorie", type: "string",
      options: { list: [
        { title: "Admitere", value: "Admitere" },
        { title: "Eveniment", value: "Eveniment" },
        { title: "Examen", value: "Examen" },
        { title: "Proiect", value: "Proiect" },
        { title: "Olimpiadă", value: "Olimpiadă" },
        { title: "Activitate", value: "Activitate" },
        { title: "Anunț", value: "Anunț" },
      ]},
      validation: (r) => r.required(),
    }),
    defineField({ name: "date", title: "Data publicării", type: "date", validation: (r) => r.required() }),
    defineField({ name: "excerpt", title: "Rezumat scurt (1-2 propoziții)", type: "text", rows: 2 }),
    defineField({ name: "content", title: "Conținut complet", type: "text", rows: 10 }),
    defineField({ name: "image", title: "Imagine", type: "image", options: { hotspot: true } }),
    defineField({
      name: "archived", title: "Arhivat", type: "boolean", initialValue: false,
      description: "Anunțurile arhivate nu apar pe pagina principală, dar rămân accesibile.",
    }),
  ],
  orderings: [{ title: "Data (recent)", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
  preview: {
    select: { title: "title", subtitle: "category", media: "image" },
  },
});
