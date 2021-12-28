// Scope o alcance de una variable

// Variable global
const precio = 300;
// const precio = 600;                 // Error!, no se puede existir una variable con el mismo nombre en const (dentro del mismo scope)

function unaFuncion() {
    // Variable local - puede existir una variable con el mismo nombre dentro un if
    const precio = 600;

    console.log(precio);
}

console.log(precio);

unaFuncion();