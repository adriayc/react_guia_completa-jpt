import React, { useContext } from 'react';
// Context
import authContext from '../context/auth/authContext';
import appContext from '../context/app/appContext';

const Alerta = () => {
    // Definir authContext para extrar mensajes del usuario
    const AuthContext = useContext(authContext);
    const { mensaje } = AuthContext

    const AppContext = useContext(appContext);
    const { mensaje_archivo } = AppContext;

    return (
        <div className='bg-red-500 py-2 w-full my-3 max-w-lg text-center text-white mx-auto'>
            { mensaje || mensaje_archivo }
        </div>
    );
}
 
export default Alerta;