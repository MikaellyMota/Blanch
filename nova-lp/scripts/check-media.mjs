import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mediaDir = path.join(__dirname, "..", "public", "media");
const mp4 = path.join(mediaDir, "IMG_1852.mp4");
const mp4Dup = path.join(mediaDir, "IMG_1852.mp4.mp4");
const mov = path.join(mediaDir, "IMG_1852.MOV");
const movDup = path.join(mediaDir, "IMG_1852.MOV.MOV");

const hasMp4 = fs.existsSync(mp4);
const hasMp4Dup = fs.existsSync(mp4Dup);
const hasMov = fs.existsSync(mov);
const hasMovDup = fs.existsSync(movDup);

if (!hasMp4 && !hasMp4Dup && !hasMov && !hasMovDup) {
  console.error(
    "\n  [vídeo] Nenhum ficheiro encontrado em public/media/\n\n" +
      "  Coloque pelo menos um destes ficheiros:\n" +
      `    ${mp4}\n` +
      `    ${mp4Dup}  (extensão .mp4 duplicada — comum no Windows)\n` +
      `    ${mov}\n` +
      `    ${movDup}\n\n` +
      "  (o mesmo vídeo da página 3tecnicas)\n"
  );
  process.exit(1);
}

if (hasMp4Dup && !hasMp4) {
  console.warn(
    "[vídeo] Encontrado IMG_1852.mp4.mp4 — no Explorador: Ver → Mostrar → Extensões de nome de ficheiro, depois renomeie para IMG_1852.mp4 (um só .mp4)."
  );
}
if (hasMovDup && !hasMov && !hasMp4 && !hasMp4Dup) {
  console.warn(
    "[vídeo] Encontrado IMG_1852.MOV.MOV — renomeie para IMG_1852.MOV ou use IMG_1852.mp4 (melhor no Chrome)."
  );
}

console.log(
  hasMp4
    ? "[vídeo] OK: IMG_1852.mp4"
    : hasMp4Dup
      ? "[vídeo] OK: IMG_1852.mp4.mp4 (ideal: renomear para IMG_1852.mp4)"
      : hasMov
        ? "[vídeo] OK: IMG_1852.MOV (recomendado também ter .mp4 para mais navegadores)"
        : "[vídeo] OK: IMG_1852.MOV.MOV (considere renomear para .mp4 para o Chrome)"
);
