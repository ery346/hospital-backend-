//Aqui se configura mongoose 
const mongoose = require('mongoose');

const coneccionDb = async() => {

    try {
        await mongoose.connect(process.env.DB_CNN);
        console.log('db online')
    } catch (error) {
        console.log(error);
        throw new Error('error a la hora de iniciar la bd ')
    }
}
module.exports = {
    coneccionDb
}