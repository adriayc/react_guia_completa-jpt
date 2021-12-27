// Funciones - Function Expression

// No se puede llamar un funcion expression antes de ser inicializado
// sumar();                // Error!

// const sumar = function() {
const sumar = function(numero1 = 0, numero2 = 0) {
    // console.log(2 + 2);
    // console.log(numero1 + numero2)
    return numero1 + numero2;
};

// Llamar la funcion
// sumar();
// sumar(30, 20);
// sumar(30);
const resultado = sumar(30);

console.log(resultado);