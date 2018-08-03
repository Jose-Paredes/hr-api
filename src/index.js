// CREANDO EL SRV
const express = require('express'); // Guardamos la funcionalidades de express
const app = express(); // Ejecutamos y nos retorna un objeto

// Configuracion del srv
app.set('port', process.env.PORT || 3000); // Si nos dan un puerto... tomarlo, si no, utilizar el port 3000


// Iniciando el srv
app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el puerto', app.get('port'));
});

// MIDDLEWARES Funciones que se ejecutan antes de procesar algo
app.use(express.json()); // Comprende notacion json

//Routes/url


