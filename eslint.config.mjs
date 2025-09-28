import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"
import storybook from "eslint-plugin-storybook";

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
})

const eslintConfig = [
  ...compat.extends("next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "next-env.d.ts",
    ],
  },
  ...storybook.configs["flat/recommended"]
]

export default eslintConfig
