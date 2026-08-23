import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Setări site",
  type: "document",
  fields: [
    defineField({ name: "eleviCount", title: "Număr elevi", type: "number", initialValue: 1604 }),
    defineField({ name: "cadreCount", title: "Număr cadre didactice", type: "number", initialValue: 155 }),
    defineField({ name: "profileCount", title: "Număr profiluri", type: "number", initialValue: 8 }),
  ],
  preview: {
    prepare() { return { title: "Setări site" }; },
  },
});
