// Selectores del DOM

// Obtiene todos los enlaces
const enlaces = document.querySelectorAll('.navegacion a');
const noExiste = document.querySelectorAll('.no-existe');               // Si obtener un elemento que no existe JS muestra un array vacio

console.log(enlaces);
// console.log(enlaces.textContent);                   // Error!, no puede obtener el contenido de la lista de enlaces

console.log(noExiste);                              // Muestra un array vacio