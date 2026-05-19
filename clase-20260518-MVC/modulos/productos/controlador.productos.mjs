import * as modelo from "./modelo.productos.mjs";

// Modelo es un objeto

export function obtenerProductos(req, res) {
    const productos = modelo.obtenerProductos()
    //const vista = vista .obtenerProductos(productos) // <------ Reestructuramos los datos
    res.json(productos)
}