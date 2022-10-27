import { PrismaClient } from "@prisma/client"

// Forma #2 - Consultar datos de prisma
// Url: http://localhost:3000/api/categorias
export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const categorias = await prisma.categoria.findMany({
    include: {
      productos: true,
    }
  });

  res.status(200).json(categorias)
}
