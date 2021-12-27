// Eventos del DOM - Clicks

const heading = document.querySelector('.heading');
// Opcion #1
// heading.addEventListener('click', function() {
//     console.log('Diste click en heading');
// });

// Opcion #2
heading.addEventListener('click', () => {
    console.log('Diste click en heading');
    
    heading.textContent = 'Nuevo Heading al dar click';
});

const enlaces = document.querySelectorAll('.navegacion a');
// Error!, no se puede agregar un evento click a todos los enlaces
// enlaces.addEventListener('click', () => {
//     console.log('Diste click en un enlace');
// });

// Debemos iterar los enlaces para agregar el evento click a cada enlace
enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
        console.log('Diste click en un enlace');
    });
});

// Opcion #3
// Funciona cuando es llamado antes de definir el evento y llamar la funcion - Function Expression
// const clickHeading = function() {
//     console.log('Diste click en heading');
// };

// Tambien funcion con un array function - Function Expression
// const clickHeading = () => {
//     console.log('Diste click en heading');
// };

// heading.addEventListener('click', clickHeading);

// function clickHeading() {
//     console.log('Diste click en heading');
// }

// // Error!, No funciona cuando es llamado despues de definir el evento y llamar la funcion - Function Expression
// const clickHeading = function() {
//     console.log('Diste click en heading');
// };