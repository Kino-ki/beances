import { defineType } from "sanity";

export const alloSchema = defineType({
  name: "allo",
  title: "Allo",
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
      name: "firsttext",
      title: "Premier Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "secondtext",
      title: "Second Text",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
});