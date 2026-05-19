import { obtenerProductos } from './funciones.mjs'
import express from 'express'

// Definí enrutamiento
const rutasProductos = express.Router()

// Modulo productos
// GET /api/v1/productos
rutasProductos.get('/api/v1/productos', obtenerProductos)

// GET /api/v1/productos:id
rutasProductos.get('/api/v1/productos:id')

// POST /api/v1/productos
rutasProductos.post('/api/v1/productos')

// PUT /api/v1/productos:id
rutasProductos.put('/api/v1/productos/:id')

// DELETE /api/v1/productos:id
rutasProductos.delete('/api/v1/producto/:id')

export default rutasProductos