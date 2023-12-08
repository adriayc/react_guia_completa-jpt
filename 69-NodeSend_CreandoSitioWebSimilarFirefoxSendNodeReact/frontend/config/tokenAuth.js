import clienteAxios from "./axios";

const tokenAuth = token => {
  if (token) {
    // Enviar token en el Header
    clienteAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete clienteAxios.defaults.headers.common['Authorization']
  }
};

export default tokenAuth;