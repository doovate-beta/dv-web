# dv-web
Doovate website

## Cómo cambiar la imagen del primer bloque (Hero)
Coloca tu imagen en la carpeta `static/images/` con el nombre `hero.jpg` (también puede ser `.png`).

Ruta esperada del archivo:
- `static/images/hero.jpg`

La página principal ya referencia esa ruta (`/images/hero.jpg`). Si cambias el nombre, actualiza el `src` en `src/routes/+page.svelte`.

## Colores del navbar
El navbar ahora es blanco con textos oscuros. Si quieres ajustar los colores, edita `src/routes/+layout.svelte`.
