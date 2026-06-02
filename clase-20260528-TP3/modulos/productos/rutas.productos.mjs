import express from 'express'
import * as controlador from './controlador.productos.mjs'

const rutasCanchas = express.Router()

rutasCanchas.get('/api/v1/canchas', controlador.obtenerCanchas)
rutasCanchas.get('/api/v1/canchas/:id', controlador.obtenerCanchaPorId)
rutasCanchas.post('/api/v1/canchas', controlador.crearCancha)
rutasCanchas.put('/api/v1/canchas/:id', controlador.actualizarCancha)
rutasCanchas.delete('/api/v1/canchas/:id', controlador.eliminarCancha)

export default rutasCanchas