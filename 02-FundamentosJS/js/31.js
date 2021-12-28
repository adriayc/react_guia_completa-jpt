// Imports y Exports

// Importar por export default
// import sumar from "./funciones.js";
// import sumar2umeros from "./funciones.js";              // Como es un export defaul puedes llamarlo como quieras

// Importar varias funciones o varibles
// import { sumar, restar } from "./funciones.js";
import { sumar as suma, restar } from "./funciones.js";     // Agregando un alias al nombre de la funcion importada

// const resultado = sumar2umeros(20, 30);                // Nombre modificado por el export default
// const resultado = sumar(20, 30);
const resultado = suma(20, 30);

console.log(resultado);