# REACT - LA GUÍA COMPLETA: HOOKS CONTEXT REDUX MERN +15 APPS
> Juan Pablo De la torre Valdez

## Que es React?
- React te ayuda a crear interfaces de usuario interactivas de forma sencilla.
- React se encarga de Actualizar y Renderizar de manera eficiente los componentes de tu aplicacion.
- Esta basado en Componentes.
- Crado por Meta (Antes Facebook).

### Que son los Componentes?
- En React podrás ordenar y separar la funcionalidad de tus proyectos por medio de componentes.
- Los componentes son funciones en JS, pero se les puede agregar algunas de las características de React como el State o Estado para hacerlos interactivos.

### Que necesitas para Aprender React?
- Conocer la sintaxis Moderna de JavaScript (ES6).
- Conocimiento Básicos de HTML y CSS.

## Herramientas para Crear Apps en React
Existen muchas formas de crear una app en React, incluso tu puedes crear tu propio ambiente de desarrollo con herramientas como Babel, Parcel, Webpack.

Pero también existe una gran cantidad de herramientas ya disponibles para crear aplicacines en React.

### Ventajas de Utilizar (Una herramienta ya existente)
La mayoría de Herramientas ya existentes para crear aplicaciones en React son estables y siguen un enfoque muy claro: No tener que preocuparse por la configuracion.

Cada una de estas herramientas va desde básicos hasta avanzados.

Requieren tener instalado Node.js (NPM) o YARN.

- Create React App (creada por META, ya no tiene mucho soporte)
- Vite (creada por VUE.js)
- GatsbyJS
- Next.js
- BlitzJS
- Remix Run
- Hydrogen (de Shopify)

## Instalar Node.js y NPM en Linux
Instalar [node.js](https://nodejs.org/en/)

```bash
# node -v               // Muestra la version de node
# npm -v                // Muestra la version de npm
```

## Crear una App React con Vite
```bash
# npm init vite@latest              // Inicializar la app react
# cd citas-react
# npm install                       // Instalar las dependencias
# npm run dev                       // Ejecutar la app react
```

## Que es JSX?
JavaScript Syntax Extension - Es una extensión del lenguaje desarrollada por Meta para React.

Parece JS pero muestra código de HTML, y básicamente es un lenguaje de Template que muestra el HTML pero tiene todas las funciones de JavaScript.

Una vez compilado son archivos JS con funciones y objetos.

### Reglas en JSX
- A diferencia de HTML, que no es estrict, en JSX si un elemento HTML tiene una etiqueta de apertura deberás tener también la de cierre.
- Las etiquetas de solo apertura como <link>, <img> o <input> deberán finalizar con />.
- Cada componente debe tener un return.
- En este return debe haber máximo un solo elemento en el nivel máximo.

## Formas de Escribir Codigo CSS en React
Hay muchas opciones, incluso algunas librerías te ofrecen componentes que puedes personalizar.
- CSS Plano
- Framework CSS
- Módulos CSS
- Componentes
- SASS
- Styled Components
