import React from "react";
// import '../styles/globals.css'
// Provider
import AuthState from "../context/auth/authState"

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthState>
      <Component {...pageProps} />
    </AuthState>
  )
};

export default MyApp;
