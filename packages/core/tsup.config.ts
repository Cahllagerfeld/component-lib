import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/tailwind-plugin.ts"],
  treeshake: true,
  format: ["cjs", "esm"],
  minify: true,
  dts: true,
});
