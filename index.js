require('dotenv').config();
const express = require('express');
const cors = require('cors')
const {coneccionDb} = require('./database/config');

//crear el servidor de express
const app = express();

//configurar cors 
app.use(cors());

//lectura y parseo del body
app.use(express.json());

//Base de datos
coneccionDb();

//Rutas
app.use('/api/usuario', require('./routes/usuarios'));
app.use('/api/login', require('./routes/auth'));

app.listen( process.env.PORT, () => {
    console.log('servidor corriendo en puerto' + process.env.PORT)
} )
