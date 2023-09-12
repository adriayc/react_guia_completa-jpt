export default function validarCrearProducto(valores) {
  let errores = {};

  // Validar el nombre del producto
  if (!valores.nombre) {
    errores.nombre = 'El nombre es obligatorio';
  }

  // Validar la empresa
  if (!valores.empresa) {
    errores.empresa = 'El nombre de empresa es obligatorio';
  }

  // Validar la url
  if (!valores.url) {
    errores.url = 'El url del producto es obligatorio';
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
    errores.url = 'Url mal formateada o no válida';
  }

  // Validar la descripcion
  if (!valores.descripcion) {
    errores.descripcion = 'Agrega una descripción de tu producto';
  }

  return errores;
}