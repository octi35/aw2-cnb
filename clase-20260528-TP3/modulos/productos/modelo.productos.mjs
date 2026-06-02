import pool from '../../conexion.bd.mjs'

export async function obtenerCanchas() {
    const resultado = await pool.query('SELECT * FROM canchas')
    return resultado.rows
}

export async function obtenerCanchaPorId(id) {
    const resultado = await pool.query('SELECT * FROM canchas WHERE id = $1', [id])
    return resultado.rows[0]
}

export async function crearCancha(nombre, deporte, precio, capacidad, disponible) {
    const resultado = await pool.query(
        'INSERT INTO canchas (nombre, deporte, precio, capacidad, disponible) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [nombre, deporte, precio, capacidad, disponible]
    )
    return resultado.rows[0]
}

export async function actualizarCancha(id, nombre, deporte, precio, capacidad, disponible) {
    const resultado = await pool.query(
        'UPDATE canchas SET nombre=$1, deporte=$2, precio=$3, capacidad=$4, disponible=$5 WHERE id=$6 RETURNING *',
        [nombre, deporte, precio, capacidad, disponible, id]
    )
    return resultado.rows[0]
}

export async function eliminarCancha(id) {
    const resultado = await pool.query('DELETE FROM canchas WHERE id = $1 RETURNING *', [id])
    return resultado.rows[0]
}