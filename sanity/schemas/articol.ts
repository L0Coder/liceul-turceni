import { defineField, defineType } from "sanity";

export default defineType({
  name: "articol",
  title: "Blog — Jurnal LTT",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titlu articol", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug (URL)", type: "slug", options: { source: "title", maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: "author", title: "Autor", type: "string", validation: (r) => r.required() }),
    defineField({ name: "authorRole", title: "Rol autor", type: "string", description: "Ex: Elev clasa a XI-a, Mate-Info" }),
    defineField({ name: "date", title: "Data publicării", type: "date", validation: (r) => r.required() }),
    defineField({
      name: "category", title: "Categorie", type: "string",
      options: { list: [
        { title: "Erasmus+", value: "Erasmus+" },
        { title: "Club Robotică", value: "Club Robotică" },
        { title: "Viața la LTT", value: "Viața la LTT" },
        { title: "Olimpiade", value: "Olimpiade" },
        { title: "Sport", value: "Sport" },
        { title: "Altele", value: "Altele" },
      ]},
    }),
    defineField({ name: "excerpt", title: "Rezumat scurt", type: "text", rows: 2 }),
    defineField({ name: "content", title: "Conținut complet", type: "text", rows: 20, description: "Separați paragrafele cu o linie goală." }),
    defineField({ name: "image", title: "Imagine principală", type: "image", options: { hotspot: true } }),
  ],
  preview: {
    select: { title: "title", subtitle: "author", media: "image" },
  },
});
