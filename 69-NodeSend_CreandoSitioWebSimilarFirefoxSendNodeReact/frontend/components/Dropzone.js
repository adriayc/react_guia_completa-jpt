import React, { useState, useCallback, useContext } from "react";
// React Dropzone
import { useDropzone } from "react-dropzone";
// Cliente Axios
import clienteAxios from "../config/axios";
// Contexts
import authContext from "../context/auth/authContext";
import appContext from "../context/app/appContext";

const Dropzone = () => {
  // Definimos el authContext
  const AuthContext = useContext(authContext);
  const { usuario, autenticado } = AuthContext;

  // Definimos el appContext
  const AppContext = useContext(appContext);
  const { mostrarAlerta, subirArchivos, cargando, crearEnlace } = AppContext;

  // Funcion que se envia a useDropzone
  // const onDrop = (acceptedFiles) => {
  // useCallback - Evita la renderizacion multiple
  // const onDrop = useCallback( async (acceptedFiles) => {
  const onDropAccepted = useCallback( async (acceptedFiles) => {
    // console.log('Soltando archivo...');
    // console.log(acceptedFiles);
    // console.log(acceptedFiles[0].path);

    // Crear un Form Data
    const formData = new FormData();
    formData.append('archivo', acceptedFiles[0]);

    subirArchivos(formData, acceptedFiles[0].path);

    // Enviar en formato form-data el archivo
    // const resultado = await clienteAxios.post('/api/archivos', formData);
    // console.log(resultado);

  }, []);

  const onDropRejected = () => {
    // console.log('No se pudo subir');

    mostrarAlerta('No se pudo subir el limite del archivo es 1MB, obten una cuenta gratis para subir archivos más grandes');
  };

  // Extraer contenido de Dropzone
  // const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({onDrop});
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({onDropAccepted, onDropRejected, maxSize: 1000000});

  // const archivos = acceptedFiles.map(archivo => {
  //   console.log(archivo);
  // });
  const archivos = acceptedFiles.map(archivo => (
    <li key={archivo.lastModified} className="bg-white flex-1 p-3 mb-4 shadow-lg rounded">
      <p className="font-bold text-xl">{archivo.path}</p>
      <p className="text-sm text-gray-500">{(archivo.size / Math.pow(1024, 2)).toFixed(2)} MB</p>
    </li>
  ));

  return (
    <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0 flex flex-col items-center justify-center border-dashed border-gray-400 border-2 bg-gray-100 px-4">
      {acceptedFiles.length > 0 ? (
        <div className="mt-10 w-full">
          <h4 className="text-2xl font-bold text-center mb-4">Archivos</h4>
          <ul>
            { archivos }
          </ul>

          {autenticado ? 'Esto se ve si esta autenticado' : ''}

          {cargando ? <p className="my-10 text-center text-gray-600">Subiendo archivo...</p> : (
            <button
              type="button"
              className="bg-blue-700 w-full py-3 rounded-lg text-white my-10 hover:bg-blue-800"
              onClick={() => crearEnlace()}
            >Crear Enlace</button>
          )}
        
        </div>
      ) : (
        // Dropzone
        <div {...getRootProps({ className: 'dropzone w-full py-32' })}>
          <input className="h-100" {...getInputProps()} />

          {isDragActive ? <p className="text-2xl text-center text-gray-600">Suelta el archivo</p> : (
            <div className="text-center">
              <p className="text-2xl text-center text-gray-600">Selecciona un archivo y arrastralo aquí</p>
              <button className="bg-blue-700 w-full py-3 rounded-lg text-white my-10 hover:bg-blue-800" type="button">Selecciona archivos para subir</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropzone;