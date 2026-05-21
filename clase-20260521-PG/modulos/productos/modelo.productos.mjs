import pool from '../../conexion.bd.mjs'

// Obtener los datos
export async function obtenerProductos() {
    const resultado = await pool.query('SELECT * FROM productos')
    console.log(resultado)
    return resultado.rows
}