const mongoose = require('mongoose');

const dbConnection = async () =>{

    try {
       await mongoose.connect(process.env.DB_CNN, {
                useNewUrlParser: true, 
                useUnifiedTopology: true,
                useCreateIndex: true
            });

        console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online' );
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectarse a la base de datos');
    }
}


module.exports = {
    dbConnection
}