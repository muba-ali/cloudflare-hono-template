import { processAnnotations } from "astro/runtime/client/dev-toolbar/apps/audit/annotations.js"
import eslintPluginAstro from "eslint-plugin-astro"

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["*.astro", "*.ts", "*.tsx"],
    processor: "astro/client-side-ts",
    rules: {},
  },
]