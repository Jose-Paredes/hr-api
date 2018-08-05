const express = require('express');
const router = express.Router(); // Crea un objeto para definir rutas en el srv
const EmployeeController = require('../controllers/employees');

router.get('/employees', EmployeeController.getAllEmployees);
router.get('/employees/:id', EmployeeController.getEmployeeById);
router.post('/employees', EmployeeController.addEmployee);
router.put('/employees/:id', EmployeeController.upEmployee);
router.delete('/employees/:id', EmployeeController.downEmployee);

// Exportamos la constante
module.exports = router;