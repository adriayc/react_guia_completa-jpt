// Impotar firebase, context de firebase
import firebase, { FirebaseContext } from '../firebase';
// Importar custom hooks
import useAutenticacion from '../hooks/useAutenticacion';
import '../styles/globals.css';

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// const MyApp = props => {                     // Tutorial
const MyApp = ({Component, pageProps}) => {
  // const { Component, pageProps } = props;    // Tutorial
  
  // Obtener al usuario autenticado del custom hook
  const usuario = useAutenticacion();
  console.log(usuario);

  return (
    <FirebaseContext.Provider
      value={{
        firebase
      }}
    >
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
};

export default MyApp;