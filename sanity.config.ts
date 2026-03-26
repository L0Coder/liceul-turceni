"use client";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";
import { sanityConfig } from "./sanity/env";

export default defineConfig({
  name: "liceul-turceni-studio",
  title: "LTT — Panou administrare",
  basePath: "/studio",

  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Conținut")
          .items([
            S.listItem()
              .title("Noutăți & Anunțuri")
              .schemaType("noutate")
              .child(S.documentTypeList("noutate").title("Noutăți")),
            S.listItem()
              .title("Documente oficiale")
              .schemaType("documentOficial")
              .child(S.documentTypeList("documentOficial").title("Documente")),
            S.listItem()
              .title("Evenimente calendar")
              .schemaType("eveniment")
              .child(S.documentTypeList("eveniment").title("Evenimente")),
            S.listItem()
              .title("Blog — Jurnal LTT")
              .schemaType("articol")
              .child(S.documentTypeList("articol").title("Articole")),
            S.listItem()
              .title("Galerie foto")
              .schemaType("galerieItem")
              .child(S.documentTypeList("galerieItem").title("Fotografii")),
            S.listItem()
              .title("Cadre didactice")
              .schemaType("profesor")
              .child(S.documentTypeList("profesor").title("Profesori")),
            S.listItem()
              .title("FAQ — Întrebări frecvente")
              .schemaType("faqItem")
              .child(S.documentTypeList("faqItem").title("FAQ")),
            S.divider(),
            S.listItem()
              .title("Setări site")
              .schemaType("siteSettings")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
