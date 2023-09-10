import app from 'firebase/app';
import 'firebase/auth';
// Importar firebase config
import firebaseConfig from './config';

// Clase de Firebase
class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
    this.auth = app.auth();
  }

  // Registrar un usuario
  async registrar(nombre, email, password) {
    const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email, password);

    // Retornamos el usuario actualizado
    return await nuevoUsuario.user.updateProfile({
      displayName: nombre
    });
  }
}

// Crear un objeto de firebase
const firebase = new Firebase();
// Exportar firebase
export default firebase;