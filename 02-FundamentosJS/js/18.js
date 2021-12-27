// Otros Array Methods

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
const numeros = [10, 20, 30];

let nuevoArray;

// Filter - Devuelve un nuevo array donde el elemento sea distinto de 'React' (filtra) (No modifica el array original)
// nuevoArray = tecnologias.filter(item => item !== 'React');

// Includes - Devuelve true si un elemento de un array existe y si no devuelve false (No modifica el array original)
// const resultado = tecnologias.includes('GraphQL');

// Some - Devuelve true si al menos un elemento cumple con la condicion y si no false (No modifica el array original)
// const resultado = numeros.some(numero => numero > 15);

// Find - Devuelve el primer elemento que cumpla la condicion (No modifica el array original)
// const resultado = numeros.find(numero => numero > 15);

// Every - Devuelve true si todos los elementos cumplen con la condicion y si no false (No modifica el array original)
// const resultado = numeros.every(numero => numero > 15);

// Reduce - Acumula en total la sumatorio de los valores de los elementos y total inicia en 0 (No modifica el array original)
// const resultado = numeros.reduce( (total, numero) => numero + total, 0 );

// Filter - Crea un nuevo array en base a la condicion (No modifica el array original)
// const resultado = tecnologias.filter(item => item === 'Node.js');
const resultado = numeros.filter(numero => numero !== 10);

// Arrow Function con forEach y map
// ForEach - Itera todos los elementos del array (No devuelve nada)
// tecnologias.forEach(item => console.log(item));                     // Muestra el valor del elemento
tecnologias.forEach((item, index) => console.log(index));           // Muestra el indice del elemento

// Map = Itera todos los elementos del array (Devuelve un nuevo array) (No modifica el array original) 
nuevoArray = tecnologias.map(item => item);

console.log(nuevoArray);
console.log(resultado);