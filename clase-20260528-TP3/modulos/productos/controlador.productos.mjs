import * as modelo from './modelo.productos.mjs'
import * as vistas from './vistas.productos.mjs'

export async function obtenerCanchas(_req, res) {
    const canchas = await modelo.obtenerCanchas()
    res.json(vistas.formatearCanchas(canchas))
}

export async function obtenerCanchaPorId(req, res) {
    const cancha = await modelo.obtenerCanchaPorId(req.params.id)
    if (!cancha) return res.status(404).json({ error: 'Cancha no encontrada' })
    res.json(vistas.formatearCancha(cancha))
}

export async function crearCancha(req, res) {
    const { nombre, deporte, precio, capacidad, disponible } = req.body
    const cancha = await modelo.crearCancha(nombre, deporte, precio, capacidad, disponible)
    res.status(201).json(cancha)
}

export async function actualizarCancha(req, res) {
    const { nombre, deporte, precio, capacidad, disponible } = req.body
    const cancha = await modelo.actualizarCancha(req.params.id, nombre, deporte, precio, capacidad, disponible)
    if (!cancha) return res.status(404).json({ error: 'Cancha no encontrada' })
    res.json(cancha)
}

export async function eliminarCancha(req, res) {
    const cancha = await modelo.eliminarCancha(req.params.id)
    if (!cancha) return res.status(404).json({ error: 'Cancha no encontrada' })
    res.json(cancha)
}