import app from 'firebase/app';
// Importar firebase config
import firebaseConfig from './config';

// Clase de Firebase
class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
  }
}

// Crear un objeto de firebase
const firebase = new Firebase();
// Exportar firebase
export default firebase;