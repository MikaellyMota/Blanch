import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import { Toaster } from "@/components/ui/sonner";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mapa Numerológico — Código do Seu Nome | Destrave Sua Vida" },
      { name: "description", content: "Descubra o padrão invisível no seu nome que pode estar travando seu dinheiro, suas decisões e sua clareza. Mapa Numerológico personalizado." },
      { name: "author", content: "Mapa Numerológico" },
      { property: "og:title", content: "Mapa Numerológico — Código do Seu Nome | Destrave Sua Vida" },
      { property: "og:description", content: "Descubra o padrão invisível no seu nome que pode estar travando seu dinheiro, suas decisões e sua clareza. Mapa Numerológico personalizado." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Mapa Numerológico — Código do Seu Nome | Destrave Sua Vida" },
      { name: "twitter:description", content: "Descubra o padrão invisível no seu nome que pode estar travando seu dinheiro, suas decisões e sua clareza. Mapa Numerológico personalizado." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2156ac44-cc5d-4627-a822-3262c8bc1343/id-preview-5291464b--83a9df65-1986-46af-8189-79f38e61e66f.lovable.app-1776726515528.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2156ac44-cc5d-4627-a822-3262c8bc1343/id-preview-5291464b--83a9df65-1986-46af-8189-79f38e61e66f.lovable.app-1776726515528.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Toaster position="top-center" richColors />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
