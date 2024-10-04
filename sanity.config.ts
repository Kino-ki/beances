import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "4dflma1g",
  dataset: "production",
  title: "beances",
  apiVersion: "2024-10-04",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
});

export default config;
