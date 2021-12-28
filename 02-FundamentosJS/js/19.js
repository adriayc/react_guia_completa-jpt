// Condicionales

const disponible = 4000;
const retirar = 20000;

/**
 * Operadores condicionales
 * > - Mayor que
 * < - Menor que
 * >= - Mayor o igual
 * <= - Menor o igual
 */

if(disponible > retirar) {
    // Se cumple con la condicion y se ejecuta el codigo
    console.log('Si puedes retirar');
} else {
    // No se cumple la condicion, ejecutar este codigo
    console.log('Lo siento, no puede retirar!');
}