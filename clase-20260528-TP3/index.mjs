import express from 'express'
import rutasCanchas from './modulos/productos/rutas.productos.mjs'
import rutasReservas from './modulos/reservas/rutas.reservas.mjs'

const PUERTO = 3000

const app = express()

app.use(express.json())

app.use(rutasCanchas)
app.use(rutasReservas)

app.listen(PUERTO, () => console.log(`Servidor corriendo en http://localhost:${PUERTO}`))