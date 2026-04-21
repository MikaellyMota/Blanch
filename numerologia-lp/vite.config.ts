// @lovable.dev/vite-tanstack-config — ver comentário no pacote sobre plugins.
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Deploy em theblanch.com/numerologia/ — base igual ao /3tecnicas/. */
export default defineConfig({
  /** Sem Worker Cloudflare: gera cliente estático (SPA) para o mesmo hosting da home. */
  cloudflare: false,
  /** Gera `index.html` no client (prerender) para static hosting. */
  tanstackStart: {
    router: { basepath: "/numerologia" },
    prerender: { enabled: true },
  },
  vite: {
    base: "/numerologia/",
    server: {
      port: 8081,
      open: "/numerologia/",
      hmr: { overlay: false },
    },
    plugins: [
      {
        name: "redirect-root-to-numerologia",
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const url = req.url?.split("?")[0] ?? "";
            if (url === "/" || url === "/index.html") {
              res.statusCode = 302;
              res.setHeader("Location", "/numerologia/");
              res.end();
              return;
            }
            next();
          });
        },
      },
    ],
    // Dentro do projeto: prerender + preview importam o bundle server; node_modules fica acessível.
    // O script `scripts/flatten-numerologia.mjs` copia o resultado final para `../numerologia/`.
    build: {
      outDir: path.resolve(__dirname, "dist-numerologia"),
      emptyOutDir: true,
    },
  },
});
