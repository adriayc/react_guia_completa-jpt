// Url: http://localhost:3000/api/ordenes
export default async function handler(req, res) {
    // res.json({ hola: 'mundo' })
    if (req.method === 'POST') {
        res.json({ method: 'POST!!!' })
    } else {
        res.json({ method: 'GET!!!' })
    }
}