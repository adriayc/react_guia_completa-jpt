export default function validarCrearCuenta(valores) {
  let errores = {};

  // Validar el nombre del usuario
  if (!valores.nombre) {
    errores.nombre = 'El nombre es obligatorio';
  }

  // Validar el email del usuario
  if (!valores.email) {
    errores.email = 'El email es obligatorio';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
    errores.email = 'Email no válido';
  }

  // Validar el password del usuario
  if (!valores.password) {
    errores.password = 'El password es obligatorio';
  } else if (valores.password.length < 6) {
    errores.password = 'El password debe ser de al menos 6 caracteres';
  }

  return errores;
};