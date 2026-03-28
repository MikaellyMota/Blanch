import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig(() => ({
  base: "/3tecnicas/",
  server: {
    host: "::",
    port: 8080,
    /** Abre direto em /3tecnicas/ (sem isso a raiz fica em branco) */
    open: "/3tecnicas/",
    hmr: {
      overlay: false,
    },
  },
  /** No dev, quem abre só http://localhost:8080/ cai na landing */
  plugins: [
    react(),
    {
      name: "redirect-root-to-3tecnicas",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url?.split("?")[0] ?? "";
          if (url === "/" || url === "/index.html") {
            res.statusCode = 302;
            res.setHeader("Location", "/3tecnicas/");
            res.end();
            return;
          }
          next();
        });
      },
    },
  ].filter(Boolean) as import("vite").PluginOption[],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  build: {
    outDir: path.resolve(__dirname, "../3tecnicas"),
    emptyOutDir: true,
  },
}));
