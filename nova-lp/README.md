# Nova LP (Blanch)

Código espelhado do repositório **[joyful-sales-engine](https://github.com/MikaellyMota/joyful-sales-engine)** (Lovable). Ajustes para publicar no site Blanch em **`/3tecnicas/`**:

- `vite.config.ts`: `base: "/3tecnicas/"` e build em `../3tecnicas`
- `App.tsx`: `BrowserRouter basename="/3tecnicas"`

## Desenvolvimento

```bash
cd nova-lp
npm install
npm run dev
```

- Use **`http://localhost:8080/3tecnicas/`** (com `/3tecnicas/` no fim). Só `http://localhost:8080/` redireciona para lá no dev.
- Se abrir em branco: confira o console (F12) e use **`http://127.0.0.1:8080/3tecnicas/`** se `localhost` falhar.

A pasta **`3tecnicas/`** na raiz do repositório (saída do build) precisa estar **no Git** e no deploy (Vercel). A URL pública é **`https://www.theblanch.com/3tecnicas/`**.

## Build (atualiza a pasta estática `../3tecnicas/`)

Na raiz do repo:

```bash
npm run build
```

Ou em `nova-lp`: `npm run build`.

Quem tiver links antigos em **`/nova/`**, a Vercel redireciona para **`/3tecnicas/`**.
