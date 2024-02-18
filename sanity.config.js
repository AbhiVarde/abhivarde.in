import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "abhivarde.dev",

  projectId: "qk37chfp",
  dataset: "production",

  basePath: "/studio",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
