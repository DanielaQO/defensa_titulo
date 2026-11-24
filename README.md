# Defensa de práctica — presentaciones

Tres presentaciones de la defensa de práctica (temas Tienda, Práctica y Ecommerce) portadas a React + TypeScript + Tailwind en una sola app.

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
- `#/temas` selector de tema
- `#/tienda/inicio` (y el resto de capítulos de Tienda)
- `#/practica`
- `#/ecommerce`

## Estructura

- `src/data/` contenido único compartido por los tres temas
- `src/hooks/` hooks reutilizables (galería, filtro, acordeón, teclado, loader, scroll-spy)
- `src/ui/` componentes visuales compartidos
- `src/themes/{tienda,practica,ecommerce}/` cada tema
