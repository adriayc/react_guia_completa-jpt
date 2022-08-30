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
