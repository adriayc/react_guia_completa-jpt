import React from "react";
// import '../styles/globals.css'
// Providers
import AuthState from "../context/auth/authState";
import AppState from "../context/app/appState";

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthState>
      <AppState>
        <Component {...pageProps} />
      </AppState>
    </AuthState>
  )
};

export default MyApp;
