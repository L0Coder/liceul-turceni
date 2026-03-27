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
        { title: "ROF — Regulament de organizare și funcționare", value: "rof" },
        { title: "RI — Regulament intern", value: "ri" },
        { title: "PDI — Plan de dezvoltare instituțională", value: "pdi" },
        { title: "Plan managerial anual", value: "plan-managerial" },
        { title: "RAEI — Raport de evaluare internă", value: "raei" },
        { title: "Raport evaluare externă ARACIP", value: "evaluare-aracip" },
        { title: "Raport de activitate anual", value: "raport-activitate" },
        { title: "Execuție bugetară", value: "executie-bugetara" },
        { title: "Buget", value: "buget" },
        { title: "Hotărâri CA", value: "hotarari-ca" },
        { title: "Declarații de avere și interese", value: "declaratii" },
        { title: "Informații publice (Legea 544/2001)", value: "informatii-publice" },
        { title: "GDPR — Protecția datelor", value: "gdpr" },
        { title: "Mobilitate personal didactic", value: "mobilitate" },
        { title: "Organigramă", value: "organigrama" },
        { title: "Cod de etică", value: "cod-etica" },
        { title: "Plan școlarizare", value: "plan-scolarizare" },
        { title: "Proceduri operaționale", value: "proceduri" },
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
