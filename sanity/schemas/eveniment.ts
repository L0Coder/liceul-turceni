import { defineField, defineType } from "sanity";

export default defineType({
  name: "eveniment",
  title: "Evenimente calendar",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titlu", type: "string", validation: (r) => r.required() }),
    defineField({ name: "date", title: "Data", type: "date", validation: (r) => r.required() }),
    defineField({
      name: "type", title: "Tip eveniment", type: "string",
      options: { list: [
        { title: "Examen", value: "examen" },
        { title: "Eveniment", value: "eveniment" },
        { title: "Vacanță", value: "vacanta" },
        { title: "Administrativ", value: "administrativ" },
        { title: "Competiție", value: "competitie" },
      ]},
      validation: (r) => r.required(),
    }),
    defineField({ name: "description", title: "Descriere (opțional)", type: "text", rows: 2 }),
  ],
  orderings: [{ title: "Data", name: "dateAsc", by: [{ field: "date", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "date" },
  },
});
