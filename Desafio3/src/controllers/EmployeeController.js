const EmployeeService = require('../services/employee.service');
const axios = require('axios');
const employeeService = new EmployeeService();

class EmployeeController {
    constructor() {
        this.populateEmployees = this.populateEmployees.bind(this);
    }

    async createEmployee(req, res) {
        try {
            const { name, role } = req.body;
            const employee = await employeeService.createEmployee(name, role);
            res.status(201).json(employee);
        } catch (error) {
            console.error('Erro ao criar funcionário:', error);
            res.status(500).json({ error: 'Erro ao criar funcionário' });
        }
    }

    async getEmployeeById(req, res) {
        try {
            const { id } = req.params;

            const employee = await employeeService.getEmployeeById(id);
            if (employee) {
                res.json(employee);
            } else {
                res.status(404).json({ error: 'Funcionário não encontrado' });
            }
        } catch (error) {
            console.error('Erro ao buscar funcionário:', error);
            res.status(500).json({ error: 'Erro ao buscar funcionário' });
        }
    }

    async getAllEmployees(req, res) {
        try {
            const employees = await employeeService.getAllEmployees();
            res.json(employees);
        } catch (error) {
            console.error('Erro ao buscar funcionários:', error);
            res.status(500).json({ error: 'Erro ao buscar funcionários' });
        }
    }

    async updateEmployee(req, res) {
        try {
            const { id } = req.params;
            const { name, role } = req.body;
            const employee = await employeeService.updateEmployee(id, name, role);
            res.json(employee);
        } catch (error) {
            console.error('Erro ao atualizar funcionário:', error);
            res.status(500).json({ error: 'Erro ao atualizar funcionário' });
        }
    }

    async deleteEmployee(req, res) {
        try {
            const { id } = req.params;
            const employee = await employeeService.deleteEmployee(id);
            res.json(employee);
        } catch (error) {
            console.error('Erro ao excluir funcionário:', error);
            res.status(500).json({ error: 'Erro ao excluir funcionário' });
        }
    }

    async populateEmployees(req, res) {
        try {
            const response = await axios.get('https://randomuser.me/api/?results=10');
            const randomUsers = response.data.results;

            const employees = randomUsers.map(user => {
                return {
                    name: `${user.name.first} ${user.name.last}`,
                    role: user.dob.age >= 18 ? 'Funcionário' : 'Estagiário'
                };
            });


            for (const employee of employees) {
                await employeeService.createEmployee(employee.name, employee.role); 
            }
            

            res.status(201).json(employees);
        } catch (error) {
            console.error('Erro ao popular funcionários:', error.message);
            res.status(500).json({ error: 'Erro ao popular funcionários' });
        }
    }
}

module.exports = EmployeeController;
