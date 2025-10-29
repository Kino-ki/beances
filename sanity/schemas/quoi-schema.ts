import { defineType } from "sanity";

export const quoiSchema = defineType({
  name: "quoi",
  title: "Quoi",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre de la page",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "author",
      title: "Auteurice",
      type: "string",
    },
    {
      name: "translator",
      title: "Traducteurice",
      type: "string",
    },
    {
      name: "bookimage",
      title: "Image de Couverture",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "authorimage",
      title: "Image de l'auteurice",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "summary",
      title: "Résumé",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "biography",
      title: "Biographie",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
});
