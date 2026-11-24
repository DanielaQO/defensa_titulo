import { createHash } from 'node:crypto';
import { mkdirSync, readdirSync, readFileSync, renameSync } from 'node:fs';
import { join } from 'node:path';
import { defineConfig, type Plugin } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Las imágenes viven en public/assets y el código las nombra "assets/...".
// Al reemplazar una imagen con el mismo nombre, el navegador seguía mostrando la copia
// guardada. En el build se publican en "img/<huella>/", donde la huella cambia cuando
// cambia cualquier imagen, así el navegador siempre descarga las nuevas.
function versionedAssets(): Plugin {
  const pub = 'public/assets';
  const files = readdirSync(pub);
  const h = createHash('sha1');
  for (const f of files.sort()) h.update(f).update(readFileSync(join(pub, f)));
  const dir = `img/${h.digest('hex').slice(0, 10)}`;
  let outDir = 'dist';
  return {
    name: 'versioned-assets',
    apply: 'build',
    configResolved(c) { outDir = c.build.outDir; },
    transform(code, id) {
      if (!/\/src\/.*\.tsx?$/.test(id)) return null;
      return code.replace(/(['"`])assets\//g, `$1${dir}/`);
    },
    closeBundle() {
      mkdirSync(join(outDir, dir), { recursive: true });
      for (const f of files) renameSync(join(outDir, 'assets', f), join(outDir, dir, f));
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), versionedAssets()],
  test: { environment: 'jsdom' },
});
