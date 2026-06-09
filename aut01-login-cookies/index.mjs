import express from 'express';

const PUERTO = process.env.PUERTO || 4000;

////////////////

////////////////
const app = express();






app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});

