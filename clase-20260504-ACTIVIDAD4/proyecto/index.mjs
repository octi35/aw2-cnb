import express, { urlencoded } from 'express'

const PORT = 3000

const app = express()

// defino middleware (hago fetch a la api /user)

const middleware = (req, res, next) => {
    const code = Number(req.params.code)
    //fetch
    const user = response.json()
    user.code
}

// defino ruta get /:codigo
// peticion -> middleware -> callback

app.get('/:code', middleware, (req, res) => {

    res.status(200).json({ mensaje: 'The code is correct' })
})

app.listen(PORT)