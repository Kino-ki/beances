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
      of: [
        {
          type: "block",
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Pink", value: "pink" },
              { title: "Purple", value: "purple" },
              { title: "Blue", value: "blue" },
            ],
          },
        },
      ],
    },
  ],
});

export default quiSchema;
