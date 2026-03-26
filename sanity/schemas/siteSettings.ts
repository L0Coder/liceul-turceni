import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Setări site",
  type: "document",
  fields: [
    defineField({ name: "eleviCount", title: "Număr elevi", type: "number", initialValue: 1604 }),
    defineField({ name: "cadreCount", title: "Număr cadre didactice", type: "number", initialValue: 155 }),
    defineField({ name: "profileCount", title: "Număr profile", type: "number", initialValue: 8 }),
    defineField({ name: "aniExcelenta", title: "Ani de excelență", type: "string", initialValue: "60+" }),
    defineField({ name: "anScolar", title: "An școlar curent", type: "string", initialValue: "2025-2026" }),
    defineField({ name: "perioadaAdmitere", title: "Perioada admitere (text scurt)", type: "string", initialValue: "Înscrierile sunt deschise!" }),
  ],
  preview: {
    prepare() { return { title: "Setări site" }; },
  },
});
