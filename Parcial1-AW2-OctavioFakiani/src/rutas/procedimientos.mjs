import { Router } from 'express'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

// Protegemos la carga del JSON para que un error en el archivo no impida iniciar el servidor.
let juegos = []
try {
    juegos = require('../datos/juegos.json')
} catch (error) {
    console.error('Error al cargar juegos.json:', error.message)
}

const router = Router()

// Endpoint de procedimiento: recibe una plataforma como parámetro
// de ruta, filtra el JSON de juegos y devuelve los que coincidan.
router.get('/juegos-por-plataforma/:plataforma', (req, res) => {
    try {
        // Obtenemos el parámetro de ruta y normalizamos a minúsculas
        const plataformaBuscada = req.params.plataforma.toLowerCase()
        // Filtramos los juegos cuya plataforma coincida con la buscada.
        const juegosFiltrados = juegos.filter((juego) => {
            return juego.plataforma.toLowerCase().includes(plataformaBuscada)
        })
        // Si no hay coincidencias, informamos al cliente con estado 404
        if (juegosFiltrados.length === 0) {
            return res.status(404).json({
                mensaje: `No se encontraron juegos para la plataforma "${req.params.plataforma}"`
            })
        }
        // Respondemos con los juegos filtrados y un resumen del resultado
        res.status(200).json({
            plataforma: req.params.plataforma,
            cantidad: juegosFiltrados.length,
            juegos: juegosFiltrados
        })
    } catch (error) {
        console.error('Ocurrió un error inesperado', error.message)
    }
})


export default router
