1. Crear un proyecto de Next.js
  # npx create-next-app@latest                    // Crear un nuevo proyecto Next.js
    Ok to procced? (Y): y
    ? What is your project named?: guitarla_nextjs
  # cd guitarla_nextjs
  # npm run dev                                   // Ejecutar la aplicacion de Next.js
  Abrimos la url en el navegador http://localhost:3000

2. Estructura de Next.js
  * .next - Cache de los cambios en la app
  * node_modules - Modules de dependencias de la app
  * pages - Archivos para crea diferentes páginas de la app
  * pages/api/hello.js    -> http://localhost:3000/api/hello          - Simular una API para la app (Lo eliminamos para esta app)
  * public - Archivos estaticos del app
  * styles - Archivos de CSS (modulos de CSS y archivos globales de CSS)
  * next.config.ts - Archivo de configuracion para Next.js

3. Crear un proyecto con Strapi (sqlite)
  # npx create-strapi-app@latest          // Crear de la ultima version
  # npx create-strapi-app@3.6.8           // Crear un version especifica
    Ok to procced? (y) y
    ? What would you like to name your project? guitarla_strapi_sqlite
    > Custom (manual settings)
    > sqlite
    ? Filename: ENTER
  # cd guitarla_strapi_sqlite
  # npm run develop                       // Ejecutar la app de Strapi
  * Ir a la siguiente url en el browser: http://localhost:1337/admin
    > Email: adriano.ayala@strapi.com
    > Password: Admin123
