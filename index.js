require('dotenv').config();
const express = require('express');
const cors = require('cors')
const {coneccionDb} = require('./database/config');

//crear el servidor de express
const app = express();

//configurar cors 
app.use(cors());
//Base de datos
coneccionDb();

//Rutas
app.get( '/', (req, res) => {
    res.json({ok: true, msg: 'perra'})
} );

app.listen( process.env.PORT, () => {
    console.log('servidor corriendo en puerto' + process.env.PORT)
} )
