// Manipular elementos HTML con JS

const heading = document.querySelector('.heading');
heading.textContent = 'Un Nuevo Heading';           // Modifica el contenido del elemento

// console.log(heading);
console.log(heading.textContent);


const inputNombre = document.querySelector('#nombre');
inputNombre.value = 'Un valor por defecto';         // Agregar o modifica el valor del elemento input

// console.log(inputNombre);
console.log(inputNombre.value);


const enlaces = document.querySelectorAll('.navegacion a');
// enlaces.textContent = 'Nuevo Enlace';               // Error!, no puede modificar el contenido de todos los elemntos

enlaces.forEach(enlace => enlace.textContent = 'Nuevo Enlace');