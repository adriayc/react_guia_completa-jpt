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
```

### Qué son los Props o Propiedades en React
El State o Funciones que crees en tus componentes, solo estarán disponibles en ese componente.

Una forma de evitar duplicar código y reutilizar esas variables, state o estados y funciones en otros componentes es por medio de Props o Propiedades.

Los Props se pasan del padre al hijo, nunca se pueden pasar del hijo al padre.

Si tienes un state que se va a pasar por diferentes componentes, lo mejor es colocarlo en el archivo principal.

Cada Nivel de Componentes deberá tomar y pasar el Prop hacia otros componentes, tecnologías como Redux o Content evita tener que hacerlo de esta forma.

**Sintaxis**
```react
<Header
  nombreProp={ datos o Funciones }
/>

<Header
  clientes={ clientes }
  admin={ false }
  setCliente={ setCliente }
  titulo="Tienda Virtual"
/>
```

### El Hook useEffect
Después de useState es el más utilizado.

useEffect siempre es un callback, que se ejecuta cuando un state cambia o cuando el componete esta listo.

Es el sustituto de lo que antes era componentDifMount() y componentDidUpdate().

Al ejecutarse automaticamente cuando el componente esta listo, es un excelente lugar para colocar código para consultar un API o LocalStorage.

Debido a que le podemos pasar una dependencia y estar escuchando por los cambios que sucedan en una vaiable, puede actualizar el componente cuando ese cambio suceda.

**Sintaxis**
```react
import { useEffect } from 'react';

useEffect(() => {
    console.log('El componente esta listo');
}, []);  
```

### Deployment de un Proyecto en React
Ejecutar el siguiente comando para construir el build:
```bash
# npm run build                 // Construir los archivos para el deploy
```
Iniciar session en [Netlify](https://www.netlify.com/), vamos a 'Sites' y arrastamos todo el directorio 'dist' generado.

### Deployment por medio de Git
* En Netlify ir a 'Site' y seleccionar 'Import an existing project' y esteblecer la autorizacion de Netfily en GitHub.
* Crear un repositorio en GitHub
  ```bash
  # echo "# citas_react_vite" >> README.md
  # git init
  # git add .
  # git commit -m "Deploy del proyecto citas en react"
  # git branch -M main
  # git remote add origin git@github.com:adriayc/citas_react_vite.git
  # git push -u origin main
  ```
* Elige el repositorio de GitHub, Configuramos el Sitio e Implementamos, y Click en 'Deploy site'.

### Añadiendo Integracion Continua
```bash
# git checkout -b nuevo-header main                     // Crear una rama y cambiarlo
Modificarmos el titulo del header
# git add .                                             // Agregar todos los archivos que tuvieron cambio
# git commit -m "Modificamos el titulo del Header"      // Realizamos el commit con el mensaje
# git checkout main                                     // Regresamos a la rama principal
El encargado acepta o rechaza el PR
# git merge nuevo-Header                                // Merge de una rama a la principal
# git branch -d nuevo-header                            // Eliminar la rama
# git push -u origin main                               // Subir los cambio a GitHub  
```
Para verificar el historial de commits en Netlify ir a 'Deploys'

## Styled Components en React
### Que son los Styled
__Components en React__
En JSX podemos utilizar HTML con expresiones JavaScript, pero también es posible crear un elemento HTML con la sintaxis de un componente y añadir propiedades CSS.

En lugar de utilizar una hoja de estilos o una librería externa, se escribe el código CSS en cada componente (CSS en JS).

### Ventajas de Styled Components en React
Al dejar de utilizar un componente, podemos eliminar su código CSS también, a diferencia de una hoja de esitlos global.

Sigues teniendo la ventajas de re-utilizar código CSS.

### Sintaxis
```react
const Heading = styled.h1`
  font-size: 2em;
  text-transform: uppercase;
`;

<Heading>Nuestros Productos</Heading>
```

## Porque Crear Tus Propios Hooks
### Crear tus propios Hooks
Algunas veces vas a desear crear tus propios Hooks, una de las razones de porque deseas crealos es para poder re-utilizar una función.

También puedes crear una función Helper, pero existe otra gran ventaja de crear tus propios Hooks y es la de incorporar State y mantener el valor de una función de forma persistente.

### Ventajas de crear tus Hooks
Tu código personalizado tendrá todas las ventajas de React como son: state, effects, integrar otros hooks y el performance.

Re utilizable en otros proyectos y lugares de tu página.

## ¿Que son las API's?
### Qué es una API
API = Application Programming Interface

Funciones, métodos que ofrecen una librería para ser utilizada por otro software como una capa de abstracción.

Una API pone a disposición recursos que están alojados en otro servidor o base de datos.

Usualmente hay que enviar una petición estructurada.

Al ser React un librería que corre en el cliente, no puede consultar una base de datos, por lo tanto una API es la forma de obtener datos de un servidor.

La API puede ser creada en cualquier lenguaje o framework: Python, Java, Net Core, Express, Node.js, Laravel o PHP.

Para ello deberá entregar una respuesta tipo JSON.

### Consultar una API con React
Al ser JavaScript puedes utilizar Fetch API y obtener los datos para mostrarlos en pantalla.

Algunas API's requieren un KEY, y otras están protegidas por CORS.

También es posible integrar una librería externa como Axios.

## Routing
### Qué es el Routing
Con una librería de Routing puedes tener diferentes URL's y mostrar diferentes componentes, así como restringir acceso a ciertas páginas.

Un proyecto grande es mejor manjarlo en múltiples pantallas, en lugar de un solo componente que revise múltiples condiciones.

### Librerías de Routing
* React Router - V6 se une a Reach Router - Creadores de Remix Run
* React Location - Creador de React Query
* Gatsby
* Next.js

## Librerías para Formularios
### ¿Cuando utilizar una librería de Formularios?
Si tu proyecto contará con formularios muy grandes, complejos o múltiples formularios; una librería solucionará muchos problemas.

Algunas librerías cuentan con validaciones muy robustas y otras se integran bien con alguna dependencia de validación.

### Opciones de Librerías de formularios
* Formik - Yup con herramienta de validación
* React Hook Form

## Qué es una REST API
* REST = Representational State Transfer
* Puede ser Diseñada en cualquier lenguaje.
* Debe responder a los Request HTTP: GET, POST, PUT, PATCH, DELETE.
* Tiene una forma ordenada y estructurada de poner a disposición los recursos.

### Verbos HTTP
* GET - Obtener
* POST - Enviar Datos al Sevidor / Creación
* PUT / PATCH - Actualizar
* DELETE - Eliminar

### Endpoints de una Rest API
* Una REST API cuenta con Endpoints (o URLs) para hacer operaciones CRUD.
* Listar todos los clientes   GET   /clientes
* Obtener un solo cliente   GET   /clientes/10
* Crear un nuevo cliente  POST  /clientes
* Editar un cliente   PUT    /clientes/3
* Borrar un cliente   DELETE  /clientes/8

## ¿Qué es Next.js?
* Framework en React para la creación de Sitios y Aplicaciones.
* Cuenta con una gran cantidad de características my útiles para crear aplicaciones de gran performance , SEO y facilidad de configuración.
* A diferencia de JavaScript que corre en el cliente en Next.js el código de JS corre tanto en el servidro como el cliente (navegador).
* Soporta Server Side Rendering (SSD) y Static Site Generation (SSG).

### Ventajas de Next.js
* No requiere configuracion.
* Gran Performance y optimizado para SEO.
* Routing incluido.
* Funciones para obtener datos de API's como getServerSideProps y getStaticProps.
* EL código sigue siendo React: componentes, hooks, etc.
