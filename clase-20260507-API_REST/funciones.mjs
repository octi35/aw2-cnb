import productos from './productos.mjs'

export function obtenerProductos(req, res) {
    res.json(productos)
}

export function obtenerProducto(req, res) {
    const id = Number(req.params.id)

    // Filter

    res.json(productos)
}