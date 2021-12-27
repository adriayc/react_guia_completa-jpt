// Comparacion y Operador Estricto

const numero1 = 20;
const numero2 = '20';

/**
 * Operadores de comparacion
 * == - Igualdad (comprar el valor y no el tipo)
 * === - Identico (comprar el valor y el tipo)
 */

console.log(typeof numero1);
console.log(typeof numero2);

// if(numero1 == numero2) {
//     console.log('Si!, son iguales');
// } else {
//     console.log('No, no son iguales');
// }

/**
 * Funciones coercitivas (conversion)
 * Number - convierte un string a number
 * String - convierte un number a string
 */

// if(numero1 === numero2) {
// if(numero1 === Number(numero2)) {
if(String(numero1) === numero2) {
    console.log('Si!, son identicos');
} else {
    console.log('No, no son identicos');
}


const autenticado = true;

// if(autenticado === true) {
if(autenticado) {
    console.log('Si esta autenticado!')
}