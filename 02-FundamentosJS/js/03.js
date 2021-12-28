// Tipos de datos

// Undefined
let cliente;

console.log(cliente);                           // undefined
console.log(typeof cliente);                    // undefined

// Boolean
const descuento = true;

console.log(descuento);
console.log(typeof descuento);

// Number
const numero1 = 20.20;
const numero2 = 30;
const numero3 = -100;

console.log(numero1);
console.log(typeof numero1);
console.log(typeof numero2);
console.log(typeof numero3);

// Strings o Cadenas de Textos
const alumno = "Adriano";
let producto = 'Monitor 20 pulgadas';

const numeroS1 = "30";            // String
const numeroN1 = 30;             // Number

console.log(alumno);
console.log(typeof alumno);
console.log(typeof producto);

console.log(numeroS1);
console.log(numeroN1);

// BigInt
const numeroGrande = BigInt(344543547957439759345837824673);

const numeroN2 = 20;
const numeroN3 = 30;

console.log(typeof numeroGrande);

console.log(numeroN2 + numeroN3);                       // 50
// console.log(numeroN2 + numeroGrande);                   // Error!, no se puede mezclar numero bigInt
console.log(numeroN2 + Number(numeroGrande));           // Convertir a number el bigInt

// Symbol (es unico)
const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);

console.log(primerSymbol === segundoSymbol);

console.log(primerSymbol.valueOf());                    // Obtener el valor de un Symbol
console.log(segundoSymbol.valueOf());                    // Obtener el valor de un Symbol

// Null
const descuentoN = null;

console.log(descuentoN);                    // null
console.log(typeof descuentoN);             // Object

// Coercion de numeros
const numeroN4 = "30";
const numeroN5 = 30;

console.log(typeof numeroN4);               // String
console.log(typeof numeroN5);               // Number
console.log(typeof Number(numeroN4));               // Convertir a Number
console.log(typeof String(numeroN5));               // Convertir a String
