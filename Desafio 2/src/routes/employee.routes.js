const express = require('express');
const EmployeeController = require('../controllers/EmployeeController');
const router = express.Router();
const employeeController = new EmployeeController();


router.post('/employees', employeeController.createEmployee);
router.get('/employees/:id', employeeController.getEmployeeById);
router.get('/employees', employeeController.getAllEmployees);
router.put('/employees/:id', employeeController.updateEmployee);
router.delete('/employees/:id', employeeController.deleteEmployee);

module.exports = router;
