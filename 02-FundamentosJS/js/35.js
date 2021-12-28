// Template Strings

const producto = 'Tablet de 12 pulgadas';
const precio = 400;
const marca = 'Orange';

function textoFuncion() {
    return 'Este texto proviene de la funcion';
}

console.log(producto +' $'+ precio +' Dolares, Marca: '+ marca);            // Usando + para concatenar
// console.log(producto ,' $', precio ,' Dolares, Marca: ', marca);            // Algunos casos se usa la coma para concatenar

console.log(`${ producto } $${precio} Dolares, Marca: ${marca}, ${textoFuncion()}`);           // Usando template strings