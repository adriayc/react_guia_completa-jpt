* Crear una app Next.js
    # npx create-next-app@latest
        Ok to proceed? (y) y
        ? What is your project named? quioscoapp
    # cd quioscoapp
    # npm run dev

* Instalar Tailwind CSS
    # npm install -D tailwindcss postcss autoprefixer         // Modo desarrollo
    # npx tailwindcss init -p           // Generar los archivos de configuracion postcss y tailwind
    # npx tailwindcss init              // Genera el archivo de configuracion de tailwind

* Crear una nueva base de datos (Terminal)
    # mysql -u root -p
      Enter password: password
      > create database quioscoapp

* Instalar Prisma
    # npm install -D prisma               // Dependencia de desarrollo
    # npm install @prisma/client          // Dependencia de produccion (permite interactuar con la DB)
    # npx prisma init                     // Crea los archivos de configuracion de prisma

* Ejecutar una migracion en Prisma
    - Detener y ejecutar el servidor
    # npx prisma migrate dev
      ? Enter a name for the new migration: categorias y productos
    # npx prisma migrate reset            // Reset DB
    # npx prisma studio                   // Abre una ventana para visualizar los datos

* Instalar ts-node
    # npm install ts-node                 // Node con soporte a TS
    # npx prisma db seed                  // Ejecutar el script de DB de la migration

* Instalar axios
    # npm install axios

* Instalar react-modal
    # npm i react-modal

* Instalar react-toastify (Alertas)
    # npm i react-toastify
