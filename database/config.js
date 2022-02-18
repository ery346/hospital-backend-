//Aqui se configura mongoose 
const mongoose = require('mongoose');

const coneccionDb = async() => {

    try {
        await mongoose.connect(process.env.DB_CNN);//se conecta a la base de datos de mongodb
        console.log('db online');//se muestra en nodejs 
    } catch (error) {
        console.log(error);
        throw new Error('error a la hora de iniciar la bd ')
    }
}
module.exports = {
    coneccionDb
}