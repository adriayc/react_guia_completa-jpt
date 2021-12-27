// Eventos del DOM - Submit

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', e => {
    e.preventDefault();             // Evita la accion por defecto de enviar los datos del formulario
    // console.log('Enviaste formulario');

    // const nombre = document.querySelector('.nombre');
    const nombre = document.querySelector('.nombre').value;         // Acceder al valor a traves del chainning
    // console.log(nombre.value);
    // console.log(nombre);

    const password = document.querySelector('.password').value;
    // console.log(password);

    if(nombre === '' || password === '') {
        console.log('Todos los campos son obligatorios');
    } else {
        console.log('Todo es bien, enviando...')
    }
});