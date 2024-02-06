import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "./lib/main.ts",
      name: "Data Structures",
      fileName: "data-structures-pack",
    },
  },
  plugins: [
    dts({
      include: "lib",
      exclude: "**/__tests__/**",
      insertTypesEntry: true,
    }),
  ],
});
