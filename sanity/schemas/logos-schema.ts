import { defineType } from "sanity";

export const logosSchema = defineType({
  name: "logos",
  title: "Logos",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nom",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
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
  ],
});
