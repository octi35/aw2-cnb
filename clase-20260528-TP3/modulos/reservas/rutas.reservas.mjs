import express from 'express'
import * as controlador from './controlador.reservas.mjs'

const rutasReservas = express.Router()

rutasReservas.get('/api/v1/reservas', controlador.obtenerReservas)
rutasReservas.get('/api/v1/reservas/:id', controlador.obtenerReservaPorId)
rutasReservas.post('/api/v1/reservas', controlador.crearReserva)
rutasReservas.put('/api/v1/reservas/:id', controlador.actualizarReserva)
rutasReservas.delete('/api/v1/reservas/:id', controlador.eliminarReserva)

export default rutasReservas
