// Funciones - Parametros y Parametros por default

// La funcion sumar recibe dos parametros (donde el parametro numero2 es por defecto 0)
// function sumar(numero, numero2 = 0) {
function sumar(numero = 0, numero2 = 0) {
    // console.log(numero);
    // console.log(numero2);
    console.log(numero + numero2);
}

// Llamar la funcion y pasamos los argumentos de la funcion
sumar(10, 20);
sumar(2, 3);
// sumar(100, 400);
sumar(100);             // Solo envimos un argumento
sumar();                // Se llama a la funcion sumar y tomara los valores por defecto