export const generarId = () => {
    // const random = Math.random().toString(36).substr(2);                // .substr deprecated!
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
};