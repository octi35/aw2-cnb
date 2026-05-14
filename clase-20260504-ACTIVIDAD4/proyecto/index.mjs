import express from 'express'

const PORT = 3000

const app = express()

// defino middleware (hago fetch a la api /user)

const middleware = async (req, res, next) => {
    const code = Number(req.params.code)
    const response = await fetch('https://localhost:4321/user')
    const user = await response.json()
    
    if(user.code === code){
        next()
    }
    res.status(400).json({ mensaje: 'The code is incorrect' })
}

// defino ruta get /:codigo
// peticion -> middleware -> callback

app.get('/:code', middleware, (req, res) => {

    res.status(200).json({ mensaje: 'The code is correct' })
})

app.listen(PORT)