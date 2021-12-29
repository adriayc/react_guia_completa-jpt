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

## Instalando TailwindCSS
[Tailwind CSS](https://tailwindcss.com/)
```bash
# npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
# npx tailwindcss init -p
```

## Que son los React Hooks o Hooks?
React cuenta con una API muy sencilla que te permite crear todo tipo de aplicaciones por medio de algo llamado Hooks.

Los Hooks están disponibles desde la versión 16.8, previo a ello se tenía que crear clases para crear y modificar el state, con los Hooks no es necesario.

Los Hooks se dividen en Básicos y Adicionales.

### Categorías de Hooks
Los básicos:
- useState
- useEffect
- useContext

Los Adicionales:
- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandler
- useLayoutEffect
- useDebugValue

### Crear tus propios Hoooks
También es posible crear tus propios Hooks, de esta forma podrás separar tus código en funciones reutilizables y sacar todo el beneficio de lo que React ofrece.

#### Que es el State o Estado en React? (La Pieza Central de React)
El State o Estado es básicamente eso; cuál es el estado de nuestra aplicacion.

El Estado es una variable con información relevante en nuestra aplicación de React, algunas veces el state pertenece a un componente en especifico o algunas veces deseas compartirlo a lo largo de diferentes componentes.

El state es creado con la función useState();

```react
import { useState } from "react";

const [cliente, setCliente] = useState({});
const [total, setTotal] = useState(0);
const [cliente, setCliente] = useState([]);
const [modal, setModal] = useState(false);
```

Rect reacciona en base al State.

Cada que tu state cambia, tu aplicación de React va a renderizar y actualizarse con esos cambios.

Para modificar el state, se utiliza la función que extraemos cuando declaramos el stae en nuestro componente.

#### Reglas de los Hooks
Los Hooks se colocan en la parte superior de tus componentes de React.

No se deben colocar dentro de condicionales, tampoco después de un return.

### Eventos en React
La forma en que React maneja los eventos es muy similar a como lo hace JavaScript de forma nativa con algunos cambios.

Los eventos son camelCase, es decir en lugar de onchange se utiliza onChange, en lugar de onclick se utiliza onClick.

También a diferencia de JS y HTML, donde se coloca el nombre de la función en un string en React (JSX) se utiliza la función.

```react
<button onClick={ descargarPedidos() }>Descargar Pedidos</button>
```

```react
<form onSubmit={ handleSubmit }>
  <button type="submit">Añadir Cliente</button>
</form>
