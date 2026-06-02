// Estructurar los datos que se envían al cliente

export function formatearCancha(cancha) {
    return {
        id: cancha.id,
        nombre: cancha.nombre,
        deporte: cancha.deporte,
        precio: `$${cancha.precio}`,
        capacidad: `${cancha.capacidad} personas`,
        disponible: cancha.disponible ? 'Disponible' : 'No disponible'
    }
}

export function formatearCanchas(canchas) {
    return canchas.map(formatearCancha)
}