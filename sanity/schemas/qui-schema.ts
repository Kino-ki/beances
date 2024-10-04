import { defineType } from "sanity";

const quiSchema = defineType({
  name: "qui",
  title: "Qui",
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
      name: "text",
      title: "Text",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
});

export default quiSchema;
