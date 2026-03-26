import { defineField, defineType } from "sanity";

export default defineType({
  name: "galerieItem",
  title: "Galerie foto",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titlu / Descriere", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "category", title: "Categorie", type: "string",
      options: { list: [
        { title: "Laboratoare", value: "laboratoare" },
        { title: "Ateliere", value: "ateliere" },
        { title: "Club Robotică", value: "club-robotica" },
        { title: "Evenimente", value: "evenimente" },
        { title: "Sport", value: "sport" },
        { title: "Erasmus+", value: "erasmus" },
        { title: "Clădire", value: "cladire" },
        { title: "Altele", value: "altele" },
      ]},
      validation: (r) => r.required(),
    }),
    defineField({ name: "image", title: "Fotografie", type: "image", options: { hotspot: true }, validation: (r) => r.required() }),
    defineField({ name: "date", title: "Data fotografiei", type: "date" }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "image" },
  },
});
