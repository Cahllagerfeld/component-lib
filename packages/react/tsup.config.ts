import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  treeshake: true,
  external: ["react"],
  format: ["cjs", "esm"],
  minify: true,
  dts: true,
});
