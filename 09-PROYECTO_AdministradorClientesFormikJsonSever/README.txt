* Crear proyecto con vite
  # npm init vite@latest
    -> Ok to proceed? (y): y
    -> Proyect name: crm-react
    -> Select a framework: react
    -> Select a variant: react
  # cp crm-react
  # npm install
  # npm run dev
* Abrir en el navegador: http://localhost:3000/
* Instalar Tailwind CSS
  # npm i autoprefixer postcss tailwindcss
  # npx tailwindcss init -p                   // Crea los archivos de configuracion de Postcss y tailwindcss
  - Realizamos a configuracion de tailwindcss
  - Cancelamos la ejecucion con CTRL + C y volvemos a levantar el servicion con npm run dev
* Instalar React Router
  # npm i react-router-dom
* Instalar Formik
  # npm i formik yup
* Instalar JSON Server
  # npm install -g json-server
  # json-server --watch db.json --port 4000         // Ejecutar la DB de JSON server en el puerto 4000

* Deploy del proyecto
  1. Crear un nuevo repositorio en GitHub y subir el proyecto al repositorio.
  2. Ir a la pagina de My Json Server https://my-json-server.typicode.com/
    * Reemplazar el user y repo por el de GitHub y revisamos el resultado en el browser
      https://my-json-server.typicode.com/user/repo/posts/1
      https://my-json-server.typicode.com/adriayc/administrador-clientes-react/clientes
  3. Crear variables de entorno en Vite (.local es ignorado por git)
    * Crear el archivo .env en la raiz del proyecto y agregar las variables de entorno (debe iniciar con VITE_[NOMBRE_VARIABLE]).
    * Es recomendable reiniciar el servidor del proyecto en LOCAL.
  4. Probar modo desarrollo
    * # npm run build       // construye el build de produccion
    * # npm run previow     // Ejecutar modo produccion
    * Abrir en el navegador la url http://localhost:4173
