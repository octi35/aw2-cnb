import { Router } from 'express'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

// Si el archivo no existe o tiene un formato inválido,
// capturamos el error para evitar que el servidor crashee al iniciar.
let juegos = []
try {
    juegos = require('../datos/juegos.json')
} catch (error) {
    console.error('Error al cargar juegos.json:', error.message)
}

// Permite modularizar las rutas y montarlas en el servidor principal.
const router = Router()

// Endpoint para obtener todos los videojuegos del catálogo.
router.get('/juegos', (req, res) => {
    try {
        // Si por alguna razón el array está vacío, informamos al cliente
        if (juegos.length === 0) {
            return res.status(404).json({ mensaje: 'No hay juegos disponibles' })
        }
        // Respondemos con el array de juegos en formato JSON.
        res.status(200).json(juegos)
    } catch (error) {
        console.error('Ocurrió un error inesperado', error.message)
    }
})

// Endpoint para obtener UN videojuego según su id.
router.get('/juegos/:id', (req, res) => {
    try {
        const id = Number(req.params.id)
        // Validamos que el parámetro recibido sea un número válido
        if (isNaN(id)) {
            return res.status(400).json({ mensaje: 'El id debe ser un número válido' })
        }
        // Buscamos el juego cuyo id coincida con el parámetro recibido
        const juego = juegos.find((juego) => juego.id === id)
        // Si no se encuentra ningún juego con ese id, respondemos 404
        if (!juego) {
            return res.status(404).json({ mensaje: `No se encontró un juego con id ${id}` })
        }
        // Respondemos con el objeto del juego encontrado y estado 200
        res.status(200).json(juego)
    } catch (error) {
        console.error('Ocurrió un error inesperado', error.message)
    }
})

export default router
