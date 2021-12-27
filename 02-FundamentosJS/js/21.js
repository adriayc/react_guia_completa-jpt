const saldo = 600;
const pagar = 700;
const tarjeta = true;

// Solo se ejecuta una de las condiciones
// if(saldo > pagar) {
//     console.log('Puedes pagar con tu saldo');
// } else if(tarjeta) {
//     console.log('Puedes pagar con tu tarjeta');
// } else {
//     console.log('No, no puedes pagar');
// }

/**
 * Operadores logicos
 * && - Todas las condiciones debe cumplirse
 * || - Al menos una condicion debe cumplirse
 */

// Se cumple al menos uno y puede pagar
// if(saldo > pagar || tarjeta) {
// Ambas condiciones deber cumplir
if(saldo > pagar && tarjeta) {
    console.log('Puedes pagar');
} else {
    console.log('No, no puedes pagar');
}