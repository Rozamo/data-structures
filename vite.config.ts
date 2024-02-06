import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "./lib/main.ts",
      name: "data-structures",
      fileName: "Data Structures",
    },
  },
  plugins: [
    dts({
      include: "lib",
      insertTypesEntry: true,
    }),
  ],
});
