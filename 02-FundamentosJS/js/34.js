// Fetch API - Async Await (Multiples llamdos)

const url = "https://jsonplaceholder.typicode.com/posts/1/comments";
const url2 = "https://jsonplaceholder.typicode.com/albums/1/photos";

// Primero obtenemos los datos de la primer fetch y luego de la segund0 (Esto perjudica el performance del sitio)
const concultarAPI = async () => {
    // Medir el performace
    const inicio = performance.now();

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    console.log(resultado);

    console.log('Iniciando 2da consulta')

    const respuesta2 = await fetch(url2);
    const resultado2 = await respuesta2.json();
    console.log(resultado2);

    // Medir el performace
    const fin = performance.now();
    console.log(`Tiempo de ejecucion 1er Async: ${ fin - inicio } ms`);
}

concultarAPI();


// Obtener los datos de forma simultanea de los fetchs (Esto mejora el performance del sitio)
const concultarAPI2 = async () => {
    // Medir el performace
    const inicio = performance.now();

    const [respuesta, respuesta2] = await Promise.all([ fetch(url), fetch(url2) ]);
    const resultado = respuesta.json();
    const resultado2 = respuesta2.json();

    console.log(respuesta);
    console.log(respuesta2);

    // Medir el performace
    const fin = performance.now();
    console.log(`Tiempo de ejecucion 2do Async: ${ fin - inicio } ms`);
}

concultarAPI2();