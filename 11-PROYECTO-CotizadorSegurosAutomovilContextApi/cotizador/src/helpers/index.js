export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
    let incremeto;

    switch(marca) {
        case "1":
            // Europeo 30%
            incremeto = 1.3;
            break;
        case "2":
            // Americano 15%
            incremeto = 1.15;
            break;
        case "3":
            // Asiatico 5%
            incremeto = 1.05;
            break;
        default:
            break;
    }

    return incremeto;
}

export function calcularPlan(plan) {
    // Básico 20% y Completo 50%
    return (plan === "1") ? 1.20 : 1.50;
}

export function formatearDinero(cantidad) {
    return cantidad.toLocaleString("en-US", {style:"currency", currency:"USD"});

    // return cantidad.toLocaleString("en-US", {
    //     style: "currency",
    //     currency: "USD",
    // });
}