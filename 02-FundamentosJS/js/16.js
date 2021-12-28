// Funciones - Array Functions (tiene la estructura de la function expression)

// const sumar = () => {
// const sumar = (numero1 = 0, numero2 = 0) => {
//     // console.log(2 + 2);    
//     // console.log(numero1 + numero2);
//     return numero1 + numero2;
// };

// En los Array Function el codigo puede ser mas compacto (el return es implicito)
// const sumar = (numero1 = 0, numero2 = 0) => numero1 + numero2;
// const sumar = numero1 => numero1 + 20;
const sumar2Numeros = () => 2 + 2;

// Llamar la funcion
// sumar();
// sumar(30, 30);
// const resultado = sumar(30, 30);
// const resultado = sumar(30);
const resultado = sumar2Numeros();

console.log(resultado);