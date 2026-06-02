import * as modelo from './modelo.reservas.mjs'

export async function obtenerReservas(_req, res) {
    const reservas = await modelo.obtenerReservas()
    res.json(reservas)
}

export async function obtenerReservaPorId(req, res) {
    const reserva = await modelo.obtenerReservaPorId(req.params.id)
    if (!reserva) return res.status(404).json({ error: 'Reserva no encontrada' })
    res.json(reserva)
}

export async function crearReserva(req, res) {
    const { cancha, usuario, fecha, hora, estado } = req.body
    const reserva = await modelo.crearReserva(cancha, usuario, fecha, hora, estado)
    res.status(201).json(reserva)
}

export async function actualizarReserva(req, res) {
    const { cancha, usuario, fecha, hora, estado } = req.body
    const reserva = await modelo.actualizarReserva(req.params.id, cancha, usuario, fecha, hora, estado)
    if (!reserva) return res.status(404).json({ error: 'Reserva no encontrada' })
    res.json(reserva)
}

export async function eliminarReserva(req, res) {
    const reserva = await modelo.eliminarReserva(req.params.id)
    if (!reserva) return res.status(404).json({ error: 'Reserva no encontrada' })
    res.json(reserva)
}
