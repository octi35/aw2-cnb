const logger = (req, res, next) => {

    // Obtenemos la fecha y hora actual del momento de la petición
    const ahora = new Date().toLocaleString('es-AR')
    // Registramos el método HTTP (GET, POST, etc.) y la URL solicitada
    console.log(`[${ahora}] ${req.method} ${req.url}`)   
    next()
}

export default logger
