// Fetch API - URL: https://jsonplaceholder.typicode.com/

const url = "https://jsonplaceholder.typicode.com/posts/1/comments";

// fetch(url)
//     // .then(respuesta => {
//     //     // console.log('Haciendo fetch...');
//     //     // console.log(respuesta);

//     //     return respuesta.json();
//     // })
//     .then(respuesta => respuesta.json())
//     .then(resultado => {
//         // console.log('Resultado casi listo...');
//         // console.log(resultado);

//         resultado.forEach(comentario => {
//             console.log(comentario);
//         });
//     });


const consultarAPI = () => {
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => {
        resultado.forEach(comentario => {
            console.log(comentario);
        });
    });
};

consultarAPI();