// function Header() {
// function Header(props) {
// function Header({numeros, isAdmin, fn}) {
function Header({toma1Valor}) {
    // console.log(props);
    // console.log(numeros);
    // console.log(isAdmin);
    // Llamar la funcion
    // fn();

    const variableHeader = true;
    // Pasar el valor a una funcion del componente padre
    toma1Valor(variableHeader);

    return (
        <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
            Seguimiento Pacientes {""}
            <span className="text-indigo-600">Veterinaria</span>
        </h1>
    );
}

export default Header;