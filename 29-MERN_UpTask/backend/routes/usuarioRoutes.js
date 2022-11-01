import express from "express"

const router = express.Router()

// GET
router.get('/', (req, res) => {
    res.send('Desde GET - API/USUARIOS')
})

router.get('/confirmar', (req, res) => {
    // res.send('Desde Confirmar usuario GET - API/USUARIOS')
    res.json({ msg: 'Confirmando usuario' })
})

// POST
router.post('/', (req, res) => {
    res.send('Desde POST - API/USUARIOS')
})

// PUT
router.put('/', (req, res) => {
    res.send('Desde PUT - API/USUARIOS')
})

// DELETE
router.delete('/', (req, res) => {
    res.send('Desde DELETE - API/USUARIOS')
})

export default router