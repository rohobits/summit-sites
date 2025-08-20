// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  // If a CNAME file exists, we’re using a custom domain -> base "/"
  // Otherwise assume GitHub Pages repo path -> base "/summit-sites/"
  const hasCNAME = fs.existsSync(path.resolve(__dirname, "public/CNAME"));
  const base = hasCNAME ? "/" : "/summit-sites/";

  return {
    base,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        input: path.resolve(__dirname, "index.html"),
      },
    },
  };
});
