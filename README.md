# Lista 11 — FIEECS UNI · V7

Sitio React + Vite preparado para Cloudflare Workers.

## Qué incluye esta versión

- Home panorámico de la FIEECS controlado por scroll.
- Mascota colibrí propia de Lista 11 con efecto 3D/turntable, orbitas y reacción al puntero.
- Navegación del Home en formato editorial, sin tarjetas repetitivas.
- Equipo real en una cinta infinita que se desplaza de izquierda a derecha.
- Página de Equipo con la misma cinta y créditos de integrantes.
- Botones angulares y componentes internos con un sistema visual menos genérico.
- Mascota guía en las páginas internas.
- Rutas separadas para Exámenes, Recursos, Propuestas, Participa, Eventos, Equipo y Transparencia.
- Respeto a `prefers-reduced-motion`.

## Desarrollo local

```bash
npm install
npm run dev
```

## Compilar

```bash
npm run build
```

## Cloudflare

Build command:

```text
npm run build
```

Deploy command:

```text
npx wrangler deploy
```

Root directory:

```text
/
```

El archivo `wrangler.jsonc` publica `./dist` como SPA.
