// Operaciones en los arreglos
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

console.log(tecnologias);

// Añadir elementos al array
// tecnologias.push('GraphQL');                            // Agrega al final (modifca el array original)
// tecnologias.unshift('GraphQL');                         // Agrega al inicio (modifca el array original)

// Añadiendo elementos con Spread Operator
// const nuevoArreglo = [...tecnologias, 'GraphQL'];           // Agrega al final (no modifica el array original)
// const nuevoArreglo = ['GraphQL', ...tecnologias];           // Agrega al inicio (no modifica el array original)

// console.log(nuevoArreglo);


// Eliminar elementos del arrays
// tecnologias.pop();                                      // Eliminar el ultimo elemento (modifica el array original)
// tecnologias.shift();                                    // Elimina el primer elemento (modifica el array original)
// tecnologias.splice(2);                                  // Elimina los elementos a partir de la posicion 2 (modifica el array original)
// tecnologias.splice(2, 1);                               // Elimina 1 elemento a partir de la posicion 2 (modifica el array original)
// tecnologias.splice(2, 3);                               // Elimina 3 elemento a partir de la posicion 2 (modifica el array original)

// Usando el metod filter (no modifica el array original)
// const nuevoArreglo = tecnologias.filter(function(item) {
//     // console.log('Desde filter');
//     // console.log(item);

//     return item !== 'HTML';
// });

// console.table(nuevoArreglo);

// Reemplar un elemento del array
// tecnologias[0] = 'GraphQL';

// Usando el metodo map (no modifica el array original)
const nuevoArreglo = tecnologias.map(function(item) {
    // console.log(item);

    if(item === 'HTML') {
        return 'GraphQL';
    } else {
        return item;
    }
});

console.log(nuevoArreglo);

console.log(tecnologias);