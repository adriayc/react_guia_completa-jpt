import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
// Importar firebase config
import firebaseConfig from './config';

// Clase de Firebase
class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
    this.auth = app.auth();
    this.db = app.firestore();
    this.storage = app.storage();
  }

  // Registrar un usuario
  async registrar(nombre, email, password) {
    const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email, password);

    // Retornamos el usuario actualizado
    return await nuevoUsuario.user.updateProfile({
      displayName: nombre
    });
  }

  // Iniciar sesion un usuario
  async login(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  // Cerrar sesion un usuario
  async cerrarSesion() {
    await this.auth.signOut();
  }
}

// Crear un objeto de firebase
const firebase = new Firebase();
// Exportar firebase
export default firebase;