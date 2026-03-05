# Documentacion de Comandos utilizados para uso posterior 

## npm run build

Proposito: Crea un build preparada para produccion de una aplicacion e Next.js.

Necesidades: package.json, postcss, autofixer, tailwind.config.js, input.css.

Produce: output.css

## info: 

tailwind.config.js: Genera un archivo usando npx tailwindcss init (Es importante que la seccion content del archivo apunte a todos  los archivos fuente como HTML, JS,TS, React etc) para que tailwindsea que clases debe incluir en el build final y optimizando produccion.

postcss.config.js: Configura PostCSS para usar a TailwindCSS como plugin.

package.js: Script que le dice a tailwind que archivos de entrada leer y donde guardar el archivo de salida optimizado para produccion.

Archivos CSS dee entrada: Necesita un archivo CSS principal (input.css) que contenga las siguientes directivas:

@tailwind base;
@tailwind components;
@tailwind utilities;
---

## npx tailwindcss -i ./input.css -o ./output.css --watch

Proposito: Carga los plugins de TailwindCSS y regenera el archivo output.css.

Necesidades: La ruta 

Produce: Cambios en la pagina web y en el archivo output.css con el mismo proposito.

## npm run watch-css

Realiza exactamente lo mismo que (npx tailwindcss -i ./input.css -o ./output.css --watch) solo que es un comamndo mas corto. Se pueden verificar los scripts en package.json.

