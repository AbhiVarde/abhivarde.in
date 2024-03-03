import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemaTypes";
import { codeInput } from "@sanity/code-input";

export default defineConfig({
  name: "default",
  title: "abhivarde.dev",

  projectId: "qk37chfp",
  dataset: "production",

  basePath: "/studio",

  plugins: [deskTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
});
