import { PrismaClient } from "@prisma/client"

// Url: http://localhost:3000/api/ordenes
export default async function handler(req, res) {
    const prisma = new PrismaClient

    // res.json({ hola: 'mundo' })
    if (req.method === 'POST') {
        // console.log(req.body)   // Se ejecuta en el servidor (Terminal)
        const orden = await prisma.orden.create({
            data: {
                nombre: req.body.nombre,
                total: req.body.total,
                pedido: req.body.pedido,
                fecha: req.body.fecha,
            }
        })
        // res.json({ method: 'POST!!!' })
        res.json(orden)
    }/* else {
        res.json({ method: 'GET!!!' })
    }*/
}