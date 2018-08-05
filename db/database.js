const mysql = require('mysql');

// Recibe un obj de conf/retorna un obj de cn
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'hr_api'
});

// Conectando a la db
mysqlConnection.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('La BD esta conectada');
    }
});

// Lo exportamos para poder utilizarlo en otra parte
module.exports = mysqlConnection;