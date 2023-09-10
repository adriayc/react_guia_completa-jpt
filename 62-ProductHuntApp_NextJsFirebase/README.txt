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
