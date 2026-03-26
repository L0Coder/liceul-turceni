import { defineField, defineType } from "sanity";

export default defineType({
  name: "documentOficial",
  title: "Documente oficiale",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titlu document", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "category", title: "Categorie", type: "string",
      options: { list: [
        { title: "Regulament", value: "regulament" },
        { title: "Hotărâri CA", value: "hotarari-ca" },
        { title: "Declarații de interese", value: "declaratii" },
        { title: "Informații publice", value: "informatii-publice" },
        { title: "GDPR", value: "gdpr" },
        { title: "Mobilitate personal", value: "mobilitate" },
        { title: "Organigramă", value: "organigrama" },
        { title: "RAEI", value: "raei" },
        { title: "Buget", value: "buget" },
        { title: "Cod de etică", value: "cod-etica" },
        { title: "Altele", value: "altele" },
      ]},
    }),
    defineField({ name: "fisier", title: "Fișier PDF", type: "file", options: { accept: ".pdf,.doc,.docx" } }),
    defineField({ name: "date", title: "Data documentului", type: "date" }),
    defineField({ name: "description", title: "Descriere scurtă", type: "text", rows: 2 }),
  ],
  orderings: [{ title: "Data (recent)", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
  preview: {
    select: { title: "title", subtitle: "category" },
    prepare({ title, subtitle }) { return { title, subtitle: subtitle || "Necategorizat" }; },
  },
});
