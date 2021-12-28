// Fetch API con Async Await - URL: https://jsonplaceholder.typicode.com/

const url = "https://jsonplaceholder.typicode.com/posts/1/comments";

// Fetch API con Promise
// const consultarAPI = () => {
//     fetch(url)
//     .then(respuesta => respuesta.json())
//     .then(resultado => {
//         resultado.forEach(comentario => {
//             console.log(comentario);
//         });
//     });
// };

// Fetch API con Async Await
const consultarAPI = async () => {
    // Await bloquea hasta que obtenga el resultado y luego pasa a la siguiente linea de codigo
    const respuesta = await fetch(url);
    // console.log(respuesta);
    // console.log('Despues de respuesta');
    const resultado = await respuesta.json();
    // console.log(resultado);
    // console.log('Despues de resultado');

    // resultado.forEach(comentario => {
    //     console.log(comentario);
    // });
};


consultarAPI();