// Generado codigo HTML con JS

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', e => {
    e.preventDefault();

    const nombre = document.querySelector('.nombre').value;
    const password = document.querySelector('.password').value;

    // Eliminar si ya existe una alerta previa y evitar que se siga creando
    const alertaPrevia = document.querySelector('.alerta');
    if(alertaPrevia) {
        alertaPrevia.remove();
    }

    // Crear un elemento HTML, en JS es recomentable nombrar las etiquetas HTML en mayusculas
    const alerta = document.createElement('DIV');
    // Agregar atributos
    // alerta.id = 'alerta'; 
    alerta.classList.add('alerta');
    // alerta.classList.add('alerta', 'segunda-clase');
    // console.log(alerta);

    if(nombre === '' || password === '') {
        // console.log('Todos los campos son obligatorios');

        alerta.textContent = 'Todos los campos son obligatorios';
        alerta.classList.add('error');
    } else {
        // console.log('Todo es bien, enviando...');
        
        alerta.textContent = 'Todo bien...';
        alerta.classList.add('exito');
    }
    // console.log(alerta);

    // Agregar la alerta al final del ultimo hijo del formulario
    formulario.appendChild(alerta);
});