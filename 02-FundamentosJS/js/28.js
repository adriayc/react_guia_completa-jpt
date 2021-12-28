// Eventos del DOM - Inputs

const inputNombre = document.querySelector('.nombre');

// Modificar los atributos del input
// inputNombre.type = 'password';
// inputNombre.placeholder = 'Un placeholder desde JS';


// Input - se dispara cada vez que se cambia el value del elemento
inputNombre.addEventListener('input', function(e) {                 // e | evt | event, puede llamarlo como quieras
    // console.log('Escribiendo en el input');
    // console.log(inputNombre.value);                 // No es recomendable obtener el valor el input de esta forma
    // console.log(e);
    console.log(e.target.value);                    // Es recomendable obtener a traves e.target.value                         
});

// Mostar y ocultar el password mientras escribes
const inputPassword = document.querySelector('.password');
inputPassword.addEventListener('input', funcionPassword);

function funcionPassword(e) {
    // console.log(e.target.value);

    inputPassword.type = 'text';

    setTimeout(() => {
        inputPassword.type = 'password';
    }, 300);
}

// Keydown - se dispara cuando se presiona una tecla
// inputNombre.addEventListener('keydown', function() {
//     console.log('Escribiendo en el input');
// });

// Keyup - se dispara cuando sueltas o levantas una tecla
// inputNombre.addEventListener('keyup', function() {
//     console.log('Escribiendo en el input');
// });