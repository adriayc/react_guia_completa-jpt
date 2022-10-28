// Url: http://localhost:3000/api/ordenes
export default async function handler(req, res) {
    // res.json({ hola: 'mundo' })
    if (req.method === 'POST') {
        console.log(req.body)   // Se ejecuta en el servidor (Terminal)
        res.json({ method: 'POST!!!' })
    }/* else {
        res.json({ method: 'GET!!!' })
    }*/
}