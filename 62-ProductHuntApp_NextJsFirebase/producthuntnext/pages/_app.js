// Impotar firebase, context de firebase
import firebase, { FirebaseContext } from '../firebase';
import '../styles/globals.css';

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// const MyApp = props => {                     // Tutorial
  const MyApp = ({Component, pageProps}) => {
  // const { Component, pageProps } = props;    // Tutorial

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