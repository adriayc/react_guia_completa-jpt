// Arrays o Arreglos
// const tecnologias = [];                         // Array vacio
const tecnologias = [20, 30, true, 'React', 'JavaScript'];

console.log(typeof tecnologias);                // El tipo sera object (no existe el tipo array en JS)
// console.log(tecnologias);
console.table(tecnologias);

// Acceder a un atributo
console.log(tecnologias[3]);                    // 'React'
console.log(tecnologias[10]);                   // 'undefined', no existe esa posicion en el array

// Metodos de array
console.log(tecnologias.length);                // Muestra el tamaño del array
console.log(tecnologias.toString());            // Convierte el array en string separados por coma ','