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
        