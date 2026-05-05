import express from 'express'

const PORT = 4321

const app = express()

app.get('/user', (req, res)=>{
    const user = {
        code: 5183
    } 
    res.json(user)
})

app.listen(PORT);