/**
 * Sobe tudo de `../numerologia/client/` para `../numerologia/`, no mesmo sítio que `3tecnicas/`
 * (um único `index.html` + `assets/` na subpasta pública, sem /client/ na URL).
 */
import { cp, readdir, rm, stat } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");
const buildDir = join(projectRoot, "dist-numerologia");
const outRoot = join(projectRoot, "..", "numerologia");
const clientDir = join(buildDir, "client");

async function main() {
  // Builds antigos deixavam `numerologia/client/` e `../numerologia/server` (h3) fora do projeto; só precisamos de index + assets.
  await rm(join(outRoot, "client"), { recursive: true, force: true });
  await rm(join(outRoot, "server"), { recursive: true, force: true });

  const st = await stat(clientDir).catch(() => null);
  if (!st?.isDirectory()) {
    console.warn("[flatten-numerologia] pasta client/ inexistente; nada a fazer.");
    return;
  }
  const names = await readdir(clientDir);
  for (const name of names) {
    const from = join(clientDir, name);
    const to = join(outRoot, name);
    await rm(to, { recursive: true, force: true });
    await cp(from, to, { recursive: true });
  }
  await rm(clientDir, { recursive: true, force: true });
  await rm(buildDir, { recursive: true, force: true });
  console.log("[flatten-numerologia] conteúdo de dist-numerologia/client/ copiado para numerologia/.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
