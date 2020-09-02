require('dotenv').config();

const express = require('express');
const cors = require('cors')

const {dbConnection} = require('./database/config');

//Crear el servidor express
const app = express();

//Base de datos
dbConnection();

//Configurar CORS
app.use(cors());

//cEpJmb9TRM2axbDG
//mean_user
//rutas
app.get('/' , (req, res) => {

    res.json({
        ok: true,
        mensaje: 'Hola Mundo'
    });
});

//Escuchar peticiones
app.listen(process.env.PORT,()=>{
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online' );
  });
  