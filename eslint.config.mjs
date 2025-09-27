import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

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
]

export default eslintConfig
