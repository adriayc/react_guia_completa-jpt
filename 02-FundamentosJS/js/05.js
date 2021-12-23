// Objetos - Manipulacion
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
};

// Evita que el objeto sea modificado
// Object.freeze(producto);
// Permite modificar los atributos existentes, no permite agrgar nuevo o eliminar
// Object.seal(producto);

// Reescribir un valor (objeto declarado como const) 
producto.nombre = "Monitor Curvo";

// Si no existe, añade el atributo al objeto
producto.imagen = "imagen.jpg";

// Eliminar un atributo
delete producto.disponible;
delete producto.calificacion;           // No muestra nada al tratar de eliminar un atributo que no existe

console.table(producto);