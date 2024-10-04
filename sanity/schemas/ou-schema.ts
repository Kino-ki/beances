import { defineType } from "sanity";

export const ouSchema = defineType({
  name: "ou",
  title: "Ou",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Titre de la page",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "paperdiffusion",
      title: "Titre diffusion papier",
      type: "string",
    },
    {
        name: "paperdescription",
        title: "Text Version Papier",
        type: "array",
        of: [{ type: "block" }],
      },
    {
      name: "webdiffusion",
      title: "Titre diffusion web",
      type: "string",
    },
    {
        name: "webdescription",
        title: "Text Version Web",
        type: "array",
        of: [{ type: "block" }],
      },
  ],
});
