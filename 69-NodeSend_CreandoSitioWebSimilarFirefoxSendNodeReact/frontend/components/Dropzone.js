import React, { useState, useCallback } from "react";
// React Dropzone
import { useDropzone } from "react-dropzone";
// Cliente Axios
import clienteAxios from "../config/axios";

const Dropzone = () => {
  // Funcion que se envia a useDropzone
  // const onDrop = (acceptedFiles) => {
  // useCallback - Evita la renderizacion multiple
  const onDrop = useCallback( async (acceptedFiles) => {
    // console.log('Soltando archivo...');
    console.log(acceptedFiles);

    // Crear un Form Data
    const formData = new FormData();
    formData.append('archivo', acceptedFiles[0]);

    // Enviar en formato form-data el archivo
    const resultado = await clienteAxios.post('/api/archivos', formData);
    console.log(resultado);
  }, []);

  // Extraer contenido de Dropzone
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({onDrop});

  // const archivos = acceptedFiles.map(archivo => {
  //   console.log(archivo);
  // });
  const archivos = acceptedFiles.map(archivo => (
    <li key={archivo.lastModified} className="bg-white flex-1 p-3 mb-4 shadow-lg rounded">
      <p className="font-bold text-xl">{archivo.path}</p>
      <p className="text-sm text-gray-500">{(archivo.size / Math.pow(1024, 2)).toFixed(2)} MB</p>
    </li>
  ));

  const crearEnlace = () => {
    console.log('Creando el enlace...');
  };

  return (
    <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0 flex flex-col items-center justify-center border-dashed border-gray-400 border-2 bg-gray-100 px-4">
      {acceptedFiles.length > 0 ? (
        <div className="mt-10 w-full">
          <h4 className="text-2xl font-bold text-center mb-4">Archivos</h4>
          <ul>
            { archivos }
          </ul>
          <button
            type="button"
            className="bg-blue-700 w-full py-3 rounded-lg text-white my-10 hover:bg-blue-800"
            onClick={() => crearEnlace()}
          >Crear Enlace</button>
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