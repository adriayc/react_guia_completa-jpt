// import { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
// Importa Prisma Client
import { PrismaClient } from '@prisma/client';

export default function Home({ categorias }) {
  console.log(categorias);

  // NOTA: Error, no se pude consultar prisma desde el cliente (seria inseguro)
  // useEffect(() => {
  //   const consultarDB = async () => {
  //     const prisma = new PrismaClient();
  //     const categorias = await prisma.categoria.findMany();
  //     console.log(categorias);
  //   }

  //   consultarDB();
  // }, [])

  return (
    <h1>Next.js</h1>
  )
}

// Forma #1 - Consultar datos de prisma
export const getServerSideProps = async () => {
  const prisma = new PrismaClient;

  const categorias = await prisma.categoria.findMany();  // Obtener todas las categorias
  // const categorias = await prisma.categoria.findFirst(); // Obtener la prima categoria
  // const categorias = await prisma.categoria.findFirst({     // Obtener la categoria con id = 3 o name = "Pizzas"
  //   where: {
  //     // id: 3
  //     name: "Pizzas"
  //   }
  // });
  // console.log(categorias);

  return {
    props: {
      categorias
    }
  };
};