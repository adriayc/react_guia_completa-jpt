// Arrow Function y Array Methods

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

// map
const nuevoArray = tecnologias.map(item => {
    if(item === 'HTML') {
        return 'GraphQL';
    } else {
        return item;
    }
});

// filter
const nuevoArray2 = tecnologias.filter(item => item !== 'React');

console.log(nuevoArray);
console.log(nuevoArray2);