// Objetos
// const nombre = 'Tablet';
// const precio = 300;
// const disponible = true;

const producto = {
    nommbre: 'Tablet',
    precio: 300,
    disponible: true
};

console.log(producto);
console.table(producto);

// Mostrar el valor de los atributos
console.log(producto.nommbre);
console.log(producto.precio);
console.log(producto.disponible);

// Destructuring
const { nommbre, precio, disponible } = producto;

console.log(nommbre);
console.log(precio);
console.log(disponible);


// Object Literal Enhacement
const autenticado = true;
const usuario = "Adriano";

const nuevoObjeto = {
    // autenticado: autenticado,
    // usuario: usuario

    // Si el atributo y valor tiene el mismo nombre
    autenticado,
    usuario
};

// console.log(nuevoObjeto);
console.table(nuevoObjeto);