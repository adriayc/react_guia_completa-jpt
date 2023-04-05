* Crear el proyecto BACKEND
    - Inicializar la app
        # npm init
            > packege name: (backend) ENTER
            > versión: (1.0.0) ENTER
            > description: Aprendiendo MERN stack
            > entry point: (index.js) ENTER
            > test command: ENTER
            > git repository: ENTER
            > keywords: MERN Node
            > author: Adriano Ayala
            > license: (ISC) ENTER
            Is this OK? (yes) yes

    - Instalar express
        # npm i express

    - Ejecutar la app
        # npm run dev
        # npm run start | npm start

    - Instalar nodemon
        # npm i -D nodemon      // Dependencia de desarrollo

    - Crear una DB en mongoDB (URL: https://www.mongodb.com/)
        > Database -> Clic "Build a Database" -> FREE - Clic "Create" -> FREE Shared - Clic "Create Cluster"
            -> "Username and Password" and Edit user root
                - Actualizar Password
            -> Clic "Finish and Close" y Clic "Go to Databases"

        > Clic "Connect" -> "Connect using MongoDB Compass"
            - Error de conection -> Security - Network Access -> Clic "+ ADD IP ADDRESS" -> Clic "ALLOW ACCESS FROM ANYWHERE"

        > Clic "Connect" -> "Connect your application" y copiar la URL de conexion a la DB

    - Instalar mongoose
        # npm i mongoose

    - Instalar dotenv (Variables de entorno)
        # npm i dotenv

    - Uso de Postman
        > Collections -> "+" | ["New" -> Collection] y agregarle un nombre -> 'Add a request' | '+' (Agregar nuevas solicitudes)
            - Enviar datos (POST):
                > Body -> 'Row' & 'JSON'
                    {
                        "nombre": "Adriano",
                        "password": "adriano123",
                        "correo": "adriano@correo.com"
                    }

        > Enviroments -> "Name Enviroment" (Crear un nuevo Ambiente)
            - Collections ->"No Enviroment" ^ (Seleccionar el Ambiente)
            - Click "Icono Ojo" -> "Enviroment Name" - Edit (Agrega una variable)
              Select URL "Set as variable" -> "Set as a new variable"
                + Name: API_URL
                + Value: http://localhost:4000
                + Scope: Select our enviroment (UpTask_MERM)

        > "..." (Click en el icono de la coleccion) -> Export (Exportar los request)

    - Uso MongoDB Compass
        - Ctrl + R | Boton de actualizar - Actualizar los datos

    - Instalar bcrypt
        # npm i bcrypt

    - Instalar jsonwebtoken
        # npm i jsonwebtoken

    - Instalar CORS
        # npm i cors

    - Instalar Nodemailer
        # npm install nodemailer

        * Configurar Mailtrap
        > Home -> "Setup Inbox" -> "Add Inbox" -> Click name o Edit Settings -> "SMTP Settings'
            - Integrations: Nodemailer (Node.js)

    - Instalar Socket.io
        # npm install socket.io

* Crear el proyecto FRONTEND
    - crear la app con Vite
        # npm create vite@latest
            ? Ok to proceed? (y) y
            ? Proyect name: fronted
            > React
            > JavaScript
        # cd frontend
        # npm install
        # npm run dev

    - Instalar dependecias
        # npm install axios              // Axios
        # npm install react-router-dom   // React Router Dom

    - Instalar TailwindCSS
        # npm install -D tailwindcss postcss autoprefixer
        # npx tailwindcss init -p

    - Instalar Headless UI
        # npm install @headlessui/react

    - Instalar Socket.io
        # npm install socket.io-client

* Deployamos la app MERN UpTask
  - Backend:
    + Subir la app al repositorio de GitHub
    + Deploy de la app (backend) a Heroku
      -> Instalar Heroku CLI
        - Iniciar Sesion con heroku CLI
          # heroku login
        - Crear una app en blanco
          # heroku create
        - Sincronizar el repositorio con heroku
          # git push heroku main
      -> 'Open' para ejecutar la app
      -> 'More' / 'View Logs' para visualizar los logs de la app
      -> 'Settings' / 'Reveal Config Vars' para visualizar los variables de entorno
      -> Instalar openssl y generar un codigo random aleatorio
        # sudo apt install openssl -y
        # openssl rand -base64 32

  - Frontend:
    + Subir la app al repositorio de github
