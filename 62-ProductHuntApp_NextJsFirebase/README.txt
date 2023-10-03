* Creando la app
  # npx create-next-app producthuntnext         // New version
      > Ok to proceed? (y): y
      > ? Would you like to use TypeScript? > No / Yes: No
      > ? Would you like to use ESLint? > No / Yes: Yes
      > ? Would you like to use Tailwind CSS? > No / Yes: No
      > ? Would you like to use 'src/' directory? > No / Yes: No
      > ? Would you like to use App Router? (recommended) > No / Yes: Yes
      > ? Would you like to customize the default import alias? > No / Yes: No
  # cd producthuntnext
  # npm run dev

  # npx create-next-app@12 producthuntnext && cd producthuntnext && npm i next@12     // Old version (Our project)
  # cd producthuntnext
  # npm run dev
  - Abrir en el navegador: http://localhost:3000/

  * Instalar dependencias
    + Emotion (Styled components)
      # npm install @emotion/core @emotion/styled babel-plugin-emotion @emotion/babel-preset-css-prop

* Creando la app en Firebase
  - Ir al sitio web: https://firebase.google.com/
  - Iniciar session y click en 'Ir a la consola'
  - Click en 'Agregar proyecto'
    + Ingresar el nombre del proyecto: Product Hunt
      > Marcar la casilla de verificación y click en el boton 'Continuar'
    + Deshabilitar Google Analitics para el proyecto y click en el boton 'Continuar'

* Habilitar Autenticación en Firebase
  - Ir al proyecto creado
  - Desplegar 'Compilacion' y click en 'Autentication'
  - Click en el boton 'Comenzar'
  - Elegir el metodo de acceso 'Correo electrónico/constraseña'
    > Habilitar 'Correo electrónico/contraseña'
    > Dejar por defecto deshabilitado 'Vinculo de correo electrónico (acceso sin contraseñá)'
    > Click en 'Guardar'

* Agregar Firebase a la App
  - Ir a al proyecto creado
  - Seleccionar 'Web'
  - Agregar Firebase a tu aplicacion web
    > Dejamos por defecto deshabilitado 'Ademas, configurar Firebase Hosting para esta app'
    > Click 'Registrar app'
    > Generar el SDK de Firebase

  - Instalar dependecia de firebase
    // New version
    # npm install firebase
    # npm install firebase-admin
    // Old version
    # npm install firebase@8.*
    # npm install firebase-admin@8.*

* Creanr la Base de Datos en Firebase
  - Ir al proyecto creado
  - Desplegar 'Compilación' y click en 'Firestore Database'
  - Click en 'Crear base de datos'
    > Seleccionar 'Comenzar en modo de prueba' y click en 'Siguiente'
    > Seleccionar todo por defecto y click en 'Habilitar'

* Instalar dependencias para subir archivos a Firebase
  # npm i react-firebase-file-uploader
  # npm i react-firebase-file-uploader --legacy-peer-deps

* Habilitar Storage de firebase
 - Ir al proyecto creado
 - Desplegar 'Compilación' y click en 'Storage'
 - Click en 'Comenzar'
  > Seleccionar 'Comenzar en modo de prueba' y click en 'Siguiente'
  > Seleccinar la configuracion por defecto y click en 'Listo'
