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

4. Crear un proyecto con Strapi (mongodb)
  * Crear una cuanta de mondodb en la siguiente url: https://www.mongodb.com/atlas/database
    - Ir a "Database" -> "Build a Database" -> "FREE" (Create) -> "Create Cluster" (Default)
    - Create Username and Password:
      > Username: strapi
      > Password: strapi123
      - Clic "Create User"
      - Clic "Finish and Close"
    - URL de conexion a la base de datos
      - Ir a "Database" -> "Atlas" -> "Connect" -> "Connect your application"
        URL: mongodb+srv://root:<password>@<HOST>/?retryWrites=true&w=majority
    - Agregar nuestra direccion IP
      - Ver nuestra IP: https://whatismyipaddress.com/es/mi-ip
      - Ir mongodb a "Network Access" -> "+ ADD IP ADDRESS"
        > Access List Entry: COPIAR_DIRECCION_IP
        - Clic "Confirm"

  * Crear un proyecto Strapi (mongodb)
    # npx create-strapi-app@3.6.8 guitarla_strapi_mongodb
    # npx create-strapi-app@3.6.10 guitarla_strapi_mongodb
      Ok to proceed? (y) y
      > Custom (manual settings)
      ? Would you like to use a template? n
      > mongo
      ? Database name: ENTER
      ? Host: cluster0.tpnduwn.mongodb.net
      ? +srv connection: true
      ? Port (It will be ignored if you enable +srv): ENTER
      ? Username: root
      ? Password: root123
      ? Authentication database (Maybe "admin" or blank): admin
      ? Enable SSL connection: y
    # cd guitarla_strapi_mongodb
    # npm run develop
    * Ir a la siguiente url: http://localhost:1337/admin y crear la credenciales de Strapi
      > Email: adriano.ayala@strapi.com
      > Password: Admin123

5. Crear tipos de contenido en Strapi
  * Ir a "Content-Types Builder" -> "+ Create new colletion type"
    > Display name: Blog
    - "Select a field for your collection type" -> "Text"
      > Name: titulo
      > "Short text"
      * Ir "ADVANCED SETTINGS"
       > "Required field"
      > Clic "Finish"
    - Clic "Save"
  * Agregar un nuevo campo -> "Content-Type Builder" -> "Blog" -> "Add another field to this collection type" o "+ Add another field"
    - Clic "Text"
      > Name: resumen
      > "Short text"
      * Ir a "ADVANCED SETTINGS"
        > "Required field"
        > "+ Add another field"       // Agregar mas campos
      > Clic "Finish"
    - Clic "Save"
  * Ir a "Content Manager" -> "Blog" -> "+ Create new entry" -> "Configure the view" para modificar la vista -> "Save" y "Confirm"

6. Crear registros en Strapi
  * Ingresar todos los campos y para finalizar clic en "Save" y "Publish"
  * Moficar los roles para ver la informacion de Strapi
    - Ir a "Settings" -> "USERS & PERMISSIONS PLUGIN" -> "Roles" -> "Public" (Edit Public)
    - "Permission" -> "Blog"
      > fund
      > findOne
      + Clic "Save"
