import { defineConfig } from "astro/config";
import path from "node:path";

export default defineConfig({
  site: "https://elektromanohr.de",
  server: {
    host: true,
    port: 8080,
  },
  vite: {
    server: {
      strictPort: true,
    },
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});
