import express from "express"

const router = express.Router()

// GET
router.get('/', (req, res) => {
    res.send('Desde API/USUARIOS')
})

// POST
router.post('/', (req, res) => {
    res.send('Desde API/USUARIOS')
})

export default router