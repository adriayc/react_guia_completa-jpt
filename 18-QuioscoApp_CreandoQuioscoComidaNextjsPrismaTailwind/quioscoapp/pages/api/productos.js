import { PrismaClient } from "@prisma/client"

// Consultar datos de prisma
// Url: http://localhost:3000/api/productos
export default async function handler(req, res) {
    const prisma = new PrismaClient();
    const productos = await prisma.producto.findMany({
        where: {
            categoriaId: 1,
        }
    });

    res.status(200).json(productos)
}
