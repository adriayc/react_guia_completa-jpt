const mongoose = require('mongoose');
// Ubicacion del archivo .env
require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,     // Error!
            // useCreateIndex: true         // Error!
        });
        console.log('DB Conectada');

    } catch (error) {
        console.log('Hubo un error');
        console.log(error);
        // Detener la app
        process.exit(1);
    }
};

module.exports = conectarDB;