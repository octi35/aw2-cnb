import express from 'express'
import { privateDecrypt } from 'node:crypto'

const PORT = 3000

const app = express()

const products = [
    {
        id: 1,
        name: 'pantalon',
        price: 50000
    },
    {
        id: 2,
        name: 'remera',
        price: 30000
    }
]

// PARAMETROS DE RUTA

app.get('/', (req, res) => {

    res.json({ mensaje: "Bienvenido" })
})

app.get('/products', (req, res) => {
    res.json(products)
})

app.get('/products', (req, res) => {
    res.json(products)
})

app.get('/products/:id', (req, res) => {

    // parseInt
    // number

    const id = Number(req.params.id)

    const filteredProducts = products.filter((product) => {
        return product.id === id
    })

    res.json(filteredProducts)
})

app.get('/products_d/:discounts', (req, res) => {
    const discount = Number(req.params.discounts)

    const discountsProducts = products.map((product) => {
        const calc = product.price * (discount / 100)
        return {
            id: product.id,
            name: product.name,
            price: product.price - calc
        }
    })

    res.json(discountsProducts)
})


app.listen(PORT)