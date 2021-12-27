// Destructuring de arrays
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

// El destructuring es por posicion
// const [ html ] = tecnologias;
// const [ html, nodejs ] = tecnologias;            // Obtiene el valor de la primer y segunda posicion
const [ , , , , var5 ] = tecnologias;

// console.log(html);                  // 'HTML'
// console.log(nodejs);                // 'CSS', obtiene el segundo valor y no 'Node.js'
console.log(var5);                // 'Node.js'