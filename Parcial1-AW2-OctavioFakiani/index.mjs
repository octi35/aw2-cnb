import express from 'express'

// Importamos los módulos de rutas
import rutasJuegos from './src/rutas/juegos.mjs'
import rutasProcedimientos from './src/rutas/procedimientos.mjs'

// Importamos el middleware
import logger from './src/middlewares/logger.mjs'

const PUERTO = 3000

const app = express()

app.use(express.json())

app.use(logger)

// Rutas de la API REST de videojuegos
app.use(rutasJuegos)

// Endpoint orientado a procedimientos
app.use(rutasProcedimientos)

// Si ninguna ruta coincide con la URL solicitada, respondemos con estado 404 y un mensaje de error en JSON.
app.use((req, res) => {
    res.status(404).json({ mensaje: 'Ruta no encontrada' })
})

app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`)
})
