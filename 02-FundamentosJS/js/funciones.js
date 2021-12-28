function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 + numero2;
}

// Exportar una funcion o variable
// export default sumar;
// export default restar;                  // Error!, solo puedo tener un export default por documento

// Exportar varias funciones o variables
export { sumar, restar }