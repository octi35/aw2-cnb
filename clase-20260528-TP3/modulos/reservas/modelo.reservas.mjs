import pool from '../../conexion.bd.mjs'

export async function obtenerReservas() {
    const resultado = await pool.query('SELECT * FROM reservas')
    return resultado.rows
}

export async function obtenerReservaPorId(id) {
    const resultado = await pool.query('SELECT * FROM reservas WHERE id = $1', [id])
    return resultado.rows[0]
}

export async function crearReserva(cancha, usuario, fecha, hora, estado) {
    const resultado = await pool.query(
        'INSERT INTO reservas (cancha, usuario, fecha, hora, estado) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [cancha, usuario, fecha, hora, estado ?? 'Confirmada']
    )
    return resultado.rows[0]
}

export async function actualizarReserva(id, cancha, usuario, fecha, hora, estado) {
    const resultado = await pool.query(
        'UPDATE reservas SET cancha=$1, usuario=$2, fecha=$3, hora=$4, estado=$5 WHERE id=$6 RETURNING *',
        [cancha, usuario, fecha, hora, estado, id]
    )
    return resultado.rows[0]
}

export async function eliminarReserva(id) {
    const resultado = await pool.query('DELETE FROM reservas WHERE id = $1 RETURNING *', [id])
    return resultado.rows[0]
}
