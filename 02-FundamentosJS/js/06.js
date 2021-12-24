// Objetos - Destructuring con 2 o más objetos
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
};

const cliente = {
    nombre: "Adriano",
    premiun: true
};

const { nombre, precio, disponible } = producto;
// const { nombre, premiun } = cliente;                        // Error, ya existe la variable con ese nombre
const { nombre: nombreCliente, premiun } = cliente;         // Asignando un alias al nombre

console.log(nombre, precio, disponible);
console.log(nombreCliente, premiun);