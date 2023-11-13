import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/bin.ts"],
  format: ["cjs", "esm"],
  splitting: false,
  sourcemap: true,
  minify: true,
  platform: "node",
  clean: true,
  dts: true,
  tsconfig: "tsconfig.json",
});
