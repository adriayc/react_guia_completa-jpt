// Selectores del DOM

/**
 * Selectores:
 * #id - selector por id
 * .class - selector por clase
 * p - selector por elemento HTML
 */

// const heading = document.querySelector('h2');                   // Selecciona de 0 a maximo 1 elmento (selector por elemento HTML)
// const heading = document.querySelector('.DOM h2');
// const heading = document.querySelector('.heading');
const heading = document.querySelector('#heading');
// const heading = document.querySelectorAll();                // Selecciona todos los elementos que coincidan

console.log(heading);
console.log(heading.textContent);                   // Muestra el contenido del elemento
console.log(heading.tagName);                       // Muestra el tipo de elemento HTML
console.log(heading.classList);                     // Muestra las clases del elemento
console.log(heading.id);                     // Muestra el id


const enlace = document.querySelector('.navegacion a');             // Obtiene el primer enlace

console.log(enlace);