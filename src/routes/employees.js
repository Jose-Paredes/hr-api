const express = require('express');
const router = express.Router(); // Crea un objeto para definir rutas en el srv
const mysqlConnection = require('../database');

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM employees', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM employees WHERE id = ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/', (req, res) => {
    const { id, name, salary} =req.body;
    const query = `CALL employeeAddOrEdit(?, ?, ?);
    `;
    mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Empleado guardado'});
        } else {
            console.log(err);
        }
    });
});

router.put('/:id', (req, res) => {
    const { name, salary } = req.body; // Obtenemos los datos que queremos actualzar
    const { id } = req.params;

    const query = `CALL employeeAddOrEdit(?, ?, ?)`;
    mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Empleado actualizado'});
        } else {
            console.log(err);
        }
    });
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM employees WHERE id = ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Empleado eliminado'});
        } else {
            console.log(err);
        }
    });
});

// Exportamos la constante
module.exports = router;