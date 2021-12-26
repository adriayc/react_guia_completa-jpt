// Unir 2 objetos
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
};

const cliente = {
    nombre: "Juan",
    premium: true
};

// producto.cliente = cliente;             // Modifica el objeto original producto (no es recomendado) y perdemos informacion
// console.log(producto);

// Unir dos objetos con el metod0 assig (Se pierde informacion si el atributo tiene el mismo nombre)
// const nuevoObjeto = Object.assign(producto, cliente);
// console.log(nuevoObjeto);
// console.log(producto);                      // Modificando (mutando) el objeto original
// console.log(cliente);                       // No se modifica el objeto

// Unir dos objeto con Spread Operator
// const nuevoObjeto2 = { ...producto, ...cliente };                   // Se pierde informacion si el atributo tiene el mismo nombre
const nuevoObjeto2 = {                                              // No se piede inforacion de los objetos
    producto: { ...producto },
    cliente: { ...cliente }
};
console.log(nuevoObjeto2);
console.log(producto);
console.log(cliente);