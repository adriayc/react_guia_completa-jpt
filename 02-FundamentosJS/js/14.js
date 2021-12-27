// Funciones - retornan valores

function sumar(numero1 = 0, numero2 = 0) {
    // return numero1 + numero2;            // Retornar un valor
    // return [ numero1 + numero2, 'Hola Mundo JS!' ];          // Retornar un array
    return {                                                    // Retornar un objeto
        resultado: numero1 + numero2,
        mensaje: 'Hola Mundo JS!'
    };
}

// const resultado = sumar(20, 30);
// const [ resultado, holaMundo ] = sumar(20, 30);
const { resultado, mensaje } = sumar(20, 30); 

console.log(resultado);
// console.log(holaMundo);
console.log(mensaje);