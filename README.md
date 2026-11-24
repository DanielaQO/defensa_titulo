# Defensa de práctica — presentación

Presentación de la defensa de práctica (tema Tienda) en React + TypeScript + Tailwind.

Versión publicada: https://danielaqo.github.io/defensa_titulo/

## Uso

```bash
npm install
npm run dev     # servidor de desarrollo
npm test        # tests (Vitest)
npm run build   # build de producción en dist/
```

## Presentar / desplegar

- El build (`dist/`) debe servirse con un servidor estático: `npm run build && npm run preview`, o subir `dist/` a cualquier hosting estático (Netlify, Vercel, GitHub Pages). No funciona abriendo `dist/index.html` con doble clic (file://), porque el navegador bloquea los módulos JS.
- Las fuentes se cargan desde Google Fonts: sin internet se ve con la fuente del sistema. Probar con conexión antes de la defensa.

## Rutas (hash)

- `#/` abre Tienda directo (`#/tienda/inicio`)
- `#/tienda/inicio` (y el resto de capítulos de Tienda)

## Estructura

- `src/data/` contenido de la presentación
- `src/hooks/` hooks reutilizables (galería, filtro, acordeón, teclado)
- `src/ui/` componentes visuales reutilizables
- `src/themes/tienda/` páginas y componentes de la presentación
