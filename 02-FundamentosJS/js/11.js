// Iteradores en JS
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

// forEach - accede a cada elemento del array (retorna undefined)
const arrayForeach = tecnologias.forEach(function(item) {
    // console.log('Ejecutando forEach');
    // console.log(item);

    return item;
});


// map - accede a cada elemento del array (retorna un nuevo array)
const arrayMap = tecnologias.map(function(item) {
    // console.log(item);

    return item;
});

console.log(arrayForeach);              // 'undefined'
console.log(arrayMap);                  // Muestra el nuevo array