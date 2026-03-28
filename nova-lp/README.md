# Destrave Sua Energia (landing React)

Código espelhado do repositório **[joyful-sales-engine](https://github.com/MikaellyMota/joyful-sales-engine)** (Lovable). Ajustes só para publicar no site Blanch em **`/nova/`**:

- `vite.config.ts`: `base: "/nova/"` e build em `../nova`
- `App.tsx`: `BrowserRouter basename="/nova"`

## Desenvolvimento

```bash
cd nova-lp
npm install
npm run dev
```

- Use **`http://localhost:8080/nova/`** (com `/nova/` no fim). Só `http://localhost:8080/` redireciona para lá no dev.
- Se abrir em branco: confira o console (F12) e use **`http://127.0.0.1:8080/nova/`** se `localhost` falhar.

## Produção (theblanch.com)

A pasta **`nova/`** na raiz do repositório precisa estar **no Git** e no deploy (Vercel). A URL é **`https://theblanch.com/nova/`** (ou seu domínio).

## Build (atualiza a pasta estática `../nova/`)

```bash
npm run build
```

Para sincronizar com o GitHub do Lovable, faça pull no repositório `joyful-sales-engine` e copie os ficheiros para cá, ou conecte este monorepo ao fluxo que preferir.
