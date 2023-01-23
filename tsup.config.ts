import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  splitting: false,
  outDir: "dist",
  sourcemap: true,
  clean: true,
});
