import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { projects, planilla } from './projects';
import { people, ceo, deptsOrg } from './people';
import { glPairs, glNew, glOld } from './glasgow';
import { banners, videos } from './media';
import { brands } from './content';
import { GROUPS } from './types';

const pub = (p: string) => resolve(__dirname, '../../public', p);

describe('data', () => {
  it('13 packs de Tienda v2 con ids únicos', () => {
    expect(projects.map((p) => p.id)).toEqual(['four', 'mini', 'van', 'titan', 'gama', 'tozo-h100', 'tozo', 'ads', 'ig', 'rebrand', 'etiqueta', 'manual', 'stickers']);
  });
  it('conteos de imágenes según Tienda v2', () => {
    const n = Object.fromEntries(projects.map((p) => [p.id, p.imgs.length]));
    expect(n).toMatchObject({ four: 8, mini: 9, van: 8, titan: 9, gama: 9, 'tozo-h100': 9, tozo: 9, ads: 4, ig: 9, rebrand: 2, etiqueta: 2, manual: 3, stickers: 3 });
  });
  it('specs terminan con Piezas', () => {
    for (const p of projects) expect(p.specs.at(-1)).toEqual(['Piezas', String(p.imgs.length)]);
  });
  it('grupos válidos', () => {
    for (const p of projects) expect(GROUPS).toContain(p.group);
  });
  it('toda ruta de asset existe en public/', () => {
    const all = [
      planilla,
      ...projects.flatMap((p) => [...p.imgs, p.cover, p.alt]),
      ...people.map((p) => p.photo), ceo.photo, ...deptsOrg.flatMap((d) => d.people.map((p) => p.photo)),
      ...glPairs.flatMap((g) => [g.before, g.after]), ...glNew, ...glOld,
      ...banners.map((b) => b.src), ...videos.map((v) => v.src), ...brands.map((b) => b.img),
    ];
    const missing = all.filter((p) => !existsSync(pub(p)));
    expect(missing).toEqual([]);
  });
});
